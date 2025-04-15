// Timer.tsx

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

// const Timer: React.FC = () => {
//   const [seconds, setSeconds] = useState<number>(0);

//   const startTimer = () => {
//     setInterval(() => {
//       setSeconds(prev => prev + 1);
//     }, 1000);
//   };

//   return (
//     <div>
//       <h2>타이머: {seconds}초</h2>
//       <Button onClick={startTimer}>시작</Button>
//     </div>
//   )
// }

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    },1000);

    return (
      <div>
        현재시간 : {time.toLocaleTimeString()}
      </div>
    )
  }
  

export default Clock;
