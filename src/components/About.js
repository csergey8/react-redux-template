import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Nested from './Nested';

const About = (props) => {
    return (
        <div>
        <Link to={`${props.match.url}/test`}>Nested</Link>
        <Route path={`${props.match.url}/:id`} component={Nested} />
        </div>
    )
}

const AboutWithRouter = withRouter(About)

export { AboutWithRouter as About }
