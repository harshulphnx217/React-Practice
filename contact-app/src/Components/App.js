import './App.css';
import React from 'react';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContacList'
function App() {

  const contacts = [
    {
      id:"1",
      name:"harshul",
      email:"test1@gmail.com"
    },
    {
      id:"2",
      name:"janesh",
      email:"test2@gmail.com"
    }
  ];


  return (
    <div className='ui container'>
      <Header/>
      <AddContact />
      <ContactList/>
    </div>
  );
}

export default App;
