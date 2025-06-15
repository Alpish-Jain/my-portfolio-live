import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';

const Home = () => {
  return (
    <div name="home" className='py-20 w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>

        {/* Left Text Block */}
        <div className='flex flex-col justify-center flex-1 mr-0 md:mr-10'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            Hi, I'm Alpish
          </h2>

          <div className="text-cyan-400 text-2xl sm:text-4xl font-semibold mt-2 min-h-[48px]">
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Building Scalable Systems with Real Impact"
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>

          <p className='text-gray-500 py-4 max-w-md'>
            I'm a Full-Stack Developer at Salesforce with over 3 years of experience delivering enterprise-grade web applications. I've worked on React.js, Spring Boot, LWC, and Apex to craft scalable,
            efficient systems across the full stack that drive real business impact.
          </p>

          <div>
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Image Block */}
        <div className='flex-1 flex justify-center'>
          <img
            src={HeroImage}
            alt='my profile'
            className='rounded-2xl w-[250px] md:w-[350px] lg:w-[400px]'
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
