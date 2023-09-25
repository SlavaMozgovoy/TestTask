import React, { useEffect, useMemo } from 'react'

import classes from "./ModalFilter.module.css";
import SubmitButton from '../Buttons/SubmitButton';
import DefaultButton from '../Buttons/DefaultButton';
import FilterSelect from '../FilterSelect/FilterSelect';

export default function ModalFilter({
    isVisible,
    setVisible, 
    pcTypeFilter, 
    setPcTypeFIlter, 
    tagFilter, 
    setTagFilter, 
    filteredData,
    setFilteredData, 
    data, 
    searchQuery, 
    setFilteredAndSearchedData
}) {

    const hideModal = () => {
        setVisible(false);
    }

    function filterByPcType() {
        if(pcTypeFilter) {
            console.log(data)
            return [...data].filter(entry => entry.type == pcTypeFilter)
        }
        return data;
    }

    function filterByTag() {
        if(tagFilter) {
            return [...filterByPcType()].filter(entry => entry.tags.includes(tagFilter));
        }
        return filterByPcType();
    }

    function filterData() {
        setFilteredData(filterByTag());
        hideModal();
    }

    function resetData() {
        setPcTypeFIlter('');
        setTagFilter('');
        setFilteredData(data);
        hideModal();
    }

    useEffect(() => {
        filterData();
    },[data])

    setFilteredAndSearchedData(useMemo(() => {
        return [...filteredData].filter(entry => entry.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, filteredData, data]));

  return (

    <div className={`${classes.modal} ${isVisible ? classes.active : ""}`}>
        <div className={classes.content}>
            <div className={classes.head}>
                <h2>Фильтры</h2>
                <span
                    onClick={hideModal}
                >
                    <ion-icon name="close-outline"></ion-icon>
                </span>
            </div>

            <div>

                <FilterSelect
                    label={"Тип пк"}
                    options={[
                        {value: "pc1", name: "pc1"},
                        {value: "pc2", name: "pc2"},
                        {value: "pc3", name: "pc3"},
                    ]}
                    value={pcTypeFilter}
                    onChange={setPcTypeFIlter}
                    defaultValue={"Выбрать"}
                />
                <FilterSelect
                    label={"Теги"}
                    options={[
                        {value: "red", name: "red"},
                        {value: "green", name: "green"},
                        {value: "blue", name: "blue"},
                    ]}
                    value={tagFilter}
                    onChange={setTagFilter}
                    defaultValue={"Выбрать"}
                />
                
                

                <div className={classes.btnsRow}>
                    <SubmitButton
                        onClick={filterData}
                    >
                        Применить
                    </SubmitButton>
                    <DefaultButton
                        onClick={resetData}
                    >
                        Сбросить
                    </DefaultButton>
                </div>
            </div>
        </div>
    </div>
  )
}
