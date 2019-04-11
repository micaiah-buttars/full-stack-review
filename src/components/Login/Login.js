import React, {Component} from 'react'
import logo from './communityBank.svg'
import './Login.css'
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }

    }

    async register(){
        const {email, password} = this.state
        const res = await axios.post('/auth/register', {email, password})
        

    }

    async login(){
        
    }



    render(){
        return (
            <div className='login-container'>
                <img className='logo' src={logo} alt='bank logo'/>
                <p> 
                    <span>Email:</span> <br/>
                    <input
                        onChange={(e) => this.setState({email: e.target.value})}
                        type='text'
                        placeholder='email'
                        value={this.state.email}
                    />
                </p>
                <p>
                    <span>Password:</span> <br/>
                    <input
                        onChange={(e) => this.setState({password: e.target.value})}
                        type='text'
                        placeholder='password'
                        value={this.state.password}
                    />
                </p>

                <button onClick={() => this.register()}>Register</button>
                <button onClick={() => this.login()}>Log in</button>
            </div>
        )
    }
}