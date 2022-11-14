export const fontSize = "2xl";

export const menu = [
  {
    name: "Pizza",
    img: "css-sprite-pizza",
  },
  {
    name: "Burgers",
    img: "css-sprite-burger",
  },
  {
    name: "Sandwich",
    img: "css-sprite-sandwich",
  },
  {
    name: "Smoothy",
    img: "css-sprite-milkshake",
  },
  {
    name: "Soda",
    img: "css-sprite-soda",
  },
];

export const pizzas = [
  {
    pid: "p1",
    name: "Spicy Chicken Ranch",
    img: "css-sprite-pizza2",
    calories: "500",
    price: 10.99,
  },
  {
    pid: "p2",
    name: "Veggie Paradise",
    img: "css-sprite-pizza3",
    calories: "400",
    price: 8.99,
  },
];

export const burgers = [
  {
    pid: "b1",
    name: "Veggie Burger",
    img: "css-sprite-burger1",
    calories: "220",
    price: 6.99,
  },
  {
    pid: "b2",
    name: "Chichen Deluxe",
    img: "css-sprite-burger2",
    calories: "480",
    price: 7.99,
  },
];

export function generateCart(arr, obj) {
  let tarr = [...arr];
  const i = arr.findIndex((_element) => _element.pid === obj.pid);
  if (i > -1) {
    let tempObj = arr[i];
    tarr[i] = {
      ...tempObj,
      qty: tempObj.qty + obj.qty,
    };
  } else tarr.push(obj);

  return tarr;
}
