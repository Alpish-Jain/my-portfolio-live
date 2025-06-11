import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import PostmanImage from "../assets/PostmanImage.jpg";
import springBootImage from "../assets/springBootImage.png";
import lwcImage from "../assets/lwcImage.png";
import kafkaImage from "../assets/kafkaImage.png";
import RedisImage from "../assets/RedisImage.png";
import MySQLImage from "../assets/MySQLImage.png";
import JiraImage from "../assets/JiraImage.jpg";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: PostmanImage,
      title: "Postman",
      style: "shadow-orange-400",
    },
    {
      id: 7,
      src: springBootImage,
      title: "Spring Boot",
      style: "shadow-green-300",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: lwcImage,
      title: "Lightning Web Components",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: kafkaImage,
      title: "Apache Kafka",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: JiraImage,
      title: "Jira",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: RedisImage,
      title: "Redis",
      style: "shadow-red-400",
    },
    {
      id: 13,
      src: MySQLImage,
      title: "MySQL",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Explore the diverse set of technologies I've utilized and built solutions with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;