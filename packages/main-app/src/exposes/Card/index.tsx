import React, { useEffect, useState } from 'react';

import styles from './index.less';

export default (props: {userName: '', age: 0 }) => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    getList();
  }, [])

  const getList = () => {
    // fetch('http://aaa/api/v1/xxx').then(res => {
    //   return res.json()
    // }).then(res => {
    //   console.log('res', res);
    // })
  }

  return (
    <div className={styles.card}>
      <h1>remote Card</h1>
      <div>{ count }</div>
      <div>
        <p>{ props.userName }</p>
        <p>{ props.age }</p>
      </div>
      <button onClick={() => setCount(count+ 1)}>add</button>
    </div>
  );
};