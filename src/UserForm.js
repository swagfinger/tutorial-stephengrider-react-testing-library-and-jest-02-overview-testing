import { useState } from 'react';

const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onUserAdd({ name, email });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </>
  );
};

export default UserForm;
