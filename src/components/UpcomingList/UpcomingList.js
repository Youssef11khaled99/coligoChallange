import React from 'react';
import Card from '../Card/Card';
import './UpcomingList.css';

const UpcomingList = ({ upcomingNew }) => {
    return (

      <div className="zone blue grid-wrapper">
      {
        upcomingNew.map((element, i) => {
          return (
            <Card
              key={i}
              />
          );
        })
      }
      </div>
    );
}

export default UpcomingList;