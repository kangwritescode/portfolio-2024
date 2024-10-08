import React from "react";

interface Props {
  ariaLabel?: string;
  text: React.ReactNode;
  href: string;
}

function AnchorText({ariaLabel, href, text }: Props) {
  return (
    <a
      className="text-foreground font-bold"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabel}
    >
      {text}
    </a>
  );
}

export default AnchorText;
