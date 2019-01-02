import React from "react";
import { Dropdown } from "semantic-ui-react";

class FontSizeSelector extends React.Component {
  render() {
    if (!this.props.visible) {
      return null;
    }
    return (
      <Dropdown
        labeled
        search
        searchInput={{ type: "number" }}
        selection
        compact
        value={this.props.fontSize}
        options={[
          { key: 8, text: "8", value: 8 },
          { key: 9, text: "9", value: 9 },
          { key: 10, text: "10", value: 10 },
          { key: 11, text: "11", value: 11 },
          { key: 12, text: "12", value: 12 },
          { key: 13, text: "13", value: 13 },
          { key: 14, text: "14", value: 14 },
          { key: 15, text: "15", value: 15 },
          { key: 16, text: "16", value: 16 },
          { key: 17, text: "17", value: 17 },
          { key: 18, text: "18", value: 18 },
          { key: 24, text: "24", value: 24 },
          { key: 30, text: "30", value: 30 },
        ]}
        onChange={this.props.handleFontSizeChange}
        closeOnChange
        style={{
          paddingLeft: this.props.paddingLeft,
        }}
      />
    );
  }
}

export default FontSizeSelector;
