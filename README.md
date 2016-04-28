# JS Cookie Clicker :cookie:

- Official Cookie Clicker: https://particle-clicker.web.cern.ch/particle-clicker/
- CERN Particle Clicker: http://orteil.dashnet.org/cookieclicker/

## Step 1: basic structure
Make the HTML / CSS / JS basic structure. In HTML, put a `button` with a "click" and identifying a `div` with an ID `display`, whose initial value is `0`.

## Step 2: prepare the JS
Prepare the head JS variables that allow us to manipulate our `button` and our `div`. We will also need a `score` variable that we score initialised to `0`.

## Step 3: increase the score
When you click the button, increase the variable `score` of `1`, and then display it in the score display `div`.

## Step 4: multiplier preparation
Add a button with the ID `multiply`. Preparing next variable to the display the button in JS. Maintain a click counter (the variable `multiplier` will be called and will be set to `1`). The `function` associated with the click multiplier will be called `augmenterMultiplicateur`.

## Step 5: using the multiplier
Making the score increase via the click the first button is more than `1` but the value of the multiplier. For example, if I clicked once on the multiplier button, each click on the first button now add `2` instead of `1`.

## Step 6: multiplying the price
The multiplier allows you to gain score faster. It should not be free! Make click on the button multiplier decreases by `50` your score.

## Step 7: one does not credit
We can not give credit and they do not want negative score. Remember to update the display of the score after the purchase!

## Step 8: counter display
Display the multiplier counter inside the `button`. For example, if the counter is `5`, it is necessary that the button text is "x5 multiplier".

## Step 9: price increase
Buy full multiplier is too easy. Try starting from step 6, you will understand why we would have to buy more multipliers, plus they be expensive.
For example, the first would be `50`, the following `100`, the following `200`, etc.. No need to complicate your life, do not do full conditions, find another way to change the price!

## Step 10: the price display
In the text of the `button`, in addition to "x5", add the cost of the next purchase.

## Step 11: autoclicker
Further improvement to buy: Autoclick. Once you have a score of `200`, a click is done automatically every second. (`setInterval` is your friend)

## Step 12: shopping autoclicker
The autoclicker will not be automatic. We must now buy the autoclicker. You will add a button with `id` Autoclic. It will cost `500`. Once the autoclicker was purchased, it will disable the buy `button` of Autoclic.

## Step 13: buying a bonus
Now we must buy a bonus that increases the score of 200% for 30 seconds each click. Ie if each click, score increases by `3` for 30 seconds to score the bonus will increase from `6` to every click, after 30 seconds the score will increase again to `3` per click.
You will create the "BONUS" button with id `bonus`, and the bonus will cost `5000`. When the bonus is purchased, the number of seconds will appear in the button with the count, and the button will be disabled during the time the bonus. When the bonus is finished, the button is reactivated and returns to its original text.

## Step 14: disable buttons if you have not score to buy upgrades
Ensure that the multiplier buttons Autoclic and bonuses are not clickable THAT if I have the score needed to buy them.

## Step 15: CSS
Whether beautifull! No pictures!
