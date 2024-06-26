import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

const Prices = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');

  const options = [
    { label: "Standard", value: "standard" },
    { label: "Basic", value: "basic" }
  ];

  return (
    <View style={styles.container}>
      <SwitchSelector
        options={options}
        initial={0}
        onPress={value => setSelectedPackage(value)}
        buttonColor="#f5dd4b"
        backgroundColor="#81b0ff"
        textColor="#f4f3f4"
        selectedColor="#fff"
        borderColor="#767577"
        hasPadding
      />
      <View style={styles.packageContainer}>
        {selectedPackage === 'standard' ? (
          <View style={styles.packageDetails}>
            <Text style={styles.packageTitle}>Standard Package</Text>
            <Text style={styles.packagePrice}>Price: $50/month</Text>
            <Text style={styles.packageDescription}>
              The Standard Package includes more features and higher royalties.
            </Text>
          </View>
        ) : (
          <View style={styles.packageDetails}>
            <Text style={styles.packageTitle}>Basic Package</Text>
            <Text style={styles.packagePrice}>Price: $30/month</Text>
            <Text style={styles.packageDescription}>
              The Basic Package includes essential features with standard royalties.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  packageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  packageDetails: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  packageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  packagePrice: {
    fontSize: 20,
    marginBottom: 10,
  },
  packageDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Prices;
