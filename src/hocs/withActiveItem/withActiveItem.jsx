import React from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpened: false,
      };

      this._handleToggleClick = this._handleToggleClick.bind(this);
    }

    _handleToggleClick() {
      this.setState(
          (state) => ({
            isOpened: !state.isOpened,
          })
      );
    }
    render() {
      const {isOpened} = this.state;
      return (
        <Component
          {...this.props}
          isOpened={isOpened}
          handleToggleClick={this._handleToggleClick}
        />
      );
    }
  }
  return WithActiveItem;
};

export default withActiveItem;
