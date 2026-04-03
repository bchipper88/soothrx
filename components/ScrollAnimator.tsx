"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const targets: Element[] = [];

    sections.forEach((section) => {
      // Animate direct children of section > div containers
      const container = section.querySelector(":scope > div");
      if (container) {
        Array.from(container.children).forEach((child, i) => {
          child.classList.add("animate-on-scroll");
          (child as HTMLElement).style.transitionDelay = `${i * 100}ms`;
          targets.push(child);
        });
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
