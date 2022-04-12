import React from 'react';

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
                id: nextProps.task.id, name:nextProps.task.name, status:nextProps.task.status
            })
        }else if (nextProps && nextProps.task===null)
        {
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
    }
    onCloseForm = () => {
        return this.props.onCloseForm()
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
        this.props.onSubmit({ id: this.state.id, name: this.state.name, status: this.state.status === 'true' ? true : false })
        this.onCloseForm()
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.state.id === '' ? "Thêm Công Việc" : "Sửa công việc"}
                        <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}>
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
                            <button type="submit" className="btn btn-danger"
                                onClick={this.onCloseForm}
                            >Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Taskform