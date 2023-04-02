import { Card } from "./Card";

export class Player {
    name?: string;
    hand?: Card[];
    pile?: Card[];
    storage?: Card[][];

    /**
     * Initialization method.
     *
     * @param name - The players name
     * @returns void
     */
    init(name: string): void {
        this.name = name;
        this.hand = [];
        this.pile = [];
        this.storage = [[], [], [], []];
    }

    /**
     * Adds a card to the players hand
     * 
     * @param card - The card to add to the players hand
     * @returns void
     */
    addToHand(card: Card): void {
        this.hand!.push(card);
    }

    /**
     * Adds a card to the players hand
     * 
     * @param loc - Which card tp return
     * @returns the card grabbed
     */
    removeFromHand(loc: number): Card {
        const card = this.hand![loc];
        const tempHand: Card[] = [];
        this.hand!.forEach(handCard => {
            if (handCard.value != card.value) {
                tempHand.push(handCard);
            }
        });
        this.hand = tempHand;
        return card;
    }

    /**
     * Adds a card to the players pile
     * 
     * @param card - The card to add to the pile
     * @returns void
     */
    addToPile(card: Card): void {
        this.pile!.push(card);
    }

    /**
     * Removes the top card from the pile
     * 
     * @description Should NOT return undefined if this is programmed well
     * 
     * @returns the card on the top of the pile.
     */
    removeFromPile(): Card | undefined {
        if (this.pile!.length > 0) {
            return this.pile!.pop()!;
        }
        return undefined;
    }

    /**
     * Adds a card to the selected storage
     * 
     * @param card - The card to add to the storage
     * @param loc - The location in storage to place the card
     * @returns void
     */
    addToStorage(card: Card, loc: number): void {
        this.storage![loc].push(card);
    }

    /**
     * Removes a card from the selected storage location
     * 
     * @description Should NOT return undefined if this is programmed well
     * 
     * @param loc - The location in storage to grab the card from
     * @returns The top card from the storage location selected
     */
    removeFromStorage(loc: number): Card | undefined {
        if (this.storage![loc]!.length > 0) {
            return this.storage![loc].pop();
        }
        return undefined;
    }
}