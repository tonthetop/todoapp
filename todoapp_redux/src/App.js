import './App.css';
import React, { Component } from 'react';
import Taskform from './Components/Taskform'
import Control from './Components/Control'
import Tasklist from './Components/Tasklist'
import { connect } from 'react-redux';
import * as actions from './actions'
class App extends Component {

    constructor(props) {
        super(props)
        //this.OnDisplayForm = this.OnDisplayForm.bind(this); 
        // // Get all defined class methods
        // const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
        // // Bind all methods
        // methods
        //     .filter(method => (method !=== 'constructor'))
        //     .forEach((method) => { this[method] = this[method].bind(this); }); 
    }

    onAddTask = () => {
        if (Object.keys(this.props.taskEditing).length === 0) {
            this.props.onToggleForm()
        } else {
            this.props.onOpenForm()
            this.props.onResetItemEditting()
        }

    }
    
    render() {
        var displayForm = this.props.isDisplayForm

        return (
            <div className="container">

                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={displayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                        {/* tasksform */}
                        {displayForm ? <Taskform /> : ''}
                    </div>
                    <div className={displayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onAddTask}
                        >
                            <span className="fa fa-plus mr-5" ></span>Thêm Công Việc
                        </button>
                        <button type="button" className="btn btn-danger"
                            onClick={this.props.onGenerate}>
                            Generate
                        </button>

                        <Control />

                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <Tasklist />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        taskEditing: state.taskEditing,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onGenerate: () => {
            dispatch(actions.generateTask())
        },
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onResetItemEditting: () => {
            dispatch(actions.resetItemEditting())
        },
        onSearchByName: (keyName) => {
            dispatch(actions.searchByName(keyName))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
