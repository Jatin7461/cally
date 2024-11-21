import React, { RefObject } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Header from './components/Header';
import BottomLeft from './components/BottomLeft';
import GhostImage from './components/GhostImage';
import Button from './components/Button';
import Flip from 'gsap/Flip';
function App() {
  console.log(window.innerWidth)
  const container: RefObject<HTMLInputElement> = React.createRef()

  useGSAP(() => {

    gsap.registerPlugin(Flip)
    let mm = gsap.matchMedia()

    mm.add({
      isLaptop: "(max-width: 1600px)",
      isMonitor: "(min-width: 1920px)"
    }, (context) => {

      let { isLaptop, isMonitor }: any = context.conditions
      gsap.timeline().fromTo('.ghostimg', {
        yPercent: isLaptop ? 15 : 45,
        scale: isLaptop ? 1 : 1.5,
      }, {
        yPercent: isLaptop ? 0 : 10,
        scale: isLaptop ? 0.7 : 1,
        delay: 1,
        ease: "power4.in"
      })
    })
    gsap.from('.casual', {
      delay: 1.2,
      opacity: 0
    })

    gsap.from('.expButton', {
      delay: 1,
      opacity: 0,
      y: 100,
      ease: "power4.in"
    })
    gsap.from('.rightContent', {
      delay: 1,
      opacity: 0,
      x: 100,
      ease: "power4.in"
    })

    gsap.from('.bottom-left-home-text', {
      delay: 1.2,
      opacity: 0
    })

    gsap.from('.icons', {
      delay: 1.2,
      x: -100,
      opacity: 0
    })

    gsap.from('.links', {
      y: -100,
      delay: 1.2,
      opacity: 0
    })

    // gsap.timeline().fromTo('.ghostimg', {
    //   yPercent: 15,
    //   scale: 1,
    // }, {
    //   yPercent: 0,
    //   scale: 0.7,
    //   delay: 1,
    //   ease: "power4.in"
    // })

    gsap.to('.ghostimg', {
      x: -400,
      delay: 4,
      ease: 'power4.in',
      opacity: 0
    })


    gsap.to('.expButton', {
      x: -400,
      delay: 4,
      ease: 'power4.in',
      opacity: 0
    })
    gsap.to('.casual', {
      x: -400,
      delay: 3.8,
      ease: 'power4.in',
      opacity: 0
    })
    gsap.to('.bottom-left-home-text', {
      x: -400,
      delay: 3.8,
      ease: 'power4.in',
      opacity: 0
    })
    gsap.to('.rightText', {
      x: -400,
      delay: 3.8,
      ease: 'power4.in',
      opacity: 0
    })
    gsap.to('.navigateButton', {
      x: -400,
      delay: 3.8,
      ease: 'power4.in',
      opacity: 0
    })
    gsap.to('.blackwoman', {
      delay: 4
    })

    let anotherwoman = document.querySelector('.anotherwoman')!
    let blackwoman = document.querySelector('.blackwoman')!
    let verticalArrows = document.querySelector('.verticalArrows')
    let bottomleft = document.querySelector('.bottomleft')
    let headingDiv = document.querySelector('.heading')
    let parentHomeDiv = document.querySelector('.parentHome')
    let rightContentDiv = document.querySelector('.rightContent')
    let rightContent2Div = document.querySelector('.right-content-second')
    let rightTextDiv = document.querySelector('.rightText')
    let navigateButtonDiv = document.querySelector('.navigateButton')
    setTimeout(() => {
      let womanState = Flip.getState('.blackwoman')
      anotherwoman.classList.add('anotherwoman-2')
      blackwoman.classList.add('blackwoman-2')
      anotherwoman.appendChild(blackwoman)
      Flip.from(womanState, {
        duration: 1, ease: "power4.inOut",
        onStart: () => {
          verticalArrows?.classList.remove('display-none');
        },
        onComplete: () => {
          headingDiv?.classList.add('display-none')
          parentHomeDiv?.classList.add('parent-home-2')
          rightContentDiv?.classList.add('right-content-2')
          rightContent2Div?.classList.remove('display-none');
          rightTextDiv?.classList.add('display-none')
          navigateButtonDiv?.classList.add('display-none')
        }
      })
    }, 4300)
    gsap.from('.arrow1', {
      yPercent: 100,
      onStart: () => {

      },
      opacity: 0,
      delay: 4.8,
      duration: 0.7,
      ease: "power1.out"
    })
    gsap.from('.black-dude-image', {
      opacity: 0,
      x: -400,
      y: 500,
      delay: 4.8,
      duration: 0.7,
      ease: "power4"
    })

    gsap.from('.arrow2', {
      yPercent: -100,
      opacity: 0,
      delay: 4.8,
      duration: 0.7,
      // duration: 5.7,
      ease: "power1.out"
    })

    gsap.timeline().from('.cally-heading', {
      delay: 5,
      onStart: () => {
        console.log('hih')
        bottomleft?.classList.remove('display-none')
      },
      opacity: 0,
      xPercent: -100
    })

      .from('.enjoy-cally', {
        opacity: 0,
        yPercent: -50,
        delay: 0.5
      })



  }, { scope: container })
  return (
    <div className='app' ref={container}>

      <Header />
      <Home />
      <GhostImage />
      <Button />
    </div>
  );
}

export default App;
