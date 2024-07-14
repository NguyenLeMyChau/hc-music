import React, { useState } from 'react';
import './header.css';
import HeaderItem from './HeaderItem'
import { IoIosSearch } from "react-icons/io";

function Header() {
    // State để lưu trữ giá trị tìm kiếm
    const [searchTerm, setSearchTerm] = useState('');

    // Hàm xử lý thay đổi giá trị input
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='header-body'>
            <div className="header-search">
                <HeaderItem Icon={IoIosSearch} />
                <input
                    type="text"
                    placeholder="Search Music, Single"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}

export default Header;
