import { useEffect, useRef } from "react";
import logoSrc from "@/assets/logo.png";

const Snowfall = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const img = new Image();
    img.src = logoSrc;

    img.onload = () => {
      const COUNT = 35;
      const flakes = Array.from({ length: COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 28 + 32,
        speed: Math.random() * 0.6 + 0.2,
        wind: Math.random() * 0.3 - 0.15,
        opacity: Math.random() * 0.08 + 0.04,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      }));

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const f of flakes) {
          ctx.save();
          ctx.globalAlpha = f.opacity;
          ctx.translate(f.x, f.y);
          ctx.rotate(f.rotation);
          ctx.drawImage(img, -f.size / 2, -f.size / 2, f.size, f.size);
          ctx.restore();

          f.y += f.speed;
          f.x += f.wind + Math.sin(f.y * 0.01) * 0.3;
          f.rotation += f.rotationSpeed;

          if (f.y > canvas.height + f.size) {
            f.y = -f.size;
            f.x = Math.random() * canvas.width;
          }
          if (f.x > canvas.width) f.x = 0;
          if (f.x < 0) f.x = canvas.width;
        }
        animId = requestAnimationFrame(draw);
      };
      draw();
    };

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[15]"
      aria-hidden="true"
    />
  );
};

export default Snowfall;
