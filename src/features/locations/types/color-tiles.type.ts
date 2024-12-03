export enum ColorTileEnum {
  RED = 'red',
  BLUE = 'blue',
  YELLOW = 'yellow',
  BLACK = 'black',
}

export type ColorType =
  | ColorTileEnum.RED
  | ColorTileEnum.BLUE
  | ColorTileEnum.YELLOW
  | ColorTileEnum.BLACK;
