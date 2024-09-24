import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title, type = 'primary' }) => {
  return (
    <TouchableOpacity
      style={[styles.button, type === 'secondary' ? styles.secondaryButton : styles.primaryButton]}
      onPress={onPress}
    >
      <Text style={[styles.text, type === 'secondary' ? styles.secondaryText : styles.primaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 5, // Thêm đổ bóng
  },
  primaryButton: {
    backgroundColor: '#3B5998',
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#3B5998',
  },
  primaryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  secondaryText: {
    color: '#3B5998',
    fontWeight: 'bold',
  },
});


export default Button;