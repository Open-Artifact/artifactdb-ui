var cache = {};
function importAll(r) {
  r.keys().forEach(key => cache[key] = r(key));
}
importAll(require.context('./assets/images/', true));

export const context = cache;

const images = {
  accessoryIcon: cache['./assets/images/accessory-icon.png'],
  armorIcon: cache['./assets/images/armor-icon.png'],
  cardStatArmor: cache['./assets/images/cardstat-armor.png'],
  cardStatAttack: cache['./assets/images/cardstat-attack.png'],
  cardStatGoldCost: cache['./assets/images/cardstat-goldcost.png'],
  cardStatHealth: cache['./assets/images/cardstat-health.png'],
  consumableIcon: cache['./assets/images/consumable-icon.png'],
  cooldownIcon: cache['./assets/images/cooldown-icon.png'],
  creepIcon: cache['./assets/images/creep-icon.png'],
  heroIcon: cache['./assets/images/hero-icon.png'],
  iconBackground: cache['./assets/images/icon-background.png'],
  improvementIcon: cache['./assets/images/improvement-icon.png'],
  initiativeIcon: cache['./assets/images/initiative-icon.png'],
  spellIcon: cache['./assets/images/spell-icon.png'],
  textBackground: cache['./assets/images/text-background.png'],
  weaponIcon: cache['./assets/images/weapon-icon.png'],
}

export default images;