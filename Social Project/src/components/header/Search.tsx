import React from 'react'

export const Search = () => {
  return (
    <div style={{width:"65%"}}>
        <form >
            <input type="text" name="searchQuery" id="searchQuery" style={{width:"50%", height:"35px", textAlign:"left"}}/>
            <input type="button" value="Buscar" style={{width:"60px", height:"35px", marginLeft:"5px"}}/>
        </form>
    </div>
  )
}
