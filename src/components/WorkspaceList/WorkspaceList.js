import React, {Component} from 'react'
import styles from './WorkspaceList.css';
import { connect } from 'react-firebase';

const WorkspaceList = ({workspaces}) => {
        return (
            <div className="workspace">
            </div>
        )
        };

export default connect((props, ref) => ({
    workspaces: props.workspaces
}))(WorkspaceList);
