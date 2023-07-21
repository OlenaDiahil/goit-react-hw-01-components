import Profile from 'components/Profile/Profile'
import React from 'react'
import user from './assets/user'
import Statistics from 'components/Statistics/Statistics'

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics />
    </>
  );
};

export default App;


// rafce