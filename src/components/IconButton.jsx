import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {LightTheme} from '../configs/theme';

export default function IconButton({img, name, onPress, icon, count}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {img && <Image style={styles.imgStyle} source={img} />}
      {icon && <Ionicons name={icon} size={20} color={'#FFF'} />}
      <Text style={styles.textStyle}>{name}</Text>
      {count !== undefined && (
        <Text style={{fontSize: 11, color: LightTheme.bg}}>
          {'(' + count + ')'}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: LightTheme.secondary,

    height: 80,
    margin: 10,
    width: '25%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  imgStyle: {height: 26, width: 26},
  textStyle: {
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
    fontFamily: 'Roboto-Regular',
  },
});
