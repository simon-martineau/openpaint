import { DrawCommandArgs } from "src/services/canvas/command/draw-command";

const firstCommandArgs: DrawCommandArgs = {
  fromX: 1,
  fromY: 1,
  toX: 2,
  toY: 2,
  pensize: 2,
  color: "#fff",
};

const secondCommandArgs: DrawCommandArgs = {
  fromX: 3,
  fromY: 3,
  toX: 4,
  toY: 4,
  pensize: 3,
  color: "#eee",
};

const thirdCommandArgs: DrawCommandArgs = {
  fromX: 5,
  fromY: 5,
  toX: 6,
  toY: 6,
  pensize: 4,
  color: "#ddd",
};

export const drawFixtures = [firstCommandArgs, secondCommandArgs, thirdCommandArgs];
