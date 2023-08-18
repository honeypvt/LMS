/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMytablekusha = /* GraphQL */ `
  mutation CreateMytablekusha(
    $input: CreateMytablekushaInput!
    $condition: ModelMytablekushaConditionInput
  ) {
    createMytablekusha(input: $input, condition: $condition) {
      id
      mobilenumber
      email
      gender
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMytablekusha = /* GraphQL */ `
  mutation UpdateMytablekusha(
    $input: UpdateMytablekushaInput!
    $condition: ModelMytablekushaConditionInput
  ) {
    updateMytablekusha(input: $input, condition: $condition) {
      id
      mobilenumber
      email
      gender
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMytablekusha = /* GraphQL */ `
  mutation DeleteMytablekusha(
    $input: DeleteMytablekushaInput!
    $condition: ModelMytablekushaConditionInput
  ) {
    deleteMytablekusha(input: $input, condition: $condition) {
      id
      mobilenumber
      email
      gender
      createdAt
      updatedAt
      __typename
    }
  }
`;
