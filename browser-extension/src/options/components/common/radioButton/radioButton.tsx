import Checkbox, { CheckboxProps, CheckboxRef } from "rc-checkbox";
import { ComponentProps, FC } from "react";

type Props = {} & ComponentProps<"input"> & CheckboxProps & React.RefAttributes<CheckboxRef>;

const RadioButton: FC<Props> = (props) => {
  return <Checkbox {...props} />;
};

export default RadioButton;
