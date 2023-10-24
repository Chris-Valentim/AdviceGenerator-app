import styled from 'styled-components'

import PatternDesktop from "../../assets/pattern-divider-desktop.svg"
import PatternMobile from "../../assets/pattern-divider-mobile.svg"

export const Wrapper = styled.div`
  background-color: var(--dark-grayish-blue);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  min-height: 400px;
  max-width: 600px;
  padding: 30px 50px 80px 50px;

  border-radius: 15px;
  position: relative;

  @media (max-width: 425px) {
    height: 400px;
    padding: 15px 20px 80px 20px;
  }
`

export const NumberAdvice = styled.p`
  color: var(--neon-green);

  display: flex;
  gap: 12px;
  letter-spacing: 5px;

  @media (max-width: 425px) {
    margin-bottom: 0;
  }
`

export const Text = styled.h1`
  color: var( --light-cyan);
  text-align: center;

  &:before {
    content: open-quote;
  }

  &:after {
    content: close-quote;
  }

  @media (max-width: 425px) {
    font-size: 25px;
    margin: 0;
  }
`

export const Button = styled.button`
  background-color: var(--neon-green);
  padding: 20px;
  border-radius: 100%;
  bottom: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translateY(50%);
  border: none;

    &:hover:not(:disabled) {
      box-shadow: 0px 0px 40px 3px var(--neon-green);
    }

    &:disabled {
      background-color: var(--button-block-gray);
      cursor: not-allowed;
    }
  `

export const Divider = styled.div`
  background-image: url(${PatternDesktop});
  background-repeat: no-repeat;
  background-position: center;
  height: 40px;
  width: 100%;

  @media (max-width: 425px) {
    background-image: url(${PatternMobile})
  }
`
