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

    componentWillMount() {
        let task = this.props.task
        if (task) this.setState({
            id: task.id, name: task.name, status: task.status
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id, name: nextProps.task.name, status: nextProps.task.status
            })
        } else if (nextProps && nextProps.task === null) {
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
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
        // this.props.onSubmit()
        this.props.onAddTask(itemWillAdded)
        this.props.onCloseForm()
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.state.id === '' ? "Thêm Công Việc" : "Sửa công việc"}
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
    return {}
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Taskform)