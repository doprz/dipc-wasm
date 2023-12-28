use wasm_bindgen::prelude::*;
use image::{DynamicImage, ImageBuffer, Rgba, codecs::png};
use wee_alloc;
use base64;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

mod delta;
use delta::{Lab, CLIDEMethod};

const CHUNK: usize = 4;

#[wasm_bindgen]
pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}

fn process_image(image: &mut ImageBuffer<Rgba<u8>, Vec<u8>>, palettes_lab: &[Lab], deltae_method: CLIDEMethod) {
    image
        .chunks_exact_mut(CHUNK)
        .for_each(|bytes| {
            let pixel: [u8; CHUNK] = bytes.try_into().unwrap();
            let lab = Lab::from(pixel);
            let new_rgb = lab
                .to_nearest_palette(&palettes_lab, deltae::DEMethod::from(deltae_method))
                .to_rgb();
            bytes[..3].copy_from_slice(&new_rgb);
        });
}

#[wasm_bindgen]
pub fn convert_data_url_to_rgba8(data_url: &str, palettes: &[u8]) -> String {
    let base64_data: &str = data_url.split(',').nth(1).expect("Invalid data URL");
    let decoded_data: Vec<u8> = base64::decode(base64_data).expect("Failed to decode base64 data");

    let img: DynamicImage = image::load_from_memory(&decoded_data).expect("Failed to load image");

    let mut rgba_img: ImageBuffer<Rgba<u8>, Vec<u8>> = img.to_rgba8();

    let new_palette: Vec<[u8; 3]> = palettes.chunks_exact(3).map(|rgb| [rgb[0], rgb[1], rgb[2]]).collect::<Vec<[u8; 3]>>();

    let palettes_lab: Vec<Lab> = new_palette.iter().map(|&rgb| Lab::from(rgb)).collect::<Vec<Lab>>();

    // TODO: Add support for other deltaE methods
    process_image(&mut rgba_img, &palettes_lab, CLIDEMethod::DE2000);

    let mut png_data: Vec<u8> = Vec::new();
    let png_encoder: png::PngEncoder<&mut Vec<u8>> = png::PngEncoder::new(&mut png_data);
    // TODO: use of deprecated method `image::codecs::png::PngEncoder::<W>::encode`: Use `PngEncoder::write_image` instead. Beware that `write_image` has a different endianness convention
    png_encoder
        .encode(
            &rgba_img,
            rgba_img.width(),
            rgba_img.height(),
            image::ColorType::Rgba8,
        )
        .expect("Failed to encode PNG");

    let base64_string: String = format!("{},{}", data_url.split(',').nth(0).expect("Invalid data URL"), base64::encode(&png_data));

    base64_string
}