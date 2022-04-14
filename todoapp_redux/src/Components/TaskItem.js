import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
class TaskItem extends React.Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.value.id)
    };
    onDelete = () => {
        this.props.onDelete(this.props.value.id)
    }
    onUpdate = () => {
        this.props.onEditTask(this.props.value)
        this.props.onOpenForm()
    }
    render() {


        var { value, index } = this.props;
        
        return (
            <tr>
                <td>{index}</td>
                <td>{value.name}</td>
                <td className="text-center">
                    <span className={value.status ? "label label-danger" : "label label-success"}
                        onClick={this.onUpdateStatus}
                    >
                        {value.status ? 'Kích hoạt' : 'Ẩn'} </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning"

                        onClick={this.onUpdate}
                    >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger"
                        onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateStatus: (id)=>{ 
            dispatch(actions.updateStatus(id))
        },
        onDelete: (id)=>{
            dispatch(actions.deleteTask(id))

        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        }, 
        onEditTask: (task) => {
            dispatch(actions.editTask(task))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskItem)