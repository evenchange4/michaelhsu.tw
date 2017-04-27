import React from 'react';
import CoverImage from '../components/CoverImage';
import Body from '../components/Body';
import Avatar from '../components/Avatar';
import Center from '../components/Center';
import A from '../components/A';
import ButtonWrapper from '../components/ButtonWrapper';
import IconWrapper from '../components/IconWrapper';
import github from '../statics/images/socials/github.svg';
import twitter from '../statics/images/socials/twitter.svg';
import blog from '../statics/images/socials/blog.svg';
import linkedin from '../statics/images/socials/linkedin.svg';
import email from '../statics/images/socials/email.svg';
import michael from '../statics/images/michael.jpeg';

const App = () => (
  <div>
    <CoverImage />
    <Body>
      <Avatar />
      <Center>
        <h1><A href="/">Michael Hsu</A></h1>
        <h3><b>Front-End Developer</b></h3>
      </Center>
      <p>
        Hi, I am a web developer and love to learn new things about front-end
        technology such as JS, React and functional reactive programming.
        Besides of that, I am interested in researching information retrieval,
        text mining, machine learning, NLP and data mining for big data.
      </p>
      <p>
        I think everyone in the world has the power to share knowledges,
        so I enjoy sharing things on my blog.
      </p>

      <ButtonWrapper>
        <A href="https://medium.com/@evenchange4/latest">Medium Stories</A>
        <A href="https://github.com/evenchange4/michaelhsu.tw">Source Code</A>
      </ButtonWrapper>

      <IconWrapper>
        <a href="mailto:evenchange4@gmail.com">
          <img src={email} alt="email"/>
        </a>
        <a href="https://github.com/evenchange4">
          <img src={github} alt="github"/>
        </a>
        <a href="https://twitter.com/evenchange4">
          <img src={twitter} alt="twitter"/>
        </a>
        <a href="https://www.linkedin.com/in/evenchange4">
          <img src={linkedin} alt="linkedin"/>
        </a>
        <a href="http://old.michaelhsu.tw/">
          <img src={blog} alt="blog"/>
        </a>
        <a href="http://about.michaelhsu.tw/">
          <img src={michael} alt="About me"/>
        </a>
      </IconWrapper>
    </Body>
  </div>
);

export default App;
