import React from 'react'
import './Work.css';
import {motion} from 'framer-motion'
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Work = () => {
  return (
    <div className='works'>
         <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & clients</span>
                <span>I have worked in department of post (GOI).
                I worked as outsider for <b>3 year 2 months</b>   for delivery <br />
                management using SAP software.
                </span>

                <a href="https://www.linkedin.com/in/pralhad-talmale-b32109145/" target="_blank" rel="noopener noreferrer">
                    <button className='button s-button'>
                        Hire me
                    </button>
                </a>

            </div>

            {/* right side  */}

            <div className="w-right">
           
                <motion.div
                initial={{rotate:360}}
                whileInView={{rotate: 0}}
                viewport ={{margin:'-40px'}}
                transition ={{duration: 6, type:"spring"}}
                 className="w-mainCircle">
                    <div className="w-secCircle">
                        <YouTubeIcon sx={{ fontSize: 50 }}  />
                    </div>

                    <div className="w-secCircle">
                        <WhatsAppIcon sx={{ fontSize: 50 }} />
                    </div>

                    <div className="w-secCircle">
                        <InstagramIcon  sx={{ fontSize: 50 }} />
                    </div>
                    <div className="w-secCircle">
                        <EmailIcon sx={{ fontSize: 50 }} />
                    </div>
                    <div className="w-secCircle">
                        <LinkedInIcon sx={{ fontSize: 50 }} />
                    </div>
                </motion.div>
                {/* backgrount circle  */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
    </div>
  )
}

export default Work