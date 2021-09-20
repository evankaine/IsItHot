import { useEffect } from 'react';


useEffect(() => {
  const timer = setTimeout(() => {
    setCount('Timeout called!');
  }, 1000);
  return () => clearTimeout(timer);
}, []);

export default function Spinner() {
  return (
    <div>
      <div class="loader">Loading...</div>
    </div>
  )
}
