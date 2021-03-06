import React,{ Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { filteredCandidates: state.filteredCandidates };
  };

class List extends Component{
    
    constructor(props) {
        super(props);       
      }
    

    render() {
        const candidates = this.props.filteredCandidates
        return(
             
                <ul>
                  {candidates.map(el => (
                  <div key={el.id}>
                      <li>Firstname: {el.firstname}</li>
                      <li>Lastname: {el.lastname}</li>
                      <li>Position: {el.position}</li>
                      <li>Experience: {el.experience}</li>
                      <li>Availibility: {el.availibility}</li>
                      <li>Location: {el.location}</li>
                      <hr></hr>
                  </div>
                  ))}
                </ul>
              
        )
    }
}


const Filtered = connect(mapStateToProps,null)(List);
export default Filtered;