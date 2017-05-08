import React ,{ Component } from 'react';
import './style.css'

var ProductPage = React.createClass({

    render() {
        return (
            <div className="background">
                {'ProductPage'+this.props.id}
            </div>
        );
    }
});

module.exports=ProductPage;

