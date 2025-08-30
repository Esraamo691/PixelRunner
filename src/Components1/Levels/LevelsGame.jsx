const levels = [
  // Level 1
  {
    platforms: [
      { x: 0, y: 350, width: 800, height: 50 },
      { x: 200, y: 280, width: 120, height: 20 },
      { x: 400, y: 220, width: 120, height: 20 },
    ],
    coins: [
      { x: 220, y: 250, r: 20, collected: false },
      { x: 420, y: 190, r: 20, collected: false },
    ],
    enemies: [{ x: 500, y: 300, w: 80, h: 60, dir: 1 }],
    goal: { x: 725, y: 260, w: 100, h: 100 },
  },
  // Level 2
  {
    platforms: [
      { x: 0, y: 350, width: 800, height: 50 },
      { x: 300, y: 300, width: 100, height: 20 },
      { x: 500, y: 240, width: 100, height: 20 },
      { x: 650, y: 180, width: 100, height: 20 },
    ],
    coins: [
      { x: 320, y: 270, r: 20, collected: false },
      { x: 520, y: 210, r: 20, collected: false },
      { x: 670, y: 150, r: 20, collected: false },
    ],
    enemies: [
      { x: 350, y: 280, w: 80, h: 60, dir: 1 },
      { x: 600, y: 160, w: 80, h: 60, dir: -1 },
    ],
    goal: { x: 680, y: 90, w: 100, h: 100 },
  },
  // Level 3
  {
    platforms: [
      { x: 0, y: 350, width: 800, height: 50 },
      { x: 250, y: 300, width: 80, height: 20 },
      { x: 400, y: 250, width: 80, height: 20 },
      { x: 550, y: 200, width: 80, height: 20 },
      { x: 700, y: 150, width: 80, height: 20 },
    ],
    coins: [
      { x: 260, y: 270, r: 20, collected: false },
      { x: 410, y: 220, r: 20, collected: false },
      { x: 560, y: 170, r: 20, collected: false },
      { x: 710, y: 120, r: 20, collected: false },
    ],
    enemies: [
      { x: 200, y: 300, w: 80, h: 60, dir: 1 },
      { x: 450, y: 230, w: 80, h: 60, dir: -1 },
      { x: 650, y: 130, w: 80, h: 60, dir: 1 },
    ],
    goal: { x: 710, y: 60, w: 100, h: 100 },
  },
  // Level 4
  {
    platforms: [
      { x: 0, y: 350, width: 800, height: 50 },
      { x: 200, y: 300, width: 60, height: 20 },
      { x: 350, y: 250, width: 60, height: 20 },
      { x: 500, y: 200, width: 60, height: 20 },
      { x: 650, y: 150, width: 60, height: 20 },
      { x: 750, y: 100, width: 50, height: 20 },
    ],
    coins: [
      { x: 210, y: 270, r: 20, collected: false },
      { x: 360, y: 220, r: 20, collected: false },
      { x: 510, y: 170, r: 20, collected: false },
      { x: 660, y: 120, r: 20, collected: false },
      { x: 760, y: 70, r: 20, collected: false },
    ],
    enemies: [
      { x: 400, y: 230, w: 80, h: 60, dir: -1 },
      { x: 550, y: 180, w: 80, h: 60, dir: 1 },
      { x: 700, y: 130, w: 80, h: 60, dir: -1 },
    ],
    goal: { x: 745, y: 30, w: 80, h: 80 },
  },
  // Level 5
  {
    platforms: [
      { x: 0, y: 350, width: 800, height: 50 },
      { x: 150, y: 300, width: 70, height: 20 },
      { x: 300, y: 260, width: 70, height: 20 },
      { x: 450, y: 220, width: 70, height: 20 },
      { x: 600, y: 180, width: 70, height: 20 },
      { x: 750, y: 140, width: 70, height: 20 },
    ],
    coins: [
      { x: 160, y: 270, r: 20, collected: false },
      { x: 310, y: 230, r: 20, collected: false },
      { x: 460, y: 190, r: 20, collected: false },
      { x: 610, y: 150, r: 20, collected: false },
      { x: 760, y: 110, r: 20, collected: false },
    ],
    enemies: [
      { x: 340, y: 240, w: 80, h: 60, dir: -1 },
      { x: 500, y: 200, w: 80, h: 60, dir: 1 },
      { x: 660, y: 160, w: 80, h: 60, dir: -1 },
    ],
    goal: { x: 730, y: 50, w: 100, h: 100 },
  },

  //level 6

  {
    platforms: [
      { x: 0, y: 350, width: 800, height: 50 },
      { x: 300, y: 280, width: 50, height: 20 },
      { x: 500, y: 220, width: 50, height: 20 },
      { x: 680, y: 160, width: 50, height: 20 },
    ],
    coins: [
      { x: 310, y: 250, r: 20, collected: false },
      { x: 510, y: 190, r: 20, collected: false },
      { x: 710, y: 130, r: 20, collected: false },
    ],
    enemies: [
      { x: 320, y: 280, w: 80, h: 60, dir: 1.3 },
      { x: 520, y: 200, w: 80, h: 60, dir: -1.3 },
      { x: 720, y: 100, w: 80, h: 60, dir: 1.3 },
    ],
    goal: { x: 665, y: 72, w: 100, h: 100 },
  },
  //level 7
  {
    platforms: [
      { x: 0, y: 350, width: 800, height: 50 },
      { x: 250, y: 300, width: 40, height: 20 },
      { x: 400, y: 250, width: 40, height: 20 },
      { x: 550, y: 200, width: 40, height: 20 },
      { x: 700, y: 150, width: 40, height: 20 },
    ],
    coins: [
      { x: 260, y: 270, r: 20, collected: false },
      { x: 410, y: 220, r: 20, collected: false },

      { x: 560, y: 170, r: 20, collected: false },
      { x: 710, y: 120, r: 20, collected: false },
    ],
    enemies: [
      { x: 280, y: 290, w: 80, h: 60, dir: 2 },
      { x: 430, y: 180, w: 80, h: 60, dir: -2 },
      { x: 730, y: 60, w: 80, h: 60, dir: -2 },
    ],
    goal: { x: 680, y: 70, w: 90, h: 90 },
  },
];
export default levels;
