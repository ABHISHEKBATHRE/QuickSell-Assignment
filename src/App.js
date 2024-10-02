import React, { useEffect } from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import DashView from './components/DashBoard/DashView';
import { useDispatch} from 'react-redux';
import { fetchAllData } from './Actions/DataAction';

const App = () => {
  const dispatch = useDispatch();
 useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return (
    <div style={{ paddingTop: '10px' }}>
      <TopNav />
      <hr style={{ marginTop: '10px' }} />
      <DashView />
    </div>
  );
};

export default App;
