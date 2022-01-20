import styled from "styled-components";
import { devices } from "lib/displayDevice";
import { COLOR_SPOTIFY_GREEN } from "lib/colorPalette";

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem 0;
  align-items: center;
  flex-direction: row;
  align-items: center;

  @media ${devices.tabletM} {
    flex-direction: row-reverse;
    align-items: flex-start;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;

    path {
      fill: ${COLOR_SPOTIFY_GREEN};
    }
  }

  p {
    margin: 0;
  }
`;

export const PlayingWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 100%;
  display: inline-flex;
  white-space: normal;

  span {
    margin: 0 0.5rem;
    font-size: 1.25rem;
  }

  @media ${devices.tabletM} {
    flex-direction: column;
    align-items: flex-start;

    p {
      margin-top: 0.5rem;
    }

    span {
      display: none;
    }
  }
`;
