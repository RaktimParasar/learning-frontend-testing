import { CounterTwoProps } from "./CounterTwo.types";

export const CounterTwo = ({ count, handleIncrement, handleDecrement }: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter two</h1>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
