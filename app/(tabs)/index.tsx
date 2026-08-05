import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function HomeScreen() {
  // ============================
  // State
  // Stores the current value of the TextInput
  // ============================
  const [value, setValue] = useState('');

  // ============================
  // Handle Submit
  // Validates the input, hides the keyboard,
  // shows an alert, and clears the input.
  // ============================
  const handleSubmit = () => {
    const text = value.trim();

    if (!text) {
      Alert.alert('Input Required', 'Please enter something.');
      return;
    }

    Keyboard.dismiss();

    Alert.alert('Success', `You entered:\n\n${text}`);

    setValue('');
  };

  // ============================
  // Disable button when input is empty
  // ============================
  const isDisabled = !value.trim();

  return (
    // ============================
    // SafeAreaView
    // Prevents content from overlapping
    // notches and system UI.
    // ============================
    <SafeAreaView style={styles.safeArea}>
      {/* ============================
          KeyboardAvoidingView
          Moves UI when the keyboard opens.
      ============================ */}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        
        {/* ============================
            Card Container
            Holds the form UI.
        ============================ */}
        <View style={styles.card}>
          
          {/* Screen Title */}
          <Text style={styles.title}>React Native Demo</Text>

          {/* Small description */}
          <Text style={styles.subtitle}>
            Enter some text and press Submit.
          </Text>

          {/* ============================
              Text Input
              Controlled component using useState.
          ============================ */}
          <TextInput
            value={value}
            onChangeText={setValue}
            placeholder="Type here..."
            placeholderTextColor="#9CA3AF"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            blurOnSubmit
            onSubmitEditing={handleSubmit}
          />

          {/* ============================
              Submit Button
              Disabled until user enters text.
          ============================ */}
          <Pressable
            onPress={handleSubmit}
            disabled={isDisabled}
            style={({ pressed }) => [
              styles.button,
              isDisabled && styles.buttonDisabled,
              pressed && !isDisabled && styles.buttonPressed,
            ]}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ============================
// Styles
// Contains all UI styling.
// ============================
const styles = StyleSheet.create({
  // Safe area background
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  // Centers the card on the screen
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  // Main card container
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,

    // iOS Shadow
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    // Android Shadow
    elevation: 4,
  },

  // Main heading
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },

  // Subtitle text
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 20,
  },

  // TextInput styling
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#111827',
    marginBottom: 16,
  },

  // Default button style
  button: {
    height: 52,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Press animation
  buttonPressed: {
    opacity: 0.85,
  },

  // Disabled button style
  buttonDisabled: {
    backgroundColor: '#93C5FD',
  },

  // Button text
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});