import React from 'react';
import './Card.css';
import { FaBeer, FaStar } from 'react-icons/fa';


const Card = ({data}) => {

  return (
    <div className="wrapper">
      {data.map((singleShirt) => (
        <div className="MainCard" key={singleShirt.id}>
          {/* //this line keep track all individual the shirt from react */}

          <div className="smallBox-card">
            <div className="imageBox">
              <img src={singleShirt.url} />
              {/* line above connct to url in data.js file */}
            </div>
            <div className="targetSale">{singleShirt.season}</div>
            {/* line above also connct to data.js season: */}
            {/* <div className="targetHover">Quick View</div> */}

            <div className="card-text">
              <h3>{singleShirt.name}</h3>
              {/* //this line above also link to data.js name: */}

              <div className="starAndReview">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p>Review</p>
                <p>{singleShirt.reviews}</p>
                {/* //this line above also link to data.js review: */}
              </div>

              <p>
                ${singleShirt.price}
                <del>${singleShirt.discountPrice}</del>
              </p>
              {/* //this line above also link to data.js price: */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
