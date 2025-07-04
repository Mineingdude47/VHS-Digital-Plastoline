import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Colors from '@/constants/colors';
import AddressForm from '@/components/AddressForm';
import OrderSummary from '@/components/OrderSummary';
import PaymentForm from '@/components/PaymentForm';
import Button from '@/components/Button';
import { useOrderStore } from '@/store/orderStore';
import { ShippingAddress, PaymentInfo } from '@/types/order';
import { CUSTOMER_SHIP_TO_ADDRESS } from '@/constants/shipping';
import * as Haptics from 'expo-haptics';
import { validateForm } from '@/utils/validation';

export default function CheckoutScreen() {
  const router = useRouter();
  const { orderDetails, setShippingAddress, setPaymentInfo, setOrderId, setStatus } = useOrderStore();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddressChange = (address: ShippingAddress) => {
    setShippingAddress(address);
    // Clear address errors when user starts typing
    const newErrors = { ...formErrors };
    delete newErrors.firstName;
    delete newErrors.lastName;
    delete newErrors.email;
    delete newErrors.phone;
    delete newErrors.address;
    delete newErrors.city;
    delete newErrors.state;
    delete newErrors.zipCode;
    setFormErrors(newErrors);
  };

  const handlePaymentChange = (payment: PaymentInfo) => {
    setPaymentInfo(payment);
    // Clear payment errors when user starts typing
    const newErrors = { ...formErrors };
    delete newErrors.cardholderName;
    delete newErrors.cardNumber;
    delete newErrors.expiryDate;
    delete newErrors.cvv;
    setFormErrors(newErrors);
  };

  const validateCheckoutForm = () => {
    const { isValid, errors } = validateForm(orderDetails.shippingAddress);
    
    // Add payment validation
    if (!orderDetails.paymentInfo?.cardholderName) {
      errors.cardholderName = 'Cardholder name is required';
    }
    if (!orderDetails.paymentInfo?.cardNumber) {
      errors.cardNumber = 'Card number is required';
    }
    if (!orderDetails.paymentInfo?.expiryDate) {
      errors.expiryDate = 'Expiry date is required';
    }
    if (!orderDetails.paymentInfo?.cvv) {
      errors.cvv = 'CVV is required';
    }

    setFormErrors(errors);
    return isValid && Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!validateCheckoutForm()) {
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate a simple order ID
      const orderId = `VHS-${Date.now()}`;
      setOrderId(orderId);
      setStatus('pending');

      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }

      // Navigate to confirmation
      router.push('/confirmation');
    } catch (error) {
      Alert.alert('Error', 'There was an error processing your order. Please try again.');
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Checkout</Text>
          <Text style={styles.subtitle}>Complete your order</Text>
        </View>

        <OrderSummary orderDetails={orderDetails} />

        <AddressForm
          initialAddress={orderDetails.shippingAddress}
          onAddressChange={handleAddressChange}
          errors={formErrors}
        />

        <PaymentForm
          onPaymentChange={handlePaymentChange}
          errors={formErrors}
        />

        <View style={styles.ctaSection}>
          <Button
            title={isSubmitting ? "Processing..." : "Place Order"}
            onPress={handlePlaceOrder}
            disabled={isSubmitting}
            style={styles.placeOrderButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.darkGray,
  },
  ctaSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  placeOrderButton: {
    paddingHorizontal: 40,
    minWidth: 200,
  },
});