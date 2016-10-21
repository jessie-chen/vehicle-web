import React, {Component} from 'react';


export default class App extends Component {

    static propTypes = {
        children: React.PropTypes.any
    };

    constructor() {
        super();
    }

    render () {
        return (
            <section>
                <h1>Header here</h1>
                {this.props.children}
                <p>footer here</p>
            </section>
        );
    }
}
