import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Tooltip } from "@nextui-org/react";

const TopBar = () => {
    return (
        <div className="p-2 max-h-[60px] shadow">
            <div className="flex justify-between items-center gap-2">
                <h4 className="text-xl font-semibold">NoCode Builder</h4>

                <div className="flex items-center gap-2">
                    <Tooltip content="Preview" showArrow>
                        <Button isIconOnly color="primary" variant="flat">
                            <Icon icon="ic:twotone-preview" fontSize={20} />
                        </Button>
                    </Tooltip>

                    <Tooltip content="Source Code" showArrow>
                        <Button isIconOnly variant="flat">
                            <Icon icon="tdesign:code" fontSize={20} />
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
