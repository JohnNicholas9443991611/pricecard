// src/PriceCard.js
// eslint-disable-next-line react/prop-types
function PriceCard({ title, price, features }) {
    return (
      <div className="price-card">
        <h2 style={{color: "gold"}}>{title}</h2>
        <p className="price">{price}</p>
        <hr />
        <ul>
          {features.map((feature, index) => (
            <li className="details" key={index}>
              {feature.available ? '✓' : '✗'} {feature.name}
            </li>
          ))}
        </ul>
        <button>Buy Now</button>
      </div>
    );
  }
  
  
  export default PriceCard;
  