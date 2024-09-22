import { View } from 'react-native';
import { styles } from './BottomPanelStyle';

export const BottomPanel = () => {
  return (
    <View style={styles.footer2}>
      <View style={styles.icon} />
      <View style={styles.icon1} />
      <View style={styles.icon2} />
      <View style={styles.icon3} />
      <View style={styles.icon4} />
    </View>
  )
}