// AUTHOR: HARSHIT GAJJAR

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

export const pizzaSizes = [
  {
    sid: 0,
    size: 6,
  },
  {
    sid: 1,
    size: 8,
  },
  {
    sid: 2,
    size: 10,
  },
];

export const pizzaData = [
  {
    title: "Add Toppings",
    data: [
      {
        tid: 1,
        name: "Onion",
        calories: 25,
        price: 1.99,
        url: "onion",
      },
      {
        tid: 2,
        name: "Black Olives",
        calories: 35,
        price: 2.99,
        url: "olive",
      },
      {
        tid: 3,
        name: "Mushrooms",
        calories: 75,
        price: 3.99,
        url: "mush",
      },
      {
        tid: 4,
        name: "Green Peppers",
        calories: 45,
        price: 4.99,
        url: "pep",
      },
    ],
  },
  {
    title: "Choose Your Crust",
    data: [
      {
        bid: 0,
        name: "Cheesy Bytes",
        calories: 625,
        price: 7.99,
      },
      {
        bid: 1,
        name: "Thin Crust",
        calories: 235,
        price: 6.99,
      },
      {
        bid: 2,
        name: "Fresh Pan",
        calories: 375,
        price: 5.99,
      },
    ],
  },
  {
    title: "Price Details",
    data: ["Base Price", "Extras", "Total Calories"],
  },
];

export const burgerSizes = [
  {
    sid: 0,
    size: "Single Patty",
  },
  {
    sid: 1,
    size: "Double Patty",
  },
];

export const burgerData = [
  {
    title: "Add Toppings",
    data: [
      {
        tid: 1,
        name: "Lettuce",
        calories: 15,
        price: 1.49,
        className: "lettuce",
      },
      {
        tid: 2,
        name: "Extra Cheese",
        calories: 65,
        price: 3.99,
        className: "cheese",
      },
      {
        tid: 3,
        name: "Tomato",
        calories: 25,
        price: 1.99,
        className: "tomato",
      },
      {
        tid: 4,
        name: "Extra Ranch",
        calories: 30,
        price: 4.99,
        className: "ranch",
      },
    ],
  },
  {
    title: "Choose Your Patty",
    data: [
      {
        bid: 0,
        name: "Super Deluxe Beef",
        calories: 625,
        price: 9.99,
        className: "beef",
      },
      {
        bid: 1,
        name: "Chicken",
        calories: 250,
        price: 8.99,
        className: "chicken",
      },
      {
        bid: 2,
        name: "Pork",
        calories: 380,
        price: 8.99,
        className: "pork",
      },
      {
        bid: 3,
        name: "Veggie",
        calories: 280,
        price: 5.99,
        className: "veggie",
      },
    ],
  },
  {
    title: "Price Details",
    data: ["Base Price", "Extras", "Total Calories"],
  },
];
