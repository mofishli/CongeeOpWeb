import React ,{ Component } from 'react';
import './style.css'

var UserPage = React.createClass({

    render() {
        return (
            <div className="background">
                {'UserPage'+this.props.id}
            </div>
        );
    }
});

module.exports=UserPage;

