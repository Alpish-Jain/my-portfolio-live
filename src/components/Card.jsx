import React from 'react'
import omnistudioDev from "../assets/certificationLogos/omnistudioDev.png";

const Card = ({ src, Title, issuer, issueDate, credentialId, link }) => {
    return (
        <div className="w-50 h-50 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
            
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-xl flex flex-col items-center justify-center ">
              <img src={src} alt="image" className="object-fill" />
            </div>
    
            {/* Back Side */}
                <div className="absolute w-full h-full overflow-y-auto backface-hidden [transform:rotateY(180deg)] font-serif bg-white text-black rounded-xl shadow-xl flex flex-col items-start justify-between p-6">
                <p className="text-center text-sm font-bold">{Title}</p>
                    <p className="text-center text-sm">Issued by: {issuer}</p>
                    <p className="text-center text-sm">Issued Date: {issueDate}</p>
                    <p className="text-center text-sm">Cred Id: {credentialId}</p>
                    <p className="text-center text-sm">
                        <a className='underline text-blue-500 
                        decoration-dotted underline-offset-2 decoration-1 hover:text-blue-700 900px:text-xs mt-1'
                            href={link}
                            target='_blank'
                        >
                            Show Credential</a>
                    </p>
            </div>
          </div>
        </div>
      );
}

export default Card