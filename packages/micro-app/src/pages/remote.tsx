import { Suspense, lazy } from 'react';

// const RemoteCard = lazy(() => {
//   // @ts-ignore
//   return import('remoteMain/Card');
// });
// @ts-ignore
import  RemoteCard from 'remoteMain/Card';


export default () => {
  return (
    <div>
      <h1>MF Host</h1>
      <Suspense fallback="loading">
        <RemoteCard userName="GaryHuang" age={18} />
      </Suspense>
    </div>
  );
};