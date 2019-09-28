
import React, { Component } from 'react';
import Dashboard from './Dashboard';


class App extends Component {
   constructor(props) {
       super(props);
       this.state = {
           inputUserName: '',
           inputPass:'',
           username: 'UserName',
           password:'P@ssw0rd',
           login: false
       }
   }

   handleLogin = (e) => {
       const { inputuserName, username, inputPass, password } = this.state;
       if (inputuserName === username && inputPass === password) {
           this.setState({ login: true });
       } else {
           this.setState({ user: false });
           alert("Invalid Credentials either Password or Username didn't match");
       }
   }
   render() {
       const { login } = this.state;
       if (!login) {
           return (
               <div id = "main">
                 <h1>LOG IN FORM </h1>
                 <hr></hr>
                 <br></br>
                   UserName : <input type = "text" placeholder="Username"   onChange = {e => this.setState({inputuserName : e.target.value})}></input>
                   <br></br><br></br>
                   Password : <input type='password' placeholder="Password" onChange = {e => this.setState({inputPass : e.target.value})}></input>
                   <br></br><br></br>
                   <button className = "button1" onClick={e => this.handleLogin(e)}>Login</button>
                   <br>
                   </br><br></br>
               </div>
               
           )
       }
     
       else {
           return(
               <Dashboard/>
           )
       }
   }
}

export default App;