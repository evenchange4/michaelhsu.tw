import React, { Component } from 'react';
import styled from 'styled-components';
import cover from './statics/images/cover.jpg';
import cover2 from './statics/images/cover2.jpg';
import michael from './statics/images/michael.jpeg';
import github from './statics/images/socials/github.svg';
import twitter from './statics/images/socials/twitter.svg';
import blog from './statics/images/socials/blog.svg';
import linkedin from './statics/images/socials/linkedin.svg';
import email from './statics/images/socials/email.svg';

const Header = styled.div`
  height: calc(100vh - 120px);
  ${''/* height: 200px; */}
  background-image: url(${cover2});
  background-color: skyblue;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: 70%;
  background-position-x: center;

  @media (min-width: 800px) {
    background-image: url(${cover});
    background-size: contain;
    background-position-y: 0;
    background-repeat: repeat-x;
  }
`;

const Avatar = styled.div`
  background-image: url(${michael});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 100px;
  width: 100px;
  position: relative;
  top: -50px;
  margin-bottom: -50px;
  border: 2px solid white;
  border-radius: 50px;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.35);
`;

const Center = styled.div`
  text-align: center;
`;

const Body = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  background: white;

  @media (min-width: 600px) {
    width: 600px;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: black;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;

  a {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    height: 40px;
    ${''/* background-color: silver; */}
    text-decoration: underline;
    ${''/* color: white; */}
    padding: 0 8px;
  }

  a + a {
    margin-left: 15px;
  }
`;

const IconWrapper = styled.div`
  text-align: center;

  a {
    cursor: pointer;
  }

  img {
    width: 30px;
  }

  a + a {
    margin-left: 15px;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Body>
          <Avatar />
          <Center>
            <h1>
              <A href="/">Michael Hsu</A>
            </h1>

            <h3>
              <b>
                Front-End Developer
              </b>
            </h3>
          </Center>
          <p>
          Michael is a master student of BAEIR Lab at National Taiwan University. His research interests include Information Retrieval, Data / Text / Web Mining, Machine Learning, Natural Language Processing and Data Mining for BigData. He is also a programmer, a web developer.

          He loves to take participate in technology conference occasionally to keep learning new things. Michael thinks the world where everyone has the power to share knowledge, so he got involved with trying to keep everything in his blog.
          </p>

          <ButtonWrapper>
            <A href="/">
              Blog
            </A>
            <A href="/">
              About me
            </A>
          </ButtonWrapper>

          <IconWrapper>
            <a href="/">
              <img src={email} alt="email"/>
            </a>
            <a href="/">
              <img src={github} alt="github"/>
            </a>
            <a href="/">
              <img src={twitter} alt="twitter"/>
            </a>
            <a href="/">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <a href="/">
              <img src={blog} alt="blog"/>
            </a>

          </IconWrapper>
        </Body>
      </div>
    );
  }
}

export default App;
