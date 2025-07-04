import { OrderDetails, ShippingAddress, PaymentInfo } from '@/types/order';
import { TAPE_PRICE } from '@/constants/shipping';

interface OrderStore {
  orderDetails: OrderDetails;
  setTapeCount: (count: number) => void;
  setShippingAddress: (address: ShippingAddress) => void;
  setPaymentInfo: (payment: PaymentInfo) => void;
  setOrderId: (id: string) => void;
  setStatus: (status: OrderDetails['status']) => void;
  resetOrder: () => void;
}

const initialOrderDetails: OrderDetails = {
  tapeCount: 1,
  totalPrice: TAPE_PRICE,
  shippingAddress: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA'
  }
};

// Simple state management without Zustand for now
let currentOrderDetails: OrderDetails = { ...initialOrderDetails };

export const useOrderStore = {
  get orderDetails() {
    return currentOrderDetails;
  },
  
  setTapeCount: (count: number) => {
    currentOrderDetails = {
      ...currentOrderDetails,
      tapeCount: count,
      totalPrice: count * TAPE_PRICE
    };
  },
  
  setShippingAddress: (address: ShippingAddress) => {
    currentOrderDetails = {
      ...currentOrderDetails,
      shippingAddress: address
    };
  },
  
  setPaymentInfo: (payment: PaymentInfo) => {
    currentOrderDetails = {
      ...currentOrderDetails,
      paymentInfo: payment
    };
  },
  
  setOrderId: (id: string) => {
    currentOrderDetails = {
      ...currentOrderDetails,
      orderId: id,
      orderDate: new Date()
    };
  },
  
  setStatus: (status: OrderDetails['status']) => {
    currentOrderDetails = {
      ...currentOrderDetails,
      status
    };
  },
  
  resetOrder: () => {
    currentOrderDetails = { ...initialOrderDetails };
  }
};