import React, { Component } from 'react';
import { Consumer } from '../../context';

import classnames from 'classnames';
import axios from 'axios';
class editContact extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        errors:{}
    };
    

    async componentDidMount(){
        const {id}=this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        })
    }


    onChange = (e) => this.setState({[e.target.name] : e.target.value });

    onSubmit = async (dispatch,e)=>{
        e.preventDefault();
        const {name,email,phone}=this.state;

        if(name===''){
            this.setState({errors:{name:'Name is Required'}})
            return;
        }
        if(email===''){
            this.setState({errors:{email:'EMail is Required'}})
            return;
        }
        if(phone===''){
            this.setState({errors:{phone:'Phone is Required'}})
            return;
        }

        const updContact = {
            name,
            email,
            phone
        }
        

        const {id}=this.props.match.params;

        const res= await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updContact);
        console.log(res)
        dispatch({type:'UPDATE_CONTACT', payload:res.data});




        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        });

        this.props.history.push('/');


    };


    render() {
        const {name, email, phone,errors} = this.state;

        return(
            <Consumer>
                {value =>{
                    const {dispatch} = value;
                    return(
                        <div className="card mb-4">
                <div className="card-header">Edit Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this,dispatch)}>


                        <div className="form-group">
                            <label htmlFor="name" className="form-control-label">Name</label>
                            <input className={classnames(("form-control form-control-lg"),{
                                "is-invalid":this.state.errors.name
                            })} type="text"
                                placeholder="Enter Name!"
                                name="name"
                                value={name}
                                onChange={this.onChange}
                            ></input>
                            {errors.name && <div className="invalid-feedback">
                                {errors.name}
                            </div> }
                            
                        </div>


                        <div className="form-group">
                            <label htmlFor="email" className="form-control-label">Email</label>
                            <input className={classnames(("form-control form-control-lg"),{
                                "is-invalid":this.state.errors.email
                            })} type="email"
                                placeholder="Enter Email-ID!"
                                name="email"
                                value={email}
                                onChange={this.onChange}
                            ></input>
                            {errors.email && <div className="invalid-feedback">
                                {errors.email}
                            </div> }
                        </div>



                        <div className="form-group">
                            <label htmlFor="phone" className="form-control-label">Phone</label>
                            <input className={classnames(("form-control form-control-lg"),{
                                "is-invalid":this.state.errors.phone
                            })}type="tel"
                                placeholder="Enter Phone Number!"
                                name="phone"
                                value={phone}
                                onChange={this.onChange}
                            ></input>
                            {errors.phone && <div className="invalid-feedback">
                                {errors.phone}
                            </div> }
                        </div>



                        <input type="submit" value="Edit Contact" className="btn btn-block btn-dark"></input>
                    </form>
                </div>
            </div>
                    )
                }}
            </Consumer>
        )

    }
}


export default editContact;