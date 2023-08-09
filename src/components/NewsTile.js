import React, { useContext } from 'react'
import {NewsContext} from '../NewsContext'

const NewsTile = (props) => {
    const {data} = useContext(NewsContext)
  return (
    <div>NewsTile</div>
  )
}

export default NewsTile