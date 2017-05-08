import React ,{ Component } from 'react';
import './style.css'

var SettingPage = React.createClass({

    render() {
        return (
            <div className="background">
                {'SettingPage'+this.props.id}
            </div>
        );
    }
});

module.exports=SettingPage;

