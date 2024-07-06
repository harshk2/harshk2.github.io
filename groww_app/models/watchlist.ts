import { Stock } from './stock';

export class Watchlist {
  id: number;
  userId: number;
  stocks: Stock[];

  constructor(id: number, userId: number, stocks: Stock[]) {
    this.id = id;
    this.userId = userId;
    this.stocks = stocks;
  }
}