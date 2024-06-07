import { useEffect, useState } from "react";

export const useGreeting = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
      const actualTime = new Date().getHours();
  
      if (actualTime >= 0 && actualTime < 12) {
        setMessage('Good morning');
      } else if (actualTime >= 12 && actualTime < 18) {
        setMessage('Good afternoon');
      } else {
        setMessage('Good evening');
      }
    }, []);

    return { message };
}