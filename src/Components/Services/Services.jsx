import React, { useState } from 'react';
import Card from '../Cards/Card';
import './Services.css';
import emoji from '../Images/emoji.jpg';
import emoji2 from '../Images/emoji2.jpg';
import PralhadResume from './PralhadResume.pdf';

const PDFPreview = ({ url }) => (
  <iframe
    title="PDF Preview"
    src={url}
    width="500px"
    height="600px"
    style={{ border: 'none', alignItems : 'center' }}
  />
);

const Services = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleViewCV = (e) => {
    e.preventDefault();
    setShowPreview(!showPreview);
  };

  return (
    <div className='services'>
      {/* left side */}
      <div>
        <div className="awesome">
          <span>My Awesome</span>
          <span>Skills</span>
          <span>
            I am a frontend developer and I have hands-on experience in
            HTML, CSS, JAVASCRIPT, REACT JS, <br />
            REDUX, BOOTSTRAP.
          </span>
          <button
            className='button s-button'
            onClick={handleViewCV}
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
          >
            {showPreview ? (
              <PDFPreview url={PralhadResume} />
            ) : (
              'View CV'
            )}
          </button>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>

      {/* right side  */}
      <div className="s-right">
        <div className="cards">
          <div style={{ left: '20rem' }}>
            <Card
              emoji={emoji}
              heading={'Experience'}
              detail={"Worked in delivery management in deptt. of post and Front-End Developer intern at suvidha Foundation."}
            />
          </div>
          {/* second card  */}
          <div style={{ top: '15 rem', left: '2rem' }}>
            <Card
              emoji={emoji2}
              heading={'Developer'}
              detail={"HTML, CSS, JavaScript, React JS"}
            />
          </div>
          {/* third card  */}
          <div style={{ top: '24rem', left: '10rem' }}>
            <Card
              emoji={emoji}
              heading={'UI/UX'}
              detail={"Learning React JS to get hired by organizations."}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
