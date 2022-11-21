import "./css/pagination.css";

function Pagination({ currentData, dataPerPage, currentPage, setCurrentPage }) {
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(currentData / dataPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pagination_container">
      <h2>Pagination</h2>
      <ul className="pagination_ul">
        {pageNumber.map((e) => {
          return (
            <li
              onClick={() => setCurrentPage(e + 1)}
              className={`${e + 1 === currentPage ? "selected_ul" : ""} `}
              key={e}>
              {e + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pagination;
