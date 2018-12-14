import React, { Component } from 'react';
import axios from 'axios'
import '../css/yxLogin.css';
import ReactDOM from 'react-dom';
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            isEmptyuser:false,
            isEmptypwd:false,
            isShow:false
        }
    }
    render(){
        let {username,password,isEmptyuser,isEmptypwd,isShow}=this.state
        return (
            <div className="root">
                <div className="box">
                    <h2><p>账号密码登陆</p></h2>
                    <div className="Users_form">
                        {
                            isShow && <div id="error_box">
                                <div className="next-notice-content break-word"><span className="next-notice-content-description">登录失败</span></div>
                            </div>
                        }
                        <div className="input_box">
                            <input id="uname" className="active" type="text" name="username" placeholder="请输入用户名" onChange={this.handleChange}/>
                            { isEmptyuser && <span id="userwarning">Please enter username!</span> }
                        </div>
                        <div className="input_box">
                            <input id="upass" type="password" name="password" placeholder="请输入密码" onChange={this.handleChange}/>
                            { isEmptypwd && <span id="passwarning">Please enter password!</span> }
                        </div>
                        <div className="input_box">
                            <button type="button" onClick={this.clicks}>登陆</button>
                        </div>
                        <div className="posregister">
                            <a onClick={this.toRegister}>注册账户</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    handleChange=(e)=>{
        let {username,password}=this.state;
        let reg = /\S/;
        this.setState({
            [e.target.name]:e.target.value
        },()=>{
            console.log(this.state)
        })
    }
    
    clicks=()=>{
        let {username,password,isEmptypwd,isEmptyuser}=this.state;
        let reg = /\S/;
        if(!reg.test(username)){
            this.setState({
                isEmptyuser:true
            })
        }else{
            this.setState({
                isEmptyuser:false
            })
        }
        if(!reg.test(password)){
            this.setState({
                isEmptypwd:true
            })
        }else{
            this.setState({
                isEmptypwd:false
            })
        }
        if( reg.test(username) && reg.test(password) ){
            axios({
                method:'post',
                url:`http://uc.multi.com/api/mix/yxCunstom/doLogin?username=${username}&password=${password}`,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }).then((res)=>{
                if(!res.data.success){
                    this.setState({
                        isShow:true
                    })
                }else{
                    console.log(res)
                }
            })
            .catch((error) => {
                this.setState({
                    isShow:true
                })
            })
        }else{
            
        }
        
    }
    //跳转注册
    toRegister=()=>{
        axios.get('http://uc.multi.com/api/mix/yxCunstom/register')
    }
}
ReactDOM.render(
    <Login />, 
    document.getElementById('root')
);