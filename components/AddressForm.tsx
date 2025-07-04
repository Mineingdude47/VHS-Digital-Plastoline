import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { ShippingAddress } from '@/types/order';
import Colors from '@/constants/colors';
import { validateEmail, validatePhone } from '@/utils/validation';

interface AddressFormProps {
  initialAddress?: Partial<ShippingAddress>;
  onAddressChange: (address: ShippingAddress) => void;
  errors?: Record<string, string>;
}

export default function AddressForm({ initialAddress, onAddressChange, errors = {} }: AddressFormProps) {
  const [address, setAddress] = useState<ShippingAddress>({
    firstName: initialAddress?.firstName || '',
    lastName: initialAddress?.lastName || '',
    email: initialAddress?.email || '',
    phone: initialAddress?.phone || '',
    address: initialAddress?.address || '',
    city: initialAddress?.city || '',
    state: initialAddress?.state || '',
    zipCode: initialAddress?.zipCode || '',
    country: initialAddress?.country || 'USA'
  });

  const handleChange = (field: keyof ShippingAddress, value: string) => {
    const newAddress = { ...address, [field]: value };
    setAddress(newAddress);
    onAddressChange(newAddress);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Shipping Information</Text>
      
      <View style={styles.row}>
        <View style={styles.halfWidth}>
          <Text style={styles.label}>First Name *</Text>
          <TextInput
            style={[styles.input, errors.firstName && styles.inputError]}
            value={address.firstName}
            onChangeText={(value) => handleChange('firstName', value)}
            placeholder="Enter first name"
          />
          {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
        </View>
        
        <View style={styles.halfWidth}>
          <Text style={styles.label}>Last Name *</Text>
          <TextInput
            style={[styles.input, errors.lastName && styles.inputError]}
            value={address.lastName}
            onChangeText={(value) => handleChange('lastName', value)}
            placeholder="Enter last name"
          />
          {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
        </View>
      </View>

      <Text style={styles.label}>Email *</Text>
      <TextInput
        style={[styles.input, errors.email && styles.inputError]}
        value={address.email}
        onChangeText={(value) => handleChange('email', value)}
        placeholder="Enter email address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <Text style={styles.label}>Phone *</Text>
      <TextInput
        style={[styles.input, errors.phone && styles.inputError]}
        value={address.phone}
        onChangeText={(value) => handleChange('phone', value)}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
      />
      {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

      <Text style={styles.label}>Address *</Text>
      <TextInput
        style={[styles.input, errors.address && styles.inputError]}
        value={address.address}
        onChangeText={(value) => handleChange('address', value)}
        placeholder="Enter street address"
      />
      {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}

      <View style={styles.row}>
        <View style={styles.halfWidth}>
          <Text style={styles.label}>City *</Text>
          <TextInput
            style={[styles.input, errors.city && styles.inputError]}
            value={address.city}
            onChangeText={(value) => handleChange('city', value)}
            placeholder="Enter city"
          />
          {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
        </View>
        
        <View style={styles.halfWidth}>
          <Text style={styles.label}>State *</Text>
          <TextInput
            style={[styles.input, errors.state && styles.inputError]}
            value={address.state}
            onChangeText={(value) => handleChange('state', value)}
            placeholder="Enter state"
            autoCapitalize="characters"
          />
          {errors.state && <Text style={styles.errorText}>{errors.state}</Text>}
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.halfWidth}>
          <Text style={styles.label}>ZIP Code *</Text>
          <TextInput
            style={[styles.input, errors.zipCode && styles.inputError]}
            value={address.zipCode}
            onChangeText={(value) => handleChange('zipCode', value)}
            placeholder="Enter ZIP code"
            keyboardType="numeric"
          />
          {errors.zipCode && <Text style={styles.errorText}>{errors.zipCode}</Text>}
        </View>
        
        <View style={styles.halfWidth}>
          <Text style={styles.label}>Country</Text>
          <TextInput
            style={styles.input}
            value={address.country}
            onChangeText={(value) => handleChange('country', value)}
            placeholder="Enter country"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
