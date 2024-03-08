import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';


export default function SearchBar(){

    const [searchText, setSearchText] = useState('');
    
    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    return(
        <Input 
            style={{color:'white', width: '350px' ,backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            placeholder='Busqueda tu receta'
            startAdornment={
                <InputAdornment position="start">
                    {searchText ? null : <SearchIcon />}
                </InputAdornment>
            }
            value={searchText}
            onChange={handleInputChange}
        />
    )
}