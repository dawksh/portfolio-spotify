import useSWR from "swr";
import Image from "next/image";
import { useTheme } from "next-themes";
import fetcher from "lib/fetcher";
import { Data, StringProps } from "lib/types";

import { Flex } from "components/Layout/Container/styles";
import {
  AuthorContainer,
  Container,
  Item,
} from "components/TestimonialList/styles";

export const TestimonialList = () => {
  const { resolvedTheme } = useTheme();
  const { data } = useSWR<Data>("/api/testimonials", fetcher);

  return (
    <Container>
      {data?.map((item: StringProps, id: number) => (
        <Item isLeft={id % 2 !== 0} key={id}>
          {item.picture && (
            <Image
              src={`/assets/svg/${
                resolvedTheme !== "dark"
                  ? `${item.picture}`
                  : `${item.picture}-light`
              }.svg`}
              alt={`Logo of ${item.picture}`}
              width={(item.pictureWidth as string) || "86px"}
              height="56px"
              layout="fixed"
              placeholder="blur"
              blurDataURL="blur"
            />
          )}
          <h4>{item.title}</h4>
          <p>{item.text}</p>
          {item.author && (
            <Flex justify={id % 2 !== 0 ? "flex-end" : "flex-start"}>
              <AuthorContainer darkTheme={resolvedTheme === "dark"}>
                <span>{item.author}</span>
                <span>{item.position}</span>
              </AuthorContainer>
            </Flex>
          )}
        </Item>
      ))}
    </Container>
  );
};
