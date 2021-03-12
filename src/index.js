import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter
} from "@mui-treasury/layout";
import { getCozyScheme } from "@mui-treasury/layout/presets";

import NavContentEx from "./components/NavContentEx";
import NavHeaderEx from "./components/NavHeaderEx";
import HeaderEx from "./components/HeaderEx";
import ContentEx from "./components/ContentEx";
import FooterEx from "./components/FooterEx";

import "./styles.css";

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Root scheme={getCozyScheme()}>
        {({ state: { sidebar } }) => (
          <>
            <Header>
              <Toolbar>
                <SidebarTrigger sidebarId="primarySidebar" />
                <HeaderEx />
              </Toolbar>
            </Header>
            <DrawerSidebar sidebarId="primarySidebar">
              <SidebarContent>
                <NavHeaderEx collapsed={sidebar.primarySidebar.collapsed} />
                <NavContentEx />
              </SidebarContent>
              <CollapseBtn />
            </DrawerSidebar>
            <Content>
              <ContentEx />
            </Content>
            <Footer>
              <FooterEx />
            </Footer>
          </>
        )}
      </Root>
    </StylesProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
