import React from 'react'
import skills from '../data/skills'
import SkillItem from './SkillItem'
import Title from './Title'

const Skills = () => {
  return (
    <section className="py-20" id="skills">
        <div className="max-w-5xl w-11/12 mx-auto">
            <Title id='skills'>Skills</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {skills.map((skill, index) => (
                    <SkillItem key={index} name={skill.name} level={skill.level} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills