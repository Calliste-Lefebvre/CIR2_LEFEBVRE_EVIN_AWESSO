# CIR2_LEFEBVRE_EVIN_AWESSO
Tavern'ISEN



- La description du projet : Présentation rapide de l'objectif et du contexte du projet.

    Ce projet a été réalisé dans le cadre du cours de développement web. Il s'agit d'une carte interactive en ligne permettant de visualiser et filtrer différents produits proposés par un bar, comme des bières, des whiskys, des softs ou des snacks.

    L’objectif principal est de concevoir une interface utilisateur dynamique et intuitive, en mettant en pratique les compétences acquises en HTML, CSS et JavaScript. L'utilisateur peut naviguer facilement parmi les produits, effectuer une recherche par nom ou encore filtrer par catégorie grâce à des boutons interactifs.
Il y a aussi un "Mini-jeu" codé entièrement en JavaScript, où nous déplaçons une bière dans un espace et nous sommes attirés par des cercles automatiquement lorque nous en sommes proches.

    Le projet met aussi l’accent sur l’aspect visuel, avec un système de cartes produits animées, une image de fond récurrente et interactive, et une structure responsive adaptée aux différents supports.



- Les fonctionnalités principales : Liste des fonctionnalités mises en place.

    Page d'accueil :
            Effet parallax visuel : une image de fond qui reste fixe ou se déplace lentement lors du défilement, créant un effet de profondeur.
            Animation fluide en CSS : les effets sont gérés avec des transitions CSS pour une meilleure expérience utilisateur.
            Comportement non intrusif : l'effet visuel n'interfère pas avec le contenu principal de la page.

    Page de la carte des boissons :
            Affichage dynamique des produits : les cartes des boissons sont générées automatiquement en JavaScript à partir d’une liste de données.
            Filtrage par catégorie : des boutons permettent de filtrer les produits par type (bière, whisky, soft, snack ou tout afficher).
            Mise en page responsive : les cartes s’adaptent à la taille de l’écran pour une bonne lisibilité sur tous les supports.
            Affichage conditionnel : seuls les éléments correspondant au filtre sélectionné sont visibles, les autres sont masqués dynamiquement.
            Design visuel personnalisé : chaque boisson est présentée avec son image, son nom et son prix.

    Page Mini-Jeu :
            Commande :
              -ZQSD ou les flèches directionelles pour déplacer la bouteille.
              -ESPACE + une direction pour décoller d'un cercle.
              -T pour PASE
              -R pour afficher une croix rouge au milieu de l'écran
            Jeu :
              On contrôle une bouteille de bière dans un espace, les déplacements de la bière possède une inertie.
              Lorsque l'on reste immobile prêt d'un cercle (représentant l'enseigne du bar très fréquenté par l'ISEN),
              La bière est automatiquement attiré par ce cercle et se pose sur ce dernier.


==========  Fonctionnalités : =============
              -Canvas HTML5 2D
Création dynamique d’un <canvas> via document.createElement('canvas')
Rendu graphique avec ctx (contexte 2D)
Dessins :
Images (drawImage)
Textes (fillText)
Formes (croix rouge avec moveTo, lineTo, stroke)
Gestion de la taille dynamique (resize automatique)
-Physique du jeu & mouvement réaliste
Inertie et vitesse : vx, vy
Gravité paramétrable par planète (force en fonction de la distance et de gravity)
Collision planète : repositionnement sur le bord et arrêt du mouvement
Boost radial en sortie de collision
Frottement dynamique (réduction des vitesses si pas d’input)
Limitation de la vitesse maximale
-Caméra intelligente
Caméra fluide suivant le vaisseau : camera.smoothX, smoothY
Interpolation avec facteur de lissage (smoothing)
Toutes les entités (étoiles, planètes, fond) sont dessinées en relatif à la caméra
-Animation et rotation du vaisseau
Changement de sprite avec frameIndex toutes les 100 ms
Interpolation d’angle (slerp/lerp) pour orienter le vaisseau :
En direction de la vitesse
Ou vers la planète en cas de contact
Gestion de l’offset visuel (effet de vitesse fluide)
-Objets planètes dynamiques
Classe Planet :
Position, texture, taille, gravité, vitesse de rotation
Méthodes .update() et .draw()
Rotation automatique avec rot_speed
-Système d’étoiles (objets collectables)
Étoiles = saucisson/cacahuètes 
Créées aléatoirement dans l’espace (300)
Collision = score + son + étoile remplacée
======

    Page A Propos :
            AWESSO MANGUILLIWE BLAISE



- Les instructions d’installation et d’exécution : Étapes pour installer et exécuter le projet.

    Téléchargement : Récupérez tous les fichiers du projet (HTML, CSS, JS, images).
    Structure : Gardez l’arborescence intacte (ne pas déplacer les dossiers img/, js/, etc.).
    Lancement : Ouvrez un des fichiers HTML (ex : home.html) dans un navigateur.



- Les noms des membres du groupe : Liste des participants ayant contribué au projet.

    AWESSO MANGUILLIWE BLAISE
    EVIN ALEXIS
    LEFEBVRE CALLISTE
