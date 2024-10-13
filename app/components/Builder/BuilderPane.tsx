"use client";

import { WidgetType } from "@/types";
import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import DropComponent from "./DropComponent";

const BuilderPane: React.FC<{ children?: React.ReactNode }> = ({
    children,
}) => {
    const [selectedWidget, setSelectedWidget] = useState<WidgetType | null>(
        null
    );
    const [widgets, setWidgets] = useState<WidgetType[]>([]);

    const handleOnDrop = (e: DragEvent) => {
        console.log(e);
        e.stopPropagation();

        const widgetType = e.dataTransfer?.getData("widgetType") as string;

        const id = uuid4();

        const widget: WidgetType = {
            id: id,
            type: widgetType,
            attributes: {
                "data-id": id,
            },
            elements: [],
        };

        if (widgetType === "TEXT") {
            widget.attributes.children = "Something write here";
        }

        // switch (widgetType) {
        //     case "BLOCK":
        //         widget = {
        //             id: uuid4(),
        //             type: widgetType,
        //             attributes: {},
        //             elements: [],
        //         };
        //         break;
        //     case "TEXT":
        //         widget = {
        //             id: uuid4(),
        //             type: widgetType,
        //             attributes: {
        //                 children: "Something write here",
        //             },
        //             elements: [],
        //         };
        //         break;
        //     case "IMAGE":
        //         widget = {
        //             id: uuid4(),
        //             type: widgetType,
        //             attributes: {},
        //         };
        //         break;
        //     default:
        //         return;
        // }

        setWidgets((prevState) => [...prevState, widget]);
        setSelectedWidget(widget);
    };

    const handleOnDragOver = (e: DragEvent) => {
        e.preventDefault();
    };

    return (
        <div
            className="bg-white rounded-xl max-w-[900px] mx-auto overflow-hidden h-full"
            onDrop={(e) => handleOnDrop(e)}
            onDragOver={(e) => handleOnDragOver(e)}
        >
            {widgets.map((item) => (
                <DropComponent
                    key={item.id}
                    {...item}
                    onDrop={(e) => handleOnDrop(e)}
                />
            ))}
            {children}
        </div>
    );
};

export default BuilderPane;
