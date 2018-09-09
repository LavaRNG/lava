# Lava
> Decentralized Random Number Generation

## Addresses

* [Creation Transaction Address](https://rinkeby.etherscan.io/tx/0x9d3d95c820c81dc00241cb34e125e785ed7c5299d3b2197b8f460f1a21f59231)
* [Rinkeby Address](https://rinkeby.etherscan.io/address/0xab338db878f7ce6f2b9bdc90df700ebb0b88a30e#code)

## Technical Summary

1. Some players, *randers*, submit random numbers, one at a time (plus a fixed deposit and gas costs for each submitted random number). Every submitted random number is pushed to a (cyclical) fixed-sized array. The rander whose random number gets booted off of this array upon a random number submission gets their deposit returned. Other players, *preders*, submit a prediction window (an array of predictions) along with 1 wager per unit length in the array (1 deposit per prediction). Finally, there are *customers*, who pay the smart contract a fixed amount _C_ to automatically have a random number sent to their address or some location of their choosing.
2. Randers and preders can submit random numbers and predictions, respectively, at any time, but each may only be entitled to disbursed when a customer places an order. Cases:
    1. *The last submitted random number DOES NOT match a prediction.* Thus, the most recent randers are entitled to _1/(1+i)_ of _C_, where _i_ ranges from _1, 2, ..., N_ for some fixed integer _N_. Excess customer payment not disbursed to randers (namely the amount _N - ∑^N\_i N/(1+i)_) contributes to a pot of ether. For example, the rander who submitted a random number and deposit most recently (closest to when a customer paid for a random number) receives _1/2_ of _C_. The rander who submitted the previous random number is entitled to _1/3_ of _C_ *even if their random number has not been sent to a customer*. Preders don't lose anything; Preders are returned their wager (less gas).
    2. *The last submitted random number DOES match a prediction.* Thus, all preders who submitted a prediction that matches the random number sent to the customer split _C_ and receive their wager back in full. Furthermore, the first preder to submit the correct guess gets the ether pot. Note that there is nothing preventing any preder from "investing" in a particular value for a random number multiple times over using different public addresses.
    3. In both cases, the customer receives the last submitted random number.

## Why It Works

Randers are incentivized to constantly submit random numbers of maximal entropy to maximize their chance of not matching a predictor while maximizing their chance to earn income from _C_. Preders are incentivized to correctly guess the next random number that will be utilized.

If volume is low, or too many people freely take the random numbers submitted by the randers (by accessing the smart contract's logs), then preders are incentivized to act as customers and pay for random numbers themselves. But this opens an opportunity for randers to profit - all they need to do is submit a truly random number to optimize their chances of beating the opportunistic preder to profit.

Read these to understand why a rander, under pressure from preders, is incentivized to submit samples from the uniform distribution:

* https://stats.stackexchange.com/questions/66108/why-is-entropy-maximised-when-the-probability-distribution-is-uniform

* https://math.stackexchange.com/questions/275652/equivalence-between-uniform-and-normal-distribution

* https://en.wikipedia.org/wiki/Maximum_entropy_probability_distribution#Uniform_and_piecewise_uniform_distributions

* https://math.stackexchange.com/questions/1156404/entropy-of-a-uniform-distribution

## Contributors

Kenny Peluso

## License

MIT

