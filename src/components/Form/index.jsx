import React, { useState } from 'react';



const IMCForm = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const weightChange = (e) => {
        setWeight(parseInt(e.target.value));
    }
    const heightChange = (e) =>{
        setHeight(parseInt(e.target.value));
    }

    return (
        <form>
            <label>
            Weight:
            <input
                type="number"
                value={weight}
                onChange={weightChange}
            />
            </label>
            <br />
            <label>
            Height:
            <input
                type="number"
                value={height}
                onChange={heightChange}
            />
            </label>
        </form>
        );
};

export default IMCForm;