import React, { useEffect, useState } from "react";
import client from 'lib/api/client';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleExecTest = async () => {
    const res = await client.get('/test');

    if (res.status === 200) {
      setMessage(res.data.message);
    }
  };

  useEffect(() => {
    handleExecTest();
  }, []);

  return (
    <h1>{message}</h1>
  );
}

export default App;
