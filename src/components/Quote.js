import React from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions/quoteActions";
import styled from "styled-components";

const Para = styled.p`
  font-size: 2rem;
  font-family: "Baskervville";
  margin-left: 6%;
  margin-right: 6%;
  color: white;
  font-weight: bold;
`;

const Button = styled.button`
  border-radius: 10px;
  padding: 20px;
  font-size: 1rem;
  margin-top: 1%;
  font-family: "Baskervville";
  font-weight: bold;
  background-color: white;
`;

const Quote = props => {
  return (
    <div>
      {!props.quote && !props.isLoading && (
        <Para>Consult the Man with Infinite Pearls of Wisdom 🔮</Para>
      )}

      {props.quote && <Para>{props.quote}</Para>}

      <Button onClick={props.getQuote}>Sensei Me</Button>
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
