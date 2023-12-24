const clipPathStyle = `
clip-path: polygon(
  74.1% 44.1%,
  100% 61.6%,
  97.5% 26.9%,
  85.5% 0.1%,
  80.7% 2%,
  72.5% 32.5%,
  60.2% 62.4%,
  52.4% 68.1%,
  47.5% 58.3%,
  45.2% 34.5%,
  27.5% 76.7%,
  0.1% 64.9%,
  17.9% 100%,
  27.6% 76.8%,
  76.1% 97.7%,
  74.1% 44.1%
);`;

type Props = {
  outerClass: string;
  innerClass: string;
};

const AbstractBackground = (props: Props) => {
  return (
    <div class={props.outerClass} aria-hidden="true">
      <div class={props.innerClass} style={clipPathStyle} />
    </div>
  );
};

export default AbstractBackground;
