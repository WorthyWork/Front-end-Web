import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../../styles/index.css";
import { MainBox, Transition, Root } from "../StyleComponent";
import Home from "../../pages/Home";
import PersonalityTest from "../../pages/PersonalityTest";
import JobCompare from "../../pages/JobCompare";
import SideBar from "./SideBar";
import LoadingOverlay from "react-loading-overlay";
import variables from "../../styles/variables";
import { alpha } from "@mui/material/styles";
import { useSelector } from "react-redux";

export default function Main() {
  LoadingOverlay.propTypes = undefined;
  const loading = useSelector((state) => state.loading);
  return (
    <Root>
      <LoadingOverlay
        styles={{
          position: "fixed",
          zIndex: "999",
          overlay: (base) => ({
            // loading時的底色
            ...base,
            background: alpha(variables.Darkgrey, 0.3),
          }),
          spinner: (base) => ({
            ...base,
            width: "100px",
            "& svg circle": {
              stroke: variables.Green,
              strokeWidth: "3",
            },
          }),
          content: (base) => ({
            ...base,
            margin: "auto",
            position: "fixed",
            left: "45%",
            top: "40%",
          }),
        }}
        spinner
        active={loading}
      >
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
          </Transition>
        </MainBox>
      </LoadingOverlay>
    </Root>
  );
}
