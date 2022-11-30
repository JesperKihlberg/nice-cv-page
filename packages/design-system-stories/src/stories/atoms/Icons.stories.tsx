import { Story } from "@storybook/react";
import {
  Balance,
  Folders,
  Add,
  Category,
  ChevronRight,
  Close,
  CollectionsBookmark,
  DateRange,
  Description,
  Email,
  ExpandMore,
  Folder,
  Gavel,
  HelpOutline,
  KeyboardArrowDown,
  Map,
  PersonOutline,
  PictureAsPdf,
  Remove,
  Save,
  Search,
  StarBorder,
  Tune,
  ViewHeadline,
  ViewModule,
} from "@jesper-kihlberg/design-system";

export default {
  title: `Design System/Atoms/Icons`,
  argTypes: {
    font_size: { control: "inline-radio", options: ["default", "inherit", "large", "medium", "small"] },
    container_font_size: { control: { type: "range", min: 5, max: 100, step: 1, defaultValue: 5 } },
    color: { control: "inline-radio", options: ["inherit", "primary", "secondary", "action", "disabled", "error"] },
  },
};

const Template: Story = ({ font_size, container_font_size, color }) => {
  return (
    <div style={{ display: "flex", gap: "10px", fontSize: container_font_size }}>
      <Balance fontSize={font_size} color={color} />
      <Folders fontSize={font_size} color={color} />
      <Add fontSize={font_size} color={color} />
      <Category fontSize={font_size} color={color} />
      <ChevronRight fontSize={font_size} color={color} />
      <Close fontSize={font_size} color={color} />
      <CollectionsBookmark fontSize={font_size} color={color} />
      <DateRange fontSize={font_size} color={color} />
      <Description fontSize={font_size} color={color} />
      <Email fontSize={font_size} color={color} />
      <ExpandMore fontSize={font_size} color={color} />
      <Folder fontSize={font_size} color={color} />
      <Gavel fontSize={font_size} color={color} />
      <HelpOutline fontSize={font_size} color={color} />
      <KeyboardArrowDown fontSize={font_size} color={color} />
      <Map fontSize={font_size} color={color} />
      <PersonOutline fontSize={font_size} color={color} />
      <PictureAsPdf fontSize={font_size} color={color} />
      <Remove fontSize={font_size} color={color} />
      <Save fontSize={font_size} color={color} />
      <Search fontSize={font_size} color={color} />
      <StarBorder fontSize={font_size} color={color} />
      <Tune fontSize={font_size} color={color} />
      <ViewHeadline fontSize={font_size} color={color} />
      <ViewModule fontSize={font_size} color={color} />
    </div>
  );
};

export const Standard = Template.bind({});
