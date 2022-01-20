import useSWR from "swr";
import Link from "next/link";
import fetcher from "lib/fetcher";
import { Data, PostsProps, StringProps } from "lib/types";
import { convertToSlug, formatDate } from "lib/helpers";

import { Container, Item, PostsDescription } from "components/Posts/styles";
import { Flex } from "components/Layout/Container/styles";

export const Posts = ({ title }: StringProps) => {
  const { data } = useSWR<Data>("/api/medium", fetcher);

  return (
    <Container>
      <h3>{title}</h3>
      {data?.feed?.map((item: PostsProps, id: number) => {
        return (
          <Link href={`/blog/${convertToSlug(item.title)}`} key={id}>
            <Item>
              <Flex>
                <Flex>
                  <span className="item-number">{`${id < 9 ? "0" : ""}${
                    id + 1
                  }`}</span>
                  <h4>{item.title.substring(0, 65)}</h4>
                </Flex>
                <span>{formatDate(item.pubDate)}</span>
              </Flex>
              <PostsDescription
                dangerouslySetInnerHTML={{
                  __html: item.description.substring(0, 300) + "...",
                }}
              />
            </Item>
          </Link>
        );
      })}
    </Container>
  );
};
