import styled from "styled-components";

const Cart = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 0.3rem;
  margin: 0.5rem auto;
  background: #fff;
  box-shadow: 1px 1px 10px 1px #ccc;
`;
const CounterContainer = styled.div``;
const Price = styled.div``;
const CartItem = () => {
  return (
    <Cart>
      <CounterContainer>+</CounterContainer>
      <Price>221122</Price>
    </Cart>
  );
};

export default CartItem;
