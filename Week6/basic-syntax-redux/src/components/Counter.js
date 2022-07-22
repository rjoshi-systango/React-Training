import classes from './Counter.module.css';
import {  useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';


const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector(state => state.counter.showCounter);

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
    // dispatch({type: "increment"});
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement())
    // dispatch({type: "decrement"});
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
    // dispatch({type: "toggle", counter: 0});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      
      <div className={classes.new}>
        <button onClick={incrementCounterHandler}>increment Counter</button>
        <button onClick={decrementCounterHandler}>decrement Counter</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/* CLass based Component*/ 

// class Counter extends Component {



//   incrementCounterHandler() {
//     this.props.increment();
//   }
//   decrementCounterHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler()  {}


//   render() {
//     return (
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div className={classes.new}>
//         <button onClick={this.incrementCounterHandler.bind(this)}>increment Counter</button>
//         <button onClick={this.decrementCounterHandler.bind(this)}>decrement Counter</button>

//       </div>
//       <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//     </main>
//     )

//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter 
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: "increment"}),
//     decrement: () => dispatch({type: "decrement"})
//   }
// } 


// export default connect(mapStateToProps, mapDispatchToProps) (Counter);
