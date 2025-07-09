import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      y: -40,
      duration: 1.2,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="py-10 text-center px-4 sm:px-6 lg:px-10 max-w-3xl mx-auto">
      <h1 className="hero-text text-5xl font-bold italic">¡Nos Casamos!</h1>
      <h2 className="hero-text text-4xl mt-4">Isis Bethania y José Francisco</h2>
      <p className="hero-text text-xl mt-4 italic">
        "El amor todo lo puede..." (1 Juan 4:16)
      </p>
    </section>
  );
}
