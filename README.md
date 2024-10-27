# expo react-native-ui-lib

Ce projet est un template expo avec react-native-ui-lib.

React-native-ui-lib est une librairie qui fourni des composants prêt à l'emploi.
Cette librairie permet de modifier le themes et le style des composant globalement (dossier themes).

Elle permet aussi de modifier ponctuelement sur chaque composants et vous donne accèes a des props de personalisation (modifier) 

Exemple : 

`<Button label="Button" body bg-blue30 square></Button>`

https://wix.github.io/react-native-ui-lib/docs/getting-started/usage

## Configuration de l'environnement de développement sur Windows

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre système Windows :

### Node.js

Node.js est un environnement d'exécution JavaScript nécessaire pour exécuter des applications React Native. Nous recommandons d'utiliser la version LTS (Long Term Support) la plus récente.

Téléchargez et installez Node.js depuis le site officiel : https://nodejs.org/en/download/

Version recommandée : **Node.js 20.13.1 LTS**

### Java Development Kit (JDK)

Le JDK est requis pour exécuter les outils de build Android. Assurez-vous d'avoir installé la version appropriée pour votre système d'exploitation.

Téléchargez et installez le JDK depuis le site officiel d'Oracle : https://www.oracle.com/java/technologies/downloads/

Version recommandée : **Java SE Development Kit 17.0.11**

### SDK Manager

Sdkmanager est un outil de ligne de commande qui vous permet d'afficher, d'installer, de mettre à jour et de désinstaller des packages pour le SDK Android. Avec Android Studio, vous n'avez pas besoin d'utiliser cet outil. À la place, vous pouvez gérer vos packages SDK depuis l'IDE.

Téléchargez le dernier package "command line tools only" (outils de ligne de commande uniquement) sur la page de téléchargement d'android studio : https://developer.android.com/studio

### Android SDK

L'Android SDK (Software Development Kit) est un ensemble d'outils de développement fournis par Google pour créer des applications pour la plateforme Android. Il comprend différents composants essentiels pour le développement d'applications Android.

Avec sdkmanager

```
sdkmanager "platforms;android-34"
```

```
sdkmanager "system-images;android-34;google_apis;x86_64"
```

```
sdkmanager "build-tools;34.0.0"
```

Version recommendée : **Android 14 (API level 34)**

### Gradle

Gradle est un outil de build utilisé pour construire et gérer les dépendances des projets Android. Il est généralement installé automatiquement lors de la configuration de l'environnement de développement React Native.

Version recommandée : **Gradle 7.5.1**

### Bun

Bun est un remplaçant plus rapide pour npm. Son utilisation est optionnelle, mais elle peut améliorer les performances de développement.

Téléchargez et installez Bun depuis le site officiel : https://bun.sh/

Version recommandée : **Bun 1.1.8**

### Expo SDK

L'Expo SDK est un ensemble de bibliothèques et d'outils fournis par Expo pour faciliter le développement d'applications React Native. Il offre un accès simplifié aux fonctionnalités natives des appareils mobiles, telles que la caméra, les contacts, le GPS, etc.
Avec l'Expo SDK, les développeurs peuvent créer et tester des applications React Native sans avoir à configurer manuellement un environnement de développement complexe.

```
bun install expo@51
```

```
npx expo install --check
```

Version recommandée : **SDK 51**

## Installation et exécution de l'application

1. Clonez le dépôt GitHub de l'application :

```
git clone https://github.com/IdoSoIam/expo-app-rnuilib.git
```

2. Accédez au répertoire du projet :

```
cd expo-app-rnuilib
```

3. Changer de branche en fonction de la config souhaitée :

```
git checkout without-typescript-without-exporouter
```

4. Installez les dépendances du projet :

```
npx expo install
```

5. Démarrez l'application en mode développement :

```
bun run start
```

6. Une fois l'application démarrée, vous pouvez la visualiser sur un émulateur ou un appareil physique en scannant le code QR avec l'application Expo Go (disponible sur l'App Store ou le Google Play Store).



Félicitations ! Vous avez configuré avec succès l'environnement de développement pour creer votre application sur Windows. Vous pouvez maintenant explorer et modifier le code source selon vos besoins.

N'hésitez pas à consulter la documentation officielle de React Native, Expo et des autres outils pour plus d'informations et de ressources.