import React from 'react';

const Scroll = (props) => {
    // console.log('window height is ', window.innerHeight);
    return (
        <div style={{overflowY: 'scroll', height: '570px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;