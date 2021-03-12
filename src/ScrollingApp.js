import React,{useState} from 'react'
import UseBookSearch from'./UseBookSearch'

export default function ScrollingApp() {
    const [query, setQuery]=useState('')
    const [pageNumber, setPageNumber ]=useState(1)
   // const observer = useRef()

   const lastBookElementRef ='hello'
   /*
   useCallback(node =>{
    let holder='hello'
console.log(holder)
})
    */
    let textValHandler = (e)=>{

        setQuery(e.target.value)
        setPageNumber(1)
    }

   const {
       books,
     // hasMore,
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
