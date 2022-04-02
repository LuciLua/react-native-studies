// import React from 'react';
// // import type {Node} from 'react';

// // components
// // import Menu from './components/Menu';

// // import {cardStyle} from './styles/cardStyle';

// import {
//   Dimensions,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   // useColorScheme,
//   View,
// } from 'react-native';
// // import {Image} from 'react-native-svg';

// let ScreenHeight = Dimensions.get('window').height;

// const Section = ({children, title}) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Titulo do componente: {title}</Text>
//       <Text style={styles.subtitleChildren}>
//         Filho deste componente: {children}
//       </Text>
//     </View>
//   );
// };

// const Card = ({number}) => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.cardTitle}>#{number}</Text>
//       <Text style={styles.cardText}>
//         Esse é só um texto de exemplo pra ocupar espaço. Esse é só um texto de
//         exemplo pra ocupar espaço. Esse é só um texto de exemplo pra ocupar
//         espaço. Aproveitando componentes, reutilizando e tal...
//       </Text>
//     </View>
//   );
// };

// function App() {
//   return (
//     // SafeAreaView: O objetivo de SafeAreaViewé renderizar conteúdo dentro dos limites da área segura de um dispositivo.
//     <SafeAreaView>
//       {/* StatusBar: A barra de status é a zona, normalmente na parte superior da tela, que exibe a hora atual, informações de rede Wi-Fi e celular, nível de bateria e/ou outros ícones de status. */}
//       <StatusBar />
//       {/* ScrollView para permitir rolagem */}
//       <ScrollView contentInsetAdjustmentBehavior="automatic">
//         {/* View: é projetado para ser aninhado dentro de outras visualizações e
//             pode ter de 0 a muitos filhos de qualquer tipo. Suporta style,
//             flexbox etc */}
//         <View style={styles.app}>
//           <Section title={'Meu primeiro app'}>
//             <Text style={styles.textHigthLight}>Hello</Text>
//             <Text>I'm a children of this component</Text>
//           </Section>
//           {/* <View>
//             <Image style={styles.image} source={require('./images/game.png')} />
//           </View> */}
//           <View style={styles.cardAndNotice}>
//             <View style={styles.notice}>
//               <Text style={[styles.textNotice]}>
//                 Posso criar um array de estilos para aplicar varios estilos à um
//                 só elemento/componente. Nesse caso, o uso de template strings
//                 não funciona!
//               </Text>
//             </View>
//             <View style={styles.cardsCollection}>
//               <Card number={'1'} />
//               <Card number={'2'} />
//               <Card number={'3'} />
//               <Card number={'4'} />
//               <Card number={'5'} />
//             </View>
//           </View>
//           <View style={styles.footer}>
//             <Text></Text>
//           </View>
//         </View>
//       </ScrollView>
//       {/* Menu Component */}
//       {/* <View style={styles.fixed}>
//         <ScrollView>
//           <Menu />
//         </ScrollView>
//       </View> */}
//     </SafeAreaView>
//   );
// }

// // Paleta

// const primaryColor50 = '#B3D9BA';
// const primaryColor = '#0913';
// const secondaryColor = '#051a';
// const terciaryColor = '#051f';

// // Alguns estilos definitos a partir de StyleSheet
// const styles = StyleSheet.create({
//   // Container property
//   container: {
//     height: ScreenHeight + 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//     backgroundColor: primaryColor,
//     margin: 0,
//   },
//   title: {
//     fontSize: 30,
//     textAlign: 'center',
//     marginHorizontal: 40,
//     marginBottom: 20,
//     color: secondaryColor,
//   },
//   subtitleChildren: {
//     fontSize: 12,
//     marginTop: 10,
//     marginHorizontal: 40,
//     color: secondaryColor,
//   },
//   textHigthLight: {
//     backgroundColor: terciaryColor,
//     color: primaryColor50,
//   },
//   // imagem
//   image: {
//     width: 100,
//     height: 100,
//   },
//   // Notice Property
//   notice: {
//     margin: 0,
//     padding: 20,
//     backgroundColor: primaryColor,
//   },
//   textNotice: {
//     lineHeight: 20,
//     textAlign: 'justify',
//   },
//   // Menu position
//   fixed: {
//     bottom: 0,
//     position: 'absolute',
//   },
//   // Cards property
//   cardsCollection: {
//     backgroundColor: primaryColor,
//     margin: 0,
//   },
//   card: {
//     backgroundColor: '#fff',
//     marginVertical: 5,
//     marginHorizontal: 20,
//     borderRadius: 10,
//     padding: 10,
//   },
//   cardText: {
//     color: '#666',
//     fontSize: 13,
//     margin: 10,
//     textAlign: 'justify',
//   },
//   cardTitle: {
//     color: '#121212',
//     fontSize: 20,
//   },
//   // Footer
//   footer: {
//     paddingBottom: 60,
//     backgroundColor: primaryColor,
//   },
// });

// export default App;



import Toast from 'react-native-toast-message';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <Routes />
      <Toast />
    </>
  );
}