import { Button } from "@nextui-org/button";

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen overflow-hidden flex flex-col bg-gray-50">
            {/* Header */}
            <header className="h-[60px] bg-black flex items-center justify-between px-6 border-b border-gray-700 text-white font-semibold text-xl shadow-md">
                <h1 className="tracking-wide">Calendar App</h1>
                <div className="flex gap-3">
                    <Button variant="flat" color="primary" auto className="text-sm">
                        Calendar View
                    </Button>
                    <Button variant="shadow" color="error" auto className="text-sm">
                        Log Out
                    </Button>
                </div>
            </header>

            {/* Main Content */}
            <main style={{ height: "calc(100vh - 60px)" }} className="p-6 overflow-hidden">
                {children}
            </main>
        </div>
    );
};
