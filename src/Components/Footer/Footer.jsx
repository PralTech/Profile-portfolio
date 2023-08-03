// import React from 'react'
// import './Footer.css'
// import Insta from '@iconscout/react-unicons/icons/uil-instagram'
// import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
// import Github from '@iconscout/react-unicons/icons/uil-github'
// import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

// const Footer = () => {
//   return (
//     <div className="footer">
//         <div className="f-content">
//             <span>pralhadtalmale@gmail.com</span>
//             <div className="f-icons">
//                 <Insta width="3rem"/>
//                 <Facebook width="3rem"/>
//                 <Github width="3rem"/>
//                 <Linkedin width="3rem"/>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer



///chatGpt


import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
    <div className="footer">
        <div className="f-content">
            <span className='email'>pralhadtalmale@gmail.com</span>
            <div className="f-icons">
                {/* Instagram */}
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <Insta width="3rem" />
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook width="3rem" />
                </a>
                {/* GitHub */}
                <a href="https://github.com/PralTech" target="_blank" rel="noopener noreferrer">
                  <Github width="3rem" />
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/pralhad-talmale-b32109145/" target="_blank" rel="noopener noreferrer">
                  <Linkedin width="3rem" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
