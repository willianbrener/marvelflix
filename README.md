# Marvelflix

An Angular application that uses Angular Material and interacts with the [Marvel Comics API](http://developer.marvel.com/). The purpose of the application is to demonstrate how to apply common Angular techniques and use some of the Angular Material components.

It provides a basic search engine over the characters and comics Marvel database. It allows to find a hero character and view information such as basic details and comics.

## Setup

Clone this repo to your desktop and run `npm install` to install all the dependencies.

## Usage

Before you start, you must acquire a developer key from [Marvel Developer Portal](http://developer.marvel.com/). After you get one, 
replace `apiKey` variable in `src/environments` files with the newly acquired **public** key.

```
export const environment = {
  ...
  apiEndpoint: '//gateway.marvel.com/v1/public/',
  apiKey: '<Your public key here>'
};
```

Run `ng serve` to start the application. You will then be able to access it at http://localhost:4200
