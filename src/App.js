import React from 'react';

function Food({name,picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture}></img>
  </div>
}

const foodILike = [
  {
    name: "kimchi",
    image:"https://duckduckgo.com/?q=kimchi&t=h_&iax=images&ia=images"
  },
  {
    name:"ramun",
    image:"https://duckduckgo.com/?q=%EB%9D%BC%EB%A9%B4&t=h_&iar=images&iax=images&ia=images"
  },
  {
    name:"bulgoggi",
    image:"https://barefeetinthekitchen.com/beef-bulgogi-recipe/"
  },
  {
    name:"bap",
    image:"https://dadonam.tistory.com/18"
  },
]

function App() {
  return (// 리엑트는 재사용 가능한 component를 만들고 값을 argument 로 전달할 수 있음. 
    <div className="App">
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>// dish => 는 객체 !! foodILike가 가지고 있는 하나의 객체들을 의미함.
  );
}

export default App;
