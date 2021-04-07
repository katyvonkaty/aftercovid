import React from "react"
import TextField from '@material-ui/core/TextField';


class SearchBar extends React.Component  {
  state = {term:""}

  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onFormSubmit(this.state.term)
  }
  render(){

    return(
      <div>
      <form onSubmit={this.onFormSubmit}>
      <TextField
        id="standard"
        label="Search Activities"
        value={this.state.term}
        style={{ margin: 8 }}
        margin="normal"
        onChange={this.onInputChange}
        InputLabelProps={{
          shrink: true,
        }}
        />
              </form>
      </div>
    )
  }
}


export default SearchBar
