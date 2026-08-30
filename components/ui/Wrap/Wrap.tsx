type WrapProps = {
  children: React.ReactNode;
  className?: string;
};

export const Wrap = ({ children, className = "" }: WrapProps) => {
  return <div className={`wrap ${className}`.trim()}>{children}</div>;
};
