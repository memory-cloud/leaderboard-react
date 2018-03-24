import React from 'react'

export default ({leaderboardkey, appid, name}) => {
  let url = '?key=' + leaderboardkey + '&appid=' + appid + '&name=' + name
  return (
    <div>
        <a href={url}>{name} ({leaderboardkey})</a>
    </div>
  )
}
