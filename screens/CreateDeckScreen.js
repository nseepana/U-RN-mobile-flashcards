import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import {styles} from './screen.style';
import {CREATE_DECK, getKey} from '../store/reduxHelper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function CreateDeckScreen({navigation, createDeck}) {
  const [value, onChangeText] = React.useState('');
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.titleHeader}>
        What is the title of your new deck?
      </Text>
      <View style={styles.viewContainer}>
        <TextInput
          placeholder="Deck title"
          style={styles.inputBox}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <TouchableOpacity
          disabled={!value}
          style={
            value
              ? styles.buttonBox
              : {...styles.buttonBox, ...styles.buttonBoxDisabled}
          }
          onPress={() => {
            createDeck(value);
            onChangeText('');
            navigation.navigate('DECKINFO');
          }}>
          <Text
            style={
              value
                ? styles.buttonTitle
                : {...styles.buttonTitle, ...styles.buttonTitleDisabled}
            }>
            Create Deck
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  //   alert(getKey());
  const action = value => ({
    type: CREATE_DECK,
    payload: {name: value, okey: getKey()},
  });
  return {
    createDeck: bindActionCreators(action, dispatch),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateDeckScreen);
