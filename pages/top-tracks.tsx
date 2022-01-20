import Container from "components/Layout/Container";
import { MostListened } from "components/MostListened";
import { Paragraph } from "pages/blog";

export default function TopTracks() {
  return (
    <Container title="Top Tracks - Lasha Kakabadze">
      <h1>Top Tracks</h1>
      <Paragraph>
        Some of my personal favorite records on Spotify, that I think are
        incredibly powerful, influential and most importantly essential when it
        comes to modern music.
        <br />
        This is not a best of list, rather a compilation of my most listened
        tracks of the week.
      </Paragraph>
      <MostListened />
    </Container>
  );
}
