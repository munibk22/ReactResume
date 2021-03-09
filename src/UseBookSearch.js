import {useEffect, useState} from 'react'
import axios from 'axios'

export default function UseBookSearch(query, pageNumber) {

useEffect(() =>{

    axios({
        method:'GET',
        url:'HTTP://openlibrary.org/search.json',
        params:{q:query, page: pageNumber}
    })
},[query,pageNumber])

    return null
}
