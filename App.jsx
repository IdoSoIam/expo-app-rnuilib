import "@/themes/setup"
import "@/themes/ComponentsConfig";
import "@/themes/FoundationConfig";

import { useDarkMode } from "@/themes/useTheme"; 
import { StatusBar } from 'expo-status-bar';
import { Card, Text} from 'react-native-ui-lib';
import MainContainer from '@/components/MainContainer';
import { Button } from 'react-native-ui-lib';

export default function App() {
  const { invertedTheme, toggleDarkMode } = useDarkMode();

  return (
    <MainContainer mainBackground>
      <StatusBar style={invertedTheme} />

        <Card height={150} elevation={8} centerV padding-card marginB-s4 spread secondaryColor>
          <Text textColor center body>Modifie tes composants globalement dans le dossier themes</Text>

          <Button text90 onPress={toggleDarkMode} label="Dark mode"/>
        </Card>
    </MainContainer>
  );
}