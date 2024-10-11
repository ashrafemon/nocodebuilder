import { Icon } from "@iconify/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import InputField from "../../UI/InputField";
import SelectField from "../../UI/SelectField";

const TextProperties = () => {
    return (
        <div>
            <div className="border-b border-b-gray-200 py-4 px-2 flex justify-between items-center">
                <h4 className="font-semibold text-sm">Text</h4>

                <Button isIconOnly size="sm" variant="light">
                    <Icon icon="material-symbols:close" fontSize={22} />
                </Button>
            </div>

            <div className="border-b border-b-gray-200 py-4 px-2">
                <h4 className="font-semibold text-xs mb-2">Text alignment</h4>

                <ButtonGroup variant="bordered" size="sm">
                    <Button isIconOnly>
                        <Icon icon="lucide:align-left" fontSize={20} />
                    </Button>
                    <Button isIconOnly>
                        <Icon icon="lucide:align-center" fontSize={20} />
                    </Button>
                    <Button isIconOnly>
                        <Icon icon="lucide:align-justify" fontSize={20} />
                    </Button>
                    <Button isIconOnly>
                        <Icon icon="lucide:align-right" fontSize={20} />
                    </Button>
                </ButtonGroup>
            </div>

            <div className="border-b border-b-gray-200 py-4 px-2">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-full">
                        <h4 className="font-semibold text-xs mb-2">Font</h4>
                        <SelectField
                            data={[{ label: "Inter", value: "inter" }]}
                        />
                    </div>

                    <div className="">
                        <h4 className="font-semibold text-xs mb-2">
                            Font Size
                        </h4>

                        <SelectField
                            data={Array(100)
                                .fill(0)
                                .map((_, i) => ({
                                    label: String(i + 1),
                                    value: String(i + 1),
                                }))}
                        />
                    </div>

                    <div className="">
                        <h4 className="font-semibold text-xs mb-2">
                            Font Style
                        </h4>
                        <SelectField
                            data={Array(100)
                                .fill(0)
                                .map((_, i) => ({
                                    label: String(i + 1),
                                    value: String(i + 1),
                                }))}
                        />
                    </div>

                    <div className="">
                        <h4 className="font-semibold text-xs mb-2">
                            Line Height
                        </h4>
                        <InputField />
                    </div>

                    <div className="">
                        <h4 className="font-semibold text-xs mb-2">
                            Line Spacing
                        </h4>
                        <InputField />
                    </div>
                </div>
            </div>

            <div className="border-b border-b-gray-200 py-4 px-2">
                <h4 className="font-semibold text-xs mb-2">Font Color</h4>

                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2">
                        <div className="p-2 border rounded-lg flex gap-2">
                            <input
                                type="color"
                                className="w-5 h-5 rounded-full"
                            />
                            <h5 className="text-sm font-semibold">020202</h5>
                        </div>
                    </div>
                    <input className="border rounded-lg p-2 text-sm font-semibold" />
                </div>
            </div>
        </div>
    );
};

export default TextProperties;
