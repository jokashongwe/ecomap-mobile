import {Text, View, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import {LightTheme} from '../configs/theme';

export default function BottomTabBar({selected, navigation}) {
  return (
    <View
      style={{
        elevation: 2,
        height: 60,
        position: "absolute",
        bottom: 0,
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#f0f0f0',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HOME')}
        style={{
          padding: 5,
          paddingHorizontal: 15,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Feather
          name="home"
          size={16}
          color={selected == 'Accueil' ? LightTheme.primary : '#999'}
        />
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            color: selected == 'Accueil' ? LightTheme.primary : '#999',
            fontSize: 11,
          }}>
          Accueil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
         onPress={() => navigation.navigate('MANAGER_EVENT')}
        style={{
          padding: 5,
          paddingHorizontal: 15,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Feather
          name="calendar"
          size={16}
          color={selected == 'Mes évènements' ? LightTheme.primary : '#999'}
        />
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            color: selected == 'Mes évènements' ? LightTheme.primary : '#999',
            fontSize: 11,
          }}>
          Mes évènements
        </Text>
      </TouchableOpacity>
      <View
        style={{
          padding: 5,
          paddingHorizontal: 15,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicon
          name="ticket-outline"
          size={16}
          color={selected == 'Tickets' ? LightTheme.primary : '#999'}
        />
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            color: selected == 'Tickets' ? LightTheme.primary : '#999',
            fontSize: 11,
          }}>
          Tickets
        </Text>
      </View>
      <View
        style={{
          padding: 5,
          paddingHorizontal: 15,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome
          name="circle-user"
          size={16}
          color={selected == 'Mon Compte' ? LightTheme.primary : '#999'}
        />
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            color: selected == 'Mon Compte' ? LightTheme.primary : '#999',
            fontSize: 11,
          }}>
          Mon Compte
        </Text>
      </View>
    </View>
  );
}
