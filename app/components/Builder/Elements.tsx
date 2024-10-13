"use client";

import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@nextui-org/react";
import { useMemo } from "react";

const Elements = () => {
    const elements = useMemo(
        () => [
            { icon: "hugeicons:blockchain-01", element: "BLOCK" },
            { icon: "tabler:text-resize", element: "TEXT" },
            { icon: "uil:image", element: "IMAGE" },
        ],
        []
    );

    const handleDragStart = (e: React.DragEvent, widgetType: string) => {
        console.log("w", widgetType);
        e.dataTransfer.setData("widgetType", widgetType);
    };

    return (
        <div className="flex flex-col justify-center items-center gap-3">
            {elements.map((item, i) => (
                <Tooltip
                    content={item.element}
                    showArrow
                    placement="right"
                    key={i}
                >
                    <Button
                        isIconOnly
                        variant="light"
                        draggable
                        onDragStart={(e) => handleDragStart(e, item.element)}
                    >
                        <Icon icon={item.icon} fontSize={30} />
                    </Button>
                </Tooltip>
            ))}

            {/* <Tooltip content="Block" showArrow placement="right">
                <Button
                    isIconOnly
                    variant="light"
                    draggable
                    onDragStart={(e) => handleDragStart(e, "block")}
                >
                    <Icon icon="hugeicons:blockchain-01" fontSize={30} />
                </Button>
            </Tooltip>

            <Tooltip content="Text" showArrow placement="right">
                <Button
                    isIconOnly
                    variant="light"
                    draggable
                    onDragStart={(e) => handleDragStart(e, "text")}
                >
                    <Icon icon="tabler:text-resize" fontSize={30} />
                </Button>
            </Tooltip>

            <Tooltip content="Image" showArrow placement="right">
                <Button
                    isIconOnly
                    variant="light"
                    draggable
                    onDragStart={(e) => handleDragStart(e, "image")}
                >
                    <Icon icon="uil:image" fontSize={30} />
                </Button>
            </Tooltip> */}
        </div>
    );
};

export default Elements;
