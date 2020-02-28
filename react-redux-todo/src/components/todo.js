import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../actions/deleteTodo';
import { completeTodoAction } from '../actions/completeTodo';
import { bindActionCreators } from 'redux';

class Todo extends Component {
    render() {
        return (
            <div className="to-do">
                <span className="to-do-name" style={{
                    textDecoration: this.props.item.isComplete ? 'line-through' : 'none'
                }}>
                    {this.props.item.workName}</span>
                <span className="space"></span>
                <div className="ui vertical animated fade green button" onClick={() => this.props.completeTodoById(this.props.item)}>
                    <div className="hidden content">Done</div>
                    <div className="visible content">
                        <i className="trophy icon"></i>
                    </div>
                </div>
                <div className="ui vertical animated fade red button" onClick={() => this.props.deleteTodoById(this.props.item.key)}>
                    <div className="hidden content">Delete</div>
                    <div className="visible content">
                        <i className="trash icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ deleteTodoById: deleteTodoAction, completeTodoById: completeTodoAction }, dispatch);
};

export default connect(null, mapDistachToProps)(Todo);
