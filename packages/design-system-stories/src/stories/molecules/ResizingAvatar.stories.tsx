import { ResizingAvatar } from "@jesper-kihlberg/design-system";
import { Story } from "@storybook/react";

export default {
  title: "Design System/Molecules/ResizingAvatar",
  component: ResizingAvatar,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text", defaultValue: "Avatar" },
    expanded: { control: "boolean", defaultValue: false },
  },
};

const Template: Story = ({ src, alt, expanded, ...rest }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <ResizingAvatar src={src} alt={alt} expanded={expanded} {...rest} />
    </div>
  );
};

export const Standard = Template.bind({});
