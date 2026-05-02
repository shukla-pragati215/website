"use client";

import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { useScroll, useMotionValueEvent, MotionValue } from "framer-motion";

const ScrollContext = createContext<MotionValue<number> | null>(null);

export const useScrollProgress = () => {
  const context = useContext(ScrollContext);
  if (!context) return null; // Fallback for components that might be outside but need to fail gracefully
  return context;
};

interface StickyCanvasProps {
  frameCount: number;
  children?: React.ReactNode;
}

const StickyCanvas: React.FC<StickyCanvasProps> = ({ frameCount, children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(3, "0");
        img.src = `/sequence/ezgif-frame-${frameIndex}.jpg`;
        
        const promise = new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
        
        promises.push(promise);
        loadedImages.push(img);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    preloadImages();
  }, [frameCount]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index] || images[0];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;

    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const currentFrame = Math.floor(scrollYProgress.get() * (frameCount - 1));
        drawFrame(currentFrame);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, images, frameCount, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.floor(latest * (frameCount - 1));
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  return (
    <ScrollContext.Provider value={scrollYProgress}>
      <div ref={containerRef} className="relative h-[1000vh] w-full">
        <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="block w-full h-full object-cover"
          />
          {children}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A]">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
                <p className="text-amber-500 font-medium tracking-widest text-xs uppercase">
                  Initializing Magic...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

export default StickyCanvas;
