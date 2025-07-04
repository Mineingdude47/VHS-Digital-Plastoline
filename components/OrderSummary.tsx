import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/colors';
import { OrderDetails } from '@/types/order';
import { TAPE_PRICE } from '@/constants/shipping';

interface OrderSummaryProps {
  orderDetails: OrderDetails;
}

export default function OrderSummary({ orderDetails }: OrderSummaryProps) {
  const { tapeCount, totalPrice, shippingAddress } = orderDetails;
  const subtotal = tapeCount * TAPE_PRICE;
  const shippingCost = 0; // Free shipping

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Items</Text>
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>
            VHS to Digital Conversion ({tapeCount} tape{tapeCount !== 1 ? 's' : ''})
          </Text>
          <Text style={styles.itemPrice}>${subtotal.toFixed(2)}</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping</Text>
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>Free Shipping</Text>
          <Text style={styles.itemPrice}>$0.00</Text>
        </View>
      </View>
      
      <View style={styles.totalSection}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
        </View>
      </View>
      
      {shippingAddress && (
        <View style={styles.shippingSection}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <Text style={styles.addressText}>
            {shippingAddress.firstName} {shippingAddress.lastName}
          </Text>
          <Text style={styles.addressText}>{shippingAddress.address}</Text>
          <Text style={styles.addressText}>
            {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}
          </Text>
          <Text style={styles.addressText}>{shippingAddress.country}</Text>
        </View>
      )}
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
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    color: Colors.text,
    flex: 1,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  totalSection: {
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
    paddingTop: 16,
    marginBottom: 20,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  shippingSection: {
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
    paddingTop: 16,
  },
  addressText: {
    fontSize: 14,
    color: Colors.darkGray,
    marginBottom: 4,
  },
});