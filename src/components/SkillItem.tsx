import React from 'react'

type Props = {
    name: string;
    level: number;
}

const SkillItem : React.FC<Props> = ({name, level}) => {
  return (
    // <div className="flex items-center justify-between">
    //     <p className="text-lg font-semibold">{name}</p>
    //     <div className="flex items-center">
    //         <div className="flex items-center">
    //             <div className="w-2 h-2 bg-violet-300 rounded-full mr-1"></div>
    //             <div className="w-2 h-2 bg-violet-300 rounded-full mr-1"></div>
    //             <div className="w-2 h-2 bg-violet-300 rounded-full mr-1"></div>
    //             <div className="w-2 h-2 bg-violet-300 rounded-full mr-1"></div>
    //             <div className="w-2 h-2 bg-violet-300 rounded-full mr-1"></div>
    //         </div>
    //         <p className="text-sm font-semibold ml-2">{level}</p>
    //     </div>
    // </div>

    // progress bar
    <div className="flex items-center justify-between transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <p className="text-lg font-semibold">{name}</p>
        <div className="flex items-center">
            <div className="w-40 h-2 bg-violet-300 rounded-full mr-1">
                {/* <div className="h-full bg-violet-500 rounded-full" style="width" ></div> */}
                {/* with equals level */}
                <div className="h-full bg-violet-500 rounded-full" style={{width: `${level}%`}}></div>
            </div>
            <p className="text-sm font-semibold ml-2">{level}</p>
        </div>
    </div>

  )
}

export default SkillItem