import {useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ApplicationContext} from '../index';
import {LightTheme} from '../configs/theme';

const TableItem = ({item}) => {
  const [showInvitations, setShowInvitations] = useState(false);
  const applicationContext = useContext(ApplicationContext);
  const {invitations} = applicationContext;

  const noPerson = item.maxPerson ? item.maxPerson : 5;
  const filterInvitations = invitations.filter(
    invite => invite.table.toLowerCase() == item.tableName.toLowerCase(),
  );
  return (
    <View
      style={{
        padding: 20,
        borderColor: '#dddddd',
        borderBottomWidth: 1,
        backgroundColor: LightTheme.bg,
      }}>
      <TouchableOpacity
        onPress={() => {
          setShowInvitations(!showInvitations);
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 17,
              color: LightTheme.primary,
              fontFamily: 'Roboto-Medium',
            }}>
            TABLE - {item.tableName}
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: '#222',
              fontFamily: 'Roboto-Medium',
            }}>
            {filterInvitations.length} /{noPerson}
          </Text>
        </View>
        <Text
          style={{fontSize: 13, color: '#000', fontFamily: 'Roboto-Light'}}
          numberOfLines={2}>
          {item.tableDesc}
        </Text>
        <Text
          style={{fontSize: 13, color: '#000', fontFamily: 'Roboto-Light'}}
          numberOfLines={2}>
          Max Personnes: {noPerson}
        </Text>
      </TouchableOpacity>
      {showInvitations &&
        filterInvitations.map(invite => (
          <View style={{marginVertical: 5}} key={invite.email + invite.phone}>
            <Text style={{color: LightTheme.textColor}}>
              {invite.name} | Contact: {invite.phone}
            </Text>
          </View>
        ))}
    </View>
  );
};

export default TableItem;
