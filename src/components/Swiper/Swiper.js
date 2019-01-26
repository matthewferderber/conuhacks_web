import React, {Component} from 'react'
import styles from './Swiper.css';
import { connect } from 'react-firebase';

const Swiper = ({accept, reject}) => {
        return (
            <div className="swiper">
                <div onClick={accept}>
                    Accept
                </div>
                <div onClick={reject}>
                    Reject
                </div>
            </div>
        )
        };

export default connect((props, ref) => ({
    accept: () => ref('swipes/' + props.user.uid).set(1),
    reject: () => ref('swipes/' + props.user.uid).set(-1),
}))(Swiper);
