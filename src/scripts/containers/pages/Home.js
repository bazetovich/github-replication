import { connect } from 'react-redux';

import Home from '../../components/pages/home/Home';
import { fetchHomePageData } from '../../actions/pages/home/home';

const mapStateToProps = state => ({
    isFetching: state.home.isFetching,
    serverError: state.home.serverError,
    repos: state.home.repos,
    avatarUrl: state.home.user.avatarUrl,
    userName: state.home.user.name
});

const mapDispatchToProps = dispatch => ({
    fetchHomePageData: () => dispatch(fetchHomePageData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
