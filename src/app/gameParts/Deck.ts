import { Card } from "./Card";

export class Deck {
    deck?: Card[];
    discard?: Card[][];
    deckSize: number = 52;
    numberOfDecks: number = 1;
    totalNumberOfCards: number = 0;
    numberOfEachCards: number = 0;

    /**
     * Initialization method.
     *
     * @param numberOfDecks - The number of decks to use
     * @returns void
     */
    init(numberOfDecks: number): void {
        this.deck = [];
        this.discard = [[], [] ,[], [], [], [], [], [], [], [], [], [], []];
        this.numberOfDecks = numberOfDecks;
        this.totalNumberOfCards = this.deckSize * this.numberOfDecks;
        this.numberOfEachCards = 4 * this.numberOfDecks;

        for (let i = 0; i < 12; i++) {
            for(let j = 0; j < this.numberOfEachCards; j++) {
                const newCard = new Card();
                newCard.init(i);
                this.discard[i].push(newCard);
            }
        }
        this.shuffle();
    }

    /**
     * Shuffle the cards from the discard into the deck.
     *
     * @returns void
     */
    shuffle(): void {
        this.totalNumberOfCards = this.discard![0].length + this.discard![1].length + 
        this.discard![2].length + this.discard![3].length + this.discard![4].length +
        this.discard![5].length + this.discard![6].length + this.discard![7].length +
        this.discard![8].length + this.discard![9].length + this.discard![10].length + 
        this.discard![11].length + this.discard![12].length;
        
        for(let i = 0; i < this.totalNumberOfCards; i++) {
            let addedCard = false;
            while (!addedCard) {
                const locOfCardToGrab = Math.floor(Math.random() * 13);
                if (this.discard![locOfCardToGrab].length > 0) {
                    addedCard = true;
                    this.deck!.push(this.discard![locOfCardToGrab].pop()!);
                }
            }
        }
    }

    /**
     * Shuffles the discard into the deck if needed and grabs the top card.
     *
     * @returns The top card from the deck
     */
    getCard(): Card {
        if (this.deck!.length <= 0) {
            this.shuffle();
        }
        return this.deck!.pop()!;
    }

    /**
     * Puts a card in the discard pile.
     * 
     * @param card - The card to discard
     * @returns void
     */
    addToDiscard(card: Card): void {
        this.discard![card.value! - 1].push(card);
    }
}