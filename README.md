<h1 align="center">Welcome to Learn Backend 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/Gorski_anthony" target="_blank">
    <img alt="Twitter: Gorski_anthony" src="https://img.shields.io/twitter/follow/Gorski_anthony.svg?style=social" />
  </a>
</p>

> Nous allons revoir le backend de 0 to 🦸

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## 🎯 Ce qu'il faut retenir

-   Les scripts npm

```shell
$ node index.js
# Avec run entre parenthèses car optionnel.
$ npm (run) start
```

```js
app.listen(5500, () => {
	console.log("Je suis run sur le port: 5500");
});
```

Avec la commande `npm start` celui ci est lancé par node, hors, si nous faisons une modification, celle ci ne sera pas prise en compte, il faut donc relancer le serveur à chaque fois.

Pour pallier à ce defaut, nous allons installer `nodemon` et mettre à jour le script

```shell
$ npm install nodemon --save-dev
```

```js
"scripts": {
    "start": "nodemon src/index.js"
  },
```

## Author

👤 **Anthony Gorski**

-   Twitter: [@Gorski_Anthony](https://twitter.com/Gorski_Anthony)
-   GitHub: [@GorskiAnthony](https://github.com/GorskiAnthony)

## Show your support

Give a ⭐️ if this project helped you!

---

👋 Qui suis-je ?
Je suis **Anthony Gorski**, développeur web et formateur à la [Wild Code School](https://www.wildcodeschool.com/fr-FR).

```

```
