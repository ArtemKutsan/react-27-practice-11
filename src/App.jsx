import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/home';
import NotFoundPage from './pages/not-found';
import UsersPage from './pages/users';
import UserProfilePage from './pages/user-profile';

function App() {
  return (
    <>
      <main>
        <h1 className="container">React 27 Practice 11</h1>

        <section>
          <div className="container">
            <h2>Задача 1: Роутинг хук useParams()</h2>
            <Nav />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/users/:userId" element={<UserProfilePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
