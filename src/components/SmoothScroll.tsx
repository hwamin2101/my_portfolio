"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Khởi tạo Lenis
    const lenis = new Lenis({
      duration: 0.5,            // Thời gian scroll inertia
      easing: (t: number) => t, // Hàm easing, bạn có thể thử ease-in-out
      orientation: "vertical",
      wheelMultiplier: 0.2,       // Điều chỉnh tốc độ scroll với chuột
      smoothWheel: true,        // Mượt khi dùng wheel / trackpad
      infinite: false,          // false nếu muốn giới hạn
    });

    // RAF loop để Lenis hoạt động
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
