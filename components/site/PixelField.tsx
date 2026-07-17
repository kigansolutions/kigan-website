"use client";

import { useEffect, useRef } from "react";

export function PixelField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = ref.current;
    if (!field || field.childElementCount) return;
    for (let i = 0; i < 196; i++) {
      const span = document.createElement("span");
      span.style.animationDelay = `${Math.random() * 8}s`;
      span.style.animationDuration = `${5 + Math.random() * 4}s`;
      field.appendChild(span);
    }
  }, []);

  return <div ref={ref} className={`pixel-field ${className}`} />;
}
