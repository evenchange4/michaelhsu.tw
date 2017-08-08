import R from 'ramda';

const MICRO_MIDIUM_API_CORS = 'https://micro-medium-api.now.sh';
const MICRO_MIDIUM_API_ORIGIN = 'https://micro-medium-api-michaelhsutw.now.sh';

const getFetchURL = R.pipe(
  R.path(['location', 'hostname']),
  R.cond([
    [R.test(/michaelhsu\.tw/), R.always(MICRO_MIDIUM_API_ORIGIN)],
    [R.T, R.always(MICRO_MIDIUM_API_CORS)],
  ]),
  R.concat(R.__, '/@evenchange4/posts?limit=100&type=simple'), // eslint-disable-line
);

export default getFetchURL;
