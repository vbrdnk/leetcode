/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
  const customersWealth = accounts.map(customerAccounts => {
    return customerAccounts.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
  });

  return Math.max(...customersWealth);
};
