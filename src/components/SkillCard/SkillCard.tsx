import React from 'react';
import { FiUsers } from "react-icons/fi";
import './SkillCard.css';
import { FaCodeBranch } from 'react-icons/fa';

type SkillCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    users?: number;
    teams?: number;
    projects?: number;
    backgroundColor?: string; // New prop for background color
};

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, users, teams, projects, backgroundColor }) => {
    return (
        <div className="card" style={{ backgroundColor }}>
            <div className="img">
                {icon}
            </div>
            <div className="textBox">
                <p className="text head">{title}</p>
                <span className='font-semibold text-xs text-white'>{description}</span>
                <div className='flex gap-2 text-xs'>
                    {users !== undefined && (
                        <div className="flex gap-0.5 text-blue-200">
                            <FiUsers />
                            <span>{users}</span>
                        </div>
                    )}
                    {teams !== undefined && (
                        <div className="flex gap-0.5 text-green-200">
                            <FaCodeBranch />
                            <span>{teams}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
