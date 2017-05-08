import React ,{ Component } from 'react';
import './style.css'
var User=require('../user');
var Operation=require('../operation');
var Product=require('../product');
var Order=require('../order');
var Setting=require('../setting');

var RightPage = React.createClass({

    getInitialState(){
      return{
          type:"user",
          categoryId:1
      }
    },
    render() {
        return (
            <div className="right">
                {this.contentPage(this.state.type,this.state.categoryId)}
            </div>
        );
    },

    contentPage(type,categoryId){
        var view=<User id={categoryId}/>;
        if(type=="user"){
            view=<User id={categoryId}/>
        }else if(type=="product"){
            view=<Product id={categoryId}/>
        }else if(type=="operation"){
            view=<Operation id={categoryId}/>
        }else if(type=="order"){
            view=<Order id={categoryId}/>
        }else if(type=="setting"){
            view=<Setting id={categoryId}/>
        }
        return view;
    },
    setPage(type,categoryId){
      this.setState({
          type:type,
          categoryId:categoryId
      })
    }
})

module.exports=RightPage;

