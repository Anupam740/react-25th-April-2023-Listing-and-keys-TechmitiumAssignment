import React from 'react';

function App() {
  const productDetails = [
    {
    
      productId :"1",
      productPic :"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Shoe-PlainDerby-Black.jpg/220px-Shoe-PlainDerby-Black.jpg" ,
      productName : "Derby shoe" ,
      Brand :"Sketchers" ,
      productDescription :"A derby is a style of boot or shoe characterized by quarters, with shoelace eyelets that are sewn on top of the vamp." ,
      Price : "15",
      Rating :"4.2" 
},
     {
      productId :"2",
      productPic :"https://upload.wikimedia.org/wikipedia/en/thumb/3/33/VenetianShoe.jpg/350px-VenetianShoe.jpg",
      productName : "Venetian loafers",
      Brand :"Woodland",
      productDescription: "Venetian-style shoes or Venetian-style loafers are mid-heel slippers with an upper or top part that is slightly open to the kick of the foot and the ankle bone.",
      Price : "12",
      Rating : "4.8", 
     },
     {
      productId :"3",
      productPic :"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Saucony_Racing_Flat.jpg/220px-Saucony_Racing_Flat.jpg" ,
      productName : "Racing flat",
      Brand :"Liberty",
      productDescription: "Racing flats have only small or no heel lift, and little padding or support. The heel lift of flats ranges from 4mm to 10mm which is closer to the heel lift seen in trainers.",
      Price : "17",
      Rating :"4.0" ,
     }
  ];

  return (
    <div className="App">
      {productDetails.map((productDetail) => (
        <div key={productDetail.productId}>
          <img src={productDetail.productPic} alt={productDetail.name} />
          <h2>{productDetail.productName}</h2>
          <h4>{productDetail.Brand}</h4>
          
          <p>{productDetail.productDescription}</p>
          <p>Price: <b>${productDetail.Price}</b></p>
          
          <h4>{productDetail.Rating}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
