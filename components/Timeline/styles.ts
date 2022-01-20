import { COLOR_MEDIUM_GRAY, COLOR_SPOTIFY_GREEN } from "lib/colorPalette";
import { devices } from "lib/displayDevice";
import styled from "styled-components";

export const DividerBorder = styled.div`
  width: 100%;
  margin: 2rem 0;
  border-bottom: 1px solid ${COLOR_MEDIUM_GRAY};
`;

export const StepLi = styled.li`
  margin-left: 0.5rem;
  margin-bottom: 1rem;

  div {
    align-items: center;
    display: flex;
    margin-bottom: 0.5rem;

    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;

      g {
        stroke: ${COLOR_SPOTIFY_GREEN};
      }
    }

    p {
      margin: 0;
      font-weight: 600;
    }

    h5 {
      margin: 0;
      font-size: 1.125rem;
    }
  }

  br {
    content: "";
    margin: 1rem;
    display: block;
  }

  p {
    margin: 0 0 0 1.5rem;
  }

  @media ${devices.tabletM} {
    margin-left: 0;
    p {
      margin: 0;
    }

    svg {
      display: none;
    }
  }
`;

export const MoreButton = styled.button`
  line-height: 1.25rem;
  border-radius: 0.75rem;
  align-items: center;
  display: flex;
  margin: 2rem auto;
  padding: 0.75rem 1rem;

  svg {
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
  }
`;
