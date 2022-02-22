import { useFetch } from "../hooks/useFetch"
import Loader from "./Loader"
import React from 'react'
import Message from "./Message"

const SelecList = ({title,url,handleChange}) => {

  const {data,error,loading} =useFetch(url)
  //console.log(data,error,loading)

  if(!data)return null
  if(error){
    return <Message msg ={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />
  }

  let id =`select-${title}`
  let label =title.charAt(0).toUpperCase()+title.slice(1)
  let options = data.response[title]
  //console.log(options)
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data && options.map((el)=> <option value={el}>{el}</option>)}
      </select>
    </>
  )
}

export default SelecList