import React from "react";
import { Story } from "@storybook/react";
import { H1, H2, H3, H4, H5, H6, Body, BodyAlt, Caption } from "@jesper-kihlberg/design-system";

export default {
  title: `Design System/Atoms/Typography`,
  argTypes: {
    Header1Text: { control: "text", defaultValue: "Header 1" },
    Header2Text: { control: "text", defaultValue: "Header 2" },
    Header3Text: { control: "text", defaultValue: "Header 3" },
    Header4Text: { control: "text", defaultValue: "Header 4" },
    Header5Text: { control: "text", defaultValue: "Header 5" },
    Header6Text: { control: "text", defaultValue: "Header 6" },
    BodyText: { control: "text", defaultValue: "Body" },
    BodyAltText: { control: "text", defaultValue: "Body Alt" },
    CaptionText: { control: "text", defaultValue: "Caption" },
  },
};

const Template: Story = ({ Header1Text, Header2Text, Header3Text, Header4Text, Header5Text, Header6Text, BodyText, BodyAltText, CaptionText, r }) => {
  return (
    <div style={{}}>
      <H1>{Header1Text}</H1>
      <H2>{Header2Text}</H2>
      <H3>{Header3Text}</H3>
      <H4>{Header4Text}</H4>
      <H5>{Header5Text}</H5>
      <H6>{Header6Text}</H6>
      <Body>{BodyText}</Body>
      <BodyAlt>{BodyAltText}</BodyAlt>
      <Caption>{CaptionText}</Caption>
    </div>
  );
};

export const Standard = Template.bind({});
