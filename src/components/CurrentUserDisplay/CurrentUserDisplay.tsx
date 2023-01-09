import { useContext } from 'react';
import { User } from 'types/types.d';
import { AppContext } from 'contexts/AppContext';
import ApiService from 'services/ApiService';

import './CurrentUserDisplay.scss';

const CurrentUserDisplay = () => {
  const { state, dispatch } = useContext(AppContext);
  const user: User = state.currentUser;

  const handleChangeUser = () => {
    ApiService.getCurrentUser()
      .then((response) => response.json())
      .then((user) => {
        dispatch({
          type: 'set-current-user',
          payload: user,
        });
      });
  };

  return (
    <div className="current-user-display">
      <p className="name">{user.name}</p>
      <p className="coupon-code">Coupon: {user.couponCode || 'None'}</p>
      <p className="coupon-validity">
        Coupon is{' '}
        {ApiService.validateCoupon(user.couponCode, state.couponCode)
          ? 'Valid'
          : 'Invalid'}
      </p>
      {/* This is a button that will log you into a random user so you can see that the coupon persists and does not apply to other users */}
      <button className="btn-random-user" onClick={() => handleChangeUser()}>
        Pick Random User
      </button>
    </div>
  );
};

export default CurrentUserDisplay;
