import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { componentFromStream } from 'recompose';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/startWith';

import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/delay';

import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

function loadImage(src) {
	return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
		image.onload = () => resolve(src);
    image.onerror = err => reject(err);
	});
}

const Img = styled.div`
  height: calc(100vh - 120px);
  background-image: url(${props => props.src});
  background-color: aliceblue;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: 70%;
  background-position-x: center;
  background-repeat: no-repeat;
  opacity: ${props => props.isLoaded ? 1 : 0.5};
  transition: opacity 0.5s linear;

  filter: ${props => props.isLoaded ? 'none' : 'blur(50px)'};
  /* this is needed so Safari keeps sharp edges */
  transform: ${props => props.isLoaded ? 'none' : 'scale(1)'};
  overflow: hidden;
`;

const DELAY = 200;

const ProgressiveImage = componentFromStream(propStream => {
  const props$ = Observable.from(propStream);
  const placeholder$ = props$.pluck('placeholder');
  const src$ = props$
    .pluck('src')
    .switchMap(loadImage)
    .startWith('');

  const isLoaded$ = src$
    .filter(src => !!src)
    .switchMapTo(Observable.of(true).delay(DELAY))
    .startWith(false);

  const image$ = placeholder$
    .merge(src$);

  return props$.combineLatest(
    image$, isLoaded$,
    ({ placeholder, ...otherProps }, src, isLoaded) => (
      <Img src={src} isLoaded={isLoaded} />
    ),
  );
});

ProgressiveImage.displayName = 'ProgressiveImage';
ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default ProgressiveImage;
