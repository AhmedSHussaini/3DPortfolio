import React, { useEffect, useState } from 'react';

export default function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const timeNow = new Date().getHours();
    const newGreeting =
      timeNow >= 5 && timeNow < 12
        ? "Good Morning"
        : timeNow >= 12 && timeNow < 18
        ? "Good Afternoon"
        : "Good Evening";
    setGreeting(newGreeting);
  }, []);

  return (
    <span className="greeting">{greeting}</span>
  );
}
