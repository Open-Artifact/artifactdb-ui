# ArtifactDB-UI

# Installation
`npm i @open-artifact/artifactdb-ui`

# How to use

Using the assets is as simple as importing them using import/require or passing just a relative path.

![alt text](https://raw.githubusercontent.com/Open-Artifact/artifactdb-ui/master/assets/hero.png "Logo Title Text 1")

## Webpack React Example
```javascript
import heroIcon from '@open-artifact/artifactdb/assets/hero_icon.png'
...
<img src={heroIcon}/>
```

To make the path shorter you can set up a resolve path rule in your config.

https://webpack.js.org/configuration/resolve/