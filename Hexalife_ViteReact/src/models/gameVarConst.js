// those constants don't have to be changed

export const unit = 20; // size in pixel
export const comfortList = ['fertile', 'neutral', 'hostile']
export const contentList = ['alive', 'empty', 'boundary']
export const initialSpeed = 3;
export const initialSize = 14;
export const initialChanceOfLife = 0.25;
export const initialRules = {
    "spawn":[3, 4], // first array is number of living units needed to spawn
    "die":[0, 1, 5, 6]  // second array is number of living units making die
}

// placing new cells around
export const offsetX = [    // horizontal
    0,
    0.75*unit,
    0.75*unit,
    0,
    -0.75*unit,
    -0.75*unit
];

export const offsetY = [    // vertical
    -0.88*unit, // = -cos(30°)
    -0.44*unit, // = -cos(30°)/2
    0.44*unit, // = cos(30°)/2
    0.88*unit, // = cos(30°)
    0.44*unit, // = cos(30°)/2
    -0.44*unit // = -cos(30°)/2
];

export const maxSpeed = 5;

export const timeBySpeed = [10000, 3000, 1500, 750, 400, 200];  // need adjustment ?