import 'package:flutter/material.dart';
import 'package:groww_app/widgets/search_bar.dart';
import 'package:groww_app/widgets/stock_card.dart';

class WatchlistScreen extends StatefulWidget {
  @override
  _WatchlistScreenState createState() => _WatchlistScreenState();
}

class _WatchlistScreenState extends State<WatchlistScreen> {
  final _searchController = TextEditingController();
  List<String> _watchlist = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Groww Watchlist'),
      ),
      body: Column(
        children: [
          SearchBar(
            controller: _searchController,
            onSearch: (query) {
              // Call API to search for stocks
              print('Searching for $query');
            },
          ),
          Expanded(
            child: ListView.builder(
              itemCount: _watchlist.length,
              itemBuilder: (context, index) {
                return StockCard(
                  stockSymbol: _watchlist[index],
                );
              },
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Call API to add stock to watchlist
          print('Adding stock to watchlist');
        },
        child: Icon(Icons.add),
      ),
    );
  }
}