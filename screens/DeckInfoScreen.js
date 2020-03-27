/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text } from "react-native";
import { styles } from "./screen.style";
import { useSelector } from "react-redux";
import { FCText, FCButton } from "../components/UIWidget";



function DeckInfoScreen({ navigation }) {

	const currentDeck = useSelector(store => store.currentDeck);

	const {name, cards=[]} = currentDeck;
	
	const count = cards.length;

	React.useEffect(() => {
		// alert('current:'+JSON.stringify(currentDeck))
		return () => {
			// alert('prev:'+JSON.stringify(currentDeck))
		};
	}, [currentDeck]);

	return (
		<View style={styles.viewContainer}>
			<View>
				<Text style={styles.titleHeader}>{name}</Text>
				<FCText>{ count < 1 ? "No Cards" : count + " card"}</FCText>
			</View>
			<FCButton
				title="Add Card"
				onClick={() => navigation.navigate("ADDCARD")}
			/>
			<FCButton
				title="Start Quiz"
				onClick={() => navigation.navigate("STARTQUIZ")}
			/>
			<FCButton
				title="Delete Deck"
				onClick={() => navigation.navigate("HOME")}
			/>
		</View>
	);
}

export default DeckInfoScreen;
