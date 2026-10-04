// Photo-free hero background: sharp at any resolution and adds no image weight.
export default function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#0b0e14] pointer-events-none">
      <div className="hero-grid absolute inset-0" />
      <div className="hero-glow-main absolute" />
      <div className="hero-glow-soft absolute" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
    </div>
  );
}
