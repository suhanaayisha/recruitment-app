import React,{ Component } from "react";
import { connect } from "react-redux";
import { filterByLocation } from "../redux/actions/index";

function mapDispatchToProps(dispatch) {
    return {
      filterByLocation: location => dispatch(filterByLocation(location))
    };
}


class ConnectedForm extends Component{
    constructor(props) {
        super(props);  
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        event.preventDefault();
        this.props.filterByLocation(event.target.value);
    }
    
    render(){
        return(
            <div>
                <h3>Filter By</h3>
                <form >
                    <label>
                        Location
                    </label>
                    <select name="location" onChange={this.handleChange}>
                        <option value="All">All</option>
                        <option value="Dubai">Dubai </option>
                        <option value="Sharjah">Sharjah </option>
                        <option value="Abu Dhabi">Abu Dhabi </option>
                    </select>
                </form>
            </div>
            

        )
    }
    
}

const FilterBy = connect(
    null,
    mapDispatchToProps
  )(ConnectedForm);

export default FilterBy;