import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ShippingAddress } from '@/types/order';
import { CUSTOMER_SHIP_TO_ADDRESS } from '@/constants/shipping';
import Colors from '@/constants/colors';

interface ShippingLabelProps {
  fromAddress: ShippingAddress;
  orderId?: string;
}

export default function ShippingLabel({ fromAddress, orderId }: ShippingLabelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shipping Label</Text>
      
      {orderId && (
        <Text style={styles.orderId}>Order ID: {orderId}</Text>
      )}
      
      <View style={styles.labelContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FROM:</Text>
          <Text style={styles.addressText}>
            {fromAddress.firstName} {fromAddress.lastName}
          </Text>
          <Text style={styles.addressText}>{fromAddress.address}</Text>
          <Text style={styles.addressText}>
            {fromAddress.city}, {fromAddress.state} {fromAddress.zipCode}
          </Text>
          <Text style={styles.addressText}>{fromAddress.country}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TO:</Text>
          <Text style={styles.addressText}>{CUSTOMER_SHIP_TO_ADDRESS.name}</Text>
          <Text style={styles.addressText}>{CUSTOMER_SHIP_TO_ADDRESS.address}</Text>
          <Text style={styles.addressText}>
            {CUSTOMER_SHIP_TO_ADDRESS.city}, {CUSTOMER_SHIP_TO_ADDRESS.state} {CUSTOMER_SHIP_TO_ADDRESS.zipCode}
          </Text>
          <Text style={styles.addressText}>{CUSTOMER_SHIP_TO_ADDRESS.country}</Text>
        </View>
      </View>
      
      <View style={styles.instructions}>
        <Text style={styles.instructionsTitle}>Shipping Instructions:</Text>
        <Text style={styles.instructionsText}>
          • Package your VHS tapes securely{'\n'}
          • Include this label on the outside of your package{'\n'}
          • Drop off at any USPS location or schedule a pickup{'\n'}
          • We'll email you when we receive your tapes
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 12,
  },
  orderId: {
    fontSize: 14,
    color: Colors.darkGray,
    marginBottom: 16,
  },
  labelContainer: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 8,
  },
  addressText: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 2,
  },
  instructions: {
    backgroundColor: Colors.lightGray,
    padding: 16,
    borderRadius: 8,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  instructionsText: {
    fontSize: 14,
    color: Colors.darkGray,
    lineHeight: 20,
  },
});