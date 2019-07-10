import styled from "styled-components";
import colors from "tokens/colors";

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-image: ${({ color = colors.primaryOverlay }) =>
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1922 448.1'%3E%3Cg fill='%23${color}' data-name='Group 23'%3E%3Cpath d='M152 185.1s254.8-99.3 603.3 0 980.5-117.8 980.5-117.8 61.5-36.3 185-22c.1.1-.3 403.2 0 402.4l-796.6-13L152 448.1z' data-name='Path 290' opacity='.4'/%3E%3Cpath d='M0 143.1s254.8-99.3 603.3 0 980.5-117.8 980.5-117.8S1798.5-11 1922 3.3c.1.1-.3 403.2 0 402.4l-949.8-13L0 406.1z' data-name='Path 299' opacity='.2'/%3E%3Cpath d='M.4 191.7c96.5-23 295.2-53.3 539.9 16.4 348.4 99.3 980.5-117.8 980.5-117.8s118.6-78.5 357 21a254 254 0 0 1 43 22.7c.4 1 0 314.7 0 313.4-.3-.3-1920.4.6-1920.4.6s.2-256.3 0-256.3z' data-name='Path 289'/%3E%3C/g%3E%3C/svg%3E")`};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Details = styled.div`
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;
