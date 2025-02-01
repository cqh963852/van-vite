import van from "vanjs-core";
import SierpinskiTriangle from "./SierpinskiTriangle";

const start = new Date().getTime();

const Test = () => {
  const counter = van.state(0);
  setInterval(() => {
    counter.val = (counter.rawVal % 10) + 1;
  }, 1000);

  const elapsed = van.state(new Date().getTime() - start);

  const t = van.derive(() => {
    return (elapsed.val / 1000) % 10;
  });

  const scale = van.derive(() => {
    return 1 + (t.val > 5 ? 10 - t.val : t.val) / 10;
  });

  const transform = van.derive(() => {
    return "scaleX(" + scale.val / 2.1 + ") scaleY(0.7) translateZ(0.1px)";
  });

  const style = van.derive(() => {
    return { height: "100vh", width: "100vw", transform: transform.val };
  });

  console.log("test test",style)

  return (
    <div style={style}>
      <div>
        <SierpinskiTriangle x={0} y={0} s={1000}>
          {counter}
        </SierpinskiTriangle>
      </div>
    </div>
  );
};

export default Test;
