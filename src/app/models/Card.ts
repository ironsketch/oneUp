import { Helper } from "../utilities/Helper";

export class Card {
    name?: string;
    value?: number;
    isJoker?: boolean;

    init(name: string, value: number, isJoker: boolean): void {
        this.name = name;
        this.value = value;
        this.isJoker = isJoker;
    }

    /**
     * Updates the card to the card after the one passed or
     * to 1 if the card passed is 12.
     *
     * @param card - The card the joker will be placed on top of
     * @returns void
     */
    updateJoker(card: Card): void {
        if (Helper.isEmptyObject(card) || card.value == 12) {
            this.name = '1';
            this.value = 1;
        } else {
            const newCardValue = card.value! + 1;
            this.name = newCardValue.toString();
            this.value = newCardValue;
        }
    }

    /**
     * Resets the joker card to look like a joker card
     *
     * @returns void
     */
    resetJoker(): void {
        this.name = 'J';
        this.value = 13;
    }
}