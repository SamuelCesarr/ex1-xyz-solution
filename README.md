Samuel César et Lina Bensenouci

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/RuYLSl3d)
# Exercice 1 : Décomposer une page Web en composants simples `React`

## Objectif général
Vous devez produire la *structure* de composants `React` adéquats pour représenter l'interface utilisateur illustrée dans la capture d'écran jointe :
<img src="/appli-xyz.png">

**Vous n'avez pas à produire le code CSS complet (manque de temps) : voir l'étape 10**

## Étapes à suivre
1. Clonez le code sur votre machine locale ;

2. Dans le terminal, placez-vous **dans** le répertoire cloné :exclamation: ; installez les modules requis avec `npm` puis invoquez le script approprié pour démarrer le serveur de développement : testez votre code de départ ; comme premier pas, n'oubliez pas de modifier le titre de la page Web !

3. Décomposez l'écran illustré dans la capture d'écran en plusieurs *composants* `HTML` imbriqués (une suggestion de décomposition sera brièvement discutée en classe) ; 

4. Produisez des composants `React` statiques pour chaque composant `HTML` et assemblez-les (imbrication) ;

5. Le composant représentant la barre des catégories, qu'on peut nommer *ListeCategories* devrait contenir une *liste* `HTML` (`ul`/`li`) pour représenter les catégories ; de même, le composant représentant le tableau des produits, qu'on peut nommer *TableauProduits*, devrait contenir un *tableau* `HTML` (`table`/`thead`/`tbody`/`tr`/`th`/`td`) pour représenter les produits ;

6. Le composant *ListeCategories* contient des composants *Categorie* qui chacun a les propriétés *id*, *nom* et *couleur* ;

7. Le composant *TableauProduits* contient des composants *Produit* qui chacun a les propriétés *id*, *avatar*, *nom*, *categories*, *unites* et *ventes* ;
    >Pour les identifiants, utilisez une série de nombre commençant à 1

    >Pour les avatars, utilisez les images fournies avec le code (ne déplacez pas ces images)

    >Pour les catégories, utilisez un tableau contenant des identifiants de catégorie

8. Maintenant, produisez deux fichiers `JSON` distincts (dans le dossier *data*) pour structurer l'information disponible dans la liste des catégories et le tableau des produits (suggestion : utilisez des *tableaux*, contenant des *objets*) ;

9. Intégrez ces fichiers `JSON` dans vos composants *ListeCategories* et *ListeProduits* et utilisez la méthode `map` pour générer les composants en boucle ;

10. Intégrez quelques styles `CSS` : autant que le temps vous permet, par exemple formatez la barre des *catégories* ;

11. Une fois votre travail complété, effacez tout le contenu de ce fichier `README.md` pour le remplacez par l'information suivante :
    * Les noms des coéquipières et/ou coéquipiers
    * L'URL de votre site Web sur *Github Pages*
    
    >Savez-vous utiliser *Markdown* ? Sinon, inspirez-vous de ce fichier ou cherchez une documentation sur le Web.

12. Vérifiez que le tout fonctionne et faites une sauvegarde (`commit`) et une synchronisation (`push`) de votre dépôt.

## Montrez-moi votre solution en classe.

### Garder toujours une copie de sauvegarde de votre travail.