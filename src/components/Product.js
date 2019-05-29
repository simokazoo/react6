import React from 'react';
import PropTypes from 'prop-types';


export default class Product extends React.Component {
    render () {
        return (
            <div class="order">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Producer</th>
                            <th>Watermark</th>
                            <th>Color</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{this.props.name}</td>
                        <td>{this.props.producer}</td>
                        <td>{this.props.hasWatermark}</td>
                        <td>{this.props.color}</td>
                        <td>{this.props.weight}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Product.defaultProps = {
    hasWatermark: 'false',  
};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf([ 'white', 'eggshell-white', 'salmon']).isRequired,
    weight: weights
};

function weights(props, propName) {
    if(!props[propName]) {
        return new Error("Weight is required.");
    }
    if(isNaN(props[propName])) {
        return new Error("weight must be a number.");
    }
    if(props[propName] <= 80 || props[propName] >= 300) {
        return new Error("Weight must be greater than 80, and less than 300");
    }
};