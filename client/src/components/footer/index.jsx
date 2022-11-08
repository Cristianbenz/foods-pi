import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 10vh;
  background: rgb(255,230,203);
  background: linear-gradient(0deg, rgba(255,230,203,1) 0%, rgba(255,230,203,0.8743872549019608) 35%, rgba(255,230,203,0.21332282913165268) 100%);
`

const Content = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`

export default function Footer() {
  return (
    <FooterContainer>
      <Content>
        <span>Made by Cbenz 2022</span>
      </Content>
    </FooterContainer>
  )
}