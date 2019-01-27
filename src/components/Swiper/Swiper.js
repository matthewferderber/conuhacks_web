import React, {Component} from 'react'
import styles from './Swiper.css';
import { connect } from 'react-firebase';

class Swiper extends Component {
    render() {
        if (this.props.match.params.id) {
            return (
                <div className="swiper">
                    <div onClick={this.props.accept}>
                        Accept
                    </div>
                    <div onClick={this.props.reject}>
                        Reject
                    </div>
                </div>
            )
        } else {
            return "Please select a workspace";
        }
        };
}

export default connect((props, ref) => ({
    users: async () => (await ref('/workspace-members/' + props.workspace).once('value')).val(),
    accept: () => ref('users/workspaces' + props.user.uid + '/accepts').push('uidhere'),
    reject: () => ref('users/' + props.user.uid + '/rejects').push('putuidhere'),
}))(Swiper);
