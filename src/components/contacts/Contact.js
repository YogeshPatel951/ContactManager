import React, { Component } from 'react'
import {Consumer} from '../../context';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Contact extends Component {
    state={
        showContactInfo:false
    };


    deleteContact = async (id,dispatch)=> {
        try{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({type:'DELETE_CONTACT', payload:id});
        }
        catch(e){
            dispatch({type:'DELETE_CONTACT', payload:id});
        }
        
    }

    render() {
        
        const {id,name, email, phone}=this.props.contact;
        const {showContactInfo} = this.state;
        return (
            <Consumer>
                {value=>{
                    const {dispatch} = value;
                    return(
                        <div className="card card-body mb-3">
                <h4>{name} 
                <small onClick={
                    () => this.setState({
                        showContactInfo:!this.state.showContactInfo
                    })
                    } className="border icon icon-normal ">Expand</small>
                    
                    
                    
                    <small onClick={this.deleteContact.bind(this,id,dispatch)} className="border icon-del  icon ">Delete</small>
                    <Link to={`contact/edit/${id}`} className="border icon-edit  icon ">Edit</Link>
                </h4>
                {showContactInfo ? (<ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                    </ul>) : null }
            </div>
                    )
                }}
            </Consumer>   
        );
    };
}

export default Contact;