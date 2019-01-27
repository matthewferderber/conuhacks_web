import React, {Component} from 'react'
import styles from './Swiper.css';
import { connect } from 'react-firebase';

class Swiper extends Component {
    render() {
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
        };
}

export default connect((props, ref) => ({
    users: async () => await ref('/user/').once('value'),
    accept: () => ref('user/' + props.user.uid + '/accepts').push('uidhere'),
    reject: () => ref('user/' + props.user.uid + '/rejects').push('putuidhere'),
}))(Swiper);
