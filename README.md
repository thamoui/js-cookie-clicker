# JS Cookie Clicker :cookie:

- Official Cookie Clicker: https://particle-clicker.web.cern.ch/particle-clicker/
- CERN Particle Clicker: http://orteil.dashnet.org/cookieclicker/

## Step 1: basic structure
Make the HTML / CSS / JS basic structure. In HTML, make a `button` with a "click" and identify a `div` with an ID `display` with initial value of `0`.

## Step 2: Create the basic JS
Write the head of JS variables that allow us to manipulate our `button` and our `div`. We will also need a `score` variable for resulted score and has intial value of  `0`.

## Step 3: Score increament
When you click the button, it will increase the variable `score` by `1`, and then display it in the score display `div`.

## Step 4: multiplier creation
Add a button with the ID `multiply`. Then Write a variable to the display the button in JS. Create a click counter as variable and name it  `multiplier` with value equal to `1`). After that create a`function` associated with the click multiplier called `augmenterMultiplicateur`.

## Step 5: using the multiplier
Making the score increase via the click the first button is more than `1` but the value of the multiplier. For example, if I clicked once on the multiplier button, each click on the first button now add `2` instead of `1`.

## Step 6: multiplying the price
The multiplier allows you to gain score faster but this should not be free! for instance each time you click on the  multiplier button this will deduct `50` score from your total gained score.

## Step 7: We don't give credit
We can not give credit and we don't want to display negative score. Remember to update the display of the score after each purchase!

## Step 8: counter display
Display the multiplier counter inside the `button`. For example, if the counter is equal to `5`, then the button should display
"x5 multiplier".

## Step 9: price increament
to buy full multiplier is too easy. Go back to step 6, you will understand why we should buy more multipliers, plus they are expensive.
For example, the first would be `50`, the following `100`, the following `200`, etc.. No need to complicate your life, do not do full conditions, find another way to change the price!

## Step 10: Displaying of Price
Display the price on  the `button`, in addition to counter display like the previouse example which showed  "x5", it has to display the cost of the next purchase next to counter display.

## Step 11: autoclicker
Further improvement to buy is to use : Autoclick. Once you have a credit of `200`, an automatic click will be  done  every second. (`setInterval` is your friend)

## Step 12: shopping autoclicker
The autoclicker will not be automatic. We must now buy the autoclicker. You will add a button with `id` Autoclic. It will cost `500`. Once the autoclicker was purchased, it will disable the buy `button` of Autoclic.

## Step 13: buying a bonus
Now we must buy a bonus that will increases the scores by 200  for 30 seconds on each click. Each click, score increases by `3` for 30 seconds to score and the bonus will be increased by `6` for each click.
You will create the "BONUS" button with id `bonus`, and the bonus will cost `5000`. When the bonus is purchased, the number of seconds will appear in the button with counter and the button will be disabled during bonus time. When bonus timeout, the button will be reactivated and returns to its original condition.

## Step 14: disable buttons if you don't have scores to buy upgrades
Ensure that the multiplier buttons, Autoclic and bonuses are not active when there is no enough scores to buy upgrades.

## Step 15: CSS
Wheather is beautifull! No pictures!
