import React from 'react'
import Title from './Title'
import education from '../data/education'
import EducationItem from './EducationItem'

const Education = () => {
  return (
    <div
    className="flex flex-col md:flex-row justify-center my-20"
>
    <div className="w-full md:w-7/12">
        <Title id={"educatie"}>Educatie</Title>
        {education.map((item, index) => (
            <EducationItem
                key={index}
                title={item.title}
                school={item.school}
                location={item.location}
                start={item.start}
                end={item.end}
            />
        ))}
    </div>    
</div>
  )
}

export default Education