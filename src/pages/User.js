import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Helmet } from "react-helmet";
const User = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((result) => setUsers(result.results), setLoading(true));
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Users page</title>
        <meta name="description" content="This is the Users page" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div class="grid grid-cols-3 gap-2 mt-10">
        {loading ? (
          users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
            return (
              <div className="user bg-white rounded shadow border p-6 w-64">
                <h3>{user.name.first}</h3>
                <h3>{user.name.last}</h3>
                <h3>{user.email}</h3>
              </div>
            );
          })
        ) : (
          <h1>loading...</h1>
        )}
      </div>

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
  );
};
export default User;
