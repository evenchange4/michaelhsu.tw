import React from 'react';
import styled from 'styled-components';
import ProgressiveImage from './ProgressiveImage';
import cover from '../statics/images/cover.jpg';
import cover_60 from '../statics/images/cover-60.jpg';
import cover2 from '../statics/images/cover2.jpg';
import cover2_60 from '../statics/images/cover2-60.jpg';

const CoverImage = () =>
  <ProgressiveImage
    src={cover}
    placeholder={cover_60}
  />

CoverImage.displayName = 'CoverImage';

export default CoverImage;
