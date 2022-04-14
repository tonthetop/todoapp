import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            name:''
        }
    }
    onChange=(e)=>{
        this.setState({name:e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSearch(this.state.name)
    }
    render() {
        return (
            ///* search */
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập từ khóa..."
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                        <span className="input-group-btn">
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                <span className="fa fa-search mr-5"></span>Tìm
                            </button>
                        </span>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps=(dispatch) => {
    return {
        onSearch:(name)=>{
            dispatch(actions.searchByName(name))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)