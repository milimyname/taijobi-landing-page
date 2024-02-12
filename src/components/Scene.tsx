import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

const Scene = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load("https://prod.spline.design/aQOqhhQpIIgt0gpK/scene.splinecode");
    }
  }, []);

  return (
    <div className=" ">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default Scene;
