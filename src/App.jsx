import { useState } from "react";
import "./App.css";
import contactsJSON from './contacts.json'

function App() {
const [contacts, setContacts] = useState(contactsJSON.slice(0,5))
  
return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              </tr>
              </thead>
              <tbody>
      {contacts.map((oneContact) => {
       return (
       <tr key={oneContact.id}>
          <td>
            <img src={oneContact.pictureUrl} style={{height: "200px"}} />
              </td>
              <td>{oneContact.name}</td>
              <td>{oneContact.popularity}</td>
              </tr>
       );
            })}
            </tbody>
            </table>
            </div>
)
          }
export default App;
