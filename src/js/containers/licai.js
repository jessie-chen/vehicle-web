import React, {Component} from 'react';
import {licai} from '../actions/index';
import { connect } from 'react-redux';


const mapStateToProps = (state) => state.licai;

@connect(mapStateToProps)
class LicaiProducts extends Component {

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        const { dispatch, licai: {productList: {pageNum = -1}} } = this.props;
        dispatch(licai.fetch_products(pageNum+1));
    }

    render() {
        const {licai: {productList:{list = [],}}} = this.props;
        return (
            <div>
                Licai
                <ul>
                    {list.map((product) =>
                        <li key={product.productNo}>{product.productName}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default LicaiProducts;