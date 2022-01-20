import useSWR from "swr";
import fetcher from "lib/fetcher";
import { Data, TopTracksProps } from "lib/types";

import { Flex } from "components/Layout/Container/styles";
import { Container, Item } from "components/Posts/styles";

export const MostListened = () => {
  const { data } = useSWR<Data>("/api/top-tracks", fetcher);

  return (
    <Container>
      {data?.map((item: TopTracksProps, id: number) => {
        return (
          <a
            href={item.songUrl}
            target="_blank"
            className="color-black"
            key={id}
            rel="noopener noreferrer"
          >
            <Item>
              <Flex>
                <Flex>
                  <span className="item-number">{`${id < 9 ? "0" : ""}${
                    id + 1
                  }`}</span>
                  <h4>{item.title}</h4>
                </Flex>
              </Flex>
              <p>{item.artist}</p>
            </Item>
          </a>
        );
      })}
    </Container>
  );
};
