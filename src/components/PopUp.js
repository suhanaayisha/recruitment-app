import React,{ Component } from "react";
import { connect } from "react-redux";
import { addCandidate } from "../redux/actions/index";
import Popup from "reactjs-popup";
import '../css/index.css';
 

function mapDispatchToProps(dispatch) {
    return {
      addCandidate: candidate => dispatch(addCandidate(candidate))
    };
}

class ConnectedForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            image: "",
            firstname: "",
            lastname: "",
            position:[],
            experience:[],
            availibility:[],
            location:[],
            set:false,
            positionSet:false
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.callThis =  this.callThis.bind(this);
        this.callSet = this.callSet.bind(this);
      }

    handleSubmit(event) {

        event.preventDefault();
        this.callSet(event.target);
        }
    
    callSet(target){
        this.setState({ 
            id: Math.random(),
            image:target.image.value, 
            firstname: target.firstname.value,
            lastname: target.lastname.value,
            position: ["",target.position.value],
            experience: ["",target.experience.value],
            availibility: ["",target.availibility.value],
            location: ["",target.location.value],
            set: true
        },() => {
            const { id,image,firstname,lastname,position,experience,availibility,location} = this.state;
            this.props.addCandidate({ id,image,firstname,lastname,position,experience,availibility,location});
          });
        
    }
    // async callThis(event) {
    //     await this.setState({ position: event.target.value ,positionSet: true});
    // }

    componentDidUpdate() {
       
    }


    render(){
        return(
            <Popup trigger={<button> Add Candidate </button>} position="right center">
                <div className="modal">
                    <form onSubmit={this.handleSubmit}>
                        <label>Profile Picture</label>
                        <input type="file" name="image"></input>
                        <label>Firstname</label>
                        <input type="text" name="firstname"></input>
                        <label>Lastname</label>
                        <input type="text" name="lastname"></input>
                        <label>Positon</label>
                        <select id="position" name="positon" >
                            <option value="Front-End Developer">Front-End Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Full-Stack Developer">Full-Stack Developer</option>
                            <option value="QA Developer">QA Developer</option>
                            <option value="Team Lead Developer">Team Lead Developer</option>
                        </select>
                        <label>Experience</label>
                        
                        <div className="radio">
                            <label>
                                <input type="radio" name="experience" value="1 year"  />
                                1 year
                            </label>
                       
                            <label>
                                <input type="radio" name="experience" value="2 years"  />
                                2 years
                            </label>
                        
                            <label>
                                <input type="radio" name="experience" value="3 years"  />
                                3 years
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="experience" value="4 years"  />
                                4 years
                            </label>
                       
                            <label>
                                <input type="radio" name="experience" value="5 years"  />
                                5 years
                            </label>
                        
                            <label>
                                <input type="radio" name="experience" value="6 years"  />
                                6 years
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="experience" value="7+ years"  />
                                7+ years
                            </label>
                        </div>

                        <label>Availibility</label>
                        
                        <div className="radio">
                            <label>
                                <input type="radio" name="availibility" value="1 week"  />
                                1 week
                            </label>
                        
                            <label>
                                <input type="radio" name="availibility" value="2 weeks"  />
                                2 weeks
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="availibility" value="3 weeks"  />
                                3 weeks
                            </label>
                        
                            <label>
                                <input type="radio" name="availibility" value="4 weeks"  />
                                4 weeks
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="availibility" value="5 weeks"  />
                                5 weeks
                            </label>
                            <label>
                                <input type="radio" name="availibility" value="6 weeks"  />
                                6 weeks
                            </label>
                        </div>
                        <label>Location</label>
                        
                        <div className="radio">
                            <label>
                                <input type="radio" name="location" value="Dubai"  />
                                Dubai
                            </label>
                        
                            <label>
                                <input type="radio" name="location" value="Sharjah"  />
                                Sharjah
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="location" value="Abu Dhabi"  />
                                Abu Dhabi
                            </label>
                        
                        </div>
                        <button>Add Candidate</button>
                    </form>
                </div>
            </Popup>
        )
    }

}

const PopUp = connect(
    null,
    mapDispatchToProps
  )(ConnectedForm);

export default PopUp;