import React from 'react';
import Footer from './container/Footer';
import Header from "./container/header/Header";
import Logo from './components/logo/Logo';
import Profile from './components/MyPage/Profile/Profile';
import JoinSecession from './contents/JoinSecession';
import Divider from './components/Divider';
import LoginPageContents from './contents/LoginPageContents';
import AccesstionPage from './pages/Login/AccessionPage';
import LoginPage from './pages/Login/LoginPage';
import IdPasswordPage from './pages/Login/IdPasswordPage';
import MemberJoinSecession from './pages/Login/MemberJoinSecession';
import JoinContents from './contents/JoinContents';
import JoinPage from './pages/Login/JoinPage';
import CenterIntro from './pages/CenterIntro';
import { createBrowserRouter, Outlet, Router, RouterProvider } from 'react-router-dom';
import Main from './pages/Main/Main';

import Announcement from './pages/Announcement';

const router = createBrowserRouter([
  {
      path : "/", element : <Main/>,
      children : [
        { path : "/", element : <AccesstionPageContents gridArea={"section"}/>},
        { path : "/community/announcement", element : <Announcement gridArea={"section"}/>}
      ]
  }
])

function App() {+
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
