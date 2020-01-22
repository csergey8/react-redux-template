import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { useHistory, Link } from 'react-router-dom';
import { initThunk } from '../redux/templateReducer';


const Home = (props) => {
    return (
        <div>
            Home
            <Link to="/about">About</Link>
            <Link to="/abouasdasdast">About</Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    status: state.templateReducer.status
})

const mapDispatchToProps = (dispatch) => ({
    init: () => dispatch(initThunk())
})

const HomeWithRedux =  connect(mapStateToProps, mapDispatchToProps)(Home)

export { HomeWithRedux as Home }
