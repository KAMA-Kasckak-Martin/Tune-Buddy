import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FriendPage from "./components/FriendPage";
import LoginPage from "./components/LoginPage";
import useUser from "./hooks/useUser";
import NavigationBar from "./components/NavBar";
import ProfilePage from "./components/ProfilePage";



function App() {

    const {login, logout,register} = useUser();


  return (
    <div className="App">
      <BrowserRouter>
          <NavigationBar logout={logout}/>
        <Routes>
          <Route path={"/home"} element={<FriendPage></FriendPage>}></Route>
          <Route path={"/"} element={<LoginPage login={login} register={register}/>}></Route>
          <Route path={"/profile"} element={<ProfilePage />}></Route>
          <Route path={"/event"} element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
