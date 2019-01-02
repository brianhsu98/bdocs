import React from "react";
import { Checkbox } from "semantic-ui-react";

class ToggleAutocomplete extends React.Component {
  render() {
    if (!this.props.visible) {
      return null;
    }
    return (
      <Checkbox
        label="Autocomplete"
        onChange={this.props.handleToggleAutocomplete}
        style={{
          paddingLeft: this.props.paddingLeft,
        }}
        checked={this.props.autocompleteOn}
      />
    );
  }
}

export default ToggleAutocomplete;
