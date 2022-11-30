import { HighlightedText } from "@jesper-kihlberg/design-system";
import { Story } from "@storybook/react";
import React, { Suspense } from "react";
import { useEffect } from "react";

export default {
  title: "Design System/Atoms/HighlightedText",
  argTypes: {
    text: { control: "text", defaultValue: "This is a highlighted text" },
    highlight: { control: "text", defaultValue: "highlighted" },
    highlightStyle: { control: "object", defaultValue: { color: "red" } },
  },
};

const Template: Story = ({ text, highlight, highlightStyle }) => {
  const [strings, setStrings] = React.useState<string[]>([]);
  useEffect(() => {
    const generatedStrings = Array.from({ length: 1000 }, () => Math.random().toString(36) + "This is a highlighted text");
    setStrings(generatedStrings);
  }, []);
  return (
    <div>
      <p>
        <HighlightedText text={text} highlight={highlight} highlightStyle={highlightStyle} />
      </p>
      generate 1000 random strings with real words and show them as highlighted text
      {<HighlightedTexts strings={strings} highlight={highlight} highlightStyle={highlightStyle} />}
    </div>
  );
};

export const Standard = Template.bind({
  docs: {
    source: {
      type: "code",
    },
  },
});

interface HighlightedTextsProps {
  strings: string[];
  highlight: any;
  highlightStyle: any;
}
const HighlightedTexts: React.FC<HighlightedTextsProps> = ({ strings, highlight, highlightStyle }) => {
  return (
    <>
      {strings.map((randomString, index) => (
        <p key={index}>
          <HighlightedText text={randomString} highlight={highlight} highlightStyle={highlightStyle} />
        </p>
      ))}
    </>
  );
};
