import React from 'react';
import Search from './Search'
import Sort from './Sort'
class Control extends React.Component {
    render() {
        return (

            <div className="row mt-15">
                {/* search */}
                <Search
                    onSearch2={this.props.onSearch1}
                ></Search>
                {/* sort */}
                <Sort
                    onSort2={this.props.onSort1}

                ></Sort>

            </div>
        )
    }
}
export default Control