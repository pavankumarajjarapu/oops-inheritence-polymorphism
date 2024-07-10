import cat from "./Cat";

class Tiger extends cat {
  constructor() {
    super();
    console.log(`life style of Tigers:- `);
  }
  // using inheritence and polymorphism.// writing over riding functions using polymorphism
  food = () => {
    console.log(`hunting animals`);
  };
  sleep = () => {
    console.log(`sleeps on trees`);
  };

  speed = () => {
    console.log(`they runs 80mph.`);
  };
  // creating over loading functions but js not supports it
  summ = () => {
    console.log(`zer0`);
  };
  summ = (a) => {
    console.log(`one`);
  };
  summ = (a, b) => {
    console.log(`two`);
  };
  summ = (a, b, c) => {
    console.log(`three`);
  };
}
export default Tiger;
