interface Quest {
  id: string;
  state?: 'active';
}

const quests: Quest[] = [
  {
    id: 'lantern light',
    // also sets 'lantern 1' (br), 'lantern 2' (tr), 'lantern 3' (tl) & 'lantern 4' (bl) to true
    // 1. talk to npc (active) -> 2. light lanterns (active) -> 3. talk to npc (complete)
  },
  {
    id: 'rain',
    // 1. talk to frog npc (active) -> 2. talk to rain npc (ticket) -> 3. talk to the train station npc (noodle) -> 4. talk to the octupus npc (found) -> 5. talk to the rain npc (complete)
  }
];