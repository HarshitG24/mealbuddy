// AUTHOR: HARSHIT GAJJAR

export const fontSize = "2xl";

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

export const pieColors = [
  "#CC3636",
  "#f09312",
  "#6A2135",
  "#FFE15D",
  "#0D4C92",
];

export const cssClass = ["c1", "c2"];
