import React from 'react';

const Dog = ({dog}) => {
    return (
        <div>
            Dog name: {dog.name} <button>Del</button>
        </div>
    );
};

export default Dog;
