import React from 'react';

class Base extends React.Component {
    render() {
        return(
	        <div>
	        	{this.props.children}
	        </div>
        )
    }
}

export default Base;
