import React from 'react';

function Food(props) {
  return <h1>I like {props.fav}</h1>;
}

function App() {
  return (// 리엑트는 재사용 가능한 component를 만들고 값을 argument 로 전달할 수 있음. 
    <div className="App">
      <h1>hi!!!</h1> 
      <Food  fav="kimchi"/>  
      <Food  fav="ramen"/>
      <Food  fav="dubu"/>
      <Food  fav="react"/>
    </div>
  );
}

export default App;
