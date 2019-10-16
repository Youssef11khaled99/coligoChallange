import React from 'react';
import './ExamBanner.css';

const ExamBannar = () => {
  return (
    <div className="examBanner"> {/*className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'*/}
      <div>
        <h1> EXAMS TIME </h1>
        <p>Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams.</p>
        <q>"Nothing happens until something moves" - Albert Einstein</q> <br />
        <button className="button"> View exams tips</button>
    
      </div>   
      <div> 
        <img src={ require('./undraw.png') } alt="Computer Picture" />
      </div>
    </div>
  );
}

export default ExamBanner;
