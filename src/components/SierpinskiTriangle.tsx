import Dot from "./Dot";

const targetSize = 25;

const SierpinskiTriangle = ({
  x,
  y,
  s,
  children,
}: {
  x: number;
  y: number;
  s: number;
  children: any;
}) => {
  if (s <= targetSize) {
    return (
      <Dot
        x={x - targetSize / 2}
        y={y - targetSize / 2}
        size={targetSize}
        text={children}
      />
    );
  }

  const newSize = s / 2;
  const slowDown = true;

  if (slowDown) {
    const e = performance.now() + 0.8;
    while (performance.now() < e) {
      // Artificially long execution time.
    }
  }

  return (
    <div>
      <SierpinskiTriangle x={x} y={y - newSize / 2} s={newSize}>
        {children}
      </SierpinskiTriangle>
      <SierpinskiTriangle x={x - newSize} y={y + newSize / 2} s={newSize}>
        {children}
      </SierpinskiTriangle>
      <SierpinskiTriangle x={x + newSize} y={y + newSize / 2} s={newSize}>
        {children}
      </SierpinskiTriangle>
    </div>
  );
};

export default SierpinskiTriangle;
