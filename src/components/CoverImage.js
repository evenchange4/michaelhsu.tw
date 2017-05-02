import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import ProgressiveImage from 'react-progressive-bg-image';
import landscapeX60 from '../statics/images/landscapeX60.jpg';
import landscape from '../statics/images/landscape.jpg';
import portraitX60 from '../statics/images/portraitX60.jpg';
import portrait from '../statics/images/portrait.jpg';

/**
 * matchMedia polyfill
 * set default value to true
 * ref: https://github.com/WickyNilliams/enquire.js/issues/82#issuecomment-26990494
 * @author Michael Hsu
 */
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: true,
      addListener: function() {},
      removeListener: function() {},
    };
  };

const StyledProgressiveImage = styled(ProgressiveImage)`
  height: calc(100vh - 120px);
  background-color: aliceblue;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: 70%;
  background-position-x: center;
  overflow: hidden;
`;

const CoverImage = () => (
  <Media query={{ minWidth: 1000 }}>
    {matches => (
      <StyledProgressiveImage
        src={matches ? portrait : landscape}
        placeholder={matches ? portraitX60 : landscapeX60}
      />
    )}
  </Media>
);

CoverImage.displayName = 'CoverImage';

export default CoverImage;
