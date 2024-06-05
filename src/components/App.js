import React from 'react';
import './App.css';
import Header from './Header'; 
import AddContact from './AddContacts';
import ContactList from './ContactList';
function App() {
//rendering list in react .. created a list using array
  const contacts=[
    {
      id:"1",
      name:"Nidhi",
      email:"guptanidhs@gmail.com"
    },
    {
      id:"2",
      name:"suman",
      email:"suman@gmail.com"
    }
  ];
  return (
    <div className='ui container'> 
      <Header/>
       <AddContact/>
       {/* Props- pass data from parent to child   & contacts as a property and contacts as array */}
     <ContactList contacts={contacts}/> 
    </div>
  );
}

export default App;
