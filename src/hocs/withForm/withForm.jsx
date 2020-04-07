import React from 'react';
import {extend} from "../../utils";


const initialState = {
  comment: ``,
  rating: null,
};

const withForm = (Component) => {
  class WithForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = initialState;

      this.handleChange = this.handleChange.bind(this);
      this.handleReset = this.handleReset.bind(this);
    }

    handleChange(fieldName, value) {
      this.setState((state) => extend(state, {[fieldName]: value}));
    }

    handleReset() {
      this.setState(initialState);
    }

    render() {
      return (
        <Component
          {...this.props}
          values={this.state}
          onReset={this.handleReset}
          onChange={this.handleChange}
        />
      );
    }
  }
  return WithForm;
};

export default withForm;
