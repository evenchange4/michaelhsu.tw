import styled from 'styled-components';
import cover from '../statics/images/cover.jpg';
import cover2 from '../statics/images/cover2.jpg';

const CoverImage = styled.div`
  height: calc(100vh - 120px);
  background-image: url(${cover2});
  background-color: aliceblue;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: 70%;
  background-position-x: center;
  background-repeat: no-repeat;

  @media (min-width: 1000px) {
    background-image: url(${cover});
    background-size: cover;
    background-position-y: -160px;
  }
`;

CoverImage.displayName = 'CoverImage';

export default CoverImage;
