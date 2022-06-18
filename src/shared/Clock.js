
import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='rounded-full bg-[#D2E3D5] w-[120px] '>
      <Clock value={time}  hourHandLength={29} secondHandLength={43} minuteHandLength={36} renderNumbers={false} size={120} />
    </div>
  );
}