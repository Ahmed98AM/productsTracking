import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [productData, setProductsData] = useState(null);
  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products?limit=10");
        setProductsData(await data.json());
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
      
  }, []);

  const colorsArr = [
    "#FF8B64",
    "#55C2E6",
    "#FF5E7D",
    "#7335D2",
    "#4BCF82",
    "#F1C75B",
  ];

  return (
    <div className="App">
      {
        productData?
          productData.map((product) => {
            return (
              <div key={product.id} className='wrapper'>
                <div className='card'>
                  <div className='content'>
                    <div className='header'>
                      <p className='category'>{product.category}</p>
                      <div className="nav-icon">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                      </div>
                    </div>
                    <p className='price'>{product.price}$</p>
                    <p className='footer'>
                      <span className='title'>{product.title}</span>
                      <span className='avail'>InStore<br/> 120</span>
                    </p>
                    <p className='footer'></p>
                  </div>
                </div>
                <div className='card-background' style={{background: colorsArr[Math.floor(Math.random() * 10)]}}></div>
              </div>
            )
          }) 
          :
          null  
      }   
    </div>
  );
}

export default App;
