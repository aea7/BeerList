# Beer Listing App using Punkapi, React Native, React hooks, Jest etc.

Using the API of https://punkapi.com/documentation/v2, lists the beers and has the ability to search for beers and
go into a detail page of the beer.

# Searching for a beer
Search is possible with either name or date:
name ex: "Buzz"
date ex1: "09" --> will get all beers that were crafted in the 9th month
date ex2: "09/2007" --> will get all beers that were crafted in the 9th month of 2007
date ex2: "2007" --> will get all beers that were crafted in the year of 2007

# Pagination
Pagination works in the form of infinite pagination, in that, when the end of the list is reached, it will fetch more
beer data

# Testing
For Testing I am using Jest, react-testing-library (https://www.native-testing-library.com/docs/example)
and react-native-renderer (instead of enzyme), to run the tests:
       
npm run test or npm test
-

yarn test
-

To run tests and update snapshots:
       
npm run test -- -u
-
