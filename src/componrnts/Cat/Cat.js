import React from 'react';

const Cat = ({cat}) => {
    return (
        <div>
            Cat name: {cat.name} <button>Del</button>
        </div>
    );
};

export default Cat;