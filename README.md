# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_
## Specs For Blackjack
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| Have use place bet amount | 100 | bank: - 100 |
| Two cards are dealt user selects "hit" | click "hit" | deal 1 more card and add up total |
| user selects "stay" | click "stay" | add up total, deal correct amount of cards for dealer |
| user selects "Double Down" | click "Double Down" | Double bet and deals user 1 card then deals correct amount of cards for dealer |
| Program checks for win | user: 10 dealer: 21 | Dealer wins |
| When user hits it checks for Aces and makes them 1 if user busts | Ace + 9 + 10 | change value to 20 from 30 |
| if user goes bankrupt | bank = 0; | give option to reset bank to 1000 |
| If user switches to slot machine | save bank value in cookies | transfer to slot machine |

## Specs For Slot machine
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| User places bet | Bet = $100 | bank - 100 |
| User Clicks spin | Slot machine rolls | image - image - image |
| program checks for win | image 1= image 2 = image 3 | payout 25 * bet amount = 2500 |
| program checks for cherries | cherry - cherry - cherry | payout 250 * bet amount = 25000 |
| User goes bankrupt | bank = 0 | give option to reset bank to 1000 |
| if user switches back to other game | save bank balance in cookies | transfer to correct page | 

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
