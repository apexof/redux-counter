import { connect } from "react-redux";
import App from "./App";
import { increment, decrement, reset } from "./actions/counterActions";

function mapStateToProps(state /*, ownProps*/) {
  return {
    count: state.count
  };
}
const mapDispatchToProps = { increment, decrement, reset };

// function mapDispatchToProps(dispatch) {
//   return {
//     increment: amount => dispatch(increment(amount)),
//     decrement: amount => dispatch(decrement(amount)),
//     reset: () => dispatch(reset())
//   };
// }

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);
const ConnectedApp = connectToStore(App);
export default ConnectedApp;
