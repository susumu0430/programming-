import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './components/login/Login';
import { useAppDispatct, useAppSelector } from './app/hooks';
import { auth } from './firebase';
import { login } from './features/userSlice';


function App() {

  const user = useAppSelector((state) => state.user);
  // const user = null

  const dispatch =useAppDispatct()

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser)
      if(loginUser) {
        dispatch(login({
          uid: loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName,
        }))
      } else {
        // dispatch()
      }
    })
  },[dispatch])
  return (
    <div className="App">
      {user ? (
        <>
        { /* sidebar */}
       <Sidebar />
      {/* chat */}
      <Chat />
        </>
      ): (
      <>
      <Login/>
      </>
      )}
      
    </div>
  );
}

export default App;
