
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  const fetchQuote = async () => {
    const response = await axios.get('https://api.quotable.io/random');
    setQuote(response.data.content);
    setAuthor(response.data.author);
    changeBackgroundColor();
  };

  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div  style={{backgroundColor: bgColor , width:"100%", height:"100%", display:"flex" ,alignItems:"center", justifyContent:"center"}}>
       
            <div>
            <div id="quote-box" style={{  textAlign: 'center', padding: '2rem', transition: 'background-color 0.5s ease' }}>
                    <p id="text" style={{color:bgColor}}>{quote}</p>
                    <p id="author"  style={{color:bgColor}}>- {author}</p>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                        <a
                            id="tweet-quote"
                            href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{borderRadius:"5px" , backgroundColor:bgColor,padding:"10px"}}
                        >
                            <i  class="fa-brands fa-twitter" style={{color:"white"}}> </i>
                        </a>
                        <button id="new-quote" onClick={handleNewQuote} style={{padding:"10px",cursor:"pointer",border:"none",borderRadius:"5px",color:"white" ,backgroundColor:bgColor}}>New Quote</button>

                </div>
            </div>
            <span style={{color:"white"}}>By Yassin</span>
            </div>
            
       
    </div>
  );
};

export default QuoteBox;
