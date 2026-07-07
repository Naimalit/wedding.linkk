"use client";

import { useEffect } from "react";

/** Keep demo entry at the top on mobile — envelope gate must be visible immediately. */
export function DemoMobileInit() {
  useEffect(() => {
    const reset = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    reset();
    requestAnimationFrame(reset);
    const t = window.setTimeout(reset, 50);

    return () => window.clearTimeout(t);
  }, []);

  return null;
}
