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
      <h1 className="hero-text text-4xl font-bold font-dancing-script mb-4">¡Nos Casamos!</h1>
      <h2 className="hero-text text-5xl mt-4 font-dancing-script text-[#9e7043]">Isis Bethania y José Francisco</h2>
      <p className="hero-text text-xl mt-4 bentham-regular">
        "El amor todo lo puede..." (1 Juan 4:16)
      </p>
    </section>
  );
}
