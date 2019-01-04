import React, { Component } from 'react';
//refactoring using arrow -- interesting.
class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: 'Hello!'};
  }
   render() {
     return (
<div className="search-bar">
     <input
     value={this.state.term}
     onChange={event => this.onInputChange(event.target.value)} />

     <style jsx>{`
     .search-bar {
       margin: 20px;
       text-align: center;
     }

     search-bar input {
       width: 75%;
     }
     `}</style>
</div>



);
   }
onInputChange(term) {
  this.setState({term});
  this.props.onSearchTermChange(term);
}


}

export default SearchBar;
