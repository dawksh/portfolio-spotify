import Container from "components/Layout/Container";
import { TestimonialList } from "components/TestimonialList";
import { Paragraph } from "pages/blog";

export default function Testimonials() {
  return (
    <Container title="Testimonials - Lasha Kakabadze">
      <h1>Testimonials</h1>
      <Paragraph>
        Outside of being employed full-time at Vabaco, I sometimes freelance on{" "}
        <a
          href={"https://www.upwork.com/freelancers/~01e9d53a899f106f0d"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Upwork
        </a>
        , working mostly on small to medium sized projects.
        <br />
        Here are what just a few of my clients had to say:
      </Paragraph>
      <TestimonialList />
    </Container>
  );
}
