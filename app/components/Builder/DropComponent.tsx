import { WidgetType } from "@/types";
import React from "react";

type IProps = WidgetType & {
    onDrop?: (e: React.DragEvent) => void;
};

const DropComponent: React.FC<IProps> = ({
    type,
    attributes,
    elements,
    onDrop,
}) => {
    if (!type) return null;

    // eslint-disable-next-line @next/next/no-img-element
    if (type === "IMAGE") return <img alt="image" {...attributes} />;

    if (type === "BLOCK")
        return (
            <div {...attributes}>
                {elements && elements?.length > 0 ? (
                    elements?.map((item) => (
                        <DropComponent key={item.id} {...item} />
                    ))
                ) : (
                    <div
                        className="border border-dashed p-2 rounded-lg text-center"
                        contentEditable
                        data-id={attributes["data-id"]}
                        onDrop={onDrop}
                    >
                        <span>Element Block</span>
                    </div>
                )}
            </div>
        );

    if (type === "TEXT") return <p {...attributes} contentEditable></p>;
};

export default DropComponent;
