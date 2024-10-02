import React from 'react';
import { useSelector } from 'react-redux';
import { DiCodeigniter } from 'react-icons/di';
import { AiOutlinePlus } from 'react-icons/ai';
import './DashView.css';
import Card from '../Card/Card';

const DashView = () => {
  const { selectedData, user } = useSelector((state) => state.selectData);

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: 'space-evenly' }}>
        {selectedData.map((group, groupIndex) => (
          <div key={groupIndex} className="dashCardContainer">
            <div className="dashCardHeading flex-sb">
              <div className="leftView">
                {user ? (
                  <div className="imageContainer relative" style={{ width: '15px', height: '15px' }}>
                    <img
                      style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&w=1000&q=80"
                      alt="User Avatar"
                    />
                  </div>
                ) : (
                  <DiCodeigniter />
                )}
                <span>
                  {group?.title} {group?.value?.length}
                </span>
              </div>
              <div className="rightView">
                <AiOutlinePlus />
                <span style={{ letterSpacing: '2px' }}>...</span>
              </div>
            </div>
            <div className="dashList flex-gap-10">
              {group?.value?.map((item) => (
                <Card key={item.id} id={item.id} title={item.title} tag={item.tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default DashView;
