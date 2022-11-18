import "./css/burger_topping.css";
export default function BurgerToppings(props) {
  return props.data.map((element) => {
    return <div className={element.className}></div>;
  });
}
