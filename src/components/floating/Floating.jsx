// import React from 'react'
// import './floating.css'
// const Floating = ({image, text}) => {
//   return (
//     <div className='floatingdiv'>
//      <img src={image} alt="" />
//      <span>
//        <small> {text}</small>
//      </span>
//         </div>
//   )
// }
// export default Floating


import React, { useState } from 'react';
import './floating.css'; // Import your CSS file for styling
import Content from '../../assets/images/content-creator.png'
import Coding from '../../assets/images/app-development.png'
import Developer from '../../assets/images/app-development.png'
function Floating() {
  const [isFloating, setIsFloating] = useState(false);

  const toggleFloating = () => {
    setIsFloating(!isFloating);
  };

  return (
    <div className={`floating-container ${isFloating ? 'floating' : ''}`}>
      <div className="floating-div web-development">
        <img src={Coding} alt="Web Development" />
        <small>Web Development</small>
      </div>
      <div className="floating-div content-creation">
        <img src={Developer} alt="Content Creation" />
        <small>Content Creation</small>
      </div>
      <div className="floating-div ux-design">
        <img src={Developer} alt="UX Design" />
        <small>UX  Design</small>
      </div>
      <div className="floating-div backend-development">
        <img src={Content} alt="Backend Development" />
        <small>Backend Development</small>
      </div>
    </div>
  );
}

export default Floating;
