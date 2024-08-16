import { menu } from './menu';

if (menu.alreadyLoaded()) {
  menu.showAlreadyLoaded();
} else {
  menu.load();
  menu.showLoaded();
}
