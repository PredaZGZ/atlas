import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar () {
    const user = useSelector((state) => state.auth.user);

    return (
        <header className="flex items-center justify-between p-4 bg-neutral-800 mx-14">
            <div className="flex items-center">
                <h1 className="text-2xl font-semibold text-neutral-200">ATLAS</h1>
            </div>
            <div className="flex items-center justify-between">
                <NavLink 
                    className={({ isActive }) =>
                        isActive ? "px-4 py-2 text-sm font-semibold text-neutral-200 rounded-md bg-neutral-700"
                        : "px-4 py-2 text-sm font-semibold text-neutral-200 rounded-md hover:g-neutral-700"
                    }
                    to="/dashboard" >
                        Dashboard 
                </NavLink>
                <NavLink 
                    to="/folders" 
                    className={({ isActive }) =>
                        isActive ? "px-4 py-2 text-sm font-semibold text-neutral-200 rounded-md bg-neutral-700"
                        : "px-4 py-2 text-sm font-semibold text-neutral-200 rounded-md hover:g-neutral-700"
                    } >
                        Folders 
                </NavLink>
                <NavLink 
                    to="/notes" 
                    className={({ isActive }) =>
                        isActive ? "px-4 py-2 text-sm font-semibold text-neutral-200 rounded-md bg-neutral-700"
                        : "px-4 py-2 text-sm font-semibold text-neutral-200 rounded-md hover:g-neutral-700"
                    }>
                        Notes 
                </NavLink>
            </div>
            <div className="flex items-center">
                <p className="text-neutral-200">
                    { user.name }                
                </p>
            </div>
        </header>
    )
}