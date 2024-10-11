import { Input, InputProps } from "@nextui-org/react";
import React from "react";

const InputField: React.FC<InputProps> = ({
    variant = "bordered",
    size = "sm",
    ...props
}) => {
    return <Input variant={variant} size={size} {...props} />;
};

export default InputField;
