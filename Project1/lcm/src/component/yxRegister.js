import React, {Component} from 'react';
import '../css/yxRegister.css';
import axios from 'axios'
import ReactDOM from 'react-dom';
class Register extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            surepassword:'',
            isEmptyuser:false,
            isEmptypwd:false,
            isShow:false,
            isSure:false,
            isCompany:false,
            userwarningtxt:'',
            companySelect:[],
            selectActive:0,
            groupId:null,
            selectTxt:'请选择公司',
            isHide:false
        }
    };
    render(){
        let {
            username,
            password,
            isEmptyuser,
            isEmptypwd,
            isShow,
            isSure,
            userwarningtxt,
            companySelect,
            selectActive,
            selectTxt,
            isHide,
            isCompany
        }=this.state;
        return (
            <div className="root">
                <div className="box">
                    <h2><p>账号密码注册</p></h2>
                    <div className="Users_form">
                        {
                            isShow && <div id="error_box">
                                <div className="next-notice-content break-word"><span className="next-notice-content-description">{userwarningtxt}</span></div>
                            </div>
                        }
                        <div className="input_box">
                            <input className="active" type="text" name="username" placeholder="请输入用户名" onChange={this.handleChange}/>
                            { isEmptyuser && <span id="userwarning">请输入用户名!</span> }
                        </div>
                        <div className="input_box">
                            <input type="password" name="password" placeholder="请输入密码" onChange={this.handleChange}/>
                            { isEmptypwd && <span id="passwarning">Please enter password!</span> }
                        </div>
                        <div className="input_box">
                            <input type="password" name="surepassword" placeholder="请确认密码" onChange={this.handleChange}/>
                            { isSure && <span id="suerpasswarning">两次输入的密码不一致!</span> }
                        </div>
                        <div className='selectBox'>
                            <div className='select'>
                                <p className='pos' onClick={this.isShow}>{selectTxt}<span className="sanjiao "></span></p>
                                { isCompany && <span id="companywarning">请选择公司!</span> }
                                {
                                    companySelect.length >0 ? isHide && <div className='selectbox'>
                                        {
                                            companySelect && companySelect.map((val,ind)=>{
                                                return <p id={val.id} onClick={ this.selectClick } className={ selectActive == ind ? 'selectActive' : '' } key={ind} data-id={ind} value={val.name}>{val.name}</p>
                                            })
                                        }
                                    </div>:null
                                }
                            </div>
                        </div>
                        <div className="input_box">
                            <button type="button" onClick={this.clicks}>注册</button>
                        </div>
                        <div className="posregister">
                            <a onClick={this.toLogin}>已有账户？去登陆</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
    handleChange=(e)=>{
        let reg = /\S/;
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentDidMount(){
        axios.get('http://uc.multi.com/api/mix/listGroup').then(res=>{
            this.setState({
                companySelect:res.data.result
            })
        })
    }
    clicks=()=>{
        let {
            username,
            password,
            isEmptypwd,
            isEmptyuser,
            surepassword,
            groupId
        }=this.state;
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
        if(password!==surepassword){
            this.setState({
                isSure:true
            })
        }else{
            this.setState({
                isSure:false
            })
        }
        if(!this.state.groupId){
            this.setState({
                isCompany:true
            })
        }else{
            this.setState({
                isCompany:false
            })
        }
        if(reg.test(username) && reg.test(password) && password==surepassword && groupId){
            if(username.length<6){
                this.setState({
                    userwarningtxt:'用户名要大于6个字符',
                    isShow:true
                })
            }else{
                this.setState({
                    userwarningtxt:'',
                    isShow:false
                })
                axios({
                    method:'post',
                    url:`http://uc.multi.com/api/mix/yxCunstom/doRegister?username=${username}&groupId=${groupId}&password=${password}&rePassword=${surepassword}`,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                }).then((res)=>{
                    if(!res.data.success){
                        this.setState({
                            userwarningtxt:res.data.message,
                            isShow:true
                        })
                    }else{
                        this.setState({
                            isShow:false
                        })
                        window.alert('注册成功')
                    }
                })
                .catch((error) => {
                    this.setState({
                        isShow:true,
                        userwarningtxt:'注册失败',
                    })
                })
            }
        }
        
    }

    selectClick=(e)=>{
        let selectId=e.currentTarget.getAttribute('data-id');
        let id=e.currentTarget.getAttribute('id');
        this.setState({
            selectTxt:e.currentTarget.innerText,
            selectActive:selectId,
            groupId:id,
            isHide:false
        })
    }
    isShow=()=>{
        this.setState({
            isHide:!this.state.isHide
        })
    }
    
    toLogin=()=>{
        axios.get('http://uc.multi.com/api/mix/yxCunstom/login')
    }

}
ReactDOM.render(
    <Register />, 
    document.getElementById('root')
);