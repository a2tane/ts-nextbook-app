//ボタンのバリアント

import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: string;
  backgroundColor?: string;
};

const variants = {
  primary: {
    color: "white",
    backgroundColor: "blue",
  },
  secondary: {
    color: "white",
    backgroundColor: "green",
  },
  danger: {
    color: "white",
    backgroundColor: "red",
  },
};

// const MyButton = styled.button<ButtonProps>`
//   ${({ variant, color, backgroundColor }) => {
//     if (variant && variants[variant]) {
//     }
//   }}
// `;
