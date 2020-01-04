import React from "react"
import LanguageContext from "../contexts/LanguageContext"
import ColorContext from "../contexts/ColorContext"

class Button extends React.Component {
  static contextType = LanguageContext //specific naming 'contextType'
  renderSubmit(value) {
    return value === "english" ? "Submit" : "보내기"
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button
