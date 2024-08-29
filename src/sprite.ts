import { ImgComponent } from './components/img';

const sprites = {
  sports: {
    marathon: {
      sheet: 'overworld',
      x: 160,
      y: 3103,
      width: 19,
      height: 18,
    },
    rugby: {
      sheet: 'overworld',
      x: 182,
      y: 3103,
      width: 19,
      height: 18,
    },
    pingpong: {
      sheet: 'overworld',
      x: 1685,
      y: 3347,
      width: 19,
      height: 18,
    },
    climbing: {
      sheet: 'overworld',
      x: 3216,
      y: 2918,
      width: 19,
      height: 18,
    },
    skate: {
      sheet: 'overworld',
      x: 453,
      y: 3331,
      width: 19,
      height: 18,
    },
    swim: {
      sheet: 'overworld',
      x: 1751,
      y: 3332,
      width: 19,
      height: 18,
    },
    archery: {
      sheet: 'overworld',
      x: 2485,
      y: 1886,
      width: 19,
      height: 18,
    }
  },
  quests: {
    '"Wind Stopper"': {
      sheet: 'overworld',
      x: 129,
      y: 3294,
      width: 34,
      height: 33,
    },
  },
  teams: {
    red: {
      sheet: 'overworld',
      x: 1774,
      y: 3294,
      width: 32,
      height: 34,
    },
    blue: {
      sheet: 'overworld',
      x: 156,
      y: 3208,
      width: 32,
      height: 34,
    },
    green: {
      sheet: 'overworld',
      x: 1347,
      y: 3348,
      width: 18,
      height: 25,
    },
    yellow: {
      sheet: 'overworld',
      x: 3091,
      y: 3320,
      width: 25,
      height: 34,
    },
  }
};

type SpriteType = keyof typeof sprites;

export const spriteImg = (type: SpriteType, name: string): ImgComponent => {
  const sprite: {
    sheet: string;
    x: number;
    y: number;
    width: number;
    height: number;
  } = sprites[type][name];
  return new ImgComponent(sprite.sheet + '-sprite.png', sprite.x, sprite.y, sprite.width, sprite.height);
};
