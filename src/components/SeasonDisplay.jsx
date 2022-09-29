import "../css/SeasonDisplay.css"
import React from 'react'

const seasonDisplayConfig = {
  winter: {
    text: "Burr, it's chilly",
    iconName: "snowflake"
  },
  summer: {
    text: "Let's hit the beach !",
    iconName: "sun"
  }
}

function determiningSeason(lat, month){
  if(month > 2 && month < 10){
    return lat > 0 ? "summer" : "winter"
  }else {
    return lat > 0 ? "winter" : "summer"
  }
}

export default function SeasonDisplay(props) {
  const season = determiningSeason(props.lat, new Date().getMonth())
  const { text, iconName } = seasonDisplayConfig[season]
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} loading icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} loading icon`}></i>
    </div>
  )
}
