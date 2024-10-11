import Elements from "../components/Builder/Elements";
import BlockProperties from "../components/Builder/Properties/BlockProperties";
import ImageProperties from "../components/Builder/Properties/ImageProperties";
import TextProperties from "../components/Builder/Properties/TextProperties";
import TopBar from "../components/Builder/TopBar";

const page = () => {
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
                    <div className="bg-white rounded-xl max-w-[900px] mx-auto overflow-hidden">
                        <div className="grid grid-cols-2">
                            <div className="p-10">
                                <div className="w-[180px] mb-16">
                                    <img
                                        src="/logo.png"
                                        alt="Logo"
                                        className="w-full h-full"
                                    />
                                </div>

                                <p className="text-5xl font-bold leading-tight mb-5">
                                    Pitch-Deck Presentation Template
                                </p>

                                <p className="text-sm">
                                    The most pitch deck presentation template.
                                    You will type your subtitle here.
                                </p>
                            </div>

                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Image"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
