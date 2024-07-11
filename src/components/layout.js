import React from 'react';
import styled from 'styled-components';

import { FaHeart } from "react-icons/fa6";

import Header from './header';
import { Main } from './style';

const Layout = (props) => {
  const { children } = props;

  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer>
        © {new Date().getFullYear()}, Built with
        <HeartWrapper>
          <FaHeart />
        </HeartWrapper> {' '} by {' '}
        <a href="https://avinashrijal.com.np/">Avinash Rijal</a>
        <br />Powered by
        {' '}
        <a target="_blank" href="https://www.gatsbyjs.org" rel="noreferrer">Gatsby</a>
        {' '}
        &
        {' '}
        <a target="_blank" href="https://www.netlify.com" rel="noreferrer">Netlify</a>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  padding-bottom: 42px;
`;

const HeartWrapper = styled.span`
  margin: 0 10px;
  color: var(--first-color);
`

export default Layout;
