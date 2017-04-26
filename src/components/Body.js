import styled from 'styled-components';

const Body = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  background: white;

  @media (min-width: 600px) {
    width: 600px;
  }
`;

Body.displayName = 'Body';

export default Body;
