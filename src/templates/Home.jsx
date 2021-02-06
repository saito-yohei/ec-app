import React from 'react';
import {getUserId, getUsername} from '../reducks/users/selectors';
import {useSelector, useDispatch} from 'react-redux';
import {signOut} from '../reducks/users/operations';
import {PrimaryButton} from '../components/UIkit';
import {push} from 'connected-react-router';

const Home = () => {
  const selector = useSelector(state => state);
  const uid = getUserId(selector);
  const username = getUsername(selector);
  const dispatch = useDispatch();

  return(
    <div>
      <h2>Home</h2>
      <p>ユーザーID: {uid}</p>
      <p>ユーザー名: {username}</p>
      <div className="center">
        <PrimaryButton 
          label={"Sign Out"}
          onClick={() => dispatch(signOut())}
        />
      </div>
      <div className="center">
        <PrimaryButton 
          label={"商品登録へ"}
          onClick={() => dispatch(push('/product/edit'))}
        />
      </div>
    </div>
  );
};

export default Home;