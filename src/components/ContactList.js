import React from "react";
import ContactCard from "./ContactCard";

const ContactList =(props)=>{
 
    // created a function 
    const renderContactList=props.contacts.map((contact) =>{
        return(
           <ContactCard contact={contact}/>
        );
    });
    return(
        //reference varaible in JSX 
        <div className="ui celled list">{renderContactList}</div>
    );
};

export default ContactList;