import React from "react";
import TypeWriterEffect from 'react-typewriter-effect'
import './home.css'
const SlideText = () => {
  return (
    <div className="typing">
        <span>
            <TypeWriterEffect
                textStyle={{
                    fontWeight:"bolder",
                    fontSize:"2rem",
                    // width:"45vw"
                }}
                cursorColor="orange"
                multiText={[
                    "World has enough coders",
                    "Be more than a coder",
                    "Chasing Jobs? Let the jobs chase you.",
                ]}
                multiTextDelay={2000}
                typeSpeed={50}
                multiTextLoop
            />
        </span>
    </div>
  );
};

export default SlideText;
