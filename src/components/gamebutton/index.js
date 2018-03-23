import React from 'react';

export default ({leaderboard, appid, name}) => {
  let url = '?key=' + leaderboard + '&appid=' + appid + '&name=' + name
  return (
    <div>
        <a href={url}>{name} ({leaderboard})</a>
    </div>
  );
};
