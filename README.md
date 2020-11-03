# _Beep Boop Tiny Robo_

#### _A webpage that will respond to user input with a modified array, October 30, 2020_

#### By _**Zahnen Garner**_

## Description

_This webpage was created as my independent project for my third week at Epicodus. The webpage allows users to enter a numerical input and receive back a count up to that input from a character named Tiny Robo. Sometimes our Tiny Robo gets confused and replaces certain values with "beeps", "boops" or lines from its favorite television program. The webpage was created to apply concepts I learned this week which include looping and modifying arrays._

## Setup/Installation Requirements

### If you would like to run the webpage on GitHub Pages
* _Open your browser_
* _Navigate to https://zahnen.github.io/beep-boop_
* _Enter a number into the input field towards the bottom of the page_
* _Click the "Count" button and watch as your Tiny Robo counts (as best as it can) from zero to your indicated number_

### If you would like to run the webpage locally
* _Open your browser_
* _Navigate to https://github.com/Zahnen/beep-boop_
* _Click the green "Code" button toward the top right of the page_
* _Download the ZIP file by selecting this option in the dropdown menu_
* _Right click and extract the contents of the file to the location of your choosing_
* _Once extracted, open the directory you've just extracted._
* _Open the file titled "index.html"_
* _Enter a number into the input field towards the bottom of the page_
* _Click the "Count" button and watch as your Tiny Robo counts (as best as it can) from zero to your indicated number_

  **OR**

* _Open your git-capable command line program (I recommend Terminal on Mac or Git Bash on PC)_
* _Ensure you are within the directory you'd like the file to be created in._
* _Enter the command "$ git clone https://github.com/Zahnen/beep-boop" in your command line_
* _Once cloned, use the "$ cd " command to navigate to the directory created in the previous step._
* _Once in the newly cloned directory, enter the command "$ start index.html" to open the webpage in your default browser._
* _Enter a number into the input field towards the bottom of the page_
* _Click the "Count" button and watch as your Tiny Robo counts (as best as it can) from zero to your indicated number_

## Specs

**Describe: beepBoop Function**

_Test: "It will return a range of numbers that count from zero by one up to the user's input"_

_Expect: (beepBoop(4).toEqual(0,1,2,3,4))_

_Test: "It will replace digits that include the number '1' with the string 'Beep!'"_

_Expect:(beepBoop(2).toEqual("Beep!")_

_Test: "It will replace digits that include the number '2' with the string 'Boop!'"_

_Expect:(beepBoop(2).toEqual("Boop!")_

_Test: "It will replace digits that include the number '3' with the string 'Won't you be my neighbor?'"_

_Expect:(beepBoop(3).toEqual("Won't you be my neighbor?")_

_Test: "It will follow replacement rules with the '3' rule being the most specific and the '1' rule being the least specific"_

_Expect: (beepboop(321).toEqual("Won't you be my neighbor?")_


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you notice a bug or require support, please reach out to me via email. I can be reached at zahnen@gmail.com_

## Technologies Used

_This webpage required use of the following programs/languages/libraries to create:_
* _GitBash_
* _Visual Studio Code_
* _GitHub_
* _GitHub Pages_
* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_

### License

*Licensed under MIT*


Copyright (c) 2020 **_Zahnen Garner_**