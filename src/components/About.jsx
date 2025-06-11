import React from 'react'

const About = () => {
  return (
      <div name='about' className='w-full h-screen bg-gradient-to-b
      from-gray-800 to-black text-white pt-120 md:pt-2'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col
              justify-center w-full h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                      About
                  </p>
              </div>
              <p className='text-xl mt-20'>
              I’m a driven full-stack engineer with over three years of experience turning complex challenges into elegant, high-impact solutions. At Salesforce, I’ve architected and built scalable, REST-based integrations that process 10,000+ loan applications per day, slashed manual verification time by 90%, and accelerated approval workflows by 50%. From crafting rich Lightning Web Components to designing Spring Boot back-ends, I thrive on writing clean, maintainable code that not only works—but delights users and stakeholders alike. My toolkit spans Python, Java, C++, JavaScript (React.js/Redux), Apex, SQL/NoSQL databases, and a host of modern DevOps and cloud services; but more than any particular framework, what drives me is the opportunity to learn fast, own my projects end-to-end, and collaborate with cross-functional teams to deliver real business value.
              </p>
              <br />
              <p className='text-xl'>
              Outside of code, you’ll find me immersed in the latest streaming series, mastering new strategies in video games, or fiercely competing over a game of table tennis or 8-ball pool. Whether I’m sprinting toward a new Netflix drop or honing my break-shot, I bring the same passion, grit, and strategic thinking to the table as I do to software development. If you’re looking for someone who pairs technical excellence with creative problem-solving—and who’s always up for a friendly match—let’s connect.
              </p>
          </div>
    </div>
  )
}

export default About