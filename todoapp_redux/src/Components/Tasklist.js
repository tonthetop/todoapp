import React from 'react';
import TaskItem from './TaskItem'
import { connect } from 'react-redux'
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
        this.setState({ [name]: value })

    }

    render() {
        let { tasks,keySearch,sort } = this.props
        const { filterName } = this.state
        let filterStatus = parseInt(this.state.filterStatus,10)
        //Search
        if (keySearch) {
            tasks = tasks.filter(item => {
                return item.name.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1
            })
        }
        //Filter
        if (filterName !== '') {
            tasks = tasks.filter(item => {
                return item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
            })

        }
        if (filterStatus !== -1) {
            tasks = tasks.filter(item => {
                return item.status == filterStatus
            })
            console.log(tasks)

        }
        //Sort
        if (sort) {
            if (sort.type === 'name') {
                tasks.sort((a, b) => {
                    if (a.name > b.name) return sort.value
                    else if (a.name < b.name) return -sort.value
                    return 0
                })
            }
            if (sort.type === 'status') {
                tasks.sort((a, b) => {
                    if (a.status > b.status) return -sort.value
                    else if (a.status < b.status) return sort.value
                    return 0
                })
            }
        }
        //TaskItem
        var elementList = tasks.map((item, index) => (
            <TaskItem
                key={item.id}
                value={item}
                index={index + 1}
            >

            </TaskItem>
        ))
        //Render
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

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        keySearch: state.searchByName?state.searchByName.name:null, 
        sort:state.sort
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tasklist)