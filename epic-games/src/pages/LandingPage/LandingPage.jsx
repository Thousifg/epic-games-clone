import { useEffect, useState } from "react";
import "./landingPage.module.css";

export default function Homepage() {
    const [text, setText] = useState("");
    const [todolist, setTodolist] = useState([]);
    const [formData, setFormData] = useState({});
    const [item, setItem] = useState([]);
  
    useEffect(() => {
      getHomepage();
    }, []);
    console.log("todolist", todolist);
  
    function getHomepage() {
      fetch("http://localhost:3000/gameAllData")
        .then((data) => data.json())
        .then((data) => {
          setTodolist(data);
          console.log(data);
        });
    }
    return (
        <>
        <div className="main">
              <div className="title"> {e.title} title</div>
              <div className="thumbnail"> {e.thumbnail} thumbnail</div>
              <div className="price"> {e.price} price</div>
        </div>
        </>
    );
}