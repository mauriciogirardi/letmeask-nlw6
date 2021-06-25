import styled, { css } from 'styled-components';

type ButtonProps = {
  isOutlined?: boolean;
  delete?: boolean;
  isDelete?: boolean;
  isConfirmation?: boolean;
};

export const Container = styled.button<ButtonProps>`
  border: 0;
  height: 3.2rem;
  background-color: var(--purple);
  color: var(--details);
  width: 100%;
  border-radius: 0.5rem;
  font-weight: 500;

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${props =>
    props.isDelete &&
    css`
      background-color: var(--danger);
      color: var(--details);
    `}

  ${props =>
    props.isConfirmation &&
    css`
      background-color: var(--gray-medium);
      color: var(--gray-dark);
    `}

  ${props =>
    props.isOutlined &&
    css`
      border: 1px solid var(--purple);
      background-color: transparent;
      color: var(--purple);
      transition: all 0.4s;

      :hover {
        background-color: var(--purple);
        color: #fff;
        filter: none;
      }
    `}
`;
