import React from 'react';
import './Card.css';

const Card = ({ id, title, tag, status }) => {
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
      <div className="cardHeading flex-sb">
        <span className="color-grey" style={{ textTransform: 'uppercase' }}>
          {id}
        </span>
        <div className="imageContainer relative" style={{ width: '30px', height: '30px' }}>
          <img
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&w=1000&q=80"
            alt="User Avatar"
          />
          <div className="showStatus" />
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>
      <div className="cardTags">
        {tag?.length ? (
          tag.map((elem, index) => (
            <div key={index} className="tags color-grey">
              <span>•</span> {elem}
            </div>
          ))
        ) : (
          <div className="tags color-grey">No tags available</div>
        )}
      </div>
    </div>
  );
};

export default Card;
