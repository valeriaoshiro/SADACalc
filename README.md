# SADA Calculator
Calculator with addition, substraction, multiplication, and division features. The calculator calls a REST API to calculate the result. If the REST API fails, it will calculate the result with JavaScript.

## Built With
* HTML
* CSS
* JavaScript
* jQuery

## Getting Started
Code can be found at [Github repo](https://github.com/valeriaoshiro/SADACalc)

Download files and open index.html on internet browser.

## Tests
#### Basic commands
* Click number > Shows number on display
* Click operator > Nothing visible happens
* Click AC > Clears all numbers on display and memory
* Click enter > Result on display
* Decimals get rounded
* Dividing by 0 > Error
#### Edge cases
* Click operator without a first number > zero will be added to memory

  ie: &#160; ``+ 5 =``  &#160; Becomes &#160; ``0 + 5 = ``
   
  Result: 5
* Can change operator

  ie: &#160; ``7 + ``  &#160; then  &#160; ``-`` &#160; Becomes &#160; ``7 - ``
* Click enter without the second number > copies the first number to the second

  ie: &#160; ``7 + =`` &#160; Becomes &#160; ``7 + 7 = ``
   
  Result: 14
* Chain operations

  ie: &#160; ``1 + 12 * 3 - 10 =``
  
  Result: 29
* Do an operation and get result. Do a second operation with the previous result

  ie: &#160; ``1 + 2 = ``&#160; Result: 3 &#160; ``+ 4 =``

  Result: 7
* If there is an error on display and try to do math with it, it will result on error

## Author
* Valeria Oshiro