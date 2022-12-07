import { AvatarPageIndicator } from "@jesper-kihlberg/design-system";
import { Story } from "@storybook/react";

export default {
  title: "Design System/Organisms/AvatarPageIndicator",
  component: AvatarPageIndicator,
  argTypes: {
    ids: { control: "array", defaultValue: ["1", "2", "3", "4", "5"] },
    currentId: { control: "number", defaultValue: 1 },
    onSelectId: { action: "selected" },
  },
};

const Template: Story = ({ ids, currentId, onSelectId }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <AvatarPageIndicator
        ids={ids}
        currentId={"" + currentId}
        onSelectId={onSelectId}
        getResingAvatarProps={(id) => ({
          src: `https://material-ui.com/static/images/avatar/${id}.jpg`,
          alt: `Avatar ${id}`,
        })}
      />
    </div>
  );
};

export const Standard = Template.bind({});
