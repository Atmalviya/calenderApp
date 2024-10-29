import { Button } from "@nextui-org/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext"; 

export const Navbar = () => {
    const { logout } = useAuth(); // Access the logout function from the context
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Call the logout function to update the context
        navigate("/login"); // Redirect to the login page after logging out
    };
    return (
        <div className="overflow-hidden flex flex-col bg-gray-50">
            <header className="h-[60px] bg-black flex items-center justify-between px-6 border-b border-gray-700 text-white font-semibold text-xl shadow-md">
                <h1 className="tracking-wide">Calendar App</h1>
                <div className="flex gap-3">
                    <Button variant="flat"  auto className="text-sm text-white">
                    <Link to='/calender'>
                        Calendar View
                    </Link>
                    </Button>
                    <Button variant="shadow" color="error" auto className="text-sm" onClick={handleLogout}>
                        Log Out
                    </Button>
                </div>
            </header>
        </div>
    );
};
