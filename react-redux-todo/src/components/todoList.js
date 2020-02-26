import React, { Component } from 'react';
import Todo from './todo';
import { connect } from 'react-redux';
import '../styles/style.css';

class TodoList extends Component {
    render() {
        return (
            <div className="to-do-list">
                <span>
                    {
                        this.props.items.map((element, index) => {
                            return <Todo item={element} key={index} />;
                        })
                    }
                </span>
            </div>
        );
    }
}

const mapStateToProps = () => state => {
    return {
        items: state.todoList
    };
};

export default connect(mapStateToProps)(TodoList);
