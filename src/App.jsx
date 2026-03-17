import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Counter from "./component/Counter";
import ProductLike from "./component/ProductLike";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
      <div className="container">
        <ProductLike name="Laptop" />
        <ProductLike name="Phone" />
        <ProductLike name="Headphones" />
      </div>
    </>
  );
}

export default App;
