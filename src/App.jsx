
import PriceCard from './PriceCard';
import './App.css'; // Ensure your CSS file is imported for styling

function App() {
  const cardsData = [
    {
      title: "Basic",
      price: "$9.99/month",
      features: [
        { name: "Feature 1", available: true },
        { name: "Feature 2", available: false },
        { name: "Feature 3", available: true },
        { name: "Feature 4", available: false },
      ],
    },
    {
      title: "Pro",
      price: "$19.99/month",
      features: [
        { name: "Feature 1", available: true },
        { name: "Feature 2", available: true },
        { name: "Feature 3", available: false },
        { name: "Feature 4", available: true },
      ],
    },
    {
      title: "Enterprise",
      price: "$29.99/month",
      features: [
        { name: "Feature 1", available: true },
        { name: "Feature 2", available: true },
        { name: "Feature 3", available: false },
        { name: "Feature 4", available: true },
      ],
    },
  ];
  

  return (
    <section style={{  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // This makes the section fill the entire viewport height
    width: '100vw', }}>
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <PriceCard key={index} title={card.title} price={card.price} features={card.features} />
      ))}
    </div>
    </section>
  );
}

export default App;
