import React from 'react';
import SignIn from './components/SignIn/SignIn';
// import {upcoming} from './upcoming';
import './App.css';
import SideNav from './components/SideNav/SideNav';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar'
import Announcements from './components/Announcements/Announcements';
import UpcomingList from './components/UpcomingList/UpcomingList';
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
          <Hero />
          <div className="partitionTwo">
            <Announcements />
            <UpcomingList upcomingNew={upcoming} />
          </div>
        </div>     
      </div>
      
      {/* <UpcomingList upcomingNew = {upcoming}/> */}
    </div>
  );
}

export default App;
