import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  padding-bottom: 2rem;
  background-color: ${props => props.theme?.colors.background};
  color: ${props => props.theme?.colors.title};
  min-height: 100%;
`;

export const Main = styled.main`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  animation: ${animate} 0.8s;
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
    background-color: ${props => props.theme?.colors.pinkDark};
    padding: 0.5rem 1rem;
    color: ${props => props.theme?.colors.details};
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

export const MainContentModal = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: Poppins, sans-serif;
    margin: 1rem 0;
  }

  p {
    color: ${props => props.theme?.colors.grayMedium};
    margin-bottom: 1.5rem;
  }

  button {
    width: 9rem;

    & + button {
      margin-left: 0.5rem;
    }
  }
`;
