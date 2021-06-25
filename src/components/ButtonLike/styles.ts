import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  background-color: transparent;
  gap: 0.5rem;

  &.like-button {
    display: flex;
    align-items: flex-end;
  }

  &.liked {
    color: ${props => props.theme?.colors.purple};
  }

  &.liked svg path {
    stroke: ${props => props.theme?.colors.purple};
  }
`;
