import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight } from 'lucide-react-native';
import Colors from '@/constants/colors';
import Button from '@/components/Button';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  const navigateToService = () => {
    router.push('/service');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.companyName}>Atomedia Productions</Text>
          <Text style={styles.tagline}>Preserving Your Memories</Text>
        </View>

        <View style={styles.heroContainer}>
          <Image
            source={require('../assets/Images/IMG_0807.JPG')}
            style={styles.heroImage}
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'transparent']}
            style={styles.heroOverlay}
          />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Digitize Your VHS Tapes</Text>
            <Text style={styles.heroSubtitle}>
              Preserve your precious memories before they fade away
            </Text>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Why Digitize Your VHS Tapes?</Text>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>VHS Tapes Are Degrading</Text>
            <Text style={styles.infoText}>
              VHS tapes have a limited lifespan of 10-25 years. Many tapes from the 80s and 90s are already showing signs of degradation.
            </Text>
          </View>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Easy to Share and Preserve</Text>
            <Text style={styles.infoText}>
              Digital copies can be easily shared with family and friends, backed up to the cloud, and will never degrade in quality.
            </Text>
          </View>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>VCRs Are Becoming Obsolete</Text>
            <Text style={styles.infoText}>
              As VCRs become harder to find and repair, accessing your VHS content will only get more difficult.
            </Text>
          </View>
        </View>

        <View style={styles.missionSection}>
          <Text style={styles.sectionTitle}>Why Digitize Your Tapes with US?</Text>
          
          <View style={styles.missionCard}>
            <Image
              source={require('../assets/Images/IMG_0844.HEIC')}
              style={styles.missionImage}
            />
            <View style={styles.missionContent}>
              <Text style={styles.missionTitle}>Our Environmental Mission</Text>
              <Text style={styles.missionText}>
                Adam has a dream of actually using the plastic you have harbored in your attic, converting it into plasto-line - a new gas alternative using plastic waste for fuel.
              </Text>
              <Text style={styles.missionSubtext}>
                By choosing our service, you are not only preserving your memories but also contributing to a sustainable future where plastic waste becomes a valuable energy resource.
              </Text>
            </View>
          </View>
          
          <View style={styles.benefitsContainer}>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>♻️</Text>
              <Text style={styles.benefitTitle}>Eco-Friendly</Text>
              <Text style={styles.benefitText}>Your old VHS cases contribute to our plastic-to-fuel research</Text>
            </View>
            
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>🔬</Text>
              <Text style={styles.benefitTitle}>Innovation</Text>
              <Text style={styles.benefitText}>Supporting cutting-edge sustainable technology development</Text>
            </View>
            
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>🌱</Text>
              <Text style={styles.benefitTitle}>Future Impact</Text>
              <Text style={styles.benefitText}>Helping create alternative energy solutions for tomorrow</Text>
            </View>
          </View>
        </View>

        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Our VHS to Digital Service</Text>
          <Text style={styles.ctaPrice}>Just $5 per tape</Text>
          <Text style={styles.ctaDescription}>
            We carefully convert your VHS tapes to high-quality digital files, preserving all your precious memories. Simply send us your tapes, and we'll do the rest!
          </Text>
          
          <Button 
            title="Learn More" 
            onPress={navigateToService}
            style={styles.ctaButton}
          />
        </View>

        <View style={styles.stepsSection}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          
          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Place Your Order</Text>
              <Text style={styles.stepText}>
                Tell us how many tapes you want to digitize and complete your order.
              </Text>
            </View>
          </View>
          
          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Ship Your Tapes</Text>
              <Text style={styles.stepText}>
                Print your shipping label and send your tapes to our facility in Winter Park, FL.
              </Text>
            </View>
          </View>
          
          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>We Digitize Your Memories</Text>
              <Text style={styles.stepText}>
                Our experts carefully convert your tapes to high-quality digital files.
              </Text>
            </View>
          </View>
          
          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>4</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Receive Your Digital Files</Text>
              <Text style={styles.stepText}>
                We'll send you a download link for your digital files and return your original tapes.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.videoSection}>
          <Text style={styles.sectionTitle}>See Our Process in Action</Text>
          <View style={styles.videoContainer}>
            <Text style={styles.videoPlaceholder}>
              🎥 Video: VHS Digitization Process
            </Text>
            <Text style={styles.videoDescription}>
              Watch how we carefully convert your VHS tapes to digital format
            </Text>
            <View style={styles.videoGrid}>
              <View style={styles.videoItem}>
                <Text style={styles.videoTitle}>Process Overview</Text>
                <Text style={styles.videoFile}>IMG_0808.MOV</Text>
              </View>
              <View style={styles.videoItem}>
                <Text style={styles.videoTitle}>Quality Check</Text>
                <Text style={styles.videoFile}>IMG_0810.MOV</Text>
              </View>
              <View style={styles.videoItem}>
                <Text style={styles.videoTitle}>Final Steps</Text>
                <Text style={styles.videoFile}>IMG_0812.MOV</Text>
              </View>
              <View style={styles.videoItem}>
                <Text style={styles.videoTitle}>Our Mission</Text>
                <Text style={styles.videoFile}>plastoline_Footer_Video.mp4</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.finalCta}>
          <Text style={styles.finalCtaText}>Ready to preserve your memories?</Text>
          <Button 
            title="Get Started" 
            onPress={navigateToService}
            style={styles.finalCtaButton}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 Atomedia Productions LLC</Text>
          <Text style={styles.footerText}>Winter Park, Orlando, Florida</Text>
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
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  tagline: {
    fontSize: 16,
    color: Colors.darkGray,
    marginTop: 4,
  },
  heroContainer: {
    height: 300,
    width: width,
    position: 'relative',
    marginBottom: 24,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
  },
  heroContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  infoSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
  },
  missionSection: {
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  missionCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  missionImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  missionContent: {
    padding: 20,
  },
  missionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 12,
  },
  missionText: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
    marginBottom: 12,
  },
  missionSubtext: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.darkGray,
    fontStyle: 'italic',
  },
  benefitsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  benefitItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 16,
  },
  benefitIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  benefitTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
    textAlign: 'center',
  },
  benefitText: {
    fontSize: 12,
    color: Colors.darkGray,
    textAlign: 'center',
    lineHeight: 16,
  },
  ctaSection: {
    backgroundColor: Colors.primary,
    padding: 24,
    borderRadius: 12,
    margin: 20,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  ctaPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  ctaDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
  },
  ctaButton: {
    backgroundColor: 'white',
    paddingHorizontal: 32,
  },
  stepsSection: {
    padding: 20,
  },
  step: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  stepNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  stepText: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.darkGray,
  },
  finalCta: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  finalCtaText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  finalCtaButton: {
    paddingHorizontal: 32,
  },
  videoSection: {
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  videoContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  videoPlaceholder: {
    fontSize: 24,
    marginBottom: 12,
  },
  videoDescription: {
    fontSize: 16,
    color: Colors.darkGray,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  videoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  videoItem: {
    width: '48%',
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
    textAlign: 'center',
  },
  videoFile: {
    fontSize: 12,
    color: Colors.darkGray,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: Colors.darkGray,
    marginBottom: 4,
  },
});