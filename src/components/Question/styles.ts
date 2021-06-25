import styled, { css } from 'styled-components';

type QuestionProps = {
  isAnswered?: boolean;
  isHighLighted?: boolean;
};

export const Container = styled.div<QuestionProps>`
  background: ${props => props.theme?.colors.secondary};
  color: ${props => props.theme?.colors.title};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  ${props =>
    props.isHighLighted &&
    css`
      background-color: ${props.theme?.colors.isHighLighted};
      border: 1px solid ${props.theme?.colors.purple};
    `}

  ${props =>
    props.isAnswered &&
    css`
      background-color: ${props.theme?.colors.grayLight};
      border: 1px solid ${props.theme?.colors.pinkDark};
    `}

  & + div {
    margin-top: 1rem;
  }
`;

export const Footer = styled.footer<QuestionProps>`
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
      color: ${props => props.theme?.colors.isHighLightedTitle};
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  button.delete {
    margin-bottom: -1.8rem;
    border: 0;
    background-color: transparent;

    > img {
      height: 22px;
    }
  }
`;
