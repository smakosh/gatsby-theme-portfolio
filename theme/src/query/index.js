module.exports = `
  {
    github {
      repositoryOwner(login: "smakosh") {
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
`;
