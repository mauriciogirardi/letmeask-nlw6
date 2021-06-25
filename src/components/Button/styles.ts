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
  background-color: ${props => props.theme?.colors.purple};
  color: ${props => props.theme?.colors.details};
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
      background-color: ${props.theme?.colors.danger};
      color: ${props.theme?.colors.details};
    `}

  ${props =>
    props.isConfirmation &&
    css`
      background-color: ${props.theme?.colors.grayMedium};
      color: ${props.theme?.colors.grayDark};
    `}

  ${props =>
    props.isOutlined &&
    css`
      border: 1px solid ${props.theme?.colors.purple};
      background-color: transparent;
      color: ${props.theme?.colors.purple};
      transition: all 0.4s;

      :hover {
        background-color: ${props.theme?.colors.purple};
        color: #fff;
        filter: none;
      }
    `}
`;
