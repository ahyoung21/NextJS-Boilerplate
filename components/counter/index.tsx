import React, { useEffect } from 'react';
import { useSelector, useDispatch } from '../../store/store';
import {
  decrement,
  incrementByAmount,
  asyncWeatherFetch,
} from '../../store/modules/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => state.counter.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncWeatherFetch('seoul'));
    console.log('dat1a', data);
  }, []);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(1))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(1))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
export default Counter;
