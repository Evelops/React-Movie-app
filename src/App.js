import React from 'react';
import PropTypes from "prop-types";

function Food({name,picture,rating}) {
   return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6Mea2CXE0T5R9pbPWubGUgHaEK%26pid%3DApi&f=1",
    rating:5
  },
  {
    id:2,
    name:"ramun",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.CndlP20msq9LmKsnI2Q_wwHaE8%26pid%3DApi&f=1",
    rating:4.9  
  },
  {
    id:3,
    name:"bulgoggi",
    image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frecipe.ezmember.co.kr%2Fcache%2Frecipe%2F2016%2F12%2F30%2Fdf939769792632a48a0eba8bc895e8601.jpg&f=1&nofb=1",
    rating:4.8
  
  },
  {
    id:4,
    name:"bap",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0EkTRtAUxtRkO1XirXRwMQHaEK%26pid%3DApi&f=1",
    rating:4.7
  
  },
];

function App() {
  return (// 리엑트는 재사용 가능한 component를 만들고 값을 argument 로 전달할 수 있음. 
    <div>
      {foodILike.map(dish => (
        <Food rating={dish.rating} key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>// dish => 는 객체 !! foodILike가 가지고 있는 하나의 객체들을 의미함.
  );
}

export default App;
