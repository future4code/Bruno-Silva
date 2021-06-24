import {GlobalStateContext} from './GlobalStateContext'
import React, { useContext, useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'

export const GlobalState = (props) => {

  return <GlobalStateContext.Provider>
    {props.children}
  </GlobalStateContext.Provider>
}