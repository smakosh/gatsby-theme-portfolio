import styled from "styled-components";

export const Links = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 24px;
  }

  a {
    margin: 0 0.5rem;

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;
