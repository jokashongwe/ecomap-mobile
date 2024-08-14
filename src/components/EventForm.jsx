import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
  Dimensions,
} from 'react-native';
import {LightTheme} from '../configs/theme';

import Ionicon from 'react-native-vector-icons/Ionicons';
import TextField from './TextField';
import Button from './Button';

import {useContext, useState} from 'react';
import {ApplicationContext} from '../index';
import TwoSelection from './TwoSelection';
import MultiSelection from './MultiSelection';
import CeremonieItem from './CeremonieItem';
import ImagePicker from 'react-native-image-crop-picker';

const defaultInviteText =
  'Nous avons le réel plaisir de vous invités à notre belle cérémonies que nous organisons.';

const defaultCeremonie = {
  eventName: null,
  eventAddress: null,
  eventDate: new Date(),
  eventTime: new Date(),
  eventEndDate: new Date(),
  eventEndTime: new Date(),
  eventPicture: null,
  eventVisibility: null,
  eventType: null,
  eventDisposition: 'Avec Table',
  invitationText: defaultInviteText,
  eventTitle: null,
  withTable: false,
  eventTables: [],
  eventInvitations: []
};

const generateId = () => {
  const currentTime = "" + new Date().getTime()
  return "E-" + currentTime.replace(".", "-") + '-' + Math.round(Math.random() * 10)
}

export default function EventForm({navigation, create}) {
  const applicationContext = useContext(ApplicationContext);
  const {setSelectedEvent, setUserEvents, selectedEvent, userEvents} = applicationContext;

  const currentItem = create ? null : selectedEvent

  const [eventName, setEventName] = useState(currentItem?.eventName);
  const visibility = currentItem?.eventVisibility
    ? currentItem?.eventVisibility
    : 'Privé';
  const [eventVisibility, setEventVisibility] = useState(visibility);
  const eType = currentItem?.eventType
    ? currentItem?.eventType
    : 'Mariage';
  const [eventType, setEventType] = useState(eType);
  const [eventCeremonies, setEventCeremonies] = useState(
    currentItem?.eventCeremonies ? currentItem.eventCeremonies : [],
  );
  
  const [eventCover, setEventCover] = useState(
    currentItem?.eventCover ? currentItem.eventCover : null,
  );

  let eventId = currentItem?.eventId ? currentItem.eventId : generateId()

  const windowWidth = Dimensions.get('screen').width;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, {backgroundColor: LightTheme.bg}]}>
      <TextField
        name={"Nom de l'évènement"}
        placeholder={"Nom de l'évènement"}
        value={eventName}
        setValue={setEventName}
      />

      <TwoSelection
        options={['Privé', 'Public']}
        title={'Visibilité'}
        defaultOption={eventVisibility}
        onSelect={option => setEventVisibility(option)}
      />
      <MultiSelection
        options={['Mariage', 'Anniversaire', 'Conférence', 'Autres']}
        title={"Type d'évènement"}
        defaultOption={eventType}
        onSelect={option => setEventType(option)}
      />

      <TouchableOpacity
        onPress={() => {
          ImagePicker.openPicker({
            width: windowWidth - 20,
            height: 250,
            cropping: true,
          }).then(image => {
            const fileName = image.filename
              ? image.filename
              : 'Couverture chargé';
            setEventCover({uri: image.path, fileName});
          });
        }}>
        <TextField
          simple
          name={'Couverture'}
          rightIcon={'document-attach-sharp'}
          value={eventCover?.fileName}
        />
      </TouchableOpacity>

      {eventCeremonies &&
        eventCeremonies.map((ceremonie, index) => (
          <CeremonieItem
            key={'C-' + index}
            ceremonie={ceremonie}
            index={index}
            allEvents={eventCeremonies}
            setCeremonie={setEventCeremonies}
          />
        ))}
      <TouchableOpacity
        onPress={() =>
          setEventCeremonies([...eventCeremonies, defaultCeremonie])
        }
        style={{
          paddingHorizontal: 15,
          paddingVertical: 4,
          borderRadius: 20,
          borderColor: '#bbb',
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: LightTheme.textColor,
            fontSize: 13,
            fontFamily: 'Roboto-Regular',
          }}>
          Ajouter une cérémonie
        </Text>
        <Ionicon name="add-circle" color={LightTheme.primary} size={30} />
      </TouchableOpacity>
      <View style={{height: 15}} />

      <Button
        onPress={() => {
          if (eventCeremonies.length == 0 || !eventCeremonies[0].eventTitle) {
            Alert.alert(
              'Cérémonies manquantes!',
              'Vous devez ajoutez au moins une cérémonie',
              [
                {
                  text: 'Ok',
                },
              ],
            );
            return;
          }
          const newEvent = {
            eventName,
            eventVisibility,
            eventType,
            eventCeremonies,
            eventCover,
            eventId
          };
          if(!currentItem){
            setUserEvents([...userEvents, newEvent]);
          } else {
            const filteredEvents = userEvents.filter(evt => evt.eventId != eventId)
            setUserEvents([...filteredEvents, newEvent]);
          }
          setSelectedEvent(newEvent);
          //saveStorage({event: newEvent, firstRun: false});
          navigation.navigate('MANAGER_EVENT');
        }}
        mid={true}
        text={'Gérer mon évènement'}
      />
      <View style={{height: 20}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
