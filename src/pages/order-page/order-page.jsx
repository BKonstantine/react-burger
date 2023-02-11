import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  wsConnectionStartAll,
  wsConnectionStartProfile,
  wsConnectionClosed,
} from "../../services/actions/socketAction";
import { checkUserAccess } from "../../services/actions/userAction";
import { getIngridients } from "../../services/actions/burgerIngredientsAction";
import BurgerDetails from "../../components/burger-details/burger-details";
import style from "./order-page.module.css";

export default function OrderPage({ isAuth }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngridients());
    isAuth
      ? dispatch(wsConnectionStartProfile())
      : dispatch(wsConnectionStartAll());
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, []);

  const orders = useSelector((store) => store.socketReducer.orders);
  const { id } = useParams();
  const order = orders.find((item) => item._id === id);

  return (
    order && (
      <main className={style.main}>
        <BurgerDetails titleClassName={style.title} />
      </main>
    )
  );
}
