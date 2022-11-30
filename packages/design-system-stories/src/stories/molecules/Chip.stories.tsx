import { Avatar, Map, Chip, KeyboardArrowDown } from "@jesper-kihlberg/design-system";
import { Story } from "@storybook/react";

export default {
  title: "Design System/Molecules/Chip",
  component: Chip,
  argTypes: {
    label: { control: "text", defaultValue: "Chip" },
    variant: { control: "inline-radio", options: ["default", "outlined"] },
    color: { control: "inline-radio", options: ["default", "primary", "secondary"] },
    size: { control: "inline-radio", options: ["small", "medium"] },
    avatar: { control: "inline-radio", options: ["none", "letter", "img", "icon"] },
    disabled: { control: "boolean", defaultValue: false },
    clickable: { control: "boolean", defaultValue: false },
    deletable: { control: "boolean", defaultValue: false },
    customDeleteIcon: { control: "boolean", defaultValue: false },
    onDelete: { action: "deleted" },
    onClick: { action: "clicked" },
  },
};

const Template: Story = ({ label, variant, color, size, avatar, disabled, clickable, deletable, customDeleteIcon, onDelete, onClick }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Chip
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        label={<>{label}</>}
        onDelete={deletable ? onDelete : undefined}
        onClick={clickable ? onClick : undefined}
        icon={avatar === "icon" ? <KeyboardArrowDown /> : undefined}
        avatar={
          avatar === "letter" ? (
            <Avatar>A</Avatar>
          ) : avatar === "img" ? (
            <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
          ) : undefined
        }
        deleteIcon={deletable && customDeleteIcon ? <Map /> : undefined}
      />
    </div>
  );
};

export const Standard = Template.bind({});

// Standard.play = ({args}) => {
//   const checkbox = document.querySelector("input[type=checkbox]");
//   checkbox?.click();
//   expect(args?.checked).toBe(true);
// };
