import React from 'react';
import './Card.css';
import Announcements from '../Announcements/Announcements';
import WhatsDue from '../WhatsDue/WhatsDue';
const upcoming = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  }];
  
const Card = ({Type}) => {
  let cardType = Type === 'ann' ? <Announcements/> : <WhatsDue upcomingNew={upcoming} />;
  let cardHeader = Type === 'ann' ? "Announcements" : "WhatsDue";
  let caption = Type === 'ann' ? "We educate worriers keep updating" : 'Sometimes "LATER" becomes "NEVER". Go now';
  

  return (
    <div className='card'>
      <div>
         <h2>{cardHeader}</h2>
         <span>{caption}</span>
      </div>
      <div>
        {cardType}
      </div>
    </div>
  );
}

export default Card;
