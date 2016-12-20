import React from 'react';

class TodoSearch extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(){
		let showCompleted = this.refs.showCompleted.checked;
		let searchText = this.refs.searchText.value;
		this.props.onSearch(showCompleted, searchText);
	}

	render(){
		return(
			<div>
				<div className="form-group">
					<input type="text" 
							ref="searchText" 
							placeholder="Search todos..." 
							className="form-control" 
							onChange={this.handleSearch} />
				</div>

				<div className="form-check">
    				<label className="form-check-label">
    	  				<input  type="checkbox" 
    	  						ref="showCompleted"
    	  						className="form-check-input" 
    	  						onChange={this.handleSearch} />
      					Show completed todos
					</label>
  				</div>
			</div>
		);
	}
}

export default TodoSearch;