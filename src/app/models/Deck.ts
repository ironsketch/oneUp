import { Card } from "./Card";

export class Deck {
    deck?: Card[];
    deckSize: number = 52;
    numberOfDecks: number = 1;
    totalNumberOfCards: number = 0;
    numberOfEachCards: number = 0;

    init(numberOfDecks: number): void {
        this.numberOfDecks = numberOfDecks;
        this.totalNumberOfCards = this.deckSize * this.numberOfDecks;
        this.numberOfEachCards = 4 * this.numberOfDecks;
    }

    shuffle(oneSize: number, twoSize: number, threeSize: number, fourSize: number, 
        fiveSize: number, sixSize: number, sevenSize: number, eightSize: number, 
        nineSize: number, tenSize: number, elevenSize: number, twelveSize: number, 
        jokerSize: number): void {

        this.totalNumberOfCards = oneSize + twoSize + threeSize + fourSize + fiveSize + sixSize + 
        sevenSize + eightSize + nineSize + tenSize + elevenSize + twelveSize + jokerSize;

        const cards = [oneSize, twoSize, threeSize, fourSize, fiveSize, sixSize, sevenSize, 
            eightSize, nineSize, tenSize, elevenSize, twelveSize, jokerSize];
        
        for(let i = 0; i < this.totalNumberOfCards; i++) {
            let addedCard = false;
            while (!addedCard) {
                Math.floor(Math.random() * 13);
            }
        }
        for i in range(numberOfCards):
            addedCard = False
            while not addedCard:
                find = randrange(13)
                cardsLeft = cards[find]
                if cardsLeft > 0:
                    addedCard = True
                    self.deck.append(self.names[find])
                    cards[find] = cardsLeft - 1
    }
}