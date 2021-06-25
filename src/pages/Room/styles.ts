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

export const Form = styled.form`
  margin-bottom: 3rem;

  textarea {
    width: 100%;
    border: 0;
    padding: 1rem;
    background-color: var(--details);
    border-radius: 0.5rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    height: 9rem;
    outline-color: var(--gray-light);
  }
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.9rem;
    font-weight: 500;
  }

  > img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin-right: 0.5rem;
  }
`;

export const FooterForm = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  > span {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--gray-dark);

    button {
      background-color: transparent;
      border: 0;
      color: var(--purple);
      text-decoration: underline;
      font-size: 0.9rem;
      font-weight: 500;
      margin-left: 0.3rem;
    }
  }

  > button {
    width: 200px;
  }

  @media (max-width: 500px) {
    > button {
      width: 130px;
    }

    > span {
      margin-top: 1rem;
    }
  }
`;
