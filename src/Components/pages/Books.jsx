import React from "react";
import { useEffect, useState } from "react";

// import { BookCard } from "./BookCard";
// import styled, { css } from "styled-components";

// export const Grid = styled.div`
//  add required style here
// `;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
//  make a GET request to http://localhost:8080/books to get all the books data
  }, []);
  const getData = async() => {
   const response = await fetch(`http://localhost:8080/books`)
     console.log(response)
     setData(await response.json())
    };
  
  return (
    <>
      <h1>Books</h1>
      {/* <Grid data-testid="books-container"> */}
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          <div>
            {data.map((el)=>{
              return(
                <div>
                  <div>{el.thumbnailUrl}</div>
                 
                  <h2>{el.id}</h2>
                  <h2>{el.title}</h2>
                  </div>
              )
            })}
          </div>

          
      {/* </Grid> */}
    </>
  );
};
export default Books;


