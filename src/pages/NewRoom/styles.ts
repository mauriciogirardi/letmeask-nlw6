import styled, { keyframes } from 'styled-components';

type FormProps = {
  isFilled?: boolean;
};

const animate = keyframes`
  0% {
    transform: translateY(50px);
    opacity:0;
  }
  100% {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.aside`
  flex: 5;
  background-color: ${props => props.theme?.colors.purple};
  color: ${props => props.theme?.colors.details};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  align-items: center;

  > img {
    max-width: 400px;
  }

  strong {
    font: 700 2.3rem 'Popping', sans-serif;
    line-height: 2.6rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Main = styled.main`
  flex: 8;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    z-index: 1000;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 324px;
  width: 100%;
  text-align: center;
  animation: ${animate} linear 0.6s;

  > img {
    align-self: center;
  }

  > button {
    margin-top: 4rem;
    border-radius: 0.5rem;
    border: 0;
    height: 3.1rem;
    font-weight: 500;
    background-color: ${props => props.theme?.colors.red};
    color: ${props => props.theme?.colors.details};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 0.5rem;
    }
  }
`;

export const Title = styled.h3`
  font-family: Poppins, sans-serif;
  font-size: 1.5rem;
  margin: 3rem 0 1.5rem 0;
`;

export const Form = styled.form<FormProps>`
  input {
    height: 3rem;
    border-radius: 0.5rem;
    padding: 0 1rem;
    background-color: ${props => props.theme?.colors.details};
    border: 1px solid ${props => (props.isFilled ? '#A8A8B3' : '#ea4335')};
    width: 100%;
    outline-color: ${props => (props.isFilled ? '#6F4BD8' : '#ea4335')};
  }

  button {
    margin-top: 1rem;
    width: 100%;
  }
`;

export const LinkHere = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  justify-content: space-between;

  p {
    color: ${props => props.theme?.colors.grayDark};
  }

  a {
    color: ${props => props.theme?.colors.pinkDark};
    transition: filter 0.2s;

    :hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 500px) {
    justify-content: flex-start;
    font-size: 0.8rem;

    a {
      margin-left: 1rem;
    }
  }
`;
