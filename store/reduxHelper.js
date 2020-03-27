import React from 'react';

export const CREATE_DECK = '@@create_deck';
export const REMOVE_DECK = '@@remove_deck';
export const CREATE_QUIZ = '@@create_quiz';
export const ADD_CARD_TO_DECK = '@@add_card_to_deck';
export const UPDATE_CURRENT_DECK = '@@update_current_deck';

export const initialState = {
  decks: ['qwerty1234'],
  decksData: {qwerty1234: {okey: 'qwerty1234', name: 'Deck 1', cards: []}},
  currentDeck: {okey: 'qwerty1234', name: 'Deck 1', cards: []},
};

export function getKey() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DECK:
      const {payload} = action;
      const {okey} = payload;
      if (!state.decksData[okey]) {
        state.decks.push(okey);
        const deck = {...payload, cards: []};
        state.decksData[okey] = {...deck};
        state.currentDeck = {...deck};
      }
      return state;
    case REMOVE_DECK:
      state.decksData[action.payload.okey] = undefined;
      state.decks = Object.keys(state.decksData);
      return state;
    case ADD_CARD_TO_DECK:
      state.currentDeck.cards.push(action.payload.card);
      state.decksData[action.payload.okey] = {...state.currentDeck};
      return state;
    case UPDATE_CURRENT_DECK:
      const deck = {...state.decksData[action.payload.okey]};
      state.currentDeck = deck;
      return state;
    case CREATE_QUIZ:
      return state;
    default:
      return state;
  }
};
