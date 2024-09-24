import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import Button from '../components/Button';

const ProfileScreen = () => {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Lỗi khi đăng xuất: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hồ sơ</Text>
      <Text style={styles.infoText}>Email: {user?.email}</Text>
      <Text style={styles.infoText}>Mã người dùng: {user?.uid}</Text>
      <Button 
        title="Đăng xuất" 
        onPress={handleLogout}
        type="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#3B5998',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333333',
  },
});


export default ProfileScreen;