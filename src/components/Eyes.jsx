import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotateLeft, setRotateLeft] = useState(0);
  const [rotateRight, setRotateRight] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2 - 50;

      var angleLeft = Math.atan2(deltaY, deltaX + 100) * (180 / Math.PI);
      var angleRight = Math.atan2(deltaY, deltaX - 100) * (180 / Math.PI);

      // console.log(e.clientX, " ", deltaX);

      setRotateLeft(angleLeft - 180);
      setRotateRight(angleRight - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-0.7"
        className='relative w-full h-full bg-cover bg-center bg-[url("/assets/eyes-background.jpg")]'
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900"
              style={{
                transform: `translate(${
                  Math.sin((rotateLeft * Math.PI) / 180) * 5
                }px, ${Math.cos((rotateLeft * Math.PI) / 180) * 5}px)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotateLeft}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2.5vw]"
              >
                <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900"
            style={{
              transform: `translate(${
                Math.sin((rotateRight * Math.PI) / 180) * 5
              }px, ${Math.cos((rotateRight * Math.PI) / 180) * 5}px)`,
            }}>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotateRight}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2.5vw]"
              >
                <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
