import styled from 'styled-components';

const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;

  a {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    height: 40px;
    text-decoration: underline;
    padding: 0 8px;
  }

  a + a {
    margin-left: 15px;
  }
`;

ButtonWrapper.displayName = 'ButtonWrapper';

export default ButtonWrapper;
