const locations: [string, string, string][] = [
  ['Bamboo Forest > Team Yellow Headquarters', 'overworld', 'yellowteamhq'],
  ['Main Plaza > Lower Area', 'overworld', 'tutorial'],
  ['Main Plaza > Trophy House', 'overworld', 'trophy'],
  ['Tanooki City > Train Station', 'overworld', 'trainStation'],
  ['Bridge Garden > Artistic Swimming (very hard)', 'overworld', 'swim2'],
  ['Bridge Garden > Artistic Swimming', 'overworld', 'swim'],
  ['Main Plaza > Your Boat', 'overworld', 'start'],
  ['Tanooki City > Skateboarding Dojo', 'overworld', 'skatedojo'],
  ['Tanooki City > Skateboarding (hard)', 'overworld', 'skate2'],
  ['Tanooki City > Skateboarding', 'overworld', 'skate'],
  ["Tanooki City > Sister's House", 'overworld', 'sister3house'],
  ["Marathon Beach > Sister's House", 'overworld', 'sister1house'],
  ['Oni Island > Rugby (hard)', 'overworld', 'rugbyhard'],
  ['Oni Island > Rugby Dojo', 'overworld', 'rugbydojo'],
  ['Oni Island > Rugby', 'overworld', 'rugby'],
  ['Oni Island > Team Red Headquarters', 'overworld', 'redteamhq'],
  ["North-West Docks > Petunia's Boat", 'overworld', 'porcupineHouse'],
  ['Bamboo Forest > House (SW)', 'overworld', 'pingponghouse4'],
  ['Bamboo Forest > House (E)', 'overworld', 'pingponghouse3'],
  ['Bamboo Forest > House (NE)', 'overworld', 'pingponghouse2'],
  ['Bamboo Forest > House (NW)', 'overworld', 'pingponghouse1'],
  ['Bamboo Forest > Table Tennis Dojo', 'overworld', 'pingpongdojo'],
  ['Bamboo Forest > Table Tennis (very hard)', 'overworld', 'pingpong3'],
  ['Bamboo Forest > Table Tennis (hard)', 'overworld', 'pingpong2'],
  ['Bamboo Forest > Table Tennis', 'overworld', 'pingpong'],
  ['Bridge Garden > Artistic Swimming Dojo', 'overworld', 'otohimeFront'],
  ['Bridge Garden > Artistic Swimming (hard)', 'overworld', 'otohimeBack'],
  ['Oni Island > Lava Lakes', 'overworld', 'onibrothershouse'],
  ["Oni Island > Oni Baker's House", 'overworld', 'onibaker'],
  ['Tanooki City > Noodle Bar', 'overworld', 'bookstore'],
  ["Northern Mountains > Momotaro's House", 'overworld', 'momotarohouse'],
  ['Marathon Beach > Marathon', 'overworld', 'marathon'],
  ["Tanooki City > Olive's House", 'overworld', 'lostBookHouse'],
  ["Oni Island > Hiro's Locks", 'overworld', 'locksmith'],
  ['Main Plaza > House (E)', 'overworld', 'koma2   '],
  ['Main Plaza > House (W)', 'overworld', 'koma1'],
  ['Main Plaza > Plaza', 'overworld', 'hub'],
  ['Tanooki City > Fitness Gym', 'overworld', 'gym'],
  ['Bridge Garden > Team Green Headquarters', 'overworld', 'greenteamhq'],
  ['Northern Mountains > Climbing Hall', 'overworld', 'gondola'],
  ["Bridge Garden > Ghost's House", 'overworld', 'ghostGazebo'],
  ['Bridge Garden > House for Sale', 'overworld', 'gazebo1'],
  ['Marathon Beach > Driftwood Artist', 'overworld', 'driftwoodartist'],
  ['Tanooki City > Convenience Store (W)', 'overworld', 'conveniencestore2'],
  ['Tanooki City > Convenience Store (E)', 'overworld', 'conveniencestore'],
  ['Northern Mountains > Climbing (hard)', 'overworld', 'climbinghard'],
  ['Northern Mountains > Go Club', 'overworld', 'climbinggym'],
  ['Northern Mountains > Climbing Dojo', 'overworld', 'climbingdojo'],
  ['Northern Mountains > Climbing', 'overworld', 'climbing'],
  ['Northern Mountains > Cave Entrance (N)', 'overworld', 'cave1c'],
  ['Northern Mountains > Cave Entrance (W)', 'overworld', 'cave1b'],
  ['Northern Mountains > Cave Entrance (S)', 'overworld', 'cave1a'],
  ['Tanooki City > Bookstore', 'overworld', 'noodleShop'],
  ["North-West Docks > Deer's Boat", 'overworld', 'boat3'],
  ["North-West Docks > Wolf's Boat", 'overworld', 'boat2'],
  ["North-West Docks > Momo's Boat", 'overworld', 'boat1'],
  ['Tanooki City > Team Blue Headquarters', 'overworld', 'blueteamhq'],
  ['Marathon Beach > Marathon (hard)', 'overworld', 'banyantree2'],
  ['Marathon Beach > Banyan Tree', 'overworld', 'banyantree1'],
  ['Tanooki City > Bakery', 'overworld', 'bakery'],
  ["North-West Docks > Fluffy's Arrow Shop", 'overworld', 'arrowshop'],
  ['North-West Docks > Archery (hard)', 'overworld', 'archeryultra'],
  [
    'North-West Docks > Archery Dojo Balcony',
    'overworld',
    'archerydojobalcony',
  ],
  ['North-West Docks > Archery Dojo', 'overworld', 'archerydojo'],
  ['Tanooki City > Arcade Machines', 'overworld', 'arcade'],
  ['North-West Docks > Archery', 'overworld', 'archery'],

  ['Indoors > Removed > Teahouse', 'interior', 'teahouse'],
  ['Indoors > Northern Mountains > Go Club', 'interior', 'gohouse'],
  [
    'Indoors > Bamboo Forest > Table Tennis Dojo (Floor 1)',
    'interior',
    'pingpongdojohallway',
  ],
  [
    'Indoors > Bamboo Forest > Table Tennis Dojo (Floor 2)',
    'interior',
    'tabletennisdojo',
  ],
  [
    'Indoors > Tanooki City > Skateboarding Dojo (Floor 1)',
    'interior',
    'skatedojohallway',
  ],
  [
    'Indoors > Tanooki City > Skateboarding Dojo (Floor 2)',
    'interior',
    'skatedojomainroom',
  ],
  [
    'Indoors > North-West Docks > Archery Dojo (Floor 1)',
    'interior',
    'archerydojohallway',
  ],
  [
    'Indoors > North-West Docks > Archery Dojo (Floor 2)',
    'interior',
    'archeryDojoMainRoom',
  ],
  [
    'Indoors > Oni Island > Rugby Dojo (Floor 1)',
    'interior',
    'rugbydojohallway',
  ],
  [
    'Indoors > Oni Island > Rugby Dojo (Floor 2)',
    'interior',
    'rugbydojomainroom',
  ],
  [
    'Indoors > Northern Mountains > Climbing Dojo (Floor 1)',
    'interior',
    'climbingdojohallway',
  ],
  [
    'Indoors > Northern Mountains > Climbing Dojo (Floor 2)',
    'interior',
    'climbingdojomainroom',
  ],
  [
    'Indoors > Bridge Garden > Artistic Swimming Dojo',
    'interior',
    'otohimeCastle',
  ],
  ['Indoors > Marathon Beach > Banyan Tree', 'interior', 'banyantree'],
  ['Indoors > Main Plaza > House (W)', 'interior', 'koma1House'],
  ['Indoors > Main Plaza > House (E)', 'interior', 'koma2House'],
  [
    "Indoors > Northern Mountains > Momotaro's House",
    'interior',
    'momotarohouse',
  ],
  ['Indoors > Bamboo Forest > House (NE/NW/SW)', 'interior', 'abandonedHouse1'],
  ['Indoors > Bamboo Forest > House (E)', 'interior', 'abandonedHouse2'],
  [
    'Indoors > Tanooki City > Convenience Store',
    'interior',
    'convenienceStore1',
  ],
  ['Indoors > Tanooki City > Arcade Machines', 'interior', 'arcade'],
  ['Indoors > Tanooki City > Train Station', 'interior', 'trainStation'],
  ['Indoors > Tanooki City > Fitness Gym', 'interior', 'gym'],
  ['Indoors > Tanooki City > Noodle Bar', 'interior', 'noodleShop'],
  ['Indoors > Tanooki City > Bakery', 'interior', 'bakery'],
  ['Indoors > Tanooki City > Bookstore', 'interior', 'bookstore'],
  ["Indoors > Tanooki City > Olive's House", 'interior', 'lostbookhouse'],
  ["Indoors > Tanooki City > Sister's House", 'interior', 'sister3house'],
  ["Indoors > North-West Docks > Deer's Boat", 'interior', 'boatHouse1'],
  ["Indoors > North-West Docks > Wolf's Boat", 'interior', 'boatHouse2'],
  ["Indoors > North-West Docks > Petunia's Boat", 'interior', 'porcupineHouse'],
  ["Indoors > North-West Docks > Momo's Boat", 'interior', 'whirlpoolBoat'],
  ["Indoors > North-West Docks > Fluffy's Arrow Shop", 'interior', 'arrowshop'],
  ['Indoors > Marathon Beach > Driftwood Artist', 'interior', 'woodshop'],
  ["Indoors > Marathon Beach > Sister's House", 'interior', 'sister1house'],
  ['Indoors > Main Plaza > Trophy House', 'interior', 'trophyRoom'],
  ['Indoors > Bridge Garden > House for Sale', 'interior', 'gazebo'],
  ["Indoors > Bridge Garden > Ghost's House", 'interior', 'ghostGazebo'],
  ['Indoors > Northern Mountains > Climbing Hall', 'interior', 'climbingGym'],
  ['Indoors > Removed > Gondola', 'interior', 'gondola'],
  ['Indoors > Northern Mountains > Cave', 'interior', 'cave1'],
  ["Indoors > Oni Island > Hiro's Locks", 'interior', 'locksmith'],
  ["Indoors > Oni Island > Oni Baker's House", 'interior', 'oniBakerHouse'],
  ['Indoors > Removed > Oni Brothers House', 'interior', 'oniBrothersHouse'],
  [
    'Indoors > Bamboo Forest > Team Yellow Headquarters (Floor 1)',
    'interior',
    'yellowteamhq1',
  ],
  [
    'Indoors > Bamboo Forest > Team Yellow Headquarters (Floor 2)',
    'interior',
    'yellowteamhq2',
  ],
  [
    'Indoors > Bamboo Forest > Team Yellow Headquarters (Floor 3)',
    'interior',
    'yellowteamhq3',
  ],
  [
    'Indoors > Tanooki City > Team Blue Headquarters (Floor 1)',
    'interior',
    'blueteamhq1',
  ],
  [
    'Indoors > Tanooki City > Team Blue Headquarters (Floor 2)',
    'interior',
    'blueteamhq2',
  ],
  [
    'Indoors > Tanooki City > Team Blue Headquarters (Floor 3)',
    'interior',
    'blueteamhq3',
  ],
  [
    'Indoors > Oni Island > Team Red Headquarters (Floor 1)',
    'interior',
    'redteamhq1',
  ],
  [
    'Indoors > Oni Island > Team Red Headquarters (Floor 2)',
    'interior',
    'redteamhq2',
  ],
  [
    'Indoors > Oni Island > Team Red Headquarters (Floor 3)',
    'interior',
    'redteamhq3',
  ],
  [
    'Indoors > Bridge Garden > Team Green Headquarters (Floor 1)',
    'interior',
    'greenteamhq1',
  ],
  [
    'Indoors > Bridge Garden > Team Green Headquarters (Floor 2)',
    'interior',
    'greenteamhq2',
  ],
  [
    'Indoors > Bridge Garden > Team Green Headquarters (Floor 3)',
    'interior',
    'greenteamhq3',
  ],
  ["Indoors > North-West Docks > Momo's Computer Room", 'interior', 'momo'],

  ['Minigame > Archery', 'archery', ''],
  ['Minigame > Climbing', 'climbing', ''],
  ['Minigame > Marathon', 'marathon', ''],
  ['Minigame > Table Tennis', 'pingpong', ''],
  ['Minigame > Rugby', 'rugby', ''],
  ['Minigame > Skateboarding', 'skate', ''],
  ['Minigame > Artistic Swimming', 'swim', ''],

  ['Internal > Menu', 'menus', ''],
  ['Cutscene > Introduction', 'cutscene', ''],
  ['Cutscene > Credits (DELETES ALL DATA!!!)', 'cutscene', 'credits'],
  ['Internal > Video', 'video', ''],
];

