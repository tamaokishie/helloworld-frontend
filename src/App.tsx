import React, { useState } from 'react';
import './App.css';

export const App = () => {

  const [message, setMessage] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:8080/hello");
      if (!response.ok) {
        throw new Error('ネットワークレスポンスが正常ではありません');
      }
      const text = await response.text();
      setMessage(text);
      console.log(text);
    } catch(error) {
      console.error('フェッチ操作に問題が発生しました:', error);
    }
  };

  return (
    <div className='app'>
      <button
        className='button'
        onClick={handleClick}
      >
        ここをクリックしてね★
      </button>
      <p>{message}</p>
    </div>
  );
}
