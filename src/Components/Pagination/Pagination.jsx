import React, { useEffect, useMemo } from 'react'

import classes from "./Pagination.module.css";

export default function Pagination({
    limit,
    setLimit,
    page,
    setPage,
    totalDataCount,
    pageCount
}) {

    const pageArray = useMemo(() => {
        let arr = [];
        if(pageCount <= 9) {
            for (let i = 1; i <= pageCount; i++) {
                arr.push(i);
            }
            return arr;
        }

        // 81 82 83 84 85 86 87 88 89
        if(page < 5) {
            let endPoint = (page + 4) + Math.abs(page - 5);
            for(let i = 1; i <= endPoint; i++) {
                arr.push(i);
            }
            return arr;
        }

        if((pageCount - page) < 4) {
            let startPoint = (page - 4) - Math.abs(4 - (pageCount - page));
            for (let i = startPoint; i <= pageCount; i++) {
                arr.push(i);
            }
            return arr;
        }

        for (let i = page - 4; i <= page + 4; i++) {
            arr.push(i);
        }
        return arr;
    }, [page, pageCount])

    function ChangePage(value) {
        setPage(value);
    }

    function prevPage() {
        if(page == 1) {
            return;
        }
        setPage(page - 1);
    }

    function nextPage() {
        if(page == pageCount) {
            return;
        }
        setPage(page + 1);
    }

  return (
    <div className={classes.pagination}>
        
        <div className={classes.paginationBtns}>
            <button className={classes.arrowBtn} onClick={prevPage}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>


            {
                pageArray[0] != 1
                ? 
                <>
                    <button 
                        className={classes.pageBtn}
                        onClick={(e) => ChangePage(1)}
                    >
                        {1}
                    </button>
                    <button className={classes.pageBtn}>
                        ...
                    </button>
                </>
                :
                ""
            }


            {pageArray.map(a =>
                <button 
                    className={`${classes.pageBtn} ${a == page ? classes.active : ""}`}
                    key = {a}
                    onClick={(e) => ChangePage(a)}
                >
                    {a}
                </button>
            )}

            {
                pageArray[pageArray.length - 1] != pageCount
                ? 
                <>
                    <button className={classes.pageBtn}>
                        ...
                    </button>
                    <button 
                        className={classes.pageBtn}
                        onClick={(e) => ChangePage(+pageCount)}
                    >
                        {pageCount}
                    </button>
                </>
                :
                ""
            }

            <button className={`${classes.arrowBtn} ${classes.lastBtn}`} onClick={nextPage}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </div>


        <div className={`${classes.paginationSelect}`}>
            <span>Количество записей: </span>
            <select onChange={(e) => {
                setLimit(e.target.value);
                setPage(1);
            }}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="all">Все</option>
            </select>
        </div>

    </div>
  )
}
