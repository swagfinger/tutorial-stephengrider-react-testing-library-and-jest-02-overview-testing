import { useState } from 'react';

const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onUserAdd({ name, email });

    setName('');
    setEmail('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
              Name
            </label>
          </div>
          <div>
            <label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
              Email
            </label>
          </div>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </>
  );
};

export default UserForm;
