// DEVELOP
if (process.env.NODE_ENV !== 'production') {
    require('../../login.html');

    //Hot replacement; Comment below for hot reload
    if (module.hot) {
        module.hot.accept();
    }
}
import "../../styles/login.scss";
import React from "react";
import {PREFIX,login} from "../actions/login";
import {connect} from "react-redux";

// @connect(state => state[PREFIX])
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.saveUsername = this.saveUsername.bind(this);
        this.savePassword = this.savePassword.bind(this);
        this.submitHandler = this.submitHandler.bind(this)
    }

    saveUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    savePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    submitHandler() {
        if (undefined == this.state.username || "" == this.state.username) {
            console.log("username cannot be found")
        } else if (undefined == this.state.password || "" == this.state.password) {
            console.log("password cannot be found")
        }
        // const {dispatch} = this.props;
        // dispatch(login(this.state.username, this.state.password))
        document.location.href = "/map.html";
    }

    render() {
        return (
            <div className="login-panel">
                <h1 className="title">用户登录</h1>
                <div className="seperator line-left"></div>
                <form name="loginForm" className="login-form">
                    <div className="form-group from-input">
                        <div className="input-box"><span className="mark"><i className="username"> </i></span> <input className="input-style" onBlur={this.saveUsername}
                                                                                           placeholder="用户名"/></div>
                    </div>
                    <div className=" form-group from-input">
                        <div className="input-box"><span className="mark"><i className="password"> </i></span> <input className="input-style" onBlur={this.savePassword}
                                                                                           placeholder="密码"/></div>
                    </div>
                    <div onClick={this.submitHandler} className="button login-btn"><span className="login-text">登陆</span></div>
                </form>
                <div className="seperator line-right"></div>
            </div>
        )
    }
}