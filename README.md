# Lava
> Decentralized Random Number Generation

## Addresses

* [Rinkeby Creation Transaction Address](https://rinkeby.etherscan.io/tx/0x9d3d95c820c81dc00241cb34e125e785ed7c5299d3b2197b8f460f1a21f59231)
* [Rinkeby Address](https://rinkeby.etherscan.io/address/0xab338db878f7ce6f2b9bdc90df700ebb0b88a30e#code)
* [Mainnet Creation Transaction Address](https://etherscan.io/tx/0x423c089c2f393c43464fe5ff48a8122df8eefadd32d366b9f1716a8e74dcda20)
* [Mainnet Address](https://etherscan.io/address/0xd9d4f7eef0c1c6f7bffd06dccef089461fbc3854#code)

Compiler `0.4.24+commit.e67f0147.Emscripten.clang` with Optimization

## Technical Summary

1. Some players, *randers*, submit random numbers, one number per submission (plus a fixed deposit and gas costs for each submitted random number). Every submitted random number is pushed to a (cyclical) _L_-length array. The rander whose random number gets booted off of this array upon a random number submission may get their deposit returned. Other players, *preders*, submit a prediction window (an array of predictions) along with 1 wager per unit window length (1 wager per prediction). Finally, there are *customers*, who pay the smart contract a fixed amount _C_ to automatically have a random number sent to their address or some location of their choosing.
2. Randers and preders can submit random numbers and predictions, respectively, at any time, but each may be entitled to payouts only when a customer places an order. Cases:
    1. *The last submitted random number DOES NOT match a prediction.* Thus, the _L_ most recent randers are entitled to _1/(1+i)^2_ of _C_, where _i_ ranges from _1, 2, ..., L_. The most recent rander (the one who actually submitted the emitted random number) receives an additional _C/4_. Excess customer payment not disbursed to randers (namely the amount _L - ∑^L\_i N/(1+i)^2_) contributes to a pot of ether. Preders lose their wagers.
    2. *The last submitted random number DOES match a prediction.* Thus, all preders who submitted a prediction that matches the random number sent to the customer split _C_ and receive their wager back in full. Furthermore, the first preder to submit the correct guess gets the ether pot. Note that there is nothing preventing any preder from "investing" in a particular value for a random number multiple times over using the same or different public addresses.
    3. In both cases, the customer pays _C_, pays gas, and receives the last submitted random number.

## Why It Works

Preders are incentivized to correctly guess the next random number that will be utilized. Randers are, in turn, incentivized to frequently submit random numbers of maximal entropy to maximize their chance of not matching a predictor while maximizing their chance of earning income from _C_. By submitting frequently, randers maximize their chance of being one of the _L_-most recent randers). Random number submissions achieve maximum entropy when randers sample from the uniform distirbution. Hence, Lava exhibits long-run coincidence with true randomness.

If rander volume is low or too many customers freely take the random numbers submitted by the randers (for instance, by accessing the smart contract's logs), then the pot will build, eventually incentivizing preders to become customers and pay for random numbers themselves to reliably win the pot. But this opens an opportunity for randers to profit - they need only to submit a truly random number to reliably beat the opportunistic preder to profit.

Read these to understand why a rander, under pressure from preders, is incentivized to submit samples from the uniform distribution:

* https://stats.stackexchange.com/questions/66108/why-is-entropy-maximised-when-the-probability-distribution-is-uniform

* https://math.stackexchange.com/questions/275652/equivalence-between-uniform-and-normal-distribution

* https://en.wikipedia.org/wiki/Maximum_entropy_probability_distribution#Uniform_and_piecewise_uniform_distributions

* https://math.stackexchange.com/questions/1156404/entropy-of-a-uniform-distribution

## License

MIT

