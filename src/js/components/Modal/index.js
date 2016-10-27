/**
 * Created by IT on 16/10/27.
 */

import React from 'react';
import RModal from 'react-modal';
import classname from 'classname';
import './modal.scss';


const Modal = (props) => {
    const {className, overlayClassName, ...others} = props;
    return <RModal className={classname("modal", className)} overlayClassName={classname("overlay", overlayClassName)} {...others} />
};

export default Modal;
