import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var myButton = FlatButton(
      color: Colors.grey,
      textColor: Colors.white,
      onPressed: () {},
      child: Text(
        "Flat Button",
      ),
    );
    var buttonRow = Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [myButton, myButton],
    );
    return MaterialApp(
      title: 'Flutter layout demo',
      home: Scaffold(
          appBar: AppBar(
            title: Text('Lab 1'),
          ),
          body: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              Center(
                child: Image(
                  image: AssetImage('assets/flutter.png'),
                  height: 140,
                ),
              ),
              Column(children: <Widget>[buttonRow, buttonRow]),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Flexible(
                    child: Text(
                      "Email",
                    ),
                  ),
                  Flexible(
                    child: TextField(),
                  )
                ],
              )
            ],
          )),
    );
  }
}
