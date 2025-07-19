
import React from 'react';
import SkillCard from '../SkillCard/SkillCard';
import PythonIcon from '@/svgs/PythonIcon';
import FastAPIIcon from '@/svgs/FastAPIIcon';
import RubyIcon from '@/svgs/RubyIcon';
import RailsIcon from '@/svgs/RailsIcon';
import JavaScriptIcon from '@/svgs/JavaScriptIcon';
import ReactLogo from '@/svgs/ReactLogo';

const Skills = () => {
    return (
        <>
            <div className='flex gap-3 justify-items-center align-middle' >
                <SkillCard
                    icon={<PythonIcon />}
                    title="Python"
                    description="python python python python python python python "
                    users={2}
                    teams={3}
                    backgroundColor="" // Example background color in hex
                />
                <SkillCard
                    icon={<FastAPIIcon />}
                    title="Python"
                    description="python python python python python python python "
                    users={2}
                    teams={3}
                    backgroundColor="" // Example background color in hex
                />
                <SkillCard
                    icon={<RubyIcon />}
                    title="Python"
                    description="python python python python python python python "
                    users={2}
                    teams={3}
                    backgroundColor="" // Example background color in hex
                />
                <SkillCard
                    icon={<RailsIcon />}
                    title="Python"
                    description="python python python python python python python "
                    users={2}
                    teams={3}
                    backgroundColor="" // Example background color in hex
                />
                <SkillCard
                    icon={<JavaScriptIcon />}
                    title="Python"
                    description="python python python python python python python "
                    users={2}
                    teams={3}
                    backgroundColor="" // Example background color in hex
                />
                <SkillCard
                    icon={<ReactLogo />}
                    title="Python"
                    description="python python python python python python python "
                    users={2}
                    teams={3}
                    backgroundColor="" // Example background color in hex
                />

            </div>

        </>
    );
};

export default Skills;
