import { StatusBar } from 'expo-status-bar';
import { Card, Colors, Text, View } from 'react-native-ui-lib';
import MainContainer from '@/components/MainContainer';
import { Button } from 'react-native-ui-lib';
import "@/themes/ComponentsConfig";
import "@/themes/FoundationConfig";

export default function App() {
  return (
    <MainContainer>
      <View>
        <Card height={150} elevation={8} centerV padding-card marginB-s4 spread backgroundColor={Colors.secondaryColor}>
          <Text center h4>Modifie tes composants globalement dans le dossier themes</Text>

          <Button text90 label="Je suis un bouton de react-native-ui-lib"/>
        </Card>
      </View>

      <StatusBar style="auto" />
    </MainContainer>
  );
}