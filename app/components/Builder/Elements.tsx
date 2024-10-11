import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@nextui-org/react";
import React from "react";

const Elements = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <Tooltip content="Block" showArrow placement="right">
                <Button isIconOnly variant="light">
                    <Icon icon="hugeicons:blockchain-01" fontSize={30} />
                </Button>
            </Tooltip>

            <Tooltip content="Text" showArrow placement="right">
                <Button isIconOnly variant="light">
                    <Icon icon="tabler:text-resize" fontSize={30} />
                </Button>
            </Tooltip>

            <Tooltip content="Image" showArrow placement="right">
                <Button isIconOnly variant="light">
                    <Icon icon="uil:image" fontSize={30} />
                </Button>
            </Tooltip>
        </div>
    );
};

export default Elements;
