import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
class Taskform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }

    componentDidMount() {
        const task = this.props.taskEditing
        if (Object.keys(task).length > 0) {
            this.setState({
                id: task.id,
                name: task.name,
                state: task.status
            })

        } else {
            this.onClear()
        }
    }
    static getDerivedStateFromProps(nextProps, state) {
        const task = nextProps.taskEditing
        if (nextProps && Object.keys(task).length > 0) {
            return task
        } else {
            return null
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    //     const task = nextProps.taskEditing
    //     console.log('receive props: ', task)
    //     if (nextProps && Object.keys(task).length > 0) {
    //         this.setState({
    //             id: task.id, name: task.name, status: task.status
    //         })
    //     } else {
    //         this.onClear()
    //     }
    // }
    
    componentDidUpdate(prevProps){
        console.log(prevProps.taskEditing)
        console.log(this.props.taskEditing)
        console.log(this.state)
    }
    onClear() {
        this.setState({
            id: '',
            name: '',
            status: false
        })
    }
    onChange = (e) => {

        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        var itemWillAdded = { id: this.state.id, name: this.state.name, status: this.state.status === 'true' ? true : false }
        console.log(itemWillAdded);
        this.props.onSaveTask(itemWillAdded)
        this.props.onCloseForm()
    }

    render() {
        const { taskEditing } = this.props
        const isHasNOProperty = Object.keys(taskEditing).length === 0
        if (!this.props.isDisplayForm) return ''
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {isHasNOProperty ? "Thêm Công Việc" : "Sửa công việc"}
                        <span className="fa fa-times-circle text-right" onClick={this.props.onCloseForm}>
                        </span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                            required="required"
                            value={(this.state.status)}
                            onChange={this.onChange}
                            name="status"
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning"
                            >Lưu</button>&nbsp;
                            <button type="" className="btn btn-danger"
                                onClick={this.props.onCloseForm}
                            >Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        taskEditing: state.taskEditing

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task))
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Taskform)