var cache = {};
function importAll(r) {
  r.keys().forEach(key => cache[key] = r(key));
}
importAll(require.context('./assets/', true));

export const context = cache;

const images = {
  accessoryIcon: cache['./assets/accessory-icon.png'],
  armorIcon: cache['./assets/armor-icon.png'],
  cardStatArmor: cache['./assets/cardstat-armor.png'],
  cardStatAttack: cache['./assets/cardstat-attack.png'],
  cardStatGoldCost: cache['./assets/cardstat-goldcost.png'],
  cardStatHealth: cache['./assets/cardstat-health.png'],
  consumableIcon: cache['./assets/consumable-icon.png'],
  cooldownIcon: cache['./assets/cooldown-icon.png'],
  creepIcon: cache['./assets/creep-icon.png'],
  heroIcon: cache['./assets/hero-icon.png'],
  iconBackground: cache['./assets/icon-background.png'],
  improvementIcon: cache['./assets/improvement-icon.png'],
  initiativeIcon: cache['./assets/initiative-icon.png'],
  spellIcon: cache['./assets/spell-icon.png'],
  textBackground: cache['./assets/text-background.png'],
  weaponIcon: cache['./assets/weapon-icon.png'],
}

export default images;