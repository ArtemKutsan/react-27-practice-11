// src/components/user-profile/index.jsx
// import styles from './user-profile.module.css';
import { useParams } from 'react-router-dom';
import { usersList } from '../users/usersList';

function UserProfilePage() {
  const { userId } = useParams();

  const user = usersList.find((user) => user.id === Number(userId));

  if (!user)
    return (
      <>
        <h1>Страница профиля пользователя</h1>
        <p>Пользователь не найден</p>
      </>
    );

  return (
    <div>
      <h1>Страница профиля пользователя</h1>
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
