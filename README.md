# React Redux boilerplate
Boilerplate with redux, react and webpack

### Commands

(`sudo `)`npm install` to get dependencies.<br>
`webpack` to build development.<br>
`webpack -w` to watch for changes and build develop.<br>
`webpack -p` to build production

### Example container
```javascript
import React from 'react';
import { connect } from 'react-redux';
import { actionFunctionName } from '../actions';
import ComponentName from '../components/ComponentName';

const ComponentContainer = () => {

	const mapStateToProps = (state) => {
		return {
			state: state
		}
	}

	const mapDispatchToProps = (dispatch) => {
		return {
			onItemClick: (id) => {
			dispatch(actionName(id));
		},
		fetchAll(): () => {
			dispatch(anotherAction());
		}
	}
}


class ComponentFetcher extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
    	this.props.fetchAll();
    }
    render() {
        return <ComponentName {...this.props} />;
    }
}


const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentFetcher)

export default ComponentContainer

```
