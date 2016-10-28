
import React, {Component} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Test1 from './Test1';

class Test extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Test1 />
                <Footer/>
            </div>
        )
    }
}

export default Test;
