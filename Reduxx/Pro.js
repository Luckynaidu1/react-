import React from 'react'
import Message from './Message'
import {store} from './store'
import {Provider} from 'react-redux'
export const Pro = () => {
  return (
    <div>
      <Provider store={store}>
     <Message/>
     </Provider>
    </div>
  )
}
export default Pro