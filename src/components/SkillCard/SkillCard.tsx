import React from 'react';
import { FiUsers } from "react-icons/fi";
import { FaCodeBranch } from 'react-icons/fa';
import './SkillCard.css';

type SkillCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    users?: number;
    teams?: number;
};

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, users, teams }) => {
    return (
        <div className="w-[100px] h-[130px] rounded-2xl text-white flex flex-col items-center justify-center relative p-[5px] transition-all duration-200 ease-in-out card">
            <div className="img absolute flex items-center justify-center transition-all duration-200 ease-in-out h-[30%] z-[1]">
                {icon}
            </div>
            <div className="textBox opacity-0 flex flex-col items-center justify-center gap-1 text-center z-[2] w-full transition-all duration-200 ease-in-out">
                <p className="text head text-[16px] font-bold">{title}</p>
                <span className="text-[10px]  font-semibold text-white">{description}</span>
                <div className="flex gap-2 text-xs">
                    {users !== undefined && (
                        <div className="flex gap-1 text-blue-200 items-center">
                            <FiUsers />
                            <span>{users}</span>
                        </div>
                    )}
                    {teams !== undefined && (
                        <div className="flex gap-1 text-green-200 items-center">
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
