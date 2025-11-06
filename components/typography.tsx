// components/ui/Typography.tsx
import { HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className = "", ...props }: TypographyProps) {
  return (
    <h1
      className={`font-inter text-[40px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[80px] 2xl:text-[96px] font-semibold ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = "", ...props }: TypographyProps) {
  return (
    <h2
      className={`font-inter text-[36px] md:text-[40px] lg:text-[48px] 2xl:text-[72px] font-medium ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className = "", ...props }: TypographyProps) {
  return (
    <h3
      className={`font-inter text-[30px] md:text-[35px] lg:text-[40px] 2xl:text-[50px] font-semibold ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className = "", ...props }: TypographyProps) {
  return (
    <h4
      className={`font-inter text-[20px] md:text-[24px] lg:text-[26px] 2xl:text-[30px] font-normal ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
}

export function P({
  children,
  className = "",
  ...props
}: TypographyProps) {
  return (
    <p
      className={`xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function BodyHero({
  children,
  className = "",
  ...props
}: TypographyProps) {
  return (
    <p
      className={`font-inter text-[20px] md:text-[16px] lg:text-[18px] 2xl:text-[22px] font-normal ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function BodySemi({
  children,
  className = "",
  ...props
}: TypographyProps) {
  return (
    <p
      className={`font-inter text-[18px] md:text-[20px] lg:text-[22px] 2xl:text-[26px] font-semibold ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

interface ButtonTextProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function ButtonText({
  children,
  className = "",
  ...props
}: ButtonTextProps) {
  return (
    <button
      className={`xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
