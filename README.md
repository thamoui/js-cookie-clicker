# JS Cookie Clicker :cookie:

- Official Cookie Clicker: http://orteil.dashnet.org/cookieclicker/
- CERN Particle Clicker: https://particle-clicker.web.cern.ch/particle-clicker/

## Level 0: Clone me
Clone the GitHub repository on you computer, of course!

## Level 1: Basic structure
Make the HTML / CSS / JS basic structure. In HTML, make a `button` with a "click" and identify a `div` with an ID `display` with initial value of `0`.

## Level 2: Create the basic JS
Write the head of JS variables that allow us to manipulate our `button` and our `div`. We will also need a `score` variable for resulted score and has intial value of  `0`.

## Level 3: Score increament
When you click the button, it will increase the variable `score` by `1`, and then display it in the score display `div`.

## Level 4: Multiplier creation
Add a button with the ID `multiply`. Then Write a variable to the display the button in JS. Create a click counter as variable and name it  `multiplier` with value equal to `1`). After that create a`function` associated with the click multiplier called `augmenterMultiplicateur`.

## Level 5: Using the multiplier
Making the score increase via the click the first button is more than `1` but the value of the multiplier. For example, if I clicked once on the multiplier button, each click on the first button now add `2` instead of `1`.

## Step 6: multiplying the price
The multiplier allows you to gain score faster but this should not be free! for instance each time you click on the  multiplier button this will deduct `50` score from your total gained score.

## Step 7: We don't give credit
We can not give credit and we don't want to display negative score. Remember to update the display of the score after each purchase!

## Level 8: Counter display
Display the multiplier counter inside the `button`. For example, if the counter is equal to `5`, then the button should display
"x5 multiplier".

## Level 9: Price increament
to buy full multiplier is too easy. Go back to step 6, you will understand why we should buy more multipliers, plus they are expensive.
For example, the first would be `50`, the following `100`, the following `200`, etc.. No need to complicate your life, do not do full conditions, find another way to change the price!

## Level 10: Displaying of Price
Display the price on  the `button`, in addition to counter display like the previouse example which showed  "x5", it has to display the cost of the next purchase next to counter display.

## Level 11: Autoclicker
Further improvement to buy is to use : Autoclick. Once you have a credit of `200`, an automatic click will be  done  every second. (`setInterval` is your friend)

## Level 12: Shopping autoclicker
The autoclicker will not be automatic. We must now buy the autoclicker. You will add a button with `id` Autoclic. It will cost `500`. Once the autoclicker was purchased, it will disable the buy `button` of Autoclic.

## Level 13: Buying a bonus
Now we must buy a bonus that will increases the scores by 200  for 30 seconds on each click. Each click, score increases by `3` for 30 seconds to score and the bonus will be increased by `6` for each click.
You will create the "BONUS" button with id `bonus`, and the bonus will cost `5000`. When the bonus is purchased, the number of seconds will appear in the button with counter and the button will be disabled during bonus time. When bonus timeout, the button will be reactivated and returns to its original condition.

## Level 14: Disable buttons (if you don't have scores to buy upgrades)
Ensure that the multiplier buttons, Autoclic and bonuses are not active when there is no enough scores to buy upgrades.

## Level 15: CSS
Wheather is beautifull! No pictures!
