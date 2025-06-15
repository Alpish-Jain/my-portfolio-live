import React from 'react'

const About = () => {
  return (
      <div name='about' className='w-full min-h-screen bg-gradient-to-b
      from-gray-800 to-black text-white pt-120 md:pt-2'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col
              justify-center w-full h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                      About
                  </p>
              </div>
              <p className='text-xl mt-20'>
              I’m a full-stack engineer at Salesforce with over 3 years of experience designing and delivering scalable, enterprise-grade systems. My work spans front-end development with React.js and Lightning Web Components to robust backend services using Java, Spring Boot, and Apex.
I’ve built RESTful APIs that process 10,000+ loan applications daily, optimized workflows to cut manual steps by 90%, and consistently delivered clean, maintainable code that drives real business impact.
My toolkit spans JavaScript (React/Redux), Java, Apex, C++, SQL/NoSQL databases, and modern DevOps tools like Git, CI/CD pipelines, and cloud platforms. I thrive in fast-paced, cross-functional teams where I can take ownership, adapt quickly, and build scalable solutions that deliver real business value.
              </p>
              <br />
              <p className='text-xl'>
              Beyond the keyboard, I’m usually deep into a binge-worthy series, outwitting opponents in video games, or bringing the heat in a game of table tennis or 8-ball pool. Whether I’m sprinting toward a new Netflix drop or honing my break-shot, I bring the same passion, grit, and strategic thinking to the table as I do to software development. If you’re looking for someone who pairs technical excellence with creative problem-solving—and who’s always up for a friendly match—let’s connect.
              </p>
          </div>
    </div>
  )
}

export default About