import React,{ Component } from "react";
import { connect } from "react-redux";
import { filterBy } from "../redux/actions/index";

function mapDispatchToProps(dispatch) {
    return {
      filterBy: filters => dispatch(filterBy(filters))
    };
}


class ConnectedForm extends Component{
    constructor(props) {
        super(props);
        this.state = {            
            position:"",
            experience:"",
            availibility:"",
            location:"",
        };
          
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        event.preventDefault();
        
    }

    handleSubmit(event) {
        event.preventDefault();
        const location = event.target.location.value;
        const position = event.target.position.value;
        const experience = event.target.experience.value;
        const availibility = event.target.availibility.value;
        this.setState({      
            position,
            experience,
            availibility,
            location
        },() => {
            const { position,experience,availibility,location} = this.state;
            this.props.filterBy({ position,experience,availibility,location});
          });
    }
    
    render(){
        return(
            <div>
                <h3>Filter By</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Location
                    </label>
                    <select name="location" onChange={this.handleChange}>
                        <option value="">All</option>
                        <option value="Dubai">Dubai </option>
                        <option value="Sharjah">Sharjah </option>
                        <option value="Abu Dhabi">Abu Dhabi </option>
                    </select>
                    <label>
                        Position
                    </label>
                    <select id="position" name="positon" >
                        <option value="">All</option>
                        <option value="Front-End Developer">Front-End Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Full-Stack Developer">Full-Stack Developer</option>
                        <option value="QA Developer">QA Developer</option>
                        <option value="Team Lead Developer">Team Lead Developer</option>
                    </select>
                    <label>Experience </label>
                    <select name="experience" >
                        <option value="">All</option>
                        <option value="1 year">1 year</option>
                        <option value="2 years">2 years</option>        
                        <option value="3 years">3 years</option> 
                        <option value="4 years">4 years</option>        
                        <option value="5 years">5 years</option>
                        <option value="6 years">6 years</option>        
                        <option value="7+ years">7+ years</option> 
                    </select>  
                    <label>Availibility</label>
                    <select name="availibility" >
                        <option value="">All</option>
                        <option value="1 week">1 week</option>
                        <option value="2 weeks">2 weeks</option>        
                        <option value="3 weeks">3 weeks</option> 
                        <option value="4 weeks">4 weeks</option>        
                        <option value="5 weeks">5 weeks</option>
                        <option value="6 weeks">6 weeks</option>        
                    </select>
                    <button>Submit</button>
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