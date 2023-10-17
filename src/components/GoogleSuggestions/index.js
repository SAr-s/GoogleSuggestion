// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearchingInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSelect = id => {
    const {suggestionsList} = this.props
    const updatedSuggestion = suggestionsList.filter(
      eachSuggestion => eachSuggestion.id === id,
    )
    this.setState({searchInput: updatedSuggestion.suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    const {id} = searchResult

    return (
      <div className="outer-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="image1"
        />
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="image"
          />
          <input
            type="search"
            value={searchInput}
            onChange={this.onSearchingInput}
            placeholder="Search Google"
            className="input"
          />
          <ul className="suggestion-container">
            {searchResult.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestion={eachItem.suggestion}
                onSelect={this.onSelect}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
