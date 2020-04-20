import React, { Component } from 'react'
import Contact from './Contact';
import {Consumer} from '../../context';
class Contacts extends Component {
    
    render() {
        return(
            <Consumer>
                {value => {
                    const {contacts} = value;
                    return(
                        <React.Fragment>
                            <h1 className="display-4 mb-3">
                                <span className="text-success">Contact</span><span className="text-danger"> List</span>
                            </h1>
                            {contacts.map(contact => (
                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                ></Contact>
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;