// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestion, onSelect, key} = props

  const onChoose = () => {
    onSelect(key)
  }

  return (
    <li className="suggestion-container">
      <div className="suggestion-item-container">
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="image"
          onClick={onChoose}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
