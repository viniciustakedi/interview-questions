import React, { InputHTMLAttributes } from 'react';
import { BsSearch } from 'react-icons/bs';
import './search-input.scss';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id: string;
    type: 'text' | 'email' | 'tel';
}

const SearchInput: React.FunctionComponent<SearchInputProps> = ({ label, id, type, ...rest }) => {
    return (
        <div className='search-input'>
            <label id="Label" htmlFor={id}>{label}</label><br />
            <div className='search-input-icon'>
                <BsSearch id='search-icon' color='#ffffff75' size={8} />
                <input type={type} id={id} {...rest}></input>
            </div>
        </div>
    );
}

export default SearchInput;