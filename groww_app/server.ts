import express, { Request, Response } from 'express';
import { WatchlistController } from './controllers/watchlist_controller';
import { StockService } from './services/stock_service';

const app = express();
app.use(express.json());

const watchlistController = new WatchlistController();
const stockService = new StockService();

app.post('/api/watchlist', watchlistController.addStockToWatchlist);
app.get('/api/watchlist', watchlistController.getWatchlist);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});