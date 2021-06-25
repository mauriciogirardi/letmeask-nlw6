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
    color: var(--purple);
  }

  &.liked svg path {
    stroke: var(--purple);
  }
`;
