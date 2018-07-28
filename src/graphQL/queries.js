import { gql } from "apollo-boost";

const queries = {
  GET_CHAKIBOOS: gql`
    query {
      chakiboos {
        id
        title
        description
        code
        tags
        language
        author {
          username
          id
        }
      }
    }
  `,
  GET_BY_TAG: gql`
    query getChakiboosByTag($tag: String) {
      chakiboos(tag: $tag) {
        id
        title
        description
        code
        tags
        language
        author {
          username
          id
        }
      }
    }
  `
};

export default queries;
