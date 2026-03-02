// src/components/users/index.jsx
// import styles from './users.module.css';
import { Link } from 'react-router-dom';
import { usersList } from './usersList';

function UsersPage() {
  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {usersList.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
