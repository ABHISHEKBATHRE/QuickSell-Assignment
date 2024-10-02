import React, { useEffect, useState } from 'react';
import { TiThList } from 'react-icons/ti';
import './TopNav.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from '../../Actions/DataAction';

const getStoredValue = (key, defaultValue) => {
  return localStorage.getItem(key) || defaultValue;
};

const TopNav = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector((state) => state.data);
  const [groupValue, setGroupValue] = useState(getStoredValue('group', 'status'));
  const [orderValue, setOrderValue] = useState(getStoredValue('order', 'priority'));

  const handleGroupValue = (e, isGroup) => {
    const value = e.target.value;
    isGroup ? setGroupValue(value) : setOrderValue(value);
    setDisplayOnClick(false);
    localStorage.setItem(isGroup ? 'group' : 'order', value);
  };

  useEffect(() => {
    dispatch(selectData({ group: groupValue, allTickets, allUsers: allUser, orderValue }));
  }, [dispatch, groupValue, orderValue, allTickets, allUser]);

  return (
    <div className="top-header" style={{ paddingLeft: '10px' }}>
      <button className="p-10 f-16 btn" onClick={() => setDisplayOnClick(!displayOnClick)}>
        <TiThList /> Display
      </button>
      {displayOnClick && (
        <div className="dropOnClick flex-gap-10 p-10">
          <div className="selectGroup flex-sb">
            <span>Grouping</span>
            <select value={groupValue} onChange={(e) => handleGroupValue(e, true)} className="selectStyle">
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="selectGroup flex-sb">
            <span>Ordering</span>
            <select value={orderValue} onChange={(e) => handleGroupValue(e, false)} className="selectStyle">
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNav;
