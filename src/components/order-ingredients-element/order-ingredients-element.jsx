import cn from "classnames";
import style from "./order-ingredients-element.module.css";

export default function OrderIngredientsElement({
  ingredient,
  index,
  length,
  showCounter,
  extraClass
}) {
  return (
    <li className={cn(style.element, extraClass)} style={{ zIndex: 15 - index }}>
      <img
        className={style.image}
        src={ingredient.image_mobile}
        alt={ingredient.name}
      />
      {showCounter && (
        <p className={`text text_type_main-default ${style.text}`}>{`+${
          length - 6
        }`}</p>
      )}
    </li>
  );
}
