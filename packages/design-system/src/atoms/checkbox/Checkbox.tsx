import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from "@material-ui/core/Checkbox";

interface CheckboxProps extends MuiCheckboxProps {}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <MuiCheckbox {...props} />;
};

export default Checkbox;
