import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--line-color);
  height: 100px;
  border-radius: 5px;

  div{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px 10px;
  }
  input {
    flex: 0.5;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    /* border: 1px solid var(--line-color); */
    border-radius: 4px;
  }

  select {
    flex: 0.1;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }

  button {
    padding: 8px 12px;
    font-size: 14px;
    background-color: var(--main-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #e0644a;
    }
  }
`;

const SearchArea = ({ searchTerm, setSearchTerm, filterType, setFilterType }) => {
  return (
    <SearchWrapper>
        <div>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="title">제목만</option>
            <option value="titleAndContent">제목 + 내용</option>
        </select>
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="궁금한 내용을 검색해보세요."
        />
        {/* <button>검색</button> */}
      </div>
    </SearchWrapper>
  );
};

export default SearchArea;
