/*
  - Get element of: 
    + total score
    + current score
    + dice image 
  - active player: player 2(start game) 
  - click roll dice => function:
    + random dice image 
    + add random dice to current if
      ++ random dice !== 1 
         +++ current += random dice
      ++ else switch player
         +++ current = 0
 ==[here]== - click hold 
    + total score += current
    + if total score < 100
      + switch player
    + else 
      + active player win
        ++ change background active player
        ++ stop event click on roll and hold button
           +++ current = current
           +++ total = total
           +++ dice = dice
           +++ active player = active player
  - click new game
    + init current = 0
    + init total = 0
    + active player = 2
    + background of active player
 */
