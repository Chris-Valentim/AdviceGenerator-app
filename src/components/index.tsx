import { useState, useEffect } from 'react';
import * as S from './styles';
import axios from 'axios'

import IconButton from "../assets/icon-dice.svg"
import PatternDesktop from "../assets/pattern-divider-desktop.svg"
import PatternMobile from "../assets/pattern-divider-mobile.svg"

interface Advice {
  id: number;
  advice: string;
}

interface GetAdviceResponse {
  slip: Advice
}

const DOMAIN = "https://api.adviceslip.com"

export const RandomPhrase = () => {
  const [phrase, setPhrase] = useState<GetAdviceResponse>()
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  async function getAdvice() {
    setIsButtonDisabled(true)
    try{
      const response = await axios.get<GetAdviceResponse>(`${DOMAIN}/advice`)
      setPhrase(response.data)
    } finally {
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 2000)
    }
  }

  useEffect(() => {
    getAdvice()
  }, []);

  return (
    <S.Wrapper>
      <S.NumberAdvice>
        ADVICE<span> #{phrase?.slip.id}</span>
      </S.NumberAdvice>
      <S.Text>
        "{phrase?.slip.advice}"
      </S.Text>
      {window.innerWidth >= 425 ? (
        <img src={PatternDesktop} alt='Pattern Desktop'/>
      ): (
        <img src={PatternMobile} alt="Pattern Mobile" />
      )}
      <S.Button onClick={getAdvice} disabled={isButtonDisabled}>
        <img
          src={IconButton}
          alt="Icon Button"
        />
      </S.Button>
    </S.Wrapper>
  )
}
