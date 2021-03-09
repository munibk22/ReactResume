import React,{useState, useRef, useCallback} from 'react'
import UseBookSearch from'./UseBookSearch'

export default function ScrollingApp() {
    const [query, setQuery]=useState('')
    const [pageNumber, setPageNumber ]=useState(1)
    const observer = useRef()
const lastBookElementRef = useCallback(node =>{
console.log(node)
})
    
    let textValHandler = (e)=>{

        setQuery(e.target.value)
        setPageNumber(1)
    }

   const {
       books,
       hasMore,
       loading,
       error
   }= UseBookSearch(query, pageNumber)
    return (
        <div>
            Book Search/Scrolling App:<br />
           <input type='text' value={query} onChange={textValHandler}></input>
           <div>
               {books.map((book, index) =>
               {
                if(books.length === index +1){
                    return  <p ref={lastBookElementRef} key={book}>{book}</p> }

                    else {                        return  <p key={book}>{book}</p> }
                    }
               
           
           )}
           
           </div>
           <div>{loading && 'Loading...'} </div>
           <div>{error && 'Error..'}</div>
        
        </div>
    )
}
