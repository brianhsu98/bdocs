import React from "react";
import { Dropdown } from "semantic-ui-react";
import LanguageOptions from "./LanguageOptions";

class ModeSelector extends React.Component {
  render() {
    if (!this.props.visible) {
      return null;
    } else {
      return (
        <Dropdown
          search
          selection
          value={this.props.value}
          options={LanguageOptions}
          onChange={this.props.handleModeChange}
          hidden
        />
      );
    }
  }
}

ModeSelector.defaultProps = {
  value: ""
};

export default ModeSelector;
