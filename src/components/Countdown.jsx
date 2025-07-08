import { useEffect } from "react";
import FlipDown from "flipdown";
// import "flipdown/dist/flipdown.css";

export default function Countdown() {
  useEffect(() => {
    const target = new Date("2025-12-13T11:00:00").getTime() / 1000;
    new FlipDown(target, "flipdown").start();
  }, []);

  return (
    <section className="py-6 text-center">
      <h3 className="text-2xl font-semibold mb-4">Faltan...</h3>
      <div id="flipdown" className="flipdown mx-auto" />
    </section>
  );
}
