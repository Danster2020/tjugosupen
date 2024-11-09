import React, { useState } from 'react';

function NumberPicker() {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;

        // Allow only numbers and ensure the value is <= 20
        if (/^\d*$/.test(newValue) && (newValue === '' || parseInt(newValue, 10) <= 20)) {
            setValue(newValue);
        }
    };

    return (
        <div className='mt-32 flex flex-col items-center max-w-md'>
            <label className='text-white text-center text-xl' htmlFor="quantity">Vänta på att spelledaren ställer en fråga.
                <br />Gissa sedan ett nummer mellan 0-20 genom att skriva det i cirkeln nedan.</label>
            <div className="mt-10 border-[1rem] border-yellow-600 rounded-full">
                <input
                    className='inline-block text-8xl text-center w-40 h-40 p-4 appearance-none rounded-full'
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={value}
                    onChange={handleChange}
                    inputMode="numeric"
                    pattern="[0-9]*"
                />
            </div>
        </div>
    );
}

export default NumberPicker;
