import React, { Component, Fragment } from 'react';
import "./Search.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            term:"",
        };
    }

    handleChange = (e) => {
        this.setState({ term : e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);

        this.setState({
            term: "",
        });
    };


    render() { 
        return ( 
            <Fragment>
                <section>
                    <article>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control" placeholder="Search" name="term" value={this.state.term} onChange={this.handleChange}/>
                            <span className="searchIcon">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </form>
                    </article>
                </section>
            </Fragment>
        );
    }
}
 
export default Search;