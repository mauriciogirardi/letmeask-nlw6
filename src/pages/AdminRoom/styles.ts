import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 2rem;
`;

export const Header = styled.header`
  padding: 1rem 2.5rem;
  border-bottom: 1px solid #e2e2e2;

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

  > img {
    max-height: 2.7rem;
  }

  @media (max-width: 500px) {
    > img {
      max-height: 2.5rem;
    }
  }
`;

export const Main = styled.main`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    width: 9rem;
  }

  @media (max-width: 500px) {
    display: block;
    margin-bottom: 1rem;

    > button {
      width: 100%;
    }
  }
`;

export const TitleRoom = styled.div`
  margin: 2rem 0 1.5rem 0;
  display: flex;
  align-items: center;

  h1 {
    font-family: Poppins, sans-serif;
    font-size: 1.5rem;
  }

  span {
    margin-left: 1rem;
    background-color: var(--pink-dark);
    padding: 0.5rem 1rem;
    color: var(--details);
    border-radius: 9999px;
    font-size: 0.9rem;
  }

  @media (max-width: 500px) {
    justify-content: space-between;

    h1 {
      font-size: 1.1rem;
    }
  }
`;
