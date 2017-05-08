import React ,{ Component } from 'react';
import { render } from 'react-dom';
var LeftMenu=require('./LeftMenu');
var RightPage=require('./RightPage');

import './style.css'

var Home = React.createClass( {

    render() {
        return (
            <div className="background">
                <LeftMenu changeTab={this.changeTab} test="nimabi"/>
                <RightPage ref="rightPage"/>
            </div>
        );
    },
    changeTab(type,categoryId){
        this.refs.rightPage&&this.refs.rightPage.setPage(type,categoryId);
    }
})


render(<Home/>, document.getElementById('home'));
