---
layout: post
title:  "Benchmark Alpha Zero"
date:   2018-05-01 16:16:01 -0600
tags: [reinforcement-learning actor-critic deep-learning chess p-np]
repository_url : https://github.com/crazysal/Scale-Space-Blob-Detector
zip_url : https://github.com/crazysal/aphaZeroBenchmark/archive/master.zip
tar_url : https://github.com/crazysal/aphaZeroBenchmark/archive/master.tar.gz
---

### One experiment is simply to give AlphaZero an old-fashioned examination on test positions for which the perfect answers are known. These could even be generated in a controlled fashion from chess endgames with 7 or fewer pieces on the board, for which perfect play was tabulated by Victor Zakharov and Vladimir Makhnichev using the Lomonosov supercomputer of Moscow State University. Truth in those tables is often incredibly deep—in some positions the win takes over 500 moves, many of which no current chess program (not equipped with the tables) let alone human player would find. Or one can set checkmate-in-{N} problems that have stumped programs to varying degrees.


# Apha Zero Benchmark

## Overview
One experiment is simply to give AlphaZero an old-fashioned examination on test positions for which the perfect answers are known. 

These could even be generated in a controlled fashion from chess endgames with 7 or fewer pieces on the board, for which perfect play was tabulated by Victor Zakharov and Vladimir Makhnichev using the Lomonosov supercomputer of Moscow State University. 

###### Truth in those tables is often incredibly deep—in some positions the win takes over 500 moves, many of which no current chess program (not equipped with the tables) let alone human player would find. 

Or one can set checkmate-in-{N} problems that have stumped programs to varying degrees.

### The Candidate Game : 

A game playable with chess pawns or checkers on a board with 5 rows and {n} columns, where perhaps {n} can be set to achieve the small-enough/large-enough balance. [Dr. Regan](http://www.buffalo.edu/news/experts/ken-regan-faculty-expert-chess.html) conceived this 35 years ago at Oxford when {n=4} seemed right for computers of the day. The starting position is: 

![Starting Position](https://rjlipton.files.wordpress.com/2017/12/4x5grid.jpg)


#### Goal : 
Make your opponent run out of legal moves. 

#### Rules : 
* Each player’s pawns move one square forward or may “hop” over an opposing piece straight forward or diagonally forward.
* If some hop move is legal then the player must make a hop move. 
* The hopped-over piece remains on the board.
* If a pawn reaches the last row it becomes a king and thereupon moves or hops backwards. 
* No piece is ever captured


## Launching the Web App for playing the game/agent

We suggest that you begin by typing:

 1. `cd ./zero_truth/`
 2. `npm start`

	`npm start`
   > Starts the development server.

	`npm run build`
   > Bundles the app into static files for production.

	`npm test`
   > Starts the test runner.

	`npm run eject`
   > Removes this tool and copies build dependencies, configuration files
   > and scripts into the app directory. If you do this, you can’t go back!




## Referrences : 
1. [Truth From Zero](https://rjlipton.wordpress.com/2017/12/17/truth-from-zero/)


- - - -
Happy Hacking !  :boom:  :trollface: :boom: 

[back](./blog)