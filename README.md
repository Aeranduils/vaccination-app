# AngularCovid
## FRITZ Florian (31810971) - GRISÉ Jérémy (31813606) - GUYOT Antonin (31807096)

Ce projet à pour but de mettre en application le cours de Full Stack et de Mise en Production en mettant en place une application de prise de rendez-vous en ligne similaire à Doctolib. Le répertoire de la partie Back-end est disponible à cette adresse : https://github.com/Aeranduils/covid-api .

## Liste des fonctionnalités mise en place :
### Back-end

- Entity beans avec mapper.

- Couche repository, service et controllers REST.

- Basic Auth et endpoint en fonction d'un rôle (public/privé).

- Configuration micrometer et mise en place de métrique.

- RateLimit via Token Bucket.

### Front-end

- Création, réutilisation de page et de composants Angular.

- Mise en place d'une navigation via router.

- Couche de service et appel d'API.

- Redirection vers une file d'attente en cas de Token Bucket vide.

## Enrôlement du projet

1. Ouvrir le fichier [application.yaml](https://github.com/Aeranduils/covid-api/blob/master/src/main/resources/application.yaml) et modifier le mot de passe de la base de données si besoin.

2. Ouvrir le dossier covid-api et lancer le back-end en faisant un run java sur CovidApiApplication.java.

3. La base de données se remplira automatiquement avec des centres de vaccination et des utilisateurs que nous avons pré-remplit.

4. Ouvrir le dossier vaccination-app et exécuter la commande ``npm install`` puis ``ng serve`` dans un terminal. L'application front-end va se compiler puis se lancer.

5. Ouvrir l'application sur le [localhost:4200](http://localhost:4200/) .

## Fonctionnalités non implémentées et problèmes rencontrés :
### Identification

Mise en place d'un formulaire sur le front afin de rentrer les données d'identification. Pas parvenu à utiliser les données entrées afin de s'identifier côté back. Nous avons un problème du côté de la requête http qui refuse l'accès.

### Métrique

Micrometer a été configuré pour compter le nombre de requêtes demandées à l'API. Pas parvenu à accéder à la page Prometheus liées à ces métriques, malgré de nombreuses tentatives (modification de application.yaml, vérification des dépendances, modification de la configuration, ...).

### Mise en production

Pas parvenu à créer le Dockerfile afin de créer l'image. Le fichier ``.jar`` n'était pas trouvé après la compilation du back. Même type d'erreur avec le front, qui se compilait bien mais ne permettait pas de trouver l'exécutable après.

### Problèmes généraux
- Debuguage chronophage : utilisation d'un temps considérable pour identifier les problèmes et ensuite les corriger (quand on y arrivait).

- Autoformation : GIT pour certains de par une méconaissance de l'outil en SIA, et des prérequis pas suffisant pour la charge de travail demandée.

En conclusion : beaucoup de connaissances apprises mais une frustration générale par le manque de fonctionnalité de l'API. Nous avons passés plus de temps à nous documenter et a essayer des choses qui au final n'ont pas fonctionnées. 

(✿◠‿◠)
