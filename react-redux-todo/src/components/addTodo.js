import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodoAction } from '../actions/addTodo';

class AddTodo extends Component {

    addTodo(event) {
        if (event.key === 'Enter') {
            this.props.addTodo({ workName: event.target.value, isComplete: false });
            event.target.value = null;
        }
    }

    render() {
        return (
            <div className="ui input focus">
                <input type="text" placeholder="What you're planning to do ?" onKeyDown={event => this.addTodo(event)} />
            </div>

        );
    }
}

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ addTodo: addTodoAction }, dispatch);
};

export default connect(null, mapDistachToProps)(AddTodo);