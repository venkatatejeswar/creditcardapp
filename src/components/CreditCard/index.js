import {useState} from 'react'
import {
  AppContainer,
  CardContainer,
  TitleContainer,
  Title,
  CreditCardContainer,
  CardNum,
  CardHolderTitle,
  HolderName,
  FormContainer,
  Form,
  FormTitle,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNum] = useState('')
  const [cardName, setCardName] = useState('')
  const onCardNumber = e => {
    setCardNum(e.target.value)
  }
  const onCardHolderName = e => {
    setCardName(e.target.value)
  }
  return (
    <AppContainer>
      <CardContainer>
        <TitleContainer>
          <Title>CREDIT CARD</Title>
        </TitleContainer>
        <CreditCardContainer data-testid="creditCard">
          <CardNum>{cardNumber}</CardNum>
          <CardHolderTitle>CARDHOLDER NAME</CardHolderTitle>
          <HolderName>{cardName.toUpperCase()}</HolderName>
        </CreditCardContainer>
      </CardContainer>
      <FormContainer>
        <Form>
          <FormTitle>Payment Method</FormTitle>
          <Input
            placeholder="Card Number"
            value={cardNumber}
            onChange={onCardNumber}
          />
          <Input
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onCardHolderName}
          />
        </Form>
      </FormContainer>
    </AppContainer>
  )
}

export default CreditCard
