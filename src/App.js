import React, { useState } from 'react'
import './App.css'
import ReactPaginate from 'react-paginate'
import jsonData from './MOCK_DATA.json'
const App = () => {
    const [user,setUser] = useState(jsonData.slice(0,101))
    const [pageNumber,setPageNumber] = useState(0)
    const userPerPage = 10;
    const pageVisited = pageNumber* userPerPage
    const pageCount = Math.ceil(user.length / userPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    const displayUsers = user.slice(pageVisited,pageVisited+userPerPage).map(item=>{
        return (
            <div key={item.id} className="users">
                            <h3>{item.first_name}</h3>
                            <h3>{item.last_name}</h3>
                            <h3>{item.email}</h3>
                        </div>
        )
    })
    return (
        <div>
            <div className="card-container">
                {displayUsers}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}     
                    />
            </div>
        </div>
    )
}

export default App
