import styled from 'styled-components';

export const Header = styled.header`
  padding: 1rem 2.5rem;
  border-bottom: 1px solid #a8a8b3;
  position: relative;

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  > img {
    max-height: 2.7rem;
  }

  @media (max-width: 500px) {
    > img {
      display: none;
    }

    > div {
      width: 100%;
      gap: none;
      justify-content: space-between;
    }
  }
`;

export const Toggle = styled.div``;
