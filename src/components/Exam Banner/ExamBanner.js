import React from 'react';
import './ExamBanner.css';
import Button from '../Button/Button';

const ExamBanner = () => {
  return (
    <div className="examBanner"> {/*className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'*/}
      <div>
        <h1> EXAMS TIME </h1>
        <p>Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams.</p>
        <q>"Nothing happens until something moves" - Albert Einstein</q> <br />
        <Button Content="View Exams Tips"/>
    
      </div>   
      <div> 
        <img src={ require('./undraw.png') } alt="Computer" />
      </div>
    </div>
  );
}

export default ExamBanner;
