import React from "react";

interface HighlightedTextProps {
  text: string;
  highlight?: string;
  highlightStyle?: React.CSSProperties;
  highlightClassName?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, highlight, highlightStyle, highlightClassName }) => {
  if (!highlight) {
    return <>{text}</>;
  }

  return (
    <>
      {text.split(highlight).map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < text.split(highlight).length - 1 && (
            <span style={highlightStyle} className={highlightClassName}>
              {highlight}
            </span>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default HighlightedText;
