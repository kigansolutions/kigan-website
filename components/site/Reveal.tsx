"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    function check() {
      if (visible || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) setVisible(true);
    }
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [visible]);

  return (
    <div ref={ref} className={`reveal ${visible ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}
