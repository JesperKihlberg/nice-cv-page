// import { expect } from "@storybook/jest";

import { Checkbox } from "@jesper-kihlberg/design-system";
import { Story } from "@storybook/react";

export default {
  title: "Design System/Atoms/Checkbox",
  argTypes: {
    checked: { control: "boolean", defaultValue: false },
    color: { control: "inline-radio", options: ["default", "primary", "secondary"] },
    disabled: { control: "boolean", defaultValue: false },
    indeterminate: { control: "boolean", defaultValue: false },
    size: { control: "inline-radio", options: ["small", "medium"] },
    onclick: { action: "clicked" },
  },
};

const Template: Story = ({ checked, color, disabled, indeterminate, size, onclick }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Checkbox checked={checked} color={color} disabled={disabled} indeterminate={indeterminate} size={size} onClick={onclick} />
    </div>
  );
};

export const Standard = Template.bind({});

// Standard.play = ({args}) => {
//   const checkbox = document.querySelector("input[type=checkbox]");
//   checkbox?.click();
//   expect(args?.checked).toBe(true);
// };
