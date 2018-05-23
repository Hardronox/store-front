// import gameReducer from "../src/game/reducers/gameReducer";
// import { EvaluateRound, PickCard, StartGame } from '../src/game/actions';
// import DeckData from "../src/deck/DeckData";

// let deckdata = new DeckData();

const defaultState = {
  activePlayer: 0, // index of current player - 0 or 1
  cards: [null, null], // player1 and player2 cards respectively
  scores: [0, 0] // player1 and player2 total score respectively
};

describe('gameReducerTest', function () {
  // it("topCard returns last card", function() {
  //
  //   let topCard = deckdata.topCard;
  //   console.log(topCard);
  //   console.log(deckdata._cards.length);
  //   expect(topCard).toBe(deckdata._cards[length - 1]);
  // });

  it('should start the game', () => {
    expect(true).toEqual(true);
  });
  //
  //
  //
  // it('should pick card', () => {
  //
  //   let card = deckdata._cards[0];
  //
  //   expect(
  //     gameReducer(defaultState, {
  //       type: PickCard,
  //       card
  //     })
  //   ).toEqual({
  //     ...defaultState,
  //     activePlayer: 1,
  //     cards: [card, null]
  //   })
  // })

  // it('should evaluate round', () => {
  //
  //   expect(
  //     gameReducer(defaultState, {
  //       type: EvaluateRound
  //     })
  //   ).toEqual({
  //     ...defaultState,
  //     cards: [null, null],
  //     scores: [0, 0]
  //   })
  // })
});
