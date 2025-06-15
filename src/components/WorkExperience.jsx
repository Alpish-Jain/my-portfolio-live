import { MdWork } from 'react-icons/md'; // example icon
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkExperience = () => {
  return (
    <div name='work experience' className='w-full min-h-screen 
    bg-gradient-to-b from-black to-gray-800
     text-white md:pt-2'>
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
              
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">Professional experiences where I built, shipped, and scaled solutions — and grew through hands-on impact.</p>
              </div>
              
              {/* Time line Component below */}
              <VerticalTimeline>
              <VerticalTimelineElement
                      contentStyle={{ background: '#4e342e', color: '#fff'}}
    className="vertical-timeline-element--work font-extrabold"
    date="Jun 2022 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdWork />}
  >
    <h3 className="vertical-timeline-element-title">Associate Technical Consultant</h3>
    <h4 className="vertical-timeline-element-subtitle">Salesforce, Bangalore</h4>
    <p>
    Automated loan processing and fraud detection by integrating Salesforce with external systems, improving speed, accuracy, and compliance.
Built streamlined UIs and logic that significantly reduced manual effort for underwriting and income assessment teams.
    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
    className="vertical-timeline-element--work font-extrabold"
    contentStyle={{ background: '#fbc02d', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Jan 2022 - June 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdWork />}
  >
    <h3 className="vertical-timeline-element-title">Associate Technical Consultant Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Salesforce, Hyderabad</h4>
    <p>
    Designed and demoed a capstone solution with complex Apex logic, earning strong feedback from senior devs.
    Built scalable notifications for 10,000+ users and ensured 100% test coverage using Agile best practices.
    </p>
                  </VerticalTimelineElement>
                  
              <VerticalTimelineElement
                      contentStyle={{ background: '#880e4f', color: '#fff' }}
    className="vertical-timeline-element--work font-extrabold"
    date="Jun 2021 - Aug 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdWork />}
  >
    <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Highpolar Softwares, Remote</h4>
    <p>
    Spearheaded the frontend of a React Native instant messenger app, improving user experience and performance.
    Followed SDLC, SOLID, and DRY principles while collaborating in an agile, startup-driven environment at Highpolar Softwares.
    </p>
              </VerticalTimelineElement>
              
  <VerticalTimelineElement
    className="vertical-timeline-element--work font-extrabold"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Nov 2019 - Apr 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdWork />}
  >
    <h3 className="vertical-timeline-element-title">Sales Promoter (Part-time)</h3>
    <h4 className="vertical-timeline-element-subtitle">Airtel, Remote</h4>
    <p>
                          Conducted high-volume outbound calls to promote SIM cards and recharge plans,
                          consistently meeting daily call targets while delivering clear, persuasive communication to customers.
    </p>
                  </VerticalTimelineElement>
                  
                  <VerticalTimelineElement
                      contentStyle={{ background: '#1b5e20', color: '#fff' }}
    className="vertical-timeline-element--work font-extrabold"
    date="May 2019 - Aug 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdWork />}
  >
    <h3 className="vertical-timeline-element-title">Technical Intern at MPFL labs</h3>
    <h4 className="vertical-timeline-element-subtitle">UPES, Dehradun</h4>
    <p>
                          Contributed to academic research by submitting paper to ERCAM 2021, showcasing tools developed 
                          during internship for mechanical engineering students using Python,Scilab and VBA Excel.
    </p>
                  </VerticalTimelineElement>
                  
</VerticalTimeline>
        </div>
          </div>
  )
}

export default WorkExperience