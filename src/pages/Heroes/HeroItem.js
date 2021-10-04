import React, { memo } from 'react';

const HeroItem = ({ heroData }) => {
  const {
    icon, localized_name, pro_pick, pro_ban, pro_win,
  } = heroData;
  return (
    <div className="hero-info">
      <div className="hero">
        <img className="hero-icon" src={`${process.env.REACT_APP_API_ENDPOINT}${icon}`} alt="" />
        <div className="hero-name">
          {localized_name}
        </div>
      </div>

      <div className="hero-bans-picks">
        {pro_pick}
        /
        {pro_ban}
      </div>

      <div className="hero-wins">{pro_win}</div>
    </div>
  );
};
export default memo(HeroItem);
