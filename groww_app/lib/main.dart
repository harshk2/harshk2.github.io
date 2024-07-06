import 'package:flutter/material.dart';
import 'package:groww_watchlist/screens/watchlist_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Groww Watchlist',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: WatchlistScreen(),
    );
  }
}