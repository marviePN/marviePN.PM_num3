import React,{Component} from 'react';
import Dashboard from './Dashboard';

    class Login extends Component{
        constructor(props){
            super(props)
            this.state = {
                user:false,
                name: ''
            }

        }
        loginHandler(e){
            e.preventDefault();
            this.setState({user:true});
        }

        usernameHandler(e){
            this.setState({name:e.target.value});
        }

        render(){
            if (!this.state.user){
                return(
                    <div>
                        {this.state.name}
                        <form>
                            <input type="text" placeholder="Username" onChange = {(e) => this.usernameHandler(e)}/>
                            <input type="password" placeholder="Password"/>
                            <button onClick={(e) => this.loginHandler(e)}>Login</button>
                        </form>
                    </div>
                );
            }
            
            if(this.state.user){
                return(
                    <Dashboard name =  {this.state.name} />
                );
            }
        }
    }
    
    export default Login;
