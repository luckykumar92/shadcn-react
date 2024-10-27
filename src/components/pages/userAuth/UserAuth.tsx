import { useState } from 'react';
import Login from './login/Login';
import Signup from './signup/Signup';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {isLogin ? (
        <Login toogleForm={toggleForm} />
      ) : (
        <Signup toogleForm={toggleForm} />
      )}
    </div>
  );
};

export default Account;