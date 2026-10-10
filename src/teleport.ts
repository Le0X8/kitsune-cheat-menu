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
  ['Northern Mountains > Gondola', 'overworld', 'gondola'],
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

  ['Indoors > teahouse', 'interior', 'teahouse'],
  ['Indoors > Northern Mountains > Go Club', 'interior', 'gohouse'],
  ['Indoors > pingpongdojohallway', 'interior', 'pingpongdojohallway'],
  ['Indoors > tabletennisdojo', 'interior', 'tabletennisdojo'],
  ['Indoors > skatedojohallway', 'interior', 'skatedojohallway'],
  ['Indoors > skatedojomainroom', 'interior', 'skatedojomainroom'],
  ['Indoors > archerydojohallway', 'interior', 'archerydojohallway'],
  ['Indoors > archeryDojoMainRoom', 'interior', 'archeryDojoMainRoom'],
  ['Indoors > rugbydojohallway', 'interior', 'rugbydojohallway'],
  ['Indoors > rugbydojomainroom', 'interior', 'rugbydojomainroom'],
  ['Indoors > climbingdojohallway', 'interior', 'climbingdojohallway'],
  ['Indoors > climbingdojomainroom', 'interior', 'climbingdojomainroom'],
  ['Indoors > otohimeCastle', 'interior', 'otohimeCastle'],
  ['Indoors > banyantree', 'interior', 'banyantree'],
  ['Indoors > koma1House', 'interior', 'koma1House'],
  ['Indoors > koma2House', 'interior', 'koma2House'],
  ['Indoors > momotarohouse', 'interior', 'momotarohouse'],
  ['Indoors > abandonedHouse1', 'interior', 'abandonedHouse1'],
  ['Indoors > abandonedHouse2', 'interior', 'abandonedHouse2'],
  ['Indoors > convenienceStore1', 'interior', 'convenienceStore1'],
  ['Indoors > arcade', 'interior', 'arcade'],
  ['Indoors > trainStation', 'interior', 'trainStation'],
  ['Indoors > gym', 'interior', 'gym'],
  ['Indoors > noodleShop', 'interior', 'noodleShop'],
  ['Indoors > bakery', 'interior', 'bakery'],
  ['Indoors > bookstore', 'interior', 'bookstore'],
  ['Indoors > lostbookhouse', 'interior', 'lostbookhouse'],
  ['Indoors > sister3house', 'interior', 'sister3house'],
  ['Indoors > boatHouse1', 'interior', 'boatHouse1'],
  ['Indoors > boatHouse2', 'interior', 'boatHouse2'],
  ['Indoors > porcupineHouse', 'interior', 'porcupineHouse'],
  ['Indoors > whirlpoolBoat', 'interior', 'whirlpoolBoat'],
  ['Indoors > arrowshop', 'interior', 'arrowshop'],
  ['Indoors > woodshop', 'interior', 'woodshop'],
  ['Indoors > sister1house', 'interior', 'sister1house'],
  ['Indoors > trophyRoom', 'interior', 'trophyRoom'],
  ['Indoors > gazebo', 'interior', 'gazebo'],
  ['Indoors > ghostGazebo', 'interior', 'ghostGazebo'],
  ['Indoors > climbingGym', 'interior', 'climbingGym'],
  ['Indoors > gondola', 'interior', 'gondola'],
  ['Indoors > cave1', 'interior', 'cave1'],
  ['Indoors > locksmith', 'interior', 'locksmith'],
  ['Indoors > oniBakerHouse', 'interior', 'oniBakerHouse'],
  ['Indoors > oniBrothersHouse', 'interior', 'oniBrothersHouse'],
  ['Indoors > yellowteamhq1', 'interior', 'yellowteamhq1'],
  ['Indoors > yellowteamhq2', 'interior', 'yellowteamhq2'],
  ['Indoors > yellowteamhq3', 'interior', 'yellowteamhq3'],
  ['Indoors > blueteamhq1', 'interior', 'blueteamhq1'],
  ['Indoors > blueteamhq2', 'interior', 'blueteamhq2'],
  ['Indoors > blueteamhq3', 'interior', 'blueteamhq3'],
  ['Indoors > redteamhq1', 'interior', 'redteamhq1'],
  ['Indoors > redteamhq2', 'interior', 'redteamhq2'],
  ['Indoors > redteamhq3', 'interior', 'redteamhq3'],
  ['Indoors > greenteamhq1', 'interior', 'greenteamhq1'],
  ['Indoors > greenteamhq2', 'interior', 'greenteamhq2'],
  ['Indoors > greenteamhq3', 'interior', 'greenteamhq3'],
  ["Indoors > Momo's Computer Room", 'interior', 'momo'],

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
