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
        this.state = {
            taskEditing: null,
            taskFilter: {
                name: '',
                status: -1
            },
            keySearch: '',
            keySort: null
        }
        //this.OnDisplayForm = this.OnDisplayForm.bind(this); 
        // // Get all defined class methods
        // const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
        // // Bind all methods
        // methods
        //     .filter(method => (method !=== 'constructor'))
        //     .forEach((method) => { this[method] = this[method].bind(this); }); 
    }


    onUpdate = (id) => {
        var tasks = this.state.tasks;
        var item = tasks.find((item) => item.id === id)
        this.setState({ taskEditing: item, displayForm: true })
    }
    onFilter = ({ filterName, filterStatus }) => {
        this.setState({
            taskFilter: {
                ...this.state.taskFilter,
                name: filterName,
                status: parseInt(filterStatus, 10)
            }
        })
    }
    onSearch = (keySearch) => {
        this.setState({
            keySearch: keySearch
        })
    }
    onSort = (type, value) => {
        this.setState({
            keySort: { type: type, value: value }
        })
    }
    render() {
        var displayForm = this.props.isDisplayForm
        var { taskEditing, taskFilter, keySearch, keySort } = this.state;
        // if (keySearch !== '') {
        //     tasks = tasks.filter(item => {
        //         return item.name.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1
        //     })
        // }
        // if (taskFilter.name !== '') {
        //     tasks = tasks.filter(item => {
        //         return item.name.toLowerCase().indexOf(taskFilter.name.toLowerCase()) !== -1
        //     })

        // }
        // if (taskFilter.status !== -1) {
        //     tasks = tasks.filter(item => {
        //         return item.status == taskFilter.status
        //     })
        // }
        // if (keySort){
        //     if (keySort.type === 'name'){
        //         tasks.sort((a,b)=>{
        //             if (a.name>b.name) return keySort.value
        //             else if (a.name < b.name) return -keySort.value
        //             return 0
        //         })
        //     }
        //     if (keySort.type === 'status'){
        //         tasks.sort((a,b)=>{
        //             if (a.status>b.status) return -keySort.value
        //             else if (a.status < b.status) return keySort.value
        //             return 0
        //         })
        //     }
        // }
        var elmTasksForm = displayForm ?
            <Taskform
                task={taskEditing}
            /> : '';
        return (
            <div className="container">

                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={displayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                        {/* tasksform */}
                        {elmTasksForm}                    </div>
                    <div className={displayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary"

                            onClick={this.props.onToggleForm}>
                            <span className="fa fa-plus mr-5" ></span>Thêm Công Việc
                        </button>
                        <button type="button" className="btn btn-danger"
                            onClick={this.props.onGenerate}>
                            Generate
                        </button>
                        {/* control */}
                        <Control
                            onSearch1={this.onSearch}
                            onSort1={this.onSort}
                        ></Control>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <Tasklist
                                    onUpdateStatus1={this.onUpdateStatus}
                                    onUpdate1={this.onUpdate}
                                    onFilter1={this.onFilter}
                                >
                                </Tasklist>
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
        isDisplayForm: state.isDisplayForm
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onGenerate: () => {
            dispatch(actions.generateTask())
        },
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
