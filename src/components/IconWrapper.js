import styled from 'styled-components';

const IconWrapper = styled.div`
  text-align: center;
  margin-bottom: 15px;

  a {
    cursor: pointer;
  }

  a + a {
    margin-left: 15px;
  }

  svg {
    color: white;
    stroke: #999a94;
  }
`;

IconWrapper.displayName = 'IconWrapper';

export default IconWrapper;
