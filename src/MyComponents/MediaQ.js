import React from 'react'
import MediaQuery from 'react-responsive'

function MediaQ() {
    return (
        <div>
             <h1>Device Test!</h1>
    <MediaQuery minWidth={1224}>
      <p>You are a desktop or laptop</p>
      <MediaQuery minWidth={1824}>
        <p>You also have a huge screen</p>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery  minWidth={906}>
      <h1>phone</h1>
    </MediaQuery>
        </div>
    )
}

export default MediaQ
