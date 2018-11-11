# ArtifactDB-UI
This repository holds all the ingame UI art assets for the game  [Artifact by Valve](http://playartifact.com).
Check out [ArtifactDB](https://github.com/ottah/ArtifactDB) for more info & other card resources!

# Installation
```bash
npm i @open-artifact/artifactdb-ui
```

# How To Use

Using the assets is as simple as importing them using import/require or passing just a relative path.

## Webpack React Example
Using the `/webpack` import will import and cache all images automatically for you.
```javascript
import ui from '@open-artifact/artifactdb-ui/webpack'
...
<img src={ui.heroIcon}/>
```

The default import for artifactdb-ui is index.js and it only returns the path of each asset.
```javascript
const ui = require('@open-artifact/artifactdb-ui');
console.log(ui.heroIcon) //./assets/hero-icon.png
```

# Properties
| Property           | Path                           |
| :----------------- | :----------------------------: |
| `accessoryIcon`    | ./assets/accessory-icon.png    |
| `armorIcon`        | ./assets/armor-icon.png        |
| `cardStatArmor`    | ./assets/cardstat-armor.png    |
| `cardStatAttack`   | ./assets/cardstat-attack.png   |
| `cardStatGoldCost` | ./assets/cardstat-goldcost.png |
| `cardStatHealth`   | ./assets/cardstat-health.png   |
| `consumableIcon`   | ./assets/consumable-icon.png   |
| `cooldownIcon`     | ./assets/cooldown-icon.png     |
| `creepIcon`        | ./assets/creep-icon.png        |
| `heroIcon`         | ./assets/hero-icon.png         |
| `iconBackground`   | ./assets/icon-background.png   |
| `improvementIcon`  | ./assets/improvement-icon.png  |
| `initiativeIcon`   | ./assets/initiative-icon.png   |
| `spellIcon`        | ./assets/spell-icon.png        |
| `textBackground`   | ./assets/text-background.png   |
| `weaponIcon`       | ./assets/weapon-icon.png       |