import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "../footer";
// import NavBar from "./navbar";
import '../../styles/index.css'
import { MainBox, Transition, Root } from "../StyleComponent"
import Home from "../../pages/Home";
import PersonalityTest from "../../pages/PersonalityTest";
import JobCompare from "../../pages/JobCompare";
import SideBar from "./SideBar";


export default function Main() {
  return (
    <Root >
      {/* <NavBar /> */}
      <SideBar />
      <MainBox>
        <Transition>
          <Switch>
            <Route path={`/home`}>
              <Home />
            </Route>
            <Route path={`/personalitytest`}>
              <PersonalityTest />
            </Route>
            <Route path={`/jobcompare`}>
              <JobCompare />
            </Route>
            <Redirect from="/" to={`/home`} />
          </Switch>
          <Footer />
        </Transition>
      </MainBox>
    </Root>
  );
}
