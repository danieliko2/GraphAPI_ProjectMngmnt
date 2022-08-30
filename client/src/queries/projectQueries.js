import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
query getProjects {
    projects{
        name
        id
        status
        description
        client{
            name
            id
            email
        }
    }
}
`;

const GET_PROJECT = gql`
query getProjects($id: ID!) {
    project(id: $id){
        id
        name
        description
        status
        client{
            id
            name
            email
            phone
        }
    }
}
`;

export { GET_PROJECTS };
export { GET_PROJECT };