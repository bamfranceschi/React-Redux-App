import React from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions/quoteActions";

const Quote = props => {
  return (
    <div>
      {!props.quote && !props.isLoading && (
        <p>Consult the Man with Infinite Pearls of Wisdom 🔮</p>
      )}
      {/* Logic for providing a spinner */}

      {props.quote && <p>{props.quote}</p>}

      <button onClick={props.getQuote}>Give Me A Dose</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { getQuote })(Quote);
