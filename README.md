# ArtifactDB-UI

# Installation
`npm i @open-artifact/artifactdb-ui`

# How to use

Using the assets is as simple as importing them using import/require or passing just a relative path.

![alt text](https://raw.githubusercontent.com/Open-Artifact/artifactdb-ui/master/assets/hero.png "Logo Title Text 1")

## Webpack React Example
```javascript
import ui from '@open-artifact/artifactdb'
...
<img src={ui.heroIcon.file}/>
```

`*.file:` file is the image, `*.path` relative path.