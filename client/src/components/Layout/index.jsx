import React from "react";
import styled from "styled-components";

import NavBar from "../navBar";
import Footer from "../footer";

const Main = styled.main`
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
`;

const Content = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

export default function Layout({ title = "", bgPic, children }) {
  return (
    <>
      <NavBar />
      <Main className={`background ${bgPic}`}>
        <div>
          <Content>
            <h1 className="title">{title}</h1>
            {children}
          </Content>
        </div>
      </Main>
      <Footer />
    </>
  );
}
