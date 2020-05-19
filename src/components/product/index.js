import React, {Component} from 'react';
import { connect } from "react-redux";

import Products from './product'
class Product extends Component {
    render(){
        return(
            <div >
                <div className="container-fluid" >
                    <div className="table-body">
                        <Products/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({Product }) => {
    return {

        // batch:Product.batch
    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default connect(
    mapStateToProps,
    {}
)(Product);