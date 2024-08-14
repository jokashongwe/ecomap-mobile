import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {LightTheme} from '../configs/theme';

export default function Button({text, onPress, mid, color}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          width: !mid ? '100%' : '70%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color ? color : LightTheme.primary,
        },
      ]}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: LightTheme.bg,
    fontSize: 15,
    textAlign: 'center',
  },
});
