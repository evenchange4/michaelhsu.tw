import styled from 'styled-components';

const IconWrapper = styled.div`
  text-align: center;
  margin-bottom: 15px;

  a {
    cursor: pointer;
  }

  img {
    width: 30px;
    border-radius: 3px;
  }

  a + a {
    margin-left: 15px;
  }
`;

IconWrapper.displayName = 'IconWrapper';

export default IconWrapper;
