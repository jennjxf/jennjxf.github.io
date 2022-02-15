import React, {useState} from 'react';
import './../style/sharedStyle.css';

const ToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    }
    else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button onClick={scrollToTop} id="to-top-btn" style={{display: visible ? 'inline': 'none'}} title="take me back up">&#x2191;</button>
  );
}

export default ToTopButton;
