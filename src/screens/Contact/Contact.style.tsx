import styled from 'styled-components';
import { COLORS } from 'enums';

export const Wrapper = styled.div`
  background-color: white;
  min-height: calc(100vh - 64px);
`;

export const Content = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 1rem 0 3rem;

  ul li p {
    margin-bottom: 0;
  }

  ul {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 932px) {
    padding: 1rem;
  }
`;

export const Header = styled.div`
  background-color: ${COLORS.LIGHTGRAY};
`;

export const TextContent = styled.div`
  max-width: 600px;
`;
