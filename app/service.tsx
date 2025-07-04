import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Check } from 'lucide-react-native';
import Colors from '@/constants/colors';
import Button from '@/components/Button';

export default function ServiceScreen() {
  const router = useRouter();

  const navigateToOrder = () => {
    router.push('/order');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Images/IMG_0845.HEIC')}
            style={styles.image}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>VHS to Digital Conversion</Text>
          <Text style={styles.price}>$5 per tape</Text>
          
          <Text style={styles.description}>
            Our professional VHS to digital conversion service preserves your precious memories in high-quality digital format. We handle your tapes with care and deliver exceptional results.
          </Text>
          
          <View style={styles.featuresContainer}>
            <Text style={styles.featuresTitle}>What's Included:</Text>
            
            <View style={styles.featureRow}>
              <Check size={20} color={Colors.primary} />
              <Text style={styles.featureText}>High-quality digital conversion (MP4 format)</Text>
            </View>
            
            <View style={styles.featureRow}>
              <Check size={20} color={Colors.primary} />
              <Text style={styles.featureText}>Color correction and basic enhancement</Text>
            </View>
            
            <View style={styles.featureRow}>
              <Check size={20} color={Colors.primary} />
              <Text style={styles.featureText}>Digital download link (available for 30 days)</Text>
            </View>
            
            <View style={styles.featureRow}>
              <Check size={20} color={Colors.primary} />
              <Text style={styles.featureText}>Return shipping of your original tapes</Text>
            </View>
            
            <View style={styles.featureRow}>
              <Check size={20} color={Colors.primary} />
              <Text style={styles.featureText}>Fast turnaround time (typically 7-10 business days)</Text>
            </View>
          </View>
          
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>What We Accept:</Text>
            <Text style={styles.infoText}>
              • Standard VHS tapes (SP, LP, EP speeds){'\n'}
              • VHS-C tapes (with adapter){'\n'}
              • NTSC format (North American standard){'\n'}
              • Up to 6 hours of content per tape
            </Text>
          </View>
          
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>What We Don't Accept:</Text>
            <Text style={styles.infoText}>
              • Betamax tapes{'\n'}
              • 8mm or Hi8 tapes{'\n'}
              • Commercial/copyrighted content{'\n'}
              • Damaged or moldy tapes
            </Text>
          </View>
          
          <View style={styles.processSection}>
            <Text style={styles.processTitle}>Our Process:</Text>
            
            <View style={styles.processStep}>
              <View style={styles.processNumber}>
                <Text style={styles.processNumberText}>1</Text>
              </View>
              <View style={styles.processContent}>
                <Text style={styles.processStepTitle}>Order & Ship</Text>
                <Text style={styles.processText}>
                  Place your order and ship your tapes to our facility using the provided shipping label.
                </Text>
              </View>
            </View>
            
            <View style={styles.processStep}>
              <View style={styles.processNumber}>
                <Text style={styles.processNumberText}>2</Text>
              </View>
              <View style={styles.processContent}>
                <Text style={styles.processStepTitle}>Inspection & Preparation</Text>
                <Text style={styles.processText}>
                  We inspect each tape and prepare it for optimal conversion quality.
                </Text>
              </View>
            </View>
            
            <View style={styles.processStep}>
              <View style={styles.processNumber}>
                <Text style={styles.processNumberText}>3</Text>
              </View>
              <View style={styles.processContent}>
                <Text style={styles.processStepTitle}>Conversion</Text>
                <Text style={styles.processText}>
                  Using professional equipment, we convert your tapes to digital format with careful attention to quality.
                </Text>
              </View>
            </View>
            
            <View style={styles.processStep}>
              <View style={styles.processNumber}>
                <Text style={styles.processNumberText}>4</Text>
              </View>
              <View style={styles.processContent}>
                <Text style={styles.processStepTitle}>Quality Check & Enhancement</Text>
                <Text style={styles.processText}>
                  We review each conversion and apply basic enhancements to improve quality.
                </Text>
              </View>
            </View>
            
            <View style={styles.processStep}>
              <View style={styles.processNumber}>
                <Text style={styles.processNumberText}>5</Text>
              </View>
              <View style={styles.processContent}>
                <Text style={styles.processStepTitle}>Delivery</Text>
                <Text style={styles.processText}>
                  We provide a download link for your digital files and return your original tapes.
                </Text>
              </View>
            </View>
          </View>
          
          <Button 
            title="Start Your Order" 
            onPress={navigateToOrder}
            style={styles.orderButton}
          />
          
          <Text style={styles.guarantee}>
            100% Satisfaction Guarantee: If you're not completely satisfied with our service, we'll make it right or refund your money.
          </Text>
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
    paddingBottom: 40,
  },
  imageContainer: {
    width: '100%',
    height: 250,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
    marginBottom: 24,
  },
  featuresContainer: {
    marginBottom: 24,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: Colors.text,
    marginLeft: 12,
    flex: 1,
  },
  infoSection: {
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.text,
  },
  processSection: {
    marginBottom: 24,
  },
  processTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  processStep: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  processNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  processNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  processContent: {
    flex: 1,
  },
  processStepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  processText: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.darkGray,
  },
  orderButton: {
    marginVertical: 24,
  },
  guarantee: {
    fontSize: 14,
    fontStyle: 'italic',
    color: Colors.darkGray,
    textAlign: 'center',
  },
});