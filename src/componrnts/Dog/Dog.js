import React from 'react';

const Dog = ({dog: {id, name}, dispatch}) => {
    return (
        <div>
            {name}
            <button onClick={
                () => dispatch(
                    {type: 'DEL_DOG', payload: {id}}
                )
            }>Del
            </button>
        </div>
    );
};

export default Dog;