import React from 'react';
import './Home.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import home3 from '../Images/home3.jpg';
import PralhadResume from './PralhadResume.pdf';

const Intro = () => {
  const handleDownloadCV = () => {
    window.open(PralhadResume, '_blank');
  };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>hey! I Am</span>
          <span>Pralhad Talmale.</span>
          <span>Frontend Devloper with Hands-on experience
            in web designing and development and <b>excited</b> to be
            a part of your organization.</span>
        </div>
        <a href='' target='_blank'>
          <button className="button i-button" onClick={handleDownloadCV}>
            Hire me
          </button>
        </a>

        <div className="i-icons">
          <a href="https://www.instagram.com" target='_blank'>
            <InstagramIcon sx={{ fontSize: 45 }} />
          </a>

          <a href="https://www.facebook.com" target='_blank'>
            <FacebookIcon sx={{ fontSize: 45 }} />
          </a>

          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/pralhad-talmale-b32109145/"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: 45 }} />
          </a>
          <a href="https://github.com/PralTech" target="_blank" rel="noreferrer">
            <GitHubIcon sx={{ fontSize: 45 }} />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={home3} alt="" />
      </div>
    </div>
  );
};

export default Intro;
