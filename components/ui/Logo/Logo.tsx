type LogoProps = {
  ariaLabel: string;
  className?: string;
};

export const Logo = ({ ariaLabel, className = "" }: LogoProps) => {
  return (
    <a href="#top" className={`logo ${className}`.trim()} aria-label={ariaLabel}>
      <img
        src="/assets/logo/luxe-logo.png"
        alt=""
        className="logo-img"
        decoding="async"
      />
    </a>
  );
};
