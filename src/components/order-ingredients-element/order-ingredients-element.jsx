import cn from "classnames";
import style from "./order-ingredients-element.module.css";

export default function OrderIngredientsElement({
  ingredient,
  index,
  length,
  showCounter,
}) {
  return (
    <li className={style.element} style={{ zIndex: 15 - index }}>
      <img
        className={style.image}
        src={ingredient.image_mobile}
        alt={ingredient.name}
      />
      {showCounter && (
        <p className={`text text_type_main-default ${style.text}`}>{`+${
          length - (index + 1)
        }`}</p>
      )}
    </li>
  );
}
