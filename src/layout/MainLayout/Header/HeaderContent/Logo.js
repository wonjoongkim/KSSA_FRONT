/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Box } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';
import Logo from '../../../../assets/images/kssa_logo.png';
// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => {
    const [searchtext, setSearchtext] = useState('');

    // 통합검색 엔터처리
    const searchEnter = (e) => {
        if (e.key === 'Enter') {
            console.log(searchtext);
        }
    };

    return (
        <Box sx={{ width: '15%' }}>
            <Link to="/" style={{ cursor: 'pointer' }}>
                <img src={Logo} alt="LOGO" />
            </Link>
        </Box>
    );
};

export default Search;
