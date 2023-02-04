import React from "react"

const PortfolioItem = ({ title, stack, image, link } : { title: string, stack: string[], image: string, link: string }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
            <img 
            src={image} 
            alt="portfolio"
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3
                    className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold"
                >
                    {title}
                </h3>
                <p
                    className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white"
                >
                    {stack.map((item, index) => (
                        <span 
                            key={index} 
                            className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
                        >
                            {item}
                        </span>
                    )
                    )}
                </p>
            </div>
        </a> 
    )
}

export default PortfolioItem