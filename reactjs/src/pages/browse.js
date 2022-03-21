import React, { useContext } from 'react'
import BrowseContainer from '../containers/browse';
import selectionFilter from '../utils/selection-filter';
 
export default function Browse() {
  // we need the series and the films 
  const {series} = useContext('series')
  const {films} = useContext('films')
  //we need slides
  const slides = selectionFilter({series, films})
  // pass it to the browse container
  return (
    <div>
      <BrowseContainer slides={slides}/>
    </div>
  )
}
