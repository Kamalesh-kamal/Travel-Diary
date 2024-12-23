/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";

import ListItem from "./ListItem";

function List({ className }) {
  return (
    <div className="ListDiv">
      <div className={className}>
        <ListItem />
      </div>
    </div>
  );
}

export default List;
