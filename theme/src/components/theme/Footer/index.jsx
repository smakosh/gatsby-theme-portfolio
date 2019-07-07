import React from "react";
import { defaultTitle } from "data";
import Container from "components/common/Container";
import { Wrapper, Flex, Links, Details } from "./styles";
import social from "./social.json";

export default () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>{defaultTitle}</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{" "}
          <span aria-label="love" role="img">
            💖
          </span>{" "}
          by{" "}
          <a
            href="https://smakosh.com/?ref=gatsby-theme-portfolio"
            rel="noopener noreferrer"
            target="_blank"
          >
            Smakosh
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${icon}`}
          >
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
