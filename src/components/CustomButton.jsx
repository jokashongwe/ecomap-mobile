import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

export default function CustomButton({
  name,
  onPress,
  containerStyle,
  textStyle,
  leftIcon,
  rigthIcon,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      {leftIcon && <FontAwesomeIcon size={20} color={'#FFF'} name={leftIcon} />}
      <Text style={[styles.textStyle, textStyle]}>{name}</Text>
      {rigthIcon && (
        <FontAwesomeIcon size={22} color={'#FFF'} name={rigthIcon} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    zIndex: 1
  },
  textStyle: {
    fontSize: 13,
    color: '#FFF',
    marginHorizontal: 10,
  },
});
