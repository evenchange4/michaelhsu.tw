import React from 'react';
import ProgressiveImage from './ProgressiveImage';
import cover from '../statics/images/cover.jpg';
import cover_60 from '../statics/images/cover-60.jpg';

const CoverImage = () => (
  <ProgressiveImage src={cover} placeholder={cover_60} />
);

CoverImage.displayName = 'CoverImage';

export default CoverImage;
