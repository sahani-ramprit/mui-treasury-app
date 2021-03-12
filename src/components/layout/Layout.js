import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
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

import NavContentEx from "../NavContentEx";
import NavHeaderEx from "../NavHeaderEx";
import HeaderEx from "../HeaderEx";
import FooterEx from "../FooterEx";
import PageWrapper from "../PageWrapper";

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const styles = ({ breakpoints }) => ({
  root: {
    [breakpoints.up("sm")]: {
      marginLeft: "156px"
    },
    [breakpoints.up("md")]: {
      marginLeft: "256px"
    }
  }
});

function Layout({ children, classes }) {
  return (
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
          <Content className={classes.root}>
            <PageWrapper>{children}</PageWrapper>
          </Content>
          <Footer>
            <FooterEx />
          </Footer>
        </>
      )}
    </Root>
  );
}

export default withStyles(styles)(Layout);
