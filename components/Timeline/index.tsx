import { useState } from "react";
import { ChildrenStringProps } from "lib/types";
import { COLOR_SPOTIFY_GREEN } from "lib/colorPalette";

import { DividerBorder, StepLi, MoreButton } from "components/Timeline/styles";

const Divider = () => <DividerBorder />;

const Year = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  const Step = ({ title, children }: ChildrenStringProps) => (
    <StepLi>
      <div>
        <svg viewBox="0 0 24 24">
          <g
            fill="none"
            stroke={COLOR_SPOTIFY_GREEN}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <h5>{title}</h5>
      </div>
      <p>{children}</p>
    </StepLi>
  );

  const FullTimeline = () => (
    <>
      <Divider />
      <Year>2014</Year>
      <ul>
        <Step title="Started at University">
          I started studying Business Administration at The Agricultural
          University of Georgia.
        </Step>
      </ul>
      <Divider />
    </>
  );

  return (
    <>
      <h3>Timeline</h3>
      <Year>2021</Year>
      <ul>
        <Step title="Joined Vabaco">
          I'm thrilled about this new role as a React Developer, helping create
          enterprise web applications for healthcare services.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Top Rated Freelancer on Upwork">
          I'm very exited to represent the top 10% of talent on Upwork. The
          grind has just begun!
        </Step>
        <Step title="Open-Source React Template">
          Created a{" "}
          <a
            href="https://github.com/Adrinlol/landy-react-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            template
          </a>{" "}
          that comes with multi-lingual support, smooth animations, contact form
          built with React Hooks and error validations, set of ready to use
          sections and most importantly, a PERFECT score on Lighthouse.
        </Step>
        <Step title="First Article on Medium">
          Wrote my{" "}
          <a
            href="https://medium.com/swlh/setting-up-and-deploying-a-twitter-app-from-scratch-twitter-bot-article-8b6798d68a16"
            target="_blank"
            rel="noopener noreferrer"
          >
            first article
          </a>{" "}
          on how to set up an deploy a twitter app from scratch. This bot was
          able to search, retweet and like all the tweets containing the
          provided keyword.
        </Step>
        <Step title="Second Project for the Open-Source">
          This was around the time when I was reading a lot about JavaScript, so
          instead of having bunch of different articles and books, I decided to
          create{" "}
          <a
            href="https://github.com/Adrinlol/javascript-guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            one project
          </a>{" "}
          aimed at combining basic to advanced concepts.
        </Step>
        <Step title="Wrote First Open-Source Project">
          Open-sourced{" "}
          <a
            href="https://github.com/Adrinlol/javascript-color-gradient"
            target="_blank"
            rel="noopener noreferrer"
          >
            my first project
          </a>
          , currently holding over 1.7k monthly downloads. <br />
          It handles the login behind generating an array of color gradients by
          providing start and finish colors, as well as the required number of
          midpoints.
        </Step>
        <Step title="Completed My First Project on Upwork">
          Developed a responsive, multi-language landing page for an AI
          consulting company using React.js.
        </Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Joined Circle">
          I was offered and accepted a full-time offer with Circle - a Software
          Development company in Georgia.
        </Step>
        <Step title="Started Learning Frontend Development">
          Got hooked on learning Frontend, but I wasn't sure where or how to
          start. <br />
          There were so many options available not only programming
          language-wise, but regarding tools, frameworks, and technologies as
          well.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <MoreButton type="button" onClick={() => showFullTimeline(true)}>
          See More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </MoreButton>
      )}
    </>
  );
};
