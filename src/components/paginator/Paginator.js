import React from 'react';
import {Link} from 'react-router-dom';
import './Paginator.css';

class Paginator extends React.Component {

    render() { return this._componentJsxElement(); }

    /** Returns `JSX.Element` containing component content structure. */
    _componentJsxElement() {
        return (
            <div className="PaginatorComponent">
                <nav class="navbar navbar-dark bg-dark justify-content-between fixed-bottom bottom-bar">
                    <div class="nav-link prev-link">
                        <Link to={this.props.prev_route}>
                            <b>PREV: </b> 
                        </Link>
                        {this.props.prev_name}
                    </div>
                    <div class="nav-link next-link">
                        {this.props.next_name}
                        <Link to={this.props.next_route}>
                            <b> :NEXT</b>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Paginator;