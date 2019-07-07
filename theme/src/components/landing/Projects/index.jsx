import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Flex, Item } from "react-flex-ready";
import Container from "components/common/Container";
import Card from "components/common/Card";
import starIcon from "assets/icons/star.svg";
import forkIcon from "assets/icons/fork.svg";
import { Wrapper, Content, Stats } from "./styles";

export default () => {
  const {
    github: {
      viewer: {
        repositories: { edges }
      }
    }
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 8
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Flex col={4}>
        {edges.map(
          ({ node: { id, url, name, description, stargazers, forkCount } }) => (
            <Item
              key={id}
              col={4}
              colTablet={6}
              colMobile={12}
              marginBottom={30}
              gap={1}
              stretch
            >
              <Card as="a" href={url} target="_blank" rel="noopener noreferrer">
                <Content>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </Content>
                <Stats>
                  <div>
                    <img src={starIcon} alt="stars" />
                    <span>{stargazers.totalCount}</span>
                  </div>
                  <div>
                    <img src={forkIcon} alt="forks" />
                    <span>{forkCount}</span>
                  </div>
                </Stats>
              </Card>
            </Item>
          )
        )}
      </Flex>
    </Wrapper>
  );
};
