import React from 'react'
import FilterDesktop from './FilterDesktop'
import FilterMobile from './FilterMobile'
import { useMediaQuery } from 'react-responsive'

export default function FilterNav(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })
  return isDesktopOrLaptop ? <FilterDesktop {...props}/> : <FilterMobile {...props}/> 
}
