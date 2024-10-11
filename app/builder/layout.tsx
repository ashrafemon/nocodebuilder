import React from "react";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="min-h-screen min-w-[1210px]">{children}</div>;
};

export default layout;
