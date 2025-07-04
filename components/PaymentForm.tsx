import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Platform } from 'react-native';
import Colors from '@/constants/colors';
import { PaymentInfo } from '@/types/order';
import { validateCardNumber, validateExpiryDate, validateCVV } from '@/utils/validation';

// Note: In a real app, you would use a library like react-native-stripe-sdk
// This is a simplified mock for demonstration purposes

interface PaymentFormProps {
  onPaymentChange: (payment: PaymentInfo) => void;
  errors?: Record<string, string>;
}

export default function PaymentForm({ onPaymentChange, errors = {} }: PaymentFormProps) {
  const [payment, setPayment] = useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handleChange = (field: keyof PaymentInfo, value: string) => {
    let formattedValue = value;
    
    // Format card number with spaces
    if (field === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
    
    // Format expiry date
    if (field === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
    }
    
    const newPayment = { ...payment, [field]: formattedValue };
    setPayment(newPayment);
    onPaymentChange(newPayment);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Information</Text>
      
      <Text style={styles.label}>Cardholder Name *</Text>
      <TextInput
        style={[styles.input, errors.cardholderName && styles.inputError]}
        value={payment.cardholderName}
        onChangeText={(value) => handleChange('cardholderName', value)}
        placeholder="Enter cardholder name"
        autoCapitalize="words"
      />
      {errors.cardholderName && <Text style={styles.errorText}>{errors.cardholderName}</Text>}

      <Text style={styles.label}>Card Number *</Text>
      <TextInput
        style={[styles.input, errors.cardNumber && styles.inputError]}
        value={payment.cardNumber}
        onChangeText={(value) => handleChange('cardNumber', value)}
        placeholder="1234 5678 9012 3456"
        keyboardType="numeric"
        maxLength={19}
      />
      {errors.cardNumber && <Text style={styles.errorText}>{errors.cardNumber}</Text>}

      <View style={styles.row}>
        <View style={styles.halfWidth}>
          <Text style={styles.label}>Expiry Date *</Text>
          <TextInput
            style={[styles.input, errors.expiryDate && styles.inputError]}
            value={payment.expiryDate}
            onChangeText={(value) => handleChange('expiryDate', value)}
            placeholder="MM/YY"
            keyboardType="numeric"
            maxLength={5}
          />
          {errors.expiryDate && <Text style={styles.errorText}>{errors.expiryDate}</Text>}
        </View>
        
        <View style={styles.halfWidth}>
          <Text style={styles.label}>CVV *</Text>
          <TextInput
            style={[styles.input, errors.cvv && styles.inputError]}
            value={payment.cvv}
            onChangeText={(value) => handleChange('cvv', value)}
            placeholder="123"
            keyboardType="numeric"
            maxLength={4}
            secureTextEntry
          />
          {errors.cvv && <Text style={styles.errorText}>{errors.cvv}</Text>}
        </View>
      </View>

      <View style={styles.securityNote}>
        <Text style={styles.securityText}>
          🔒 Your payment information is secure and encrypted
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.mediumGray,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 16,
  },
  inputError: {
    borderColor: Colors.error,
  },
  errorText: {
    color: Colors.error,
    fontSize: 14,
    marginTop: -12,
    marginBottom: 16,
  },
  securityNote: {
    backgroundColor: Colors.lightGray,
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  securityText: {
    fontSize: 14,
    color: Colors.darkGray,
    textAlign: 'center',
  },
});