import React from 'react';
import ReactDOM from 'react-dom';
import Product from './components/Product';
import './index.css'

ReactDOM.render(
    <Product 
    name = "Dunder Mifflin"
    producer = "White Paper & Co"
    color = "white"
    weight = {110}
    />,
    document.getElementById('root')
  );