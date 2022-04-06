// https://eth-ropsten.alchemyapi.io/v2/CFriJP-FQrnDJ8x4THSafVHXcAFxqHM9

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/CFriJP-FQrnDJ8x4THSafVHXcAFxqHM9',
      accounts: ['192606fdc925b53dc4a664dcfcd8aa1d47536f37e2fd7eae57bb85b0c8a10362']
    }
  }
}