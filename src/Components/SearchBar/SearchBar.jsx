import React, { useState } from 'react'

import classes from "./SearchBar.module.css";
import ModalFilter from '../ModalFilter/ModalFilter';

export default function SearchBar({
    pcTypeFilter,
    setPcTypeFIlter,
    tagFilter,
    setTagFilter,
    filteredData,
    setFilteredData,
    data,
    searchQuery,
    setSearchQuery,
    setFilteredAndSearchedData,
    totalDataCount,
    limit,
    page
}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const setVisible = () => {
        setIsModalVisible(true);
    }


  return (
    <div className={classes.searchPanel}>
        <p>Записи {(page - 1) * limit} - {+(((page - 1) * limit) + +limit) > totalDataCount ? totalDataCount : +(((page - 1) * limit) + +limit)} зи {totalDataCount}</p>
        <div className={classes.searchBar}>
            <span className={classes.searchIcon}><ion-icon name="search-outline"></ion-icon></span>
            <input 
                type="text" 
                className={classes.input}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <span className={classes.filterIcon}>
                <span 
                    className={classes.pointer}
                    onClick={setVisible}
                >
                    <ion-icon name="filter-outline"></ion-icon>
                </span>
                <ModalFilter 
                    isVisible={isModalVisible}
                    setVisible={setIsModalVisible}
                    pcTypeFilter ={pcTypeFilter}
                    setPcTypeFIlter={setPcTypeFIlter}
                    tagFilter={tagFilter}
                    setTagFilter={setTagFilter}
                    setFilteredData = {setFilteredData}
                    filteredData = {filteredData}
                    data = {data}
                    searchQuery = {searchQuery}
                    setFilteredAndSearchedData = {setFilteredAndSearchedData}
                />
            </span>
        </div>
    </div>
  )
}
