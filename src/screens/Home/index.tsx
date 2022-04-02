import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Button, ScrollView, View } from 'react-native';
import { styles } from './styles';

interface PropsHome {
  form: string
}

export function Home(props: PropsHome) {
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
        <Button
          title='go Form'
          onPress={() => navigation.navigate("Form")}>
          go Form
        </Button>
        <Button
        onPress={() => alert("luci-lua.tk")}
          title="Whois"/>
      </View>
  )
}
