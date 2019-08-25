import React from "react";

export default function InlineError({ message }) {
  return <small style={{ color: "#ff0000" }}>{message}</small>;
}
