import logo from "./logo.svg";
import "./App.css";
import cat from "./Classes/Cat";
import Tiger from "./Classes/Tiger";

function App() {
  let meow = new cat();
  console.log(`********************`);
  console.log(`life style of cats:-`)
  meow.food();
  meow.sleep();
  
  console.log(`********************`);
  let tiger = new Tiger();
  tiger.food();
  tiger.sleep();
  tiger.speed();
  console.log(`********************`);
  console.log(`example of not working over riding in js:- `);
  tiger.summ(1,2)
  return <div className="App"></div>;
}

export default App;
