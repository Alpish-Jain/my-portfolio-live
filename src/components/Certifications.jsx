import Card from './Card';
import adminLogo from '../assets/certificationLogos/adminLogo.png';
import AIAssociateLogo from '../assets/certificationLogos/AIAssociateLogo.png';
import appBuilderLogo from '../assets/certificationLogos/appBuilderLogo.png';
import experienceCloudLogo from '../assets/certificationLogos/experienceCloudLogo.png';
import fscLogo from '../assets/certificationLogos/fscLogo.png';
import jd1Logo from '../assets/certificationLogos/jd1Logo.png';
import omnistudioDev from '../assets/certificationLogos/omnistudioDev.png';
import pd1Logo from '../assets/certificationLogos/pd1Logo.png';
import salesCloudLogo from '../assets/certificationLogos/salesCloudLogo.png';
import serviceCloudLogo from '../assets/certificationLogos/serviceCloudLogo.png';
import sfAssociate from '../assets/certificationLogos/sfAssociate.png';
import courseraLogo from '../assets/certificationLogos/courseraLogo.png';

const Certifications = () => {
    const certs = [
        {
            src:adminLogo,
            Title:"Salesforce Certified Admin",
            issuer:"Salesforce",
            issueDate:"Jan 2023",
            credentialId:"2842315",
            link:"https://drive.google.com/file/d/1exo4hfw55ea2G-J8TpZsl-cMNaScMdJU/view?usp=drive_link"
        },
        {
            src:appBuilderLogo,
            Title:"Salesforce Certified App Builder",
            issuer:"Salesforce",
            issueDate:"May 2023",
            credentialId:"3391629",
            link:"https://drive.google.com/file/d/1jWUb-meEa2UiUrCtLj1uJqWv71-sL4kA/view?usp=drive_link"
        },
        {
            src:experienceCloudLogo,
            Title:"Salesforce Certified Experience Cloud Consultant",
            issuer:"Salesforce",
            issueDate:"Dec 2024",
            credentialId:"5434650",
            link:"https://drive.google.com/file/d/13SinWNtetgrubl8_4pBn_ivWHuwQ-2Da/view?usp=drive_link"
        },
        {
            src:jd1Logo,
            Title:"Salesforce Certified Javascript Developer",
            issuer:"Salesforce",
            issueDate:"jul 2024",
            credentialId:"4675225",
            link:"https://drive.google.com/file/d/1KAVI01XbkVvBlPs0WtEuoRz8YflDjqli/view?usp=drive_link"
        },
        {
            src:omnistudioDev,
            Title:"Salesforce Certified Omnistudio Developer",
            issuer:"Salesforce",
            issueDate:"Mar 2024",
            credentialId:"4246136",
            link:"https://drive.google.com/file/d/1bZmLsIjIO3ilsMN-OZcOmeAW7SU5bt8M/view?usp=drive_link"
        },
        {
            src:pd1Logo,
            Title:"Salesforce Certified Platform Developer-1",
            issuer:"Salesforce",
            issueDate:"Nov 2023",
            credentialId:"3781962",
            link:"https://drive.google.com/file/d/1TzbIoGR6mKnZGppoksF8fb4KtMOuIPQE/view?usp=drive_link"
        },
        {
            src:salesCloudLogo,
            Title:"Salesforce Certified Sales Cloud Consultant",
            issuer:"Salesforce",
            issueDate:"Oct 2024",
            credentialId:"5116530",
            link:"https://drive.google.com/file/d/1sfjiRkzftKsdMUjQ_Zh70yaMkzh6F8rt/view?usp=drive_link"
        },
        {
            src:serviceCloudLogo,
            Title:"Salesforce Certified Service Cloud Consultant",
            issuer:"Salesforce",
            issueDate:"Nov 2024",
            credentialId:"5335221",
            link:"https://drive.google.com/file/d/1SFn5WoNaRda_reGG-bmqj8IIBxYKs4uf/view?usp=drive_link"
        },
        {
            src:fscLogo,
            Title:"Salesforce Accredited Financial Services Cloud Consultant",
            issuer:"Salesforce",
            issueDate:"May 2025",
            credentialId:"-",
            link:"https://drive.google.com/file/d/1-XrK2cmpVrfv697Rs3k94nYIW_3KJckd/view?usp=drive_link"
        },
        {
            src:sfAssociate,
            Title:"Salesforce Certified Associate",
            issuer:"Salesforce",
            issueDate:"Feb 2024",
            credentialId:"4107879",
            link:"https://drive.google.com/file/d/1gV_aw1vxwWpst2zXBMZgJLhIzYdOoIiG/view?usp=drive_link"
        },
        {
            src:AIAssociateLogo,
            Title:"Salesforce Certified AI Associate",
            issuer:"Salesforce",
            issueDate:"Mar 2024",
            credentialId:"4173698",
            link:"https://drive.google.com/file/d/1y2eX5kAsCPZNqeM-Ndl_wx_dMxuBMtjh/view?usp=drive_link"
        },
        {
            src:courseraLogo,
            Title: "Object Oriented Programming in Java",
            issuer: "Coursera",
            issueDate: "Apr 2020",
            credentialId: "G2MD8DHEYS96",
            link: "https://coursera.org/verify/G2MD8DHEYS96"
        },
        {
            src:courseraLogo,
            Title: "Deep Learning Specialization",
            issuer: "DeepLearning.AI (via Coursera)",
            issueDate: "May 2020",
            credentialId: "FUBGHVXYP96N",
            link: "https://coursera.org/verify/specialization/FUBGHVXYP96N"
        },
        {
            src:courseraLogo,
            Title: "Image Data Augmentation with Keras",
            issuer: "Coursera (Guided Project)",
            issueDate: "May 2020",
            credentialId: "KQW3YRC3NDRZ",
            link: "https://coursera.org/verify/KQW3YRC3NDRZ"
        },
        {
            src:courseraLogo,
            Title: "Social Services for Families, Seniors & People with Disabilities",
            issuer: "Columbia University (via Coursera)",
            issueDate: "May 2020",
            credentialId: "5HSAYXNBHVSV",
            link: "https://coursera.org/verify/5HSAYXNBHVSV"
        },
        {
            src:courseraLogo,
            Title: "Innovation & Entrepreneurship – From Basics to Open Innovation",
            issuer: "EIT Digital (via Coursera)",
            issueDate: "Oct 2020",
            credentialId: "6XH6FS3F5352",
            link: "https://coursera.org/verify/6XH6FS3F5352"
        },
    ]
  return (
      <div name='certifications' className='w-full min-h-screen 
    bg-gradient-to-b from-black to-gray-800
     text-white md:pt-2'>
           <div className='max-w-screen-lg p-4 mx-auto flex flex-col
              justify-center w-full h-full'>
        <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                      Certifications
                  </p>
                  <p className="py-6">Recognized credentials earned across cloud, development, and architecture, showcasing my commitment to continuous learning and industry best practices.</p>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center'>
                  {certs.map(({ src, Title, issuer, issueDate, credentialId, link }) => (
                      <div key={Title}>
                          <Card src={src}
                              Title={Title}
                              issuer={issuer}
                              issueDate={issueDate}
                              credentialId={credentialId}
                              link={link} />
                      </div>
                      
                  ))}
                </div>
              </div>
      </div>
  )
}

export default Certifications