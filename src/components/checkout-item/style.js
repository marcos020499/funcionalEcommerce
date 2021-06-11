import styled from "styled-components";
export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  margin-top: -60vw;
`;
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const Span = styled.span`
  width: 23%;
  @media screen and (max-width: 768px){
    width: 18%;
  }
`;
export const Arrow = styled.div`
  cursor: pointer;
`;
export const Remove = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
export const Value = styled.span`
  margin: 0px 10px;
`;
export const SpanQuantity = styled.span`
  width: 23%;
  display: flex;
`;
