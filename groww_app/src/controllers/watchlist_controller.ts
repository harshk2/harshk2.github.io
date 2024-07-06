import { Request, Response } from 'express';
import { User } from '../models/user';
import { Watchlist } from '../models/watchlist';
import { StockService } from '../services/stock_service';

export class WatchlistController {
  private stockService: StockService;

  constructor(stockService: StockService) {
    this.stockService = stockService;
  }

  async addStockToWatchlist(req: Request, res: Response) {
    const user: User = req.user;
    const stockSymbol: string = req.body.stockSymbol;
    const watchlist: Watchlist = await this.stockService.addStockToWatchlist(user, stockSymbol);
    res.json(watchlist);
  }

  async getWatchlist(req: Request, res: Response) {
    const user: User = req.user;
    const watchlist: Watchlist = await this.stockService.getWatchlist(user);
    res.json(watchlist);
  }
}