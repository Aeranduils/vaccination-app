# AngularCovid
## FRITZ Florian - GRISE Jérémy - GUYOT Antonin

Ce projet à pour but de mettre en application le cours de Full Stack et de Mise en Production en mettant en place une application de prise de rendez-vous en ligne similaire à Doctolib. Le répertoire de la partie Back-end est disponible à cette adresse : https://github.com/Aeranduils/covid-api .

## Liste des fonctionnalités mise en place :
### Back-end

- Entity beans avec mapper

- Couche repository, service et controllers REST

- Basic Auth et endpoint en fonction d'un rôle (public/privé)

- Configuration micrometer et mise en place de métrique

- RateLimit via Token Bucket

### Front-end

- Création, réutilisation de page et de composants Angular

- Mise en place d'une navigation via router

- Couche de service et appel d'API

- Redirection vers une file d'attente en cas de Token Bucket vide

## Fonctionnalités non implémentées et problèmes rencontrés :
### Identification

Mise en place d'un formulaire sur le front afin de rentrer les données d'identification. Pas parvenu à utiliser les données entrées afin de s'identifier côté back.

### Métrique

Micrometer a été configuré pour compter le nombre de requêtes demandées à l'API. Pas parvenu à accéder à la page Prometheus liées à ces métriques, malgré de nombreuses tentatives (modification de application.yaml, vérification des dépendances, modification de la configuration, ...)

### Mise en production

Pas parvenu à créer le Dockerfile afin de créer l'image. Le fichier ``.jar`` n'était pas trouvé après la compilation du back. Même type d'erreur avec le front, qui se compilait bien mais ne permettait pas de trouver l'exécutable après.
