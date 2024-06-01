import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Profile() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete('/api/auth/delete', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('token');
      history.push('/login');
    } catch (err) {
      console.error(err);
      alert('Delete account failed');
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
}

export default Profile;
