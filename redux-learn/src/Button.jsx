import { useDispatch } from "react-redux";
import { addMoney } from "./store";
import {removeMoney} from "./store"


export default function Button() {
  const dispatch = useDispatch();


  return (
    <>
    <button onClick={() => dispatch(addMoney(500))}>
      Add 500
    </button>
    <button onClick={() => dispatch(removeMoney(1000))}>
      Remove 500
    </button>
    </>
  );
}