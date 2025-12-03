// // Animation Timeline
// const animationTimeline = () => {
//   // Spit chars that needs to be animated individually
//   const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
//   const hbd = document.getElementsByClassName("wish-hbd")[0];

//   textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
//     .split("")
//     .join("</span><span>")}</span`;

//   hbd.innerHTML = `<span>${hbd.innerHTML
//     .split("")
//     .join("</span><span>")}</span`;

//   const ideaTextTrans = {
//     opacity: 0,
//     y: -20,
//     rotationX: 5,
//     skewX: "15deg"
//   };

//   const ideaTextTransLeave = {
//     opacity: 0,
//     y: 20,
//     rotationY: 5,
//     skewX: "-15deg"
//   };

//   const tl = new TimelineMax();

//   tl
//     .to(".container", 0.2, {
//       visibility: "visible"
//     })
//     .from(".one", 1.4, {
//       opacity: 0,
//       y: 10
//     })
//     .from(".two", 0.8, {
//       opacity: 0,
//       y: 10
//     })
//     .to(
//       ".one",
//       0.7,
//       {
//         opacity: 0,
//         y: 10
//       },
//       "+=2.5"
//     )
//     .to(
//       ".two",
//       0.7,
//       {
//         opacity: 0,
//         y: 10
//       },
//       "-=1"
//     )
//     .from(".three", 1.4, {
//       opacity: 0,
//       y: 10
//       // scale: 0.7
//     })
//     .to(
//       ".three",
//       1.4,
//       {
//         opacity: 0,
//         y: 10
//       },
//       "+=2"
//     )
//     .from(".four", 1.4, {
//       scale: 0.2,
//       opacity: 0
//     })
//     .from(".fake-btn", 0.6, {
//       scale: 0.2,
//       opacity: 0
//     })
//     .staggerTo(
//       ".hbd-chatbox span",
//       0.5,
//       {
//         visibility: "visible"
//       },
//       0.05
//     )
//     .to(".fake-btn", 0.2, {
//       backgroundColor: "rgb(127, 206, 248)"
//     })
//     .to(
//       ".four",
//       1.0,
//       {
//         scale: 0.2,
//         opacity: 0,
//         y: -150
//       },
//       "+=0.7"
//     )
//     .from(".idea-1", 0.7, ideaTextTrans)
//     .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
//     .from(".idea-2", 0.7, ideaTextTrans)
//     .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
//     .from(".idea-3", 0.7, ideaTextTrans)
//     .to(".idea-3 strong", 0.5, {
//       scale: 1.2,
//       x: 10,
//       backgroundColor: "rgb(21, 161, 237)",
//       color: "#fff"
//     })
//     .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
//     .from(".idea-4", 0.7, ideaTextTrans)
//     .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
//     .from(
//       ".idea-5",
//       0.7,
//       {
//         rotationX: 15,
//         rotationZ: -10,
//         skewY: "-5deg",
//         y: 50,
//         z: 10,
//         opacity: 0
//       },
//       "+=0.5"
//     )
//     .to(
//       ".idea-5 span",
//       0.7,
//       {
//         rotation: 90,
//         x: 8
//       },
//       "+=0.4"
//     )
//     .to(
//       ".idea-5",
//       0.7,
//       {
//         scale: 0.2,
//         opacity: 0
//       },
//       "+=2"
//     )
//     .staggerFrom(
//       ".idea-6 span",
//       0.8,
//       {
//         scale: 3,
//         opacity: 0,
//         rotation: 15,
//         ease: Expo.easeOut
//       },
//       0.2
//     )
//     .staggerTo(
//       ".idea-6 span",
//       0.8,
//       {
//         scale: 3,
//         opacity: 0,
//         rotation: -15,
//         ease: Expo.easeOut
//       },
//       0.2,
//       "+=1"
//     )
//     .staggerFromTo(
//       ".baloons img",
//       2.5,
//       {
//         opacity: 0.9,
//         y: 1400
//       },
//       {
//         opacity: 1,
//         y: -1000
//       },
//       0.2
//     )
//     .from(
//       ".stanley-dp",
//       0.5,
//       {
//         scale: 3.5,
//         opacity: 0,
//         x: 25,
//         y: -25,
//         rotationZ: -45
//       },
//       "-=2"
//     )
//     .from(".hat", 0.5, {
//       x: -100,
//       y: 350,
//       rotation: -180,
//       opacity: 0
//     })
//     .staggerFrom(
//       ".wish-hbd span",
//       0.7,
//       {
//         opacity: 0,
//         y: -50,
//         // scale: 0.3,
//         rotation: 150,
//         skewX: "30deg",
//         ease: Elastic.easeOut.config(1, 0.5)
//       },
//       0.1
//     )
//     .staggerFromTo(
//       ".wish-hbd span",
//       0.7,
//       {
//         scale: 1.4,
//         rotationY: 150
//       },
//       {
//         scale: 1,
//         rotationY: 0,
//         color: "#ff69b4",
//         ease: Expo.easeOut
//       },
//       0.1,
//       "party"
//     )
//     .from(
//       ".wish h5",
//       0.5,
//       {
//         opacity: 0,
//         y: 10,
//         skewX: "-15deg"
//       },
//       "party"
//     )
//     .staggerTo(
//       ".eight svg",
//       1.5,
//       {
//         visibility: "visible",
//         opacity: 0,
//         scale: 80,
//         repeat: 3,
//         repeatDelay: 1.4
//       },
//       0.3
//     )
//     .to(".six", 0.5, {
//       opacity: 0,
//       y: 30,
//       zIndex: "-1"
//     })
//     .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
//     .to(
//       ".last-smile",
//       0.5,
//       {
//         rotation: 90
//       },
//       "+=1"
//     );

  
//   const replyBtn = document.getElementById("replay");
//   replyBtn.addEventListener("click", () => {
//     tl.restart();
//   });
// };

