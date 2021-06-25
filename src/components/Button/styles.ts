import styled from 'styled-components';

export const Container = styled.button`
  &.outlined {
    border: 1px solid var(--purple);
    background-color: transparent;
    color: var(--purple);
    transition: all 0.4s;

    :hover {
      background-color: var(--purple);
      color: #fff;
      filter: none;
    }
  }

  border: 0;
  height: 3.2rem;
  width: 100%;
  border-radius: 0.5rem;
  background-color: var(--purple);
  color: var(--details);
  font-weight: 500;

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
