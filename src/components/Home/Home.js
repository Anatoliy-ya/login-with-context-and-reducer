import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import Card from '../UI/Card/Card';
import styles from './Home.module.css';

const Home = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Рады Вас Видеть Снова!</h1>
      <button onClick={ctx.onLogout}>Выход</button>
    </Card>
  );
};

export default Home;
