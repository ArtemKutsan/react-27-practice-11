// src/components/user-profile/index.jsx
// import styles from './user-profile.module.css';
import { useParams } from 'react-router-dom';
import { usersList } from '../users/usersList';

function UserProfilePage() {
  const { userId } = useParams();

  const user = usersList.find((user) => user.id === Number(userId));

  if (!user) return <h2>Пользователь не найден</h2>;

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <p>
        <strong>Имя:</strong> {user.name}
      </p>
      <p>
        <strong>Возраст:</strong> {user.age}
      </p>
      <p>
        <strong>Биография:</strong> {user.bio}
      </p>
    </div>
  );
}
export default UserProfilePage;
