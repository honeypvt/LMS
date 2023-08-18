/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMytablekusha = /* GraphQL */ `
  query GetMytablekusha($id: ID!) {
    getMytablekusha(id: $id) {
      id
      mobilenumber
      email
      gender
      userame
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMytablekushas = /* GraphQL */ `
  query ListMytablekushas(
    $filter: ModelMytablekushaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMytablekushas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mobilenumber
        email
        gender
        userame
        password
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
