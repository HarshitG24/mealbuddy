import "./css/menu.css";

function Menu({ name, img, sel, index, setMenu }) {
  return (
    <div
      className={`menu_container ${sel ? "menu_active" : ""}`}
      onClick={() => setMenu(index)}>
      <span className={img}></span>
      <p className="menu_name">{name}</p>
    </div>
  );
}

export default Menu;
