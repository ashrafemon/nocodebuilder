"use client";

import BuilderPane from "./BuilderPane";
import Elements from "./Elements";
import ImageProperties from "./Properties/ImageProperties";
import TopBar from "./TopBar";

const BuilderContent = () => {
    return (
        <>
            {/* TopBar */}
            <TopBar />

            <div className="flex h-[calc(100vh-60px)]">
                {/* Element Sidebar */}
                <div className="border-r border-gray-200 p-2 w-[100px]">
                    <Elements />
                </div>

                {/* Element Properties Sidebar */}
                <div className="border-r border-gray-200 w-[250px]">
                    {/* <TextProperties /> */}
                    {/* <BlockProperties /> */}
                    <ImageProperties />
                </div>

                {/* Builder Pane */}
                <div className="w-full p-8 bg-gray-100">
                    <BuilderPane />
                </div>
            </div>
        </>
    );
};

export default BuilderContent;
