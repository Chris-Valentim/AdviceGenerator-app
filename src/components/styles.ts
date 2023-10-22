import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--dark-grayish-blue);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  height: 400px;
  width: 600px;
  padding-top: 30px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 80px;

  border-radius: 15px;
  position: relative;

  @media (max-width: 425px) {
    width: 400px;
    height: 500px;
  }
`

export const NumberAdvice = styled.p`
  color: var(--neon-green);

  display: flex;
  gap: 12px;
  letter-spacing: 5px;
`

export const Text = styled.h1`
  color: var( --light-cyan);

  @media (max-width: 425px) {
    font-size: 25px;
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

    :hover {
      box-shadow: 0px 4px 38px 20px var(--neon-green);
    }

    &:disabled {
      background-color: var(--button-block-gray);
      cursor: not-allowed;
    }
  `
