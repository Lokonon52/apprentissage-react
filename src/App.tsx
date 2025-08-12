import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // Change le titre de la page quand count change
  useEffect(() => {
    document.title = `Compteur : ${count}`;
    console.log("useEffect exécuté");
  }, [count]);

  return (
    <section className="bg-slate-500 h-screen">
       <div className="text-3xl font-extrabold">
  <Link to="/me/users">Les demandes</Link>
      </div>
      <h1 >Compteur : <span className="text-white font-semibold">{count}</span></h1>
      <button 
      onClick={() => setCount(count + 1)}
      className="text-2xl font-semibold border-4 border-solid border-blue-500 bg-emerald-200"
      >
        +1</button>
    </section>
  );
}
