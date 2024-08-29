import { ButtonComponent } from './components/button';
import { GroupComponent } from './components/group';
import { InputComponent } from './components/input';
import { MenuComponent } from './components/menu';
import { TextComponent } from './components/text';
import { menu } from './menu';
import { spriteImg } from './sprite';

declare global {
  interface Window {
    codeMod: boolean | undefined;
  }
}

if (menu.alreadyLoaded()) {
  menu.showAlreadyLoaded();
} else {
  menu.load();

  const t1 = new TextComponent(
    'press <kbd>Alt</kbd> + <kbd>Shift</kbd> to close<br><br>'
  );
  t1.modifyStyle((style) => {
    style.color = '#aaa';
    style.fontSize = '0.8rem';
  });
  menu.addChild(t1);

  const m1 = new MenuComponent('Sports');
  m1.modifyStyle((style) => (style.justifyContent = 'center'));
  [
    'marathon',
    'rugby',
    'pingpong',
    'climbing',
    'skate',
    'swim',
    'archery',
  ].forEach((sport) => {
    const g = new GroupComponent();
    const i1 = spriteImg('sports', sport);
    i1.modifyStyle((style) => (style.height = '5rem'));

    const t1 = new TextComponent('Score<br>');
    t1.modifyStyle((style) => {
      style.fontFamily = 'inherit';
      style.fontSize = '1.5rem';
    });
    const inp1 = new InputComponent('number', 'score');
    inp1.setValue(localStorage.getItem('KITSUNE_' + sport + '_score') || '0');
    inp1.onChangeNum((value) =>
      localStorage.setItem('KITSUNE_' + sport + '_score', String(value))
    );

    const t2 = new TextComponent('<br>Dangos<br>');
    t2.modifyStyle((style) => {
      style.fontFamily = 'inherit';
      style.fontSize = '1.5rem';
    });
    const inp2 = new InputComponent('number', 'dangos');
    inp2.setValue(localStorage.getItem('KITSUNE_' + sport + '_rating') || '0');
    inp2.onChangeNum((value) =>
      localStorage.setItem('KITSUNE_' + sport + '_rating', String(value))
    );

    g.renderChild((e) => i1.render(e));
    g.renderChild((e) => t1.render(e));
    g.renderChild((e) => inp1.render(e));
    g.renderChild((e) => t2.render(e));
    g.renderChild((e) => inp2.render(e));
    m1.renderChild((e) => g.render(e));
  });
  m1.renderChild((e) => {
    const g = new GroupComponent();
    g.modifyStyle((style) => {
      style.justifyContent = 'center';
      style.flexDirection = 'row';
      style.gap = '1rem';
    });

    const btn1 = new ButtonComponent('Get all scrolls');
    btn1.onClick(() => {
      const sports = [
        'marathon',
        'rugby',
        'pingpong',
        'climbing',
        'skate',
        'swim',
        'archery',
      ];
      sports.forEach((sport) =>
        localStorage.setItem('KITSUNE_' + sport + '_rating', '3')
      );
      Array.from(document.getElementsByClassName('dangos')).forEach(
        (e: HTMLInputElement) => (e.value = '3')
      );
    });

    const btn2 = new ButtonComponent('Reset all');
    btn2.onClick(() => {
      const sports = [
        'marathon',
        'rugby',
        'pingpong',
        'climbing',
        'skate',
        'swim',
        'archery',
      ];
      const keys = Object.keys(localStorage).filter((key) =>
        sports.some((sport) => key.startsWith('KITSUNE_' + sport))
      );
      keys.forEach((key) => localStorage.removeItem(key));

      Array.from(document.getElementsByClassName('score')).forEach(
        (e: HTMLInputElement) => (e.value = '0')
      );
      Array.from(document.getElementsByClassName('dangos')).forEach(
        (e: HTMLInputElement) => (e.value = '0')
      );
    });

    g.renderChild((e) => btn1.render(e));
    g.renderChild((e) => btn2.render(e));

    g.render(e);
  });
  menu.addChild(m1);

  const m3 = new MenuComponent('Teams');
  m3.modifyStyle((style) => (style.justifyContent = 'center'));
  ['blue', 'red', 'green', 'yellow'].forEach((team) => {
    const g = new GroupComponent();
    const i1 = spriteImg('teams', team);
    i1.modifyStyle((style) => (style.height = '5rem'));

    const btn = new ButtonComponent('Join');
    btn.onClick(() => localStorage.setItem('KITSUNE_PLAYER_TEAM', `"${team}"`));

    g.renderChild((e) => i1.render(e));
    g.renderChild((e) => btn.render(e));
    m3.renderChild((e) => g.render(e));
  });
  menu.addChild(m3);

  const m9 = new MenuComponent('Misc');
  m9.modifyStyle((style) => (style.justifyContent = 'center'));
  const g9 = new GroupComponent();
  g9.modifyStyle((style) => {
    style.justifyContent = 'center';
    style.flexDirection = 'row';
    style.gap = '1rem';
  });
  const btn9 = new ButtonComponent('Toggle cherry blossom petals');
  btn9.onClick(() => {
    const state_before =
      (localStorage.getItem('KITSUNE_outro_VIDEO_SEEN') || 'false') === 'true';
    localStorage.setItem('KITSUNE_outro_VIDEO_SEEN', String(!state_before));
  });
  g9.renderChild((e) => btn9.render(e));
  m9.renderChild((e) => g9.render(e));
  menu.addChild(m9);

  if (window.codeMod) {
    const t = new TextComponent('codemod enabled (full functionality)<br><br>');
    menu.addChild(t);
  } else {
    const t1 = new TextComponent(
      'codemod disabled (only limited functionality)<br>'
    );
    const t2 = new TextComponent(
      'learn about codemod <a href="https://github.com/Le0X8/kitsune-cheat-menu/blob/main/codemod.md" target="_blank">here</a><br><br>'
    );
    menu.addChild(t1);
    menu.addChild(t2);
  }
  const t2 = new TextComponent(
    '<a href="https://github.com/Le0X8/kitsune/blob/main/credits.md" target="_blank">Credits</a><br><br>'
  );
  const t3 = new TextComponent(
    'Created by <a href="https://github.com/Le0X8" target="_blank">Leonard Lesinski</a>'
  );
  t3.modifyStyle(
    (style) =>
      (style.fontFamily =
        '"Cascadia Code", Consolas, Hack, "Noto Mono", monospace')
  );
  menu.addChild(t2);
  menu.addChild(t3);

  menu.showLoaded();
}
