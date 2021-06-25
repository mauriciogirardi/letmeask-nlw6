import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme?.colors.purple};
  height: 40px;
  border-radius: 0.5rem;
  background-color: ${props => props.theme?.colors.details};

  > div {
    background: ${props => props.theme?.colors.purple};
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 0.8rem;
    border-radius: 0.4rem 0 0 0.4rem;
  }

  span {
    display: block;
    flex: 1;
    width: 200px;
    padding: 0 1rem 0 0.8rem;
    align-self: center;
    font-size: 0.9rem;
    font-weight: 500;
  }

  @media (max-width: 500px) {
    span {
      width: 167px;
      padding: 0 0.9rem 0 0.5rem;
      font-size: 0.8rem;
    }
    > div {
      padding: 0 0.5rem;
    }
  }
`;
