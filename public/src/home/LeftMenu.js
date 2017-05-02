import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import 'antd/dist/antd.css';
import './style.css'
import 'whatwg-fetch'

export class LeftMenu extends Component {

    getInitialState(){
      return{
        categoryList: [],
      };
    }

  componentDidMount(){
   this.loadCategory();
  }

  loadCategory(){
    fetch("http://172.31.8.42:8086/Operation/navigtor",{mode:'cors'})
        .then(response=>response.json())
        .then(res=>{
            console.log("输出结果"+JSON.stringify(res))

            this.setState({
              categoryList:res.data||[]
            })
        })
  }

  renderCategory(categoryList){
    var views=[];

    categoryList.map((item)=>{
      let itemView;
      if(item.row&&item.row.length>0){
        itemView= <SubMenu title={item.name}>{this.renderCategory(item.row)}</SubMenu>
      }else {
        itemView= <Menu.Item >{item.name}</Menu.Item>
      }

    views.push(itemView)
    })
    return views;
  }


  render() {
    return (
    <div className="left">
      <div className="titel">粥粥商城</div>
      <Menu
          theme={'dark'}
          onClick={this.handleClick}
          style={{ width: 240 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="user" /><span>用户管理</span></span>}>
          <Menu.Item key="1">管理员</Menu.Item>
          <MenuItemGroup key="g2" title="用户">
            <Menu.Item key="3">普通用户</Menu.Item>
            <Menu.Item key="4">VIP用户</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore-o" /><span>产品管理</span></span>}>
          {this.renderCategory(this.state.categoryList)}
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="copy" /><span>订单管理</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="pay-circle" /><span>运营管理</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" title={<span><Icon type="setting" /><span>设置</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
    );
  }
}



//
// <SubMenu key="g2" title="家电数码">
//     <Menu.Item key="3">手机</Menu.Item>
//     <Menu.Item key="4">电脑/平板</Menu.Item>
//     <Menu.Item key="5">空调</Menu.Item>
//     <Menu.Item key="6">电视</Menu.Item>
//     <Menu.Item key="7">冰箱</Menu.Item>
//     </SubMenu>
//     <SubMenu key="g3" title="鞋帽服饰">
//     <Menu.Item >女装</Menu.Item>
//     <Menu.Item >男装</Menu.Item>
//     <Menu.Item key="5">鞋帽</Menu.Item>
//     <Menu.Item key="6">内衣</Menu.Item>
//     <Menu.Item key="7">手表饰品</Menu.Item>
//     </SubMenu>