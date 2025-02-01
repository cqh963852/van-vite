import van, { State } from "vanjs-core";

const dotStyle = {
  position: "absolute",
  background: "#61dafb",
  font: "normal 15px sans-serif",
  textAlign: "center",
  cursor: "pointer",
};

const Dot = ({
  x,
  y,
  size,
  text,
}: {
  x: number;
  y: number;
  size: number;
  text: State<number>;
}) => {
  const hover = van.state(false);

  const s = size * 1.3;
  const style = {
    ...dotStyle,
    width: `${s}px`,
    height: `${s}px`,
    left: `${x}px`,
    top: `${y}px`,
    borderRadius: `${s / 2}px`,
    lineHeight: `${s}px`,
    background: hover ? "#ff0" : dotStyle.background,
  } as any;

  return (
    <div
      style={style}
      onMouseEnter={() => {
        console.log("test test onMouseEnter");
        hover.val = true;
      }}
      onMouseLeave={() => {
        console.log("test test onMouseLeave");
        hover.val = false;
      }}
    >
      {hover ? `*${text}*` : text}
    </div>
  );
};

export default Dot;
