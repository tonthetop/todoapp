import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keywords: ''
        }
    }
    onChange = (event) => {
        this.setState({ keywords: event.target.value })
    };
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSearch2(this.state.keywords)
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
export default Search