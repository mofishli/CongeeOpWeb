import React from 'react';
import {render} from 'react-dom';
import {Button, Icon} from 'antd';
import './style.css'
import 'antd/dist/antd.css';

var LoginPage = React.createClass({

    getInitialState(){
        return {
            loading: false,
            accountId:undefined,
            password:undefined,
            checkTipWords:undefined
        }
    },

    componentDidMount(){
        window.addEventListener('keydown',this.handleKeyPress);
    },
    handleKeyPress(e){
        if(e.keyCode==13)this.enterLoading();
    },

    request(options){
        var timeLimit = options.timeout || 10000;
        var type = options.type || 'GET';
        var name = options.name || '';
        var params = options.params || {};

        let totalUrl = `http://172.31.8.42:8086/User/loginm?data=${encodeURI(JSON.stringify(params))}`;


        Promise.race().then().then()



        fetch(totalUrl,{mode:'cors',method:"POST",body:"aaaaaa"})
            .then(response=>response.json())
            .then(res=>{
                console.log("输出结果"+JSON.stringify(res))

                if(res.data&&res.data.status){
                    location.href='/home'
                }else {
                    this.setState({
                        checkTipWords:res.data&&res.data.tips,
                        loading: false
                    });
                }
            })

    },



    render() {
        return (
            <div >
                {this.bottomTips()}
                {this.loginTable()}
            </div>
        );
    },

    loginTable(){
        return (
            <div className="loginbackground">
                {this.loginTitle()}
                {this.loginInput()}
                {this.checkTip()}
                {this.loginButton()}
            </div>
        )
    },
    bottomTips(){
      return(
          <div className="tips">Copyright © 2006-2017 常州粥粥科技有限公司 Zozo.com | 营业执照 | ICP证：苏D2-20130006 | 苏ICP备12009060号 | 粥粥商城</div>
      )
    },

    loginTitle(){
        return <div className="title">粥粥商城运营系统</div>
    },
    loginInput(){
        return (
            <div style={{marginTop: 20}}>
                <div className="inputs">
                    <label className="userName"> <Icon type="user"/></label>
                    <input type="text" className="input"
                           id="input_user" placeholder="请输入账号"
                           onChange={e => {
                               if(e.target.value&&this.state.password)
                                this.clearTips()
                           }}/>
                </div>
                <div className="inputs">
                    <label className="userName"><Icon type="key"/></label>
                    <input type="password" className="input"
                           id="input_password" placeholder="请输入密码"
                           onChange={e => {
                               if(e.target.value&&this.state.accountId)
                                   this.clearTips()
                           }}/>
                </div>
            </div>
        )
    },

    checkTip(){
      return(
          <div style={{fontsize:13,color:'#982913',fontWeight:'bold',
              marginLeft:15,height:15}}>{this.state.checkTipWords}</div>
      )
    },
    loginButton(){
        return (
            <Button type="primary" loading={this.state.loading} onClick={this.enterLoading} className="button"
                    size="large">
                登陆
            </Button>
        )
    },
    enterLoading  () {
        this.state.accountId=document.getElementById('input_user').value,
        this.state.password=document.getElementById('input_password').value
        this.checkUser();
    },

    checkUser(){
       if(!this.state.accountId){
           this.setState({
               checkTipWords:"账号不能为空,请输入账号"
           });
       }else if(!this.state.password){
           this.setState({
               checkTipWords:"密码不能为空,请输入密码"
           });
       }else {
           this.clearTips()
           this.loginToHome();
       }
    },
    loginToHome(){
        this.setState({
            loading: true,
        });

        this.login();
    },
    login(){

        var params={
            acctId:this.state.accountId,
            password:this.state.password
        }

        this.request({

            params:params
        });

    },
    clearTips(){
        this.setState({
            checkTipWords:undefined
        });
    }
});

render(<LoginPage/>, document.getElementById('login'));