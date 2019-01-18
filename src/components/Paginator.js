import React from "react";

function Paginator(props) {
  if (props.movieCount) {
    const pageCount = Math.ceil(props.movieCount / props.pageSize);
    return Array(pageCount)
      .fill()
      .map((_, pageIndex) => (
        <button type="button" key={"pageIndex." + pageIndex} onClick={props.pageChanger}>
          {pageIndex + 1}
        </button>
      ));
  }

  return null;
}

export default Paginator;
