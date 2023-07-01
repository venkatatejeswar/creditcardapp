import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const CardContainer = styled.div`
  background-color: #3b4b69;
  width: 100vw;
  min-height: 40vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    width: 50vw;
  }
`
export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`
export const Title = styled.h1`
  font-size: 28px;
  color: #ffffff;
  font-weight: 700;
  font-weight: 'Roboto';
  text-align: center;
  border-bottom: 4px solid #ffd773;
  width: fit-content;
`
export const CreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 95%;
  max-width: 720px;
  min-height: 220px;
  border-radius: 16px;
  padding: 20px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0px 4px 16px 0px #344e7a;
  @media screen and (min-width: 768px) {
    width: 480px;
  }
`
export const CardNum = styled.p`
  color: #ffffff;
  font-size: 36px;
  font-weight: 800;
`
export const CardHolderTitle = styled.p`
  color: #d3d9e0;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`
export const HolderName = styled.p`
  color: #ffffff;
  font-size: 32px;
  font-weight: 800;
  margin-top: 0px;
`
export const FormContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    width: 50vw;
  }
`
export const Form = styled.form`
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  border-radius: 16px;
  min-width: 360px;
  min-height: 240px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    min-width: 420px;
    min-height: 300px;
  }
`
export const FormTitle = styled.h1`
  color: #475569;
  font-weight: 700;
  font-size: 28px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const Input = styled.input`
  height: 28px;
  width: 240px;
  margin-bottom: 20px;
  border-radius: 2px;
  border: 1px solid #bfbfbf;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    width: 320px;
    height: 32px;
  }
`
