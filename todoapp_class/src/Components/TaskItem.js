import React from 'react'

class TaskItem extends React.Component {

    onUpdateStatus3=()=>{
        this.props.onUpdateStatus2(this.props.value.id)
    };
    onDelete3=()=>{
        this.props.onDelete2(this.props.value.id)
    }
    onUpdate3=()=>{
        this.props.onUpdate2(this.props.value.id)

    }
    render() {
        var { value, index } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{value.name}</td>
                <td className="text-center">
                    <span className={value.status ? "label label-danger" : "label label-success"}
                    
                    onClick={this.onUpdateStatus3}

                    
                    >
                        {value.status ? 'Kích hoạt' : 'Ẩn'} </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning"  
                    
                    onClick={this.onUpdate3}
                    >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger"
                    onClick={this.onDelete3}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        )
    }
}
export default TaskItem