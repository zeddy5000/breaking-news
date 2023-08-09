import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react'

const NewsContext = createContext();
const NewsContextProvider = (props)=>{
    const apiKey = '9d7663d53aac4459b71eb94be5650264';
    const [data,setData]= useState([])

    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-07-09&sortBy=publishedAt&apiKey=${apiKey}`)
        .then((response)=>setData(response.data)).catch((error)=>console.log(error))
    },[])
    return(
        <NewsContextProvider props={data}>{props.children}</NewsContextProvider>
    )
}
export default NewsContextProvider