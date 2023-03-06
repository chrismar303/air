import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import Router from '@/navigation/Router'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
}
