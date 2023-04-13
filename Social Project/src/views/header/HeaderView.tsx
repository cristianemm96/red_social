import { NavBar } from '@/components/header/NavBar'
import { Search } from '@/components/header/Search'
import { User } from '@/components/header/User'
import './style.css'
import React from 'react'

export const HeaderView = () => {
  return (
    <div className='header'>
        <NavBar/>
        <Search/>
        <User/>
    </div>
  )
}
