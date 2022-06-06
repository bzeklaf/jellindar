import { useEffect, useState } from "react";

function BackToTopButton() {
  const[backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

const scrollUp = () => {
  window.scrollTo({
    top:0,
    behavior: "smooth"
  })
}

  return <div className="top">
    {backToTopButton && (
      <button className="button-up" onClick={scrollUp} >JELLY UPPPP!!!</button>
    )}

  </div>;
}

export default BackToTopButton; 