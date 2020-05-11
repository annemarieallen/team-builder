import React, {useState} from 'react';

import Form from './components/Form';
import './App.css';





function App() {

  //Setup state
  const [teamMembers, setTeamMembers] = useState ({
    id: Date.now(),
    name: 'Annemarie',
    email: 'annemarie@email.com',
    role: 'student',
  });

  return (
    <div className="App">
      <h1>Member Submission</h1>
      <Form onSubmit = {handleSubmit}/>
      
    </div>
  );
}

export default App;
