import styled from 'styled-components';

export const Container = styled.div`
  background: var(--details);
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  & + div {
    margin-top: 1rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 1.5rem;

  > div {
    display: flex;
    align-items: center;

    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }

    span {
      margin-left: 0.6rem;
      font-size: 0.9rem;
      color: var(--gray-dark);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
