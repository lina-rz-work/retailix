import { StyledShipping, ShippingList, ListItem } from "./styles"

export const ShippingReturns: React.FC = () => {

  return (
    <StyledShipping>
      <ShippingList>
        <ListItem>
          Once a return is received, please allow 7-14 business days to process and 3-5 business days for the refund 
          to be credited to the payment method used at the time of purchase.
        </ListItem>
        <ListItem>
          A flat rate cost of $4.95 USD will be deducted from your refund for returns.
        </ListItem>
        <ListItem>
          We do not offer item exchanges for online orders at this time. To exchange an item for a new size or 
          color you must return the unwanted item(s) and place a new web order for the desired item(s). 
          Your returned item will be processed and refund granted to original form of payment as long 
          as the item meets our return policy terms. Availability of replacement item is not guaranteed.
        </ListItem>
        <ListItem>
          Returns accepted by mail and in store within 30 days of the shipment date. Items must be unworn 
          and tags must be attached.
        </ListItem>
      </ShippingList>
      <p>See Shipping Methods</p>
    </StyledShipping>
  )
}
