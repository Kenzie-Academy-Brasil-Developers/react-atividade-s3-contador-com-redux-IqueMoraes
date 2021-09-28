import { useDispatch, useSelector } from "react-redux";
import { addOne, subOne } from "../store/modules/Counter/actions";

export default function DisplayNumber() {
  const dispatch = useDispatch();

  const num = useSelector((state) => state.counter);

 
  console.log(num);
  return (
    <>
      <p> {num}</p>
      <div>
        <button onClick={() => dispatch(addOne())}>+</button>
        <button onClick={() => dispatch(subOne())}>-</button>
      </div>
    </>
  );
}
