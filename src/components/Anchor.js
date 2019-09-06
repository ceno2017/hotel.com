import React from "react";

export default function Anchor({ children, url }) {
  return <a href={url}>{children}</a>;
}
