import "./styles.css";
import "./styles2.scss";
import moment from "moment";

const getTodos = () => import("./api");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  getTodos().then(({ fetchTodos }) => {
    fetchTodos().then((resp) => console.log(resp));
  });
});

console.log("hello");
console.log(moment().format("YYYY-MM-DD"));
