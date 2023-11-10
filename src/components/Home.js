// import { Button, Space } from "antd";
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';

export default function Home() {
  /* Ініціалізуємо стан */
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());
  /* Функція для таймера */
  const timerAcion = () => {
    setCurrTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    let handlerTimer = setInterval(timerAcion, 1000);
    return () => {
      clearInterval(handlerTimer);
    };
  }, []);

  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2>Welcam home</h2>
      {/* <Space wrap> */}
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      
      {/* </Space> */}
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      {/* <h1>{state.currDate.toLocaleTimeString()}</h1> */}
      <div className="App">
        <h1>{currTime}</h1>
      </div>
    </>
  );
}
