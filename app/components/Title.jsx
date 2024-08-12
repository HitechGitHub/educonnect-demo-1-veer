import React from 'react'

const Title = ({classes, color, textSize, heading}) => {
  return (
    <div style={{
        color: color,
        fontSize: textSize,
        textAlign: 'center',
        width: 100 + "vw",
        paddingTop: 9 + "px",
        paddingBottom: 9 + "px",


    }} className={ `tracking-tighter uppercase font-bold ${classes}` }>
      {heading}
    </div>
  )
}

export default Title
