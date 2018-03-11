export default {
  header: 'Couleurs',
  headerText: "Sans configuration, vous avez accès à toutes les couleurs de la [spécfication Material Design](https://material.io/guidelines/style/color.html) via **stylus** et **javascript**. Ces couleurs peuvent être utilisées à l'intérieur de vos feuilles de style, de vos composants, et de manière plus générale sur des éléments HTML via le système de **classe couleur**.",
  classesHeader: 'Classes',
  classesText: 'Chaque couleur de la spécification est convertie en variantes d\'**arrière-plan** et de **texte** pour styliser votre application à travers des classes, ex : `<div class="red">` ou `<span class="red--text">`. Ces classes de couleurs sont définies [ici](https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_colors.styl).',
  classesText2: 'Les couleurs de texte supportent également des variantes **claires** et **sombres** en utilisant respectivement `text--{lighten|darken}-{n}`',
  javascriptPackHeader: 'Pack de couleur JavaScript',
  javascriptPackText: 'Vuetify intègre un pack de couleurs pour le JavaScript que vous pouvez importer et utiliser dans votre application. Cela peut également être utilisé pour définir le thème de votre application.',
  stylusPackHeader: 'Pack de couleur Stylus',
  stylusPackText: "Bien que pratique, le pack de couleur augmente la taille du CSS exporté de ~30Ko. Cependant, certains projets utiliseront uniquement les classes par défaut créées à la volée par Vuetify. Pour désactiver cette fonctionnalité, vous allez devoir importer et créer _manuellement_ le fichier **stylus** principal. Ceci implique d'utiliser le [loader stylus](https://github.com/shama/stylus-loader) et un fichier d'entrée `.styl`.",
  stylusPackText2: 'Votre nouveau fichier `main.styl` doit maintenant être inclu dans votre projet.',
  alert: 'Vous **devez** configurer webpack pour utiliser `stylus`. Si vous utilisez un [template pré-concu](/getting-started/quick-start#new-applications) ça devrait déjà être bon pour vous.',
  stylusPackText3: "Cela peut aussi être fait dans votre fichier **App.vue**. Gardez en tête que selon la configuration de votre projet, cela _va_ augmenter le temps de compilation à chaque fois que votre fichier d'entrée sera modifié, car les fichiers stylus seront regénérés.",
  colorHeader: 'Couleurs Material',
  colorText: 'Ci-dessous la liste des couleurs Material Design regroupées par couleur principale.',
  toc: [
    {
      text: 'Introduction',
      href: 'introduction'
    },
    {
      text: 'Classes',
      href: 'classes'
    },
    {
      text: 'Pack de couleur JavaScript',
      href: 'javascript-color-pack'
    },
    {
      text: 'Pack de couleur Stylus',
      href: 'stylus-color-pack'
    },
    {
      text: 'Couleurs Material',
      href: 'material-colors'
    }
  ]
}
