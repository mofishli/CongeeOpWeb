import React ,{ Component } from 'react';
import './style.css'

var OrderPage = React.createClass({

    render() {
        return (
            <div className="background">
                {'OrderPage'+this.props.id}
            </div>
        );
    }
});

module.exports=OrderPage;