// animationTimeline()



// // Animate the celebrant's image with GSAP
// const celebImg = document.querySelector(".celebrant-img img");

// gsap.to(celebImg, {
//   y: -30,           // float up by 30px
//   duration: 2,
//   repeat: -1,       // infinite
//   yoyo: true,       // float up and down
//   ease: "sine.inOut"
// });

// // Optional: Make image rotate slightly while floating
// gsap.to(celebImg, {
//   rotation: 5,
//   duration: 3,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut"
// });


// const miniCelebs = document.querySelectorAll(".mini-celeb");

// miniCelebs.forEach(img => {
//   const startX = Math.random() * window.innerWidth;
//   const startY = window.innerHeight + Math.random() * 200;

//   gsap.set(img, { x: startX, y: startY, opacity: Math.random() * 0.7 + 0.3 });

//   gsap.to(img, {
//     y: -100,  // move upward
//     x: "+=" + (Math.random() * 100 - 50), // slight horizontal drift
//     rotation: Math.random() * 360,
//     duration: Math.random() * 5 + 5,
//     repeat: -1,
//     ease: "sine.inOut",
//     delay: Math.random() * 2
//   });
// });


// Animation Timeline
const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.2, { visibility: "visible" }) // doubled
    .from(".one", 5.0, { opacity: 0, y: 10 })
    .from(".two", 1.5, { opacity: 0, y: 10 })
    .to(".one", 1.4, { opacity: 0, y: 10 }, "+=2.5")
    .to(".two", 1.4, { opacity: 0, y: 10 }, "-=1")
    .from(".three", 5.0, { opacity: 0, y: 10 })
    .to(".three", 5.0, { opacity: 0, y: 10 }, "+=2")
    .from(".four", 2.1, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.6, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 1, { visibility: "visible" }, 0.1) // doubled stagger
    .to(".fake-btn", 0.2, { backgroundColor: "rgb(127, 206, 248)" })
    .to(".four", 1, { scale: 0.2, opacity: 0, y: -150 }, "+=0.7")
    .from(".idea-1", 2.4, ideaTextTrans)
    .to(".idea-1", 2.4, ideaTextTransLeave, "+=3") // doubled delay
    .from(".idea-2", 2.4, ideaTextTrans)
    .to(".idea-2", 2.4, ideaTextTransLeave, "+=3")
    .from(".idea-3", 2.4, ideaTextTrans)
    .to(".idea-3 strong", 1, { scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
    .to(".idea-3", 2.4, ideaTextTransLeave, "+=3")
    .from(".idea-4", 2.4, ideaTextTrans)
    .to(".idea-4", 2.4, ideaTextTransLeave, "+=3")
    .from(".idea-5", 2.4, { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 }, "+=1")
    .to(".idea-5 span", 2.4, { rotation: 90, x: 8 }, "+=0.8")
    .to(".idea-5", 2.4, { scale: 0.2, opacity: 0 }, "+=4")
    .staggerFrom(".idea-6 span", 1.6, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.4)
    .staggerTo(".idea-6 span", 1.6, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.4, "+=2")
    .staggerFromTo(".baloons img", 5, { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000 }, 0.4)
    .from(".stanley-dp", 1, { scale: 7, opacity: 0, x: 25, y: -25, rotationZ: -45 }, "-=4")
    .from(".hat", 1, { x: -100, y: 350, rotation: -180, opacity: 0 })
    .staggerFrom(".wish-hbd span", 1.4, { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: Elastic.easeOut.config(1, 0.5) }, 0.2)
    .staggerFromTo(".wish-hbd span", 1.4, { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut }, 0.2, "party")
    .from(".wish h5", 1, { opacity: 0, y: 10, skewX: "-15deg" }, "party")
    .staggerTo(".eight svg", 3, { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 2.8 }, 0.6)
    .to(".six", 1, { opacity: 0, y: 30, zIndex: "-1" })
    .staggerFrom(".nine p", 2, ideaTextTrans, 2.4)
    .to(".last-smile", 1, { rotation: 90 }, "+=2");

  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

animationTimeline();

// Animate the celebrant's image with GSAP
const celebImg = document.querySelector(".celebrant-img img");

gsap.to(celebImg, {
  y: -60,           // doubled float
  duration: 4,       // doubled
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(celebImg, {
  rotation: 5,
  duration: 6,       // doubled
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Animate mini celebrant images
const miniCelebs = document.querySelectorAll(".mini-celeb");

miniCelebs.forEach(img => {
  const startX = Math.random() * window.innerWidth;
  const startY = window.innerHeight + Math.random() * 200;

  gsap.set(img, { x: startX, y: startY, opacity: Math.random() * 0.7 + 0.3 });

  gsap.to(img, {
    y: -100,  
    x: "+=" + (Math.random() * 100 - 50),
    rotation: Math.random() * 360,
    duration: Math.random() * 10 + 10, // doubled random duration
    repeat: -1,
    ease: "sine.inOut",
    delay: Math.random() * 4 // doubled delay
  });
});
