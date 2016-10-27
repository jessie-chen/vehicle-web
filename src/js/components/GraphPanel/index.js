import React, { Component } from 'react';
import classname from 'classname';
import './styles.scss';


const GraphPanel = (props) => {
    const {title, children, className, width, height} = props;

    let styles = null;
    if(width) {
        styles = styles || {};
        styles["width"] = width;
    }
    if (height) {
        styles = styles || {};
        styles["height"] = height;
    }

    return (
        <div className={classname("graph-panel", className)} style={styles}>
            <h1 className="title">{title}</h1>
            <div className="content">
                {children}
            </div>
        </div>
    )
};

GraphPanel.propTypes = {
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.arrayOf(React.PropTypes.element)]),
    className: React.PropTypes.string,
    width: React.PropTypes.string,
    height: React.PropTypes.string
};

export default GraphPanel;
