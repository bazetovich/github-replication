import { api } from '../../../index';
import gql from "graphql-tag";

export const TOGGLE_HOME_FETCHING = 'TOGGLE_HOME_FETCHING';
export const SET_SERVER_ERROR = 'SET_HOME_SERVER_ERROR';
export const SET_DATA = 'SET_HOME_DATA';

function toggleHomeFetching(isFetching) {
    return {
        type: TOGGLE_HOME_FETCHING,
        isFetching
    };
}

function setServerError(serverError) {
    return {
        type: SET_SERVER_ERROR,
        serverError
    };
}

function setData(data) {
    return {
        type: SET_DATA,
        data
    };
}

function transformResponse(data) {
    return {
        user: {
            name: data.viewer.name,
            login: data.viewer.login,
            avatarUrl: data.viewer.avatarUrl,
        },
        repos: data.viewer.repositories.nodes.map(repo => {
            return {
                name: repo.name,
                description: repo.description,
                languages: repo.languages.edges.map(language => {
                    return language.node.name
                })
            };
        })
    }
}

export function fetchHomePageData() {
    return dispatch => {
        dispatch(setServerError(false));
        dispatch(toggleHomeFetching(true));

        api.query({
            query: gql`
                  viewer {
                    name,
                    login,
                    avatarUrl,
                    repositories(first: 10) {
                      nodes {
                        name,
                        description,
                        languages(first: 3) {
                          edges {
                            node {
                              name,
                              id
                            }
                          }
                        }
                      }
                    }
                  }
              `
        })
            .then(response => {
                dispatch(setData(transformResponse(response.data)));
            })
            .catch(() => {
                dispatch(setServerError(true));
            })
            .finally(() => {
                dispatch(toggleHomeFetching(false));
            });
    }
}
