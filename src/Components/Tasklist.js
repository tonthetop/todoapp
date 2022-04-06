import React from 'react';
import TaskItem from './TaskItem'
class Tasklist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterName: '',
            filterStatus: -1 // -1 1 0
        }
    }
    onChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        this.props.onFilter1({
            ...this.state, [name]: value
        })
        this.setState({
            [name]: value
        })
    }
    render() {
        var taskList = this.props.tasks
        var { filterStatus, filterName } = this.state
        var elementList = taskList.map((item, index) => (
            <TaskItem
                key={item.id}
                value={item}
                index={index + 1}
                onUpdateStatus2={this.props.onUpdateStatus1}
                onDelete2={this.props.onDelete1}
                onUpdate2={this.props.onUpdate1}
            >

            </TaskItem>
        ))

        return (

            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name='filterName'
                                value={filterName}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select
                                className="form-control"
                                name='filterStatus'
                                value={filterStatus}
                                onChange={this.onChange}

                            >
                                <option value="-1">Tất Cả</option>
                                <option value="0">Ẩn</option>
                                <option value="1">Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elementList}
                </tbody>
            </table>

        )
    }
}
export default Tasklist