"use client";

import { Select, SelectItem, SelectProps } from "@nextui-org/react";
import React from "react";

type IProps = Omit<SelectProps, "children"> & {
    labelKey?: string;
    valueKey?: string;
    data: { [key: string]: string }[];
};

const SelectField: React.FC<IProps> = ({
    data,
    labelKey = "label",
    valueKey = "value",
    variant = "bordered",
    size = "sm",
    ...props
}) => {
    return (
        <Select variant={variant} size={size} {...props}>
            {data.map((item, i) => (
                <SelectItem key={i} value={item[valueKey]}>
                    {item[labelKey]}
                </SelectItem>
            ))}
        </Select>
    );
};

export default SelectField;
