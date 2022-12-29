import React from "react";

export default function Pagination({page = 1, pageCount = 1, setPage}) {
    return (
        <nav
            className="is-flex is-justify-content-space-around is-centered column is-10 is-flex m-auto p-0"
            role="navigation"
            aria-label="pagination"
        >
            <button
                onClick={() => {
                    if (page === 1) return;
                    setPage((prev) => prev - 1);
                }}
                disabled={page === 1}
                className={`button ${page === 1 && "is-warning"}`}
            >
                Previous
            </button>

            <div className="is-flex">
                {page > 1 && <button className="button mx-2">{page - 1}</button>}
                <button className="button mx-2 is-info">{page}</button>
                {page < pageCount && <button className="button mx-2">{page + 1}</button>}
            </div>

            <span
                onClick={() => {
                    if (page === pageCount) return;
                    setPage((prev) => prev + 1);
                }}
                disabled={page === pageCount}
                className={`button ${page === pageCount && "is-warning"}`}
            >
        Next page
      </span>
        </nav>
    );
}