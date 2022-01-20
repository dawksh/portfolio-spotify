import styled from "styled-components";
import Container from "components/Layout/Container";
import { Posts } from "components/Posts";

export default function Blog() {
  return (
    <Container title="Blog - Lasha Kakabadze">
      <h1>Blog</h1>
      <Paragraph>
        In the recent years, I've found out that writing blogs is a great way to
        reinforce knowledge, as it helps me to write a clear documentation.{" "}
        <br />
        Initially, my blogs were intended for one audience - myself. But once I
        started more people people reading my articles, it was time to express
        my thoughts more clearly, organize my writing and read more about the
        particular topic I was writing about.
      </Paragraph>
      <Posts title="All Stories" />
    </Container>
  );
}

export const Paragraph = styled.p`
  br {
    content: "";
    margin: 1rem;
    display: block;
  }
`;
