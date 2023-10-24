import { useState, useEffect } from 'react';
import * as S from './styles';
import axios from 'axios'

import IconButton from "../../assets/icon-dice.svg"

interface Slip {
  id: number;
  advice: string;
}

interface GetAdviceResponse {
  slip: Slip
}

const DOMAIN = "https://api.adviceslip.com"
const DEFAULT_SLIP: Slip = {
  id: 0,
  advice: "Buscando um novo conselho",
}

export const RandomAdvice = () => {
  const [phrase, setPhrase] = useState<Slip>(DEFAULT_SLIP)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  async function getAdvice() {
    setIsButtonDisabled(true)
    try{
      const response = await axios.get<GetAdviceResponse>(`${DOMAIN}/advice`)
      setPhrase(response.data.slip)
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
        ADVICE<span> #{phrase.id}</span>
      </S.NumberAdvice>
      <S.Text>
        {phrase.advice}
      </S.Text>
      <S.Divider />
      <S.Button 
        aria-label='Get new advice'  
        onClick={getAdvice} 
        disabled={isButtonDisabled}
      >
       <img 
        src={IconButton} 
        alt="" 
      />
      </S.Button>
    </S.Wrapper>
  )
}
