import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import 'antd/dist/antd.css';
import './style.css'
import 'whatwg-fetch'

var LeftMenu =React.createClass({

     getInitialState(){
       return{
         categoryList:[]
       }
     },

      componentDidMount(){
        this.loadCategory();
      },

      loadCategory(){
        fetch("http://172.31.8.42:8086/Operation/navigtor",{mode:'cors'})
            .then(response=>response.json())
            .then(res=>{
              console.log("输出结果"+JSON.stringify(res))

              this.setState({
                categoryList:res.data||[]
              })
            })
      },

      renderCategory(categoryList){
        var views=[];
        categoryList&&categoryList.map((item)=>{
          let itemView;
          if(item.row&&item.row.length>0){
            itemView= <SubMenu title={item.name}>{this.renderCategory(item.row)}</SubMenu>
          }else {
            itemView= <Menu.Item key={"product_"+item.id}>{item.name}</Menu.Item>
          }
          views.push(itemView)
        });
        return views;
      },

      handleClick(e) {
        let type_id=e.key.split("_")
        this.props.changeTab(type_id[0],type_id[1]);
      },

      render() {

        return (
            <div className="left">
              <div className="titel">粥粥商城</div>
              <Menu
                  theme={'dark'}
                  onClick={this.handleClick}
                  defaultSelectedKeys={['user_1']}
                  mode="inline"
              >
                <SubMenu key="user" title={<span><Icon type="user" /><span>用户管理</span></span>}>
                  <Menu.Item key={"user_"+1}>管理员</Menu.Item>
                  <MenuItemGroup key="g2" title="用户">
                    <Menu.Item key={"user_"+2}>普通用户</Menu.Item>
                    <Menu.Item key={"user_"+3}>VIP用户</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
                <SubMenu key="product" title={<span><Icon type="appstore-o" /><span>产品管理</span></span>}>
                  {this.renderCategory(this.state.categoryList)}
                  <Menu.Item key={"product_add"}   >{<span><Icon type="plus-circle" /><span>添加品类</span></span>}</Menu.Item>
                </SubMenu>
                <SubMenu key="order" title={<span><Icon type="copy" /><span>订单管理</span></span>}>
                  <Menu.Item key={"order_"+1}>待付款</Menu.Item>
                  <Menu.Item key={"order_"+2}>已付款</Menu.Item>
                  <Menu.Item key={"order_"+3}>已完成</Menu.Item>
                  <Menu.Item key={"order_"+4}>退款中</Menu.Item>
                  <Menu.Item key={"order_"+5}>退款完成</Menu.Item>
                </SubMenu>
                <SubMenu key="operation" title={<span><Icon type="pay-circle" /><span>运营管理</span></span>}>
                  <Menu.Item key={"operation_"+1}>首页</Menu.Item>
                  <Menu.Item key={"operation_"+2}>导航</Menu.Item>
                </SubMenu>
                <SubMenu key="setting" title={<span><Icon type="setting" /><span>设置</span></span>}>
                  <Menu.Item key={"setting_"+1} >刷新缓存</Menu.Item>
                  <Menu.Item key={"setting_"+2}>安全退出</Menu.Item>
                </SubMenu>
              </Menu>
            </div>
        );
      }
    }
)

module.exports=LeftMenu;

