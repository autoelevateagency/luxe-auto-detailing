export const Hero = () => {
  return (
    <section className="hero" id="hero" aria-label="Hero video">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
      </video>
    </section>
  );
};
