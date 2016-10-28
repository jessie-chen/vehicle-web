import React, {Component} from 'react';
import {http} from '../../utils';


class Test1 extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.getBusInfo = this.getBusInfo.bind(this);
    }

    login() {
        // console.log(this.state);
        http.post("login", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "username="+this.state.username+"&password="+this.state.password
        }).then(function (res) {
            console.log("SUCCESS");
            console.log(res);
        }, function (err) {
            console.log("ERROR");
            console.log(err);
        });
    }

    getBusInfo() {
        const busId = '563e7d530d4643b69739b7327c6e0412';
        http.get(`/vehicle/busInfo/${busId}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }

    handleChange(event) {
        const el = event.target;
        const s = {};
        s[el.name] = el.value;
        this.setState(s);
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
                    <button onClick={this.login.bind(this)}>login</button>
                </div>
                <div>
                    <button onClick={this.getBusInfo}>Get bus info</button>
                </div>
            </div>
        )
    }
}

export default Test1;