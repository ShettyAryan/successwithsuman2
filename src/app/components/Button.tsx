import { Link } from 'react-router';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  className = ''
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet/40 focus:ring-offset-2';
  const variants = {
    primary: 'bg-violet text-white hover:bg-violet-deep shadow-[0_8px_24px_-8px_rgba(91,75,255,0.45)]',
    secondary: 'bg-white text-ink border border-violet-line hover:border-violet hover:text-violet',
    ghost: 'text-ink hover:text-violet',
  };
  const sizes = {
    md: 'px-5 py-2.5 text-sm sm:px-6 sm:py-3',
    lg: 'px-6 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-base w-full sm:w-auto',
  };
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>;
    return <Link to={href} className={classes}>{children}</Link>;
  }
  return <button onClick={onClick} className={classes}>{children}</button>;
}
