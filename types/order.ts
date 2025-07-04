export interface ShippingAddress {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }
  
  export interface PaymentInfo {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardholderName: string;
  }
  
  export interface OrderDetails {
    tapeCount: number;
    totalPrice: number;
    shippingAddress: ShippingAddress;
    paymentInfo?: PaymentInfo;
    orderId?: string;
    orderDate?: Date;
    status?: 'pending' | 'processing' | 'completed' | 'shipped';
  }
  
  export interface OrderStore {
    orderDetails: OrderDetails;
    setTapeCount: (count: number) => void;
    setShippingAddress: (address: ShippingAddress) => void;
    setPaymentInfo: (payment: PaymentInfo) => void;
    setOrderId: (id: string) => void;
    setStatus: (status: OrderDetails['status']) => void;
    resetOrder: () => void;
  }