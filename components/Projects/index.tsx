import useSWR from "swr";
import fetcher from "lib/fetcher";
import { Flex } from "components/Layout/Container/styles";
import { Container, Item } from "components/Posts/styles";
import Link from "next/link";

export const Projects = () => {
  const PROJEKTS: any = [
    {
      name: "Metapass",
      description: "Metapass is an on chain ticketing system which uses NFTs",
      link: "https://metapasshq.xyz",
    },
    {
      name: "Go ETH Me",
      description:
        "Go ETH Me is a Dapp used for fundraising for different causes on chain using Ethereum chain.",
      link: "https://go-eth-me.vercel.app",
    },
    {
      name: "Cryptseed",
      description:
        "A browser based seed vault phrase which stores your seed phrases within your browser with SHA256 encryption",
      link: "https://cryptseed.ml",
    },
  ];
  return (
    <Container>
      <h3>Featured Projects</h3>
      {PROJEKTS.map((item: any, id: any) => (
        <div key={id}>
          <Link href={item.link}>
            <Item>
              <Flex>
                <Flex>
                  <h4>{item.name}</h4>
                </Flex>
              </Flex>
              <p>{item.description}</p>
            </Item>
          </Link>
        </div>
      ))}
    </Container>
  );
};
