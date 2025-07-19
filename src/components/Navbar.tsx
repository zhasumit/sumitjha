"use client";
import Logo from "@/svgs/Logo";
import Switch from "./Switch/ThemeToggleSwitch";


export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4">
            <Logo size={140} />
            <Switch size={70} />
        </nav>
    );
}
