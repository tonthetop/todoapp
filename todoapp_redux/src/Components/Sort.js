import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: {
                type: '',
                value: null
            }
        }

    }
    onClick = (type, value) => {
        this.props.onSort(
            { type: type, value: value }
        )
        this.setState({
            sort: { type: type, value: value }
        })
    }
    render() {
        var { sort } = this.state
        var elmIcon = (<i className="fa fa-check"></i>)

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a role="button"
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                                {sort.type === 'name' && sort.value === 1 ? elmIcon : ''}
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a
                                role="button"
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                                {sort.type === 'name' && sort.value === -1 ? elmIcon : ''}

                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <a
                                role="button"
                            >
                                Trạng Thái Kích Hoạt
                                {sort.type === 'status' && sort.value === 1 ? elmIcon : ''}
                            </a>
                        </li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <a
                                role="button"
                            >
                                Trạng Thái Ẩn
                                {sort.type === 'status' && sort.value === -1 ? elmIcon : ''}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sort(sort))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort)