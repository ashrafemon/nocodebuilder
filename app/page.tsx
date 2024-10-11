import { Button } from "@nextui-org/react";
import Link from "next/link";

const page = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Button color="primary" variant="shadow" size="lg">
                <Link href="/builder">Start Building Page</Link>
            </Button>
        </div>
    );
};

export default page;
