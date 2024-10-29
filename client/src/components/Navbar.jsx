import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="overflow-hidden flex flex-col bg-gray-50">
            <header className="h-[60px] bg-black flex items-center justify-between px-6 border-b border-gray-700 text-white font-semibold text-xl shadow-md">
                <h1 className="tracking-wide">Calendar App</h1>
                <div className="flex gap-3">
                    <Button variant="flat" color="primary" auto className="text-sm">
                    <Link to='/calender'>
                        Calendar View
                    </Link>
                    </Button>
                    <Button variant="shadow" color="error" auto className="text-sm">
                        Log Out
                    </Button>
                </div>
            </header>
        </div>
    );
};
