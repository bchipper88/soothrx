"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "outline";
  size?: "default" | "large";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2";
  const variants = {
    primary:
      "bg-secondary text-primary hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary",
  };
  const sizes = {
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
