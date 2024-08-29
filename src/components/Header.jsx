import React from 'react'
import {useState,useEffect} from "react"

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Web Developer", "Programmer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    const [mobilemenu,setMobilemenu]=useState("close");

    function handlemenu(){
        setMobilemenu(prevmenu => {
            return prevmenu==="close" ? "open" : "close"
        })
    }

  return (
    <div id="header">
      <div className="container">
        <nav>
          <h1>W E L C O M E</h1>
          <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* <i className="fas fa-times" onClick={handlemenu}></i> */}
          </ul>
          {/* <i className="fas fa-bars" onClick={handlemenu}></i> */}

        </nav>
        <div className="header-text">
                <h1>{`▶`}<span style={{color:"DarkTurquoise"}}>{text}</span></h1>
                {/* <p>DEVELOPER/PROGRAMMER</p> */}
                <h2>Hi,I am <span> Akash</span><br />From Odisha,India</h2>
            </div>
        
      </div>
    
    </div>
  )
}

export default Header
