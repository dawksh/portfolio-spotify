import styled from "styled-components";
import { devices } from "lib/displayDevice";
import { COLOR_BLACK, COLOR_WHITE } from "lib/colorPalette";
import { StringProps } from "lib/types";

import { Flex } from "components/Layout/Container/styles";

export const Container = styled.div`
  display: grid;
  grid-gap: 6rem 0;
  gap: 6rem 0;
  grid-column: 1/13;

  @media ${devices.tabletM} {
    grid-column: 1;

    ${Flex} {
      justify-content: flex-start;
    }
  }
`;

export const Item = styled.div<StringProps>`
  :first-child {
    padding-top: 2rem;
  }

  margin-left: ${({ isLeft }) => (isLeft ? "auto" : "0")};
  margin-right: ${({ isLeft }) => (isLeft ? "0" : "auto")};
  text-align: start;
  width: 50%;

  h4 {
    margin: 0;
  }

  p,
  span {
    display: block;
  }

  img {
    border-radius: 100%;
    overflow: hidden;
    object-fit: contain;
  }

  @media ${devices.tabletM} {
    width: 75%;
  }

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

export const AuthorContainer = styled.div<StringProps>`
  span {
    text-align: start;
    color: ${({ darkTheme }) => (darkTheme ? COLOR_WHITE : COLOR_BLACK)};

    :first-child {
      margin-bottom: 0.5rem;
    }
  }
`;
