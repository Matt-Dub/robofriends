import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ padding: '2rem 0', overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;