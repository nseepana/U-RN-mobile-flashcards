/* eslint-disable prettier/prettier */
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { connect } from "react-redux";
import { UPDATE_CURRENT_DECK } from '../store/reduxHelper';
import { bindActionCreators } from 'redux';

const HomeScreen = ({ decks = [], decksData = {}, updateCurrentDeck, navigation }) => {
	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.contentContainer}>
				{decks.map(okey => {
					const { name, cards = [] } = decksData[okey] || {};
					const cardsCount = cards.length;
					return (
						<View key={okey} style={styles.getStartedContainer}>
							<TouchableOpacity
								style={styles.helpLink}
								onPress={() => {
									updateCurrentDeck(okey);
									navigation.navigate("DECKINFO");
								}}>
								<Text style={styles.titleHeader}>{name}</Text>
								<Text style={styles.getStartedText}>
									{cardsCount < 1 ? "No Cards" : cardsCount + " card"}
								</Text>
							</TouchableOpacity>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
}

const mapStateToProps = (state) => {
	const { decks, decksData } = state;
	return {
		decks,
		decksData
	};
};

const mapDispatchToProps = (dispatch) => {
  const action = (okey) => ({
    type: UPDATE_CURRENT_DECK,
    payload: {okey},
  });
  return {
    updateCurrentDeck: bindActionCreators(action, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},

	contentContainer: {
		paddingTop: 30
	},
	welcomeContainer: {
		alignItems: "center",
		marginTop: 10,
		marginBottom: 20
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: "contain",
		marginTop: 3,
		marginLeft: -10
	},
	getStartedContainer: {
		alignItems: "center",
		marginHorizontal: 50
	},
	titleHeader: {
		fontSize: 26,
		color: "rgba(96,100,109, 1)",
		lineHeight: 24,
		textAlign: "center"
	},
	getStartedText: {
		fontSize: 17,
		color: "rgba(96,100,109, 1)",
		lineHeight: 24,
		textAlign: "center"
	},
	helpLink: {
		paddingVertical: 15
	}
});
