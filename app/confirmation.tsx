import React, { useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Animated, 
  Platform,
  Share,
  Pressable,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Check, Share2, Printer } from 'lucide-react-native';
import Colors from '@/constants/colors';
import Button from '@/components/Button';
import ShippingLabel from '@/components/ShippingLabel';
import { useOrderStore } from '@/store/orderStore';
import { CUSTOMER_SHIP_TO_ADDRESS } from '@/constants/shipping';
import * as Haptics from 'expo-haptics';

export default function ConfirmationScreen() {
  const router = useRouter();
  const { orderDetails, resetOrder } = useOrderStore();
  const checkmarkScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate checkmark on screen load
    Animated.sequence([
      Animated.timing(checkmarkScale, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(checkmarkScale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    // Provide haptic feedback on successful order
    if (Platform.OS !== 'web') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  }, []);

  const handleShare = async () => {
    try {
      const message = `I just ordered VHS digitization from Atomedia Productions! Order ID: ${orderDetails.orderId}`;
      await Share.share({
        message,
        title: 'VHS Digitization Order',
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const handlePrint = () => {
    Alert.alert(
      'Print Shipping Label',
      'The shipping label will be printed. Make sure your printer is connected.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Print', onPress: () => console.log('Printing...') },
      ]
    );
  };

  const handleNewOrder = () => {
    resetOrder();
    router.push('/');
  };

  if (!orderDetails.shippingAddress || !orderDetails.orderId) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Order information not found.</Text>
          <Button 
            title="Return to Home" 
            onPress={() => router.replace('/')}
            style={styles.errorButton}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.successContainer}>
          <Animated.View 
            style={[
              styles.checkmarkContainer, 
              { transform: [{ scale: checkmarkScale }] }
            ]}
          >
            <Check size={48} color="white" />
          </Animated.View>
          
          <Text style={styles.successTitle}>Order Confirmed!</Text>
          <Text style={styles.successSubtitle}>
            Thank you for your order. We've received your payment and are ready to process your VHS tapes.
          </Text>
        </View>
        
        <View style={styles.orderInfoContainer}>
          <Text style={styles.sectionTitle}>Order Details</Text>
          
          <View style={styles.orderInfo}>
            <Text style={styles.orderLabel}>Order ID:</Text>
            <Text style={styles.orderValue}>{orderDetails.orderId}</Text>
          </View>
          
          <View style={styles.orderInfo}>
            <Text style={styles.orderLabel}>Number of Tapes:</Text>
            <Text style={styles.orderValue}>{orderDetails.tapeCount}</Text>
          </View>
          
          <View style={styles.orderInfo}>
            <Text style={styles.orderLabel}>Total Paid:</Text>
            <Text style={styles.orderValue}>${orderDetails.totalPrice.toFixed(2)}</Text>
          </View>
        </View>

        <ShippingLabel
          fromAddress={orderDetails.shippingAddress}
          orderId={orderDetails.orderId}
        />
        
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>Next Steps:</Text>
          
          <Text style={styles.instructionsText}>
            1. Package your VHS tapes securely{'\n'}
            2. Print and attach the shipping label above{'\n'}
            3. Drop off at any USPS location or schedule a pickup{'\n'}
            4. We'll email you when we receive your tapes{'\n'}
            5. You'll get another email when your files are ready
          </Text>
        </View>
        
        <View style={styles.actionsContainer}>
          <Button
            title="Share Order"
            onPress={handleShare}
            variant="outline"
            style={styles.actionButton}
          />
          <Button
            title="Print Label"
            onPress={handlePrint}
            variant="outline"
            style={styles.actionButton}
          />
        </View>
        
        <View style={styles.ctaContainer}>
          <Button
            title="Place Another Order"
            onPress={handleNewOrder}
            style={styles.newOrderButton}
          />
        </View>
        
        <Text style={styles.emailConfirmation}>
          ✅ A confirmation email has been sent to {orderDetails.shippingAddress.email} with your order details, shipping address, and shipping label.
        </Text>
        
        <Text style={styles.contactInfo}>
          Questions? Contact us at bookingatomedia47@gmail.com or call (555) 123-4567
        </Text>
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
  successContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  checkmarkContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  successSubtitle: {
    fontSize: 16,
    color: Colors.darkGray,
    textAlign: 'center',
    lineHeight: 24,
  },
  orderInfoContainer: {
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderLabel: {
    fontSize: 16,
    color: Colors.darkGray,
  },
  orderValue: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  instructionsContainer: {
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  instructionsText: {
    fontSize: 16,
    color: Colors.darkGray,
    lineHeight: 24,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  ctaContainer: {
    alignItems: 'center',
  },
  newOrderButton: {
    paddingHorizontal: 40,
    minWidth: 200,
  },
  emailConfirmation: {
    fontSize: 14,
    color: Colors.success,
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: '500',
    backgroundColor: '#F0F8F0',
    padding: 12,
    borderRadius: 8,
  },
  contactInfo: {
    fontSize: 14,
    color: Colors.darkGray,
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: Colors.error,
    marginBottom: 20,
    textAlign: 'center',
  },
  errorButton: {
    width: 200,
  },
});