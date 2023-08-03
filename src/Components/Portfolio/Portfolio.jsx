// import React from 'react';
// import './Portfolio.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Pagination, Navigation } from 'swiper';
// import 'swiper/swiper.min.css';
// import ishu from '../Images/ishu.png';
// import ishanvi from '../Images/ishanvi.jpg';

// SwiperCore.use([Pagination, Navigation]);

// SwiperCore.use([Pagination, Navigation]);

// const Portfolio = () => {
//   return (
//     <div className='portfolio'>
//       <span>Client`s Images</span>
//       <span>Portfolio</span>

//       {/* swiper */}
//       <Swiper
//         spaceBetween={1}
//         slidesPerView={3}
//         grabCursor={true}
//         className="portfolio-slider"
//         pagination={{ clickable: true }}
//         navigation
//       >
//         <SwiperSlide style={{marginTop:"12rem"}}>
//           <img src={ishu} alt="" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={ishanvi} alt="" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={ishu} alt="" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={ishanvi} alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Portfolio;




import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import ishu from '../Images/ishu.png';
import ishanvi from '../Images/ishanvi.jpg';
import ClientCard from './ClientCard'; 

SwiperCore.use([Pagination, Navigation]);
SwiperCore.use([Pagination, Navigation]);


const clients = [
  {
    img: ishu,
    name: 'John Doe',
    designation: 'Web Developer',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: ishanvi,
    name: 'Jane Smith',
    designation: 'UI/UX Designer',
    review: 'Nulla facilisi. Mauris tempus sem non nibh tincidunt, eu pellentesque nunc vulputate.',
  },
  {
    img: ishu,
    name: 'Peter Parker',
    designation: 'Frontend Developer',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: ishanvi,
    name: 'Mary Johnson',
    designation: 'Graphic Designer',
    review: 'Nulla facilisi. Mauris tempus sem non nibh tincidunt, eu pellentesque nunc vulputate.',
  },
  {
    img: ishu,
    name: 'Jack Smith',
    designation: 'Software Engineer',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: ishanvi,
    name: 'Emily Johnson',
    designation: 'UI/UX Designer',
    review: 'Nulla facilisi. Mauris tempus sem non nibh tincidunt, eu pellentesque nunc vulputate.',
  },
  {
    img: ishu,
    name: 'John Wick',
    designation: 'Web Developer',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: ishanvi,
    name: 'Alice Smith',
    designation: 'UI/UX Designer',
    review: 'Nulla facilisi. Mauris tempus sem non nibh tincidunt, eu pellentesque nunc vulputate.',
  },
];


const Portfolio = () => {
  return (
    <div className='portfolio'>
      <span>Client`s Images</span>
      <span>Portfolio</span>

      {/* swiper */}
      <Swiper
        spaceBetween={1}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        pagination={{ clickable: true }}
        navigation
       
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <ClientCard className = "client-card"
              image={client.img}
              name={client.name}
              designation={client.designation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
