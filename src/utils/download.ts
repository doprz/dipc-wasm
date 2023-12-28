/**
 * Downloads an image from a base64 string.
 *
 * @param base64String - The base64 string representing the image.
 * @param filename - The optional filename for the downloaded image. If not provided, a default name will be used.
 */
export const downloadImage = (base64String: string, filename?: string) => {
  // Create a link element
  const link = document.createElement("a");

  // Set the href attribute to the base64 URI
  link.href = base64String;

  // Set the download attribute with the specified filename or a default name
  link.download = filename || "convertedImage.png";

  // Create a click event on the link
  const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  // Dispatch the click event on the link
  link.dispatchEvent(clickEvent);
};
