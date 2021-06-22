import styled from 'styled-components';

export const Container = styled.button`
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
