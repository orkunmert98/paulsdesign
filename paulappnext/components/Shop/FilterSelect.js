import React, {useState} from 'react';

import Dropdown from 'react-select';
const options = [
    { value: '0', label: 'Popularity'},
    { value: '1', label: 'Average Rating' },
    { value: '2', label: 'Latest' },
    { value: '3', label: 'Price : Low to High' },
    { value: '4', label: 'Price : High to Low' },
    { value: '5', label: 'New'},
];

const FilterSelect = (props) => {

    const [defaultValue, setValue] = useState(options[0]);
    return (
        <div className="mx-3" style={{minWidth:'185px'}}>
            <Dropdown
                className="FilterSelect"
                options={options}
                defaultValue ={defaultValue}
                onChange={props.onChange}
                placeholder="Select an option" />
        </div>
    )
};

export default React.memo(FilterSelect);