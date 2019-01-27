import React, {Component} from 'react'
import styles from './WorkspaceList.css';
import { connect } from 'react-firebase';
import { withRouter } from 'react-router-dom';

class WorkspaceList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null
        };
    }

    async componentDidMount() {
        this.setState({workspaces: (await this.props.workspaces()).val()});
    }

    async joinWorkspace(workspace) {
        console.log(workspace);
        this.props.history.push('/match/' + workspace);
    }

    render() {
        if (this.state.workspaces) {
            const workspaces = Object.keys(this.state.workspaces).map(w => (
                <div key={w} className="workspace" onClick={() => this.joinWorkspace(w)}>
                    <div className="workspace-content">
                    <div className="workspace-logo">Logo</div>
                        <div>{this.state.workspaces[w].metadata.name}</div>
                        <div>{this.state.workspaces[w].metadata.description}</div>
                    </div>
                </div>
            ));
            console.log(this.state.workspaces);
            return (
                <div className="workspace-list">
                    {workspaces}
                </div>
            )
        } else {
            return "Loading...";
        }
    }
}

export default connect((props, ref) => ({

    workspaces: () => ref('workspaces').once('value')
}))(withRouter(WorkspaceList));
