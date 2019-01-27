import React, {Component} from 'react'
import styles from './WorkspaceCreator.css';
import { connect } from 'react-firebase';


class CreateWorkSpaceForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          Name: '',
          Description: '',
          Submitted: false
    };
  
      this.handleNChange = this.handleNChange.bind(this);
      this.handleDChange = this.handleDChange.bind(this);
      this.handleOnClick = this.handleOnClick.bind(this);
    }
  
    handleNChange(event) {
      this.setState({Name: event.target.value});
    }

    handleDChange(event) {
        this.setState({Description: event.target.value});
      }
    
      handleOnClick(event) {
          this.setState({Submitted: true});
          this.props.workspaces(this.state.Name,this.state.Description);
      }

  
    render() {
        if(this.state.Submitted){
            return (<h1> Thanks, your submission was successful. </h1>);
        }
      return (
        <form>
          <label>
            Name:
            <input type="text" value={this.state.Name} onChange={this.handleNChange} />
          </label>
          <label>
              Description:
              <input type="text" value={this.state.Description} onChange={this.handleDChange} />
              </label>
          <input type="button" value="Submit" onClick={this.handleOnClick}/>
        </form>
      );
    
    }
  }

export default connect((props, ref, firebase) => ({
    workspaces: (name,description) =>ref('workspace/').push({metadata: {name,description}}),
}))(CreateWorkSpaceForm);
