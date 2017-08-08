import React from 'react';
import Envelope from 'react-icons/lib/fa/envelope-square';
import GitHub from 'react-icons/lib/fa/github';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Linkedin from 'react-icons/lib/fa/linkedin-square';
import CoverImage from '../components/CoverImage';
import Body from '../components/Body';
import Avatar from '../components/Avatar';
import Center from '../components/Center';
import A from '../components/A';
import IconWrapper from '../components/IconWrapper';
import PostContainer from '../components/PostContainer';

const App = () =>
  <div>
    <CoverImage />
    <Body>
      <A
        href="https://github.com/evenchange4/michaelhsu.tw"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Avatar />
      </A>

      <Center>
        <h1>
          <A href="/">Michael Hsu</A>
        </h1>
        <h3>
          <b>Front-End Developer</b>
        </h3>
      </Center>
      <p>
        Hi, I am a web developer and love to learn new things about front-end
        technology such as JS, React and functional reactive programming.
        Besides of that, I am interested in researching information retrieval,
        text mining, machine learning, NLP and data mining for big data.
      </p>
      <p>
        I think everyone in the world has the power to share knowledges, so I
        enjoy sharing things on my blog.
      </p>

      <PostContainer />

      <IconWrapper>
        <a
          href="mailto:evenchange4@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Envelope size={24} />
        </a>
        <a
          href="https://github.com/evenchange4"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHub size={24} />
        </a>
        <a
          href="https://twitter.com/evenchange4"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/evenchange4"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin size={24} />
        </a>
        {/* <a
          href="http://old.michaelhsu.tw/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Archive size={24} />
        </a>
        <a
          href="http://about.michaelhsu.tw/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <User size={24} />
        </a> */}
      </IconWrapper>
    </Body>
  </div>;

export default App;
