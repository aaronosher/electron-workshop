const { Menu, MenuItem } = require('electron');
const menu = new Menu();

menu.append(new MenuItem({
  label: 'Print',
  accelerator: 'CmdOrCtrl+L',
  // click: () => document.querySelector('#keyMessage').innerHTML = 'You pressed the key combo!',
  click: () => alert('key combo pressed'),
}));