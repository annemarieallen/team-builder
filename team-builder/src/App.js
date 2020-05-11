import React, {useState} from 'react';

import Form from './components/Form';
import Members from './components/Members'
import './App.css';



function App() {

  //Setup state
  const [teamMembers, setTeamMembers] = useState ({
    id: 1,
    name: 'Annemarie',
    email: 'annemarie@email.com',
    role: 'student',
  });

  const handleSubmit = (member) => {
    setTeamMembers([...teamMembers, member]);
  };

  return (
    <div className="App">
      <h1>Member Submission</h1>
      <Form onSubmit = {handleSubmit}/>
      
    </div>
  );
}

export default App;
