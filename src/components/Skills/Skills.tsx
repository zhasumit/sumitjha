
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
                />
                <SkillCard
                    icon={<FastAPIIcon />}
                    title="Python"
                    description="python python python python python python python "
                    users={2}
                    teams={3}
                />
                <SkillCard
                    icon={<RubyIcon />}
                    title="Python"
                    description="python python python python python python python "
                    users={2}
                    teams={3}
                />
                <SkillCard
                    icon={<RailsIcon />}
                    title="Python"
                    description="python python python python python python python "
                    users={2}
                    teams={3}
                />
                <SkillCard
                    icon={<JavaScriptIcon />}
                    title="Python"
                    description="python python python python python python python "
                    users={2}
                    teams={3}
                />
                <SkillCard
                    icon={<ReactLogo />}
                    title="Python"
                    description="python python python python python python python "
                    users={2}
                    teams={3}
                />

            </div>

        </>
    );
};

export default Skills;
