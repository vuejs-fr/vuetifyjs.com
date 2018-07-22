# Pour traduire la documentation de Vuetify

### Workflow de travail

Cette branche de travail `working` est volontairement mise en avant et doit uniquement être mise à jour dans le sens :

`vuetifyjs/vuetifyjs.com:dev` --> `vuejs-fr/vuetifyjs.com:working`.

Nous traduisons les fichiers directement dans le dossier `src/lang/en` sans les renommer. Cela permet lors de la mise à jour de la documentation via l'utilisation des commandes :

```
git fetch upstream
git merge working upstream/dev
```

d'obtenir des conflits **sur les pages déjà traduites** et ainsi maintenir la documentation à jour en fonction des modifications à travers **les documents déjà traduits**.

Note : `git remote add upstream https://github.com/vuetifyjs/vuetifyjs.com.git` est nécessaire au préalable pour utiliser les commandes ci-dessus.

### Traduction

Pour savoir ce qui est [en cours de traduction](https://github.com/vuejs-fr/vuetifyjs.com/issues/1) ou [comment traduire un fichier](https://github.com/vuejs-fr/vuetifyjs.com/issues/2), référez vous aux issues correspondantes.

### Reverssement

Quand un fichier traduit est validé par pull request, on le met à jour dans le dossier `src/lang/fr` de `vuejs-fr/vuetifyjs.com:dev` puis on propose une pull request au site principal :

`vuejs-fr/vuetifyjs.com:dev` --> `vuetifyjs/vuetifyjs.com:dev`

ainsi le dossier officiel hébergeant la documentation possède bien le dossier `lang/fr` en français et le dossier `lang/en` en anglais.

Note : il peut être intéressant de faire une pull request par ficher validé et donc de créer une branche dérivée de `vuejs-fr/vuetifyjs.com:dev` pour faire la pull request (`vuejs-fr/vuetifyjs.com:dev` --> `vuejs-fr/vuetifyjs.com:only_one_changed_file_from_master` --> `vuetifyjs/vuetifyjs:dev`)
