type PhotoPanelProps = {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
};

export const PhotoPanel = ({
  src,
  alt,
  className = "",
  children,
}: PhotoPanelProps) => {
  return (
    <div className={`photo ${className}`.trim()}>
      <img src={src} alt={alt} className="photo-img" loading="lazy" />
      {children}
    </div>
  );
};
