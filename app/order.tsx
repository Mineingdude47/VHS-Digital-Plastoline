import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Colors from '@/constants/colors';
import TapeCounter from '@/components/TapeCounter';
import Button from '@/components/Button';
import { useOrderStore } from '@/store/orderStore';

export default function OrderScreen() {
  const router = useRouter();
  const { orderDetails, setTapeCount } = useOrderStore();
  const [tapeCount, setLocalTapeCount] = useState(orderDetails.tapeCount);

  useEffect(() => {
    setTapeCount(tapeCount);
  }, [tapeCount, setTapeCount]);

  const handleContinue = () => {
    router.push('/checkout');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Place Your Order</Text>
          <Text style={styles.subtitle}>
            Tell us how many VHS tapes you want to digitize
          </Text>
        </View>

        <TapeCounter
          count={tapeCount}
          onCountChange={setLocalTapeCount}
          minCount={1}
          maxCount={50}
        />

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>What's included:</Text>
          <Text style={styles.infoText}>
            • High-quality digital conversion (MP4 format){'\n'}
            • Color correction and basic enhancement{'\n'}
            • Digital download link (available for 30 days){'\n'}
            • Return shipping of your original tapes{'\n'}
            • Fast turnaround time (typically 7-10 business days)
          </Text>
        </View>

        <View style={styles.ctaSection}>
          <Button
            title="Continue to Checkout"
            onPress={handleContinue}
            style={styles.continueButton}
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
    textAlign: 'center',
    lineHeight: 24,
  },
  infoSection: {
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: Colors.darkGray,
    lineHeight: 24,
  },
  ctaSection: {
    alignItems: 'center',
  },
  continueButton: {
    paddingHorizontal: 40,
    minWidth: 200,
  },
});