import React from 'react';

type Variant = 'default' | 'ghost';
type Size = 'default' | 'sm';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none';
  const variants: Record<Variant, string> = {
    default: 'bg-[#10B981] hover:bg-[#059669] text-white',
    ghost: 'bg-transparent hover:bg-[#1A1A1E]',
  };
  const sizes: Record<Size, string> = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-1.5 text-sm',
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
