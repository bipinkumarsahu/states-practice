import React from 'react';
import './SeasonDisplay.css'

const seasonConfig = {
    summer : {
        iconName: "sun",
        text: "Lets hit the beach"

    },

    winter:  {
        iconName: "snowflake",
        text: "Burr, it is chilly"
    }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season)
  const {iconName:icon,text} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}> 
      <i className={`icon-left massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className={` icon-right massive ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
