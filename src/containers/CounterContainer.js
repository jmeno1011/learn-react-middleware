import { connect } from "react-redux";
import Counter from "../components/Counter";
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from "../modules/counter";

// const CounterContainer = ({ number, increase, decrease }) => {
const CounterContainer = ({
  number,
  increase,
  increaseAsync,
  decrease,
  decreaseAsync,
}) => {
  return (
    // <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    // increase,
    increaseAsync,
    // decrease,
    decreaseAsync,
  }
)(CounterContainer);
