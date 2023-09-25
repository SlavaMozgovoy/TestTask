import React, { useEffect, useMemo, useState } from 'react'

import classes from "./PageContent.module.css";
import TableEntry from '../Table/TableEntry';
import TableHead from '../Table/TableHead';
import SearchBar from '../SearchBar/SearchBar';
import Table from '../Table/Table';
import DataService from '../../Api/DataService';
import Pagination from '../Pagination/Pagination';

export default function PageContent() {

  const [data, setData] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, [])


 
  const [filteredData, setFilteredData] = useState(data);
  const [filteredAndSearchedData, setFilteredAndSearchedData] = useState(data);

  const [pcTypeFilter, setPcTypeFIlter] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');



  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  async function fetchData() {
    const response = await DataService.getDataByLimit(limit, page);
    setData(response);
    setTotalDataCount(await DataService.getTotalXcount());
    // setFilteredData(response);
    setPageCount(await DataService.getPageCount(limit));
  }

  useEffect(() => {
    fetchData();
  }, [limit, page])

  return (
    <div className={classes.section}>
        <h4>CMDB / Серверы и ПК</h4>
        <h2>Серверы и ПК</h2>

        <SearchBar
          pcTypeFilter ={pcTypeFilter}
          setPcTypeFIlter={setPcTypeFIlter}
          tagFilter={tagFilter}
          setTagFilter={setTagFilter}
          filteredData = {filteredData}
          setFilteredData = {setFilteredData}
          data = {data}
          searchQuery = {searchQuery}
          setSearchQuery = {setSearchQuery}
          setFilteredAndSearchedData = {setFilteredAndSearchedData}
          totalDataCount = {totalDataCount}
          limit = {limit}
          page = {page}
        />
        <Table
          data={filteredAndSearchedData}
        />
        <Pagination
          limit = {limit}
          setLimit = {setLimit}
          page = {page}
          setPage = {setPage}
          totalDataCount = {totalDataCount}
          pageCount = {pageCount}
        />
    </div>
  )
}
