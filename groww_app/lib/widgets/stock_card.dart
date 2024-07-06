import 'package:flutter/material.dart';

class StockCard extends StatelessWidget {
  final String stockSymbol;

  StockCard({required this.stockSymbol});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Row(
          children: [
            Text(
              stockSymbol,
              style: TextStyle(fontSize: 18),
            ),
            Spacer(),
            Text(
              '₹100.00', // Replace with actual price
              style: TextStyle(fontSize: 18),
            ),
          ],
        ),
      ),
    );
  }
}