import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
            {portfolio.map((item, index) => (
                <PortfolioItem
                    key={index}
                    title={item.title}
                    image={item.imgURL}
                    stack={item.stack}
                    link={item.link}
                />
            ))}
        </div>
    </div>
  );
};

export default Portfolio;