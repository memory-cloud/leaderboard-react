import React from 'react';

export default ({id, score}) => {
  let url = 'http://graph.facebook.com/' + id + '/picture?type=square'
  return (
    <div>
      <img src={url} alt=''/>
      {score}
    </div>
  );
};

