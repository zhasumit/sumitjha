"use client";

import React, { useEffect, useState } from "react";

interface ThemeToggleSwitchProps {
    size?: number; // width in px, default 100
}

const STORAGE_KEY = "sumitjha-portfoliotheme";

const ThemeToggleSwitch: React.FC<ThemeToggleSwitchProps> = ({ size = 100 }) => {
    const [isDark, setIsDark] = useState(false);

    const height = Math.round(size / 2);
    const knobSize = Math.round(height * 0.8);
    const knobLeftUnchecked = 5;
    const knobLeftChecked = size - knobSize - 5;

    useEffect(() => {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        if (savedTheme) {
            setIsDark(savedTheme === "dark");
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDark(prefersDark);
            document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
    };

    return (
        <label
            className="inline-flex items-center relative cursor-pointer select-none"
            style={{ width: size, height }}
        >
            <input
                className="peer hidden"
                id="toggle"
                type="checkbox"
                checked={isDark}
                onChange={toggleTheme}
            />
            <div
                className={`
          relative bg-white peer-checked:bg-zinc-500 rounded-full 
          shadow-sm duration-300
          after:absolute after:content-[''] after:rounded-full after:shadow-md after:duration-300
          peer-checked:after:translate-x-[-100%]
        `}
                style={{
                    width: size,
                    height,
                    position: "relative",
                }}
            >
                <div
                    className="absolute rounded-full shadow-md duration-300"
                    style={{
                        width: knobSize,
                        height: knobSize,
                        top: (height - knobSize) / 2,
                        left: isDark ? knobLeftChecked : knobLeftUnchecked,
                        backgroundColor: isDark ? "black" : "#facc15",
                        transition: "left 0.3s ease, background-color 0.3s ease",
                    }}
                />
            </div>

            <svg
                height={height * 0.5}
                width={height * 0.5}
                viewBox="0 0 24 24"
                className="absolute left-[10px] transition-colors duration-300 pointer-events-none"
                style={{
                    top: (height - height * 0.5) / 2,
                    fill: "white",
                    opacity: isDark ? 0.6 : 1,
                }}
                aria-hidden="true"
            >
                <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z" />
            </svg>

            <svg
                height={height * 0.5}
                width={height * 0.5}
                viewBox="0 0 24 24"
                className="absolute right-[10px] transition-colors duration-300 pointer-events-none"
                style={{
                    top: (height - height * 0.5) / 2,
                    fill: isDark ? "white" : "black",
                    opacity: isDark ? 1 : 0.6,
                }}
                aria-hidden="true"
            >
                <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z" />
            </svg>
        </label>
    );
};

export default ThemeToggleSwitch;
