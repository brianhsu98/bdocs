import React from "react";
import { Dropdown } from "semantic-ui-react";

class TabSizeSelector extends React.Component {
  render() {
    if (!this.props.visible) {
      return null;
    }
    return (
      <Dropdown
        labeled
        text="Tab Size"
        direction="right"
        value={this.props.tabSize}
        options={[
          { key: 1, text: "1", value: 1 },
          { key: 2, text: "2", value: 2 },
          { key: 4, text: "4", value: 4 },
          { key: 8, text: "8", value: 8 },
        ]}
        onChange={this.props.handleTabSizeChange}
        closeOnChange
        style={{
          paddingLeft: this.props.paddingLeft,
        }}
      />
    );
  }
}

export default TabSizeSelector;
