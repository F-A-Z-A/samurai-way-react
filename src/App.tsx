import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

export const App = () => {
  return (
    <div className={"app-wrapper"}>
      <Header/>
      <Navbar/>
      <div className={"app-wrapper-content"}>
        <Route path="/profile"
               render={() => <ProfileContainer/>}  // MyPosts.tsx
        />
        <Route path="/dialogs"
               render={() => <DialogsContainer/>}  // Dialogs.tsx
        />
        <Route path="/users"
               render={() => <UsersContainer/>}
        />
      </div>
    </div>
  );
};