import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import InputField from "../../UI/InputField";
import SelectField from "../../UI/SelectField";

const BlockProperties = () => {
    return (
        <div>
            <div className="border-b border-b-gray-200 py-4 px-2 flex justify-between items-center">
                <h4 className="font-semibold text-sm">Block</h4>

                <Button isIconOnly size="sm" variant="light">
                    <Icon icon="material-symbols:close" fontSize={22} />
                </Button>
            </div>

            <div className="border-b border-b-gray-200 py-4 px-2">
                <h4 className="font-semibold text-xs mb-2">Display</h4>

                <SelectField data={[]} />
            </div>

            <div className="border-b border-b-gray-200 py-4 px-2">
                <h4 className="font-semibold text-xs mb-2">Size</h4>

                <div className="grid grid-cols-2 gap-2">
                    <InputField label="Width" />
                    <InputField label="Height" />
                </div>
            </div>

            <div className="border-b border-b-gray-200 py-4 px-2">
                <h4 className="font-semibold text-xs mb-2">Margin</h4>

                <div className="grid grid-cols-2 gap-2">
                    <InputField label="Top" />
                    <InputField label="Bottom" />
                    <InputField label="Left" />
                    <InputField label="Right" />
                </div>
            </div>

            <div className="border-b border-b-gray-200 py-4 px-2">
                <h4 className="font-semibold text-xs mb-2">Padding</h4>

                <div className="grid grid-cols-2 gap-2">
                    <InputField label="Top" />
                    <InputField label="Bottom" />
                    <InputField label="Left" />
                    <InputField label="Right" />
                </div>
            </div>
        </div>
    );
};

export default BlockProperties;
