import React from 'react';
import './WhatsDue.css';
import { CLIENT_RENEG_LIMIT } from 'tls';

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

function getValues(items) {
  let arr = [];
  for (let i in items) {
    console.log(items[i]["name"]);
    arr.push("<p>"+ items[i]["name"]+"</p>")
  }
  return arr;
}

const WhatsDue = ({ upcomingNew }) => {
  
  return (
    <div className="zone blue grid-wrapper">
      <p>WhatsDue</p>
      {
        upcoming.map((value) => {
          console.log(value["name"]);
          return <p>{value["email"]}</p>
        })
      }
    </div>
  );
}

export default WhatsDue;