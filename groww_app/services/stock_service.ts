import axios from 'axios';
import { Watchlist } from '../models/watchlist';
import { Stock } from '../models/stock';

export class StockService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async addStockToWatchlist(user: User, stockSymbol: string): Promise<Watchlist> {
    const response = await axios.post(`${this.apiUrl}/stock/${stockSymbol}`);
    const stock: Stock = response.data;
    const watchlist: Watchlist = await this.getWatchlist(user);
    watchlist.stocks.push(stock);
    return watchlist;
  }

  async getWatchlist(user: User): Promise<Watchlist> {
    const response = await axios.get(`${this.apiUrl}/watchlist/${user.id}`);
    const watchlist: Watchlist = response.data;
    return watchlist;
  }
}