import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContacts';
import ContactList from './ContactList';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }; 

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  
  //useEffect() react hook-whenever the value get chnges useeffect help us to render the  components again. it takes a arrow fun

//getting the record from the local storage

// useEffect(()=>{
//  const retrieveContacts =);
//  if(retrieveContacts) setContacts(retrieveContacts);
// }, []);

//settingt he data into the local storage  and have a dependency array

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddContact addContactHandler={addContactHandler} />
            }
          />
          {/* <Route path="/contact/:id" element={<ContactDetail />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
