import React from "react";
import currencyConvert from "../assets/portfolio/currencyConvert.jpg";
import blogImage from "../assets/portfolio/blogImage.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: currencyConvert,
      demoLink: 'https://quickcurrency.netlify.app/',
      codeLink:'https://github.com/Alpish-Jain/currency-converter-live'
    },
    {
      id: 2,
      src: blogImage,
      demoLink: 'https://create-blogs.netlify.app/',
      codeLink:'https://github.com/Alpish-Jain/create-blogs'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-12 pt-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Discover projects that showcase my skills and passion.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demoLink,codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md p-3 pl-3 duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 rounded-md text-white bg-blue-500 cursor-pointer hover:scale-105 hover:bg-blue-600 duration-200 shadow-lg shadow-blue-500/50">
                  <a href={demoLink} target="_blank">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 rounded-md text-blue-400 border-2 border-blue-500 cursor-pointer hover:scale-105 hover:bg-blue-500 hover:text-white duration-200">
                <a href={codeLink} target="_blank">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;