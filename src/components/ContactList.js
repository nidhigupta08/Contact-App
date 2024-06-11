import React from "react";
import ContactCard from "./ContactCard";

const ContactList =(props)=>{
 
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    // created a function 
    const renderContactList=props.contacts.map((contact) =>{
        return(
           <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        );
    });
    return(
        //reference varaible in JSX 
        <div className="ui celled list">{renderContactList}</div>
    );
};

export default ContactList;