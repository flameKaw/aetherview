import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react-native'
import { WebView } from 'react-native-webview'

export default function App() {
  return (
    <WebView
      style = {styles.container}
      source={{ uri: 'https://chat.openai.com'}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
