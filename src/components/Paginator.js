import React from "react";

function Paginator(props) {
  if (props.movieCount) {
    const pageCount = Math.ceil(props.movieCount / props.pageSize);
    return Array(pageCount)
      .fill()
      .map((_, idx) => (
        <button type="button" key={"idx." + idx} onClick={props.pageChanger}>
          {idx + 1}
        </button>
      ));
  }

  return null;
}

export default Paginator;
