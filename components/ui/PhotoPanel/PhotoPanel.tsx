type PhotoPanelProps = {
  replaceLabel: string;
  className?: string;
  children?: React.ReactNode;
};

export const PhotoPanel = ({
  replaceLabel,
  className = "",
  children,
}: PhotoPanelProps) => {
  return (
    <div
      className={`photo ${className}`.trim()}
      data-replace={replaceLabel}
      role="img"
      aria-label={replaceLabel}
    >
      {children}
    </div>
  );
};
