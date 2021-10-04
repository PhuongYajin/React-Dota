import React from 'react';

function ListHeader() {
  return (
    <div className="title-heroes">
      <p className="hero">Hero</p>
      <p className="hero-bans-picks">Pro Pick/Bans*</p>
      <p className="hero-wins">Pro Wins</p>
    </div>
  );
}

export default ListHeader;
