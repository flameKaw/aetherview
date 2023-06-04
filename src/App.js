import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react-native'
import { WebView } from 'react-native-webview'

export default function App() {
    return(
      <WebView
        source={{ uri: 'https://chat.openai.com/' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    );
 }

