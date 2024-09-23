import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ error }) => {
  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: '#FF3B30',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default ErrorMessage;