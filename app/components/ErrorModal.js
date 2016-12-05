import React from 'react';

class ErrorModal extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		$('#error-modal').modal();
	}

	render(){
		return (		
			<div id="error-modal" className="modal fade">
  				<div className="modal-dialog modal-sm" role="document">
    				<div className="modal-content">
      					<div className="modal-header">
        					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
          						<span aria-hidden="true">&times;</span>
        					</button>
        					<h4 className="modal-title">{this.props.title}</h4>
      					</div>
      					<div className="modal-body">
        					<p>{this.props.message}</p>
      					</div>
      					<div className="modal-footer">
        					<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      					</div>
    				</div>
    			</div>
			</div>
		);
	}
};

ErrorModal.propTypes = {
	title: React.PropTypes.string,
	message: React.PropTypes.string.isRequired
};

ErrorModal.defaultProps = {
	title: 'Error'
};

export default ErrorModal;