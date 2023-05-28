import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react-native'
import { WebView } from 'react-native-webview'
import swal from 'sweetalert2'

const runFirst = `alert('AetherView é apenas um webview para o chat.openai.com, o projeto ainda se encontra na sua versão Alpha.')`;

export default function App() {
    return(
      <WebView
        style={styles.container}
        source={{ uri: 'https://chat.openai.com/' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        injectedJavaScriptBeforeContentLoaded={runFirst}
      />
    );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
