
import React,{Component} from 'react';

class Dashboard extends Component{
    constructor(props){
        super(props)
        console.log(this.props);
    }
    render(){
        return(
            <div>
                    <div> WELCOME !</div>
                    <div> Hello, {this.props.name} </div>
            </div>
        )
    }
}
export default Dashboard;

