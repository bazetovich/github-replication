import React from "react";
import Loader from "react-loader";

import Repo from './Repo';

import "../../../../styles/pages/home.css";

export default class Home extends React.Component {

    componentDidMount() {
        this.props.fetchHomePageData();
    }

    render() {
        const {
            isFetching,
            serverError,
            repos,
            avatarUrl,
            userName
        } = this.props;

        return (
            <div>
                <Loader loded={!isFetching}>
                    {
                        serverError ? (
                            <span>Could not load data, something went wrong</span>
                        ) : (
                            <div>
                                <div className='left-content'>
                                    <img src={avatarUrl} />
                                    <span>{userName}</span>
                                </div>
                                <div className='right-content'>{repos.map(repo => (
                                    <Repo
                                        name={repo.name}
                                        languages={repo.languages}
                                        description={repo.description}
                                    />
                                ))}</div>
                            </div>
                        )
                    }
                </Loader>
            </div>
        );
    }
};
