import './App.css'
import Card2 from './components/Card2/Card2'
// import Header from './components/Header'
// import Card2 from './components/Card2/Card2'
import img1 from "./assets/CardImage/1.jpg";

import TopButton from './components/Button/TopButton';

import Button from './components/Button/Button';
import UserProfile from './components/MyPage/Profile/UserProfile';
import AdminProfile from './components/MyPage/Profile/AdminProfile';

function App() {


  return (
    <>
      <Card2 imageFile={img1}></Card2>

      {/* <Header></Header> */}
      {/* <Button></Button> */}
    </>
  )
}

export default App