export function teleport(dimension: string, location: string) {
  const currentDimension = (window as any).Wv.Jc.ha.Lc.fm.name;
  const isOverworld = dimension === 'overworld';

  if (currentDimension === 'overworld' && isOverworld) {
    (window as any).mr((window as any).Wv.Jc.ha.Lc.tb, location);
    return;
  }

  (window as any).Mq(
    (window as any).Wv.Jc.ha.Lc,
    new (window as any).$n(
      dimension,
      isOverworld ? null : location,
      isOverworld ? location : null,
    ),
  );
}

function order(dimension: string) {
  switch (dimension) {
    case 'overworld':
      return 0;
    case 'interior':
      return 1;
    case 'cutscene':
      return 3;
    case 'menus':
    case 'video':
      return 4;
    default:
      return 2;
  }
}

export function searchLocations(search: string): [string, string, string][] {
  const filtered = search.toLowerCase().replace(/[^a-z0-9]/g, '');
  return locations
    .filter(([name]) =>
      name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '')
        .includes(filtered),
    )
    .sort((a, b) => {
      if (order(a[1]) < order(b[1])) return -1;
      if (order(a[1]) > order(b[1])) return 1;
      if (a[0].localeCompare(b[0]) < 0) return -1;
      if (a[0].localeCompare(b[0]) > 0) return 1;
      return 0;
    });
}
