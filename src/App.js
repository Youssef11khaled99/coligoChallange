import React from 'react';
// import {upcoming} from './upcoming';
import './App.css';
import SideNav from './components/SideNav/SideNav';
import ExamBanner from './components/Exam Banner/ExamBanner';
import NavBar from './components/NavBar/NavBar'
import Announcements from './components/Announcements/Announcements';
import WhatsDue from './components/WhatsDue/WhatsDue';
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
function App() {
  return (
    <div className="App">
      <SideNav />
      <div>
        <NavBar />
        <div>
          <ExamBanner />
          <div className="partitionTwo">
            <Announcements />
            <WhatsDue upcomingNew={upcoming} />
          </div>
        </div>     
      </div>
      
      {/* <UpcomingList upcomingNew = {upcoming}/> */}
    </div>
  );
}

export default App;
