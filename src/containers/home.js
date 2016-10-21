import React, { Component } from 'react';
import {Link} from 'react-router';


class Home extends Component {

    render() {
        return (
            <div>
                Home
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/licai">Licai</Link></li>
                </ul>
            </div>
        )
    }
}

export default Home;