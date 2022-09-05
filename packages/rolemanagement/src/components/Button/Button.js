import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons({
  variant,
  bgColor,
  color,
  label,
  onClick,
  type,
  disabled,
}) {
  return (
    <Button
      className="cmp-button"
      disabled={disabled}
      variant={variant}
      sx={{
        backgroundColor: bgColor,
        color: color,
        border: variant === "outlined" && "1px solid #000000",
      }}
      type={type}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
