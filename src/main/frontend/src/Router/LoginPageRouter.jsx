import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPageContents from "../contents/LoginPageContents";
import AccesstionPage from "../pages/AccessionPage";

function LoginPageRouter(){
    return(
        <>
         
    <Router>
      <Routes>
    
         <Route path="/accesstion" element={<AccesstionPage />} />
    
      </Routes>
      
    </Router>
    
    
    <LoginPageContents  text="로그인"/>
        </>
    )
}

export default LoginPageRouter;