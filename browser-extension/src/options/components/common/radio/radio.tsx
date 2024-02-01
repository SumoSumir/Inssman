import Checkbox, { CheckboxProps, CheckboxRef } from "rc-checkbox";
import { ComponentProps, FC } from "react";

type Props = {} & ComponentProps<"input"> & CheckboxProps & React.RefAttributes<CheckboxRef>;

const Radio: FC<Props> = (props) => {
  return <Checkbox {...props} />;
};

export default Radio;
