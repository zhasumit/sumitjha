'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase, Code2, Zap, Building, ArrowUp } from 'lucide-react';

interface Experience {
    id: number;
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string;
    technologies: string[];
    achievements: string[];
    companyUrl?: string;
    current?: boolean;
    startYear: number;
}

const WorkExperience: React.FC = () => {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const [isDark, setIsDark] = useState(false);

    const experiences: Experience[] = [
        {
            id: 0,
            company: "TechFlow Solutions",
            position: "Senior Full Stack Developer",
            duration: "2023 - Present",
            location: "San Francisco, CA",
            description: "Leading development of enterprise-scale web applications with focus on performance optimization and user experience.",
            technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
            achievements: [
                "Reduced application load time by 40% through code optimization",
                "Led migration from monolithic to microservices architecture",
                "Implemented CI/CD pipeline reducing deployment time by 60%"
            ],
            current: true,
            startYear: 2023
        },
    ];

    useEffect(() => {
        const theme = document.documentElement.getAttribute("data-theme");
        setIsDark(theme === "dark");

        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            setIsDark(currentTheme === "dark");
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"]
        });

        const timer = setTimeout(() => {
            experiences.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems(prev => [...prev, index]);
                }, index * 150);
            });
        }, 200);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    const themeClasses = {
        container: isDark ? 'bg-black text-white' : 'bg-white text-black',
        card: isDark
            ? 'bg-gray-900 border-gray-700 hover:bg-gray-800 hover:border-gray-600'
            : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300',
        timeline: isDark ? 'bg-white' : 'bg-black',
        circle: isDark ? 'bg-white border-gray-600' : 'bg-black border-gray-300',
        currentCircle: isDark ? 'bg-green-400 border-green-300' : 'bg-green-600 border-green-500',
        tech: isDark
            ? 'bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700'
            : 'bg-gray-200 border-gray-300 text-gray-800 hover:bg-gray-300',
        accent: isDark ? 'text-gray-300' : 'text-gray-600',
        company: isDark ? 'text-blue-400' : 'text-blue-600'
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${themeClasses.container} py-12 px-4`}>
            <div className="max-w-4xl mx-auto">
                {/* Compact Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <Briefcase className="w-8 h-8" />
                        <h1 className="text-4xl font-bold">Work Experience</h1>
                    </div>
                    <p className={`text-lg ${themeClasses.accent}`}>
                        Professional development journey
                    </p>
                </div>

                {/* Compact Timeline Container */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Main Timeline Line */}
                    <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${themeClasses.timeline} opacity-30`}></div>

                    {/* Timeline Items */}
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`relative transition-all duration-500 transform ${visibleItems.includes(index)
                                        ? 'translate-x-0 opacity-100'
                                        : 'translate-x-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="absolute left-2.5 top-6">
                                    <div className={`relative ${exp.current ? 'animate-pulse' : ''}`}>
                                        <div className={`w-3 h-3 rounded-full border-2 ${exp.current ? themeClasses.currentCircle : themeClasses.circle
                                            }`}>
                                            <div className={`absolute inset-0.5 rounded-full ${exp.current
                                                    ? (isDark ? 'bg-green-300' : 'bg-green-200')
                                                    : (isDark ? 'bg-black' : 'bg-white')
                                                }`}></div>
                                        </div>

                                        {exp.current && (
                                            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                                                <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border ${isDark
                                                        ? 'bg-green-900 text-green-300 border-green-600'
                                                        : 'bg-green-100 text-green-700 border-green-300'
                                                    }`}>
                                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                                    Now
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Experience Card */}
                                <div className="ml-12 group">
                                    <div className={`border rounded-lg p-6 transition-all duration-300 ${themeClasses.card}`}>

                                        {/* Compact Header */}
                                        <div className="mb-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <div className="flex-1">
                                                    <h2 className="text-xl font-bold mb-1">{exp.position}</h2>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Building className="w-4 h-4" />
                                                        <span className={`font-semibold ${themeClasses.company}`}>{exp.company}</span>
                                                        {exp.companyUrl && (
                                                            <ExternalLink className="w-3 h-3 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="text-right text-sm">
                                                    <div className={`flex items-center gap-1 mb-1 ${themeClasses.accent}`}>
                                                        <Calendar className="w-3 h-3" />
                                                        {exp.duration}
                                                    </div>
                                                    <div className={`flex items-center gap-1 ${themeClasses.accent}`}>
                                                        <MapPin className="w-3 h-3" />
                                                        {exp.location}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Year Badge */}
                                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${isDark
                                                    ? 'bg-gray-800 border-gray-600 text-gray-300'
                                                    : 'bg-gray-100 border-gray-300 text-gray-700'
                                                }`}>
                                                {exp.startYear}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="mb-4">
                                            <p className={`leading-relaxed ${themeClasses.accent}`}>{exp.description}</p>
                                        </div>

                                        {/* Technologies */}
                                        <div className="mb-4">
                                            <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                                                <Code2 className="w-4 h-4" />
                                                Tech Stack
                                            </h3>
                                            <div className="flex flex-wrap gap-1.5">
                                                {exp.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className={`px-2 py-1 text-xs rounded border transition-colors ${themeClasses.tech}`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div>
                                            <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm">
                                                <Zap className="w-4 h-4" />
                                                Key Achievements
                                            </h3>
                                            <div className="space-y-1.5">
                                                {exp.achievements.map((achievement, achIndex) => (
                                                    <div
                                                        key={achIndex}
                                                        className={`flex items-start gap-2 text-sm ${themeClasses.accent}`}
                                                    >
                                                        <ArrowUp className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span>{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Timeline End Point */}
                    <div className="absolute left-2.5 -bottom-2 w-3 h-3">
                        <div className={`w-full h-full rounded-full border-2 ${themeClasses.circle}`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;