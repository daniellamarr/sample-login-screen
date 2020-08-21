import React, {useState} from 'react';

import LoginView from '../../component/view/auth/login';

const login = () => {
  const [countryCode, setCountryCode] = useState('+234');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <LoginView
      countryCode={countryCode}
      phoneNumber={phoneNumber}
      setCountryCode={value => setCountryCode(value)}
      setPhoneNumber={value => setPhoneNumber(value)}
    />
  );
};

export default login;
