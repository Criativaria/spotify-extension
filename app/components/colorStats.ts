import ColorThief from "colorthief";
import convert from "color-convert";

export type SpheresColorType = {
  sphere1Color: number[];
  sphere2Color: number[];
  sphere3Color: number[];
  blur: number[];
};

export default function colorStats(rgb: ColorThief.RGBColor) {
  const colorHsl = convert.rgb.hsl(rgb[0], rgb[1], rgb[2]);
  let background: string = "#000000";
  let spheresColor: SpheresColorType = {
    sphere1Color: colorHsl,
    sphere3Color: colorHsl,
    sphere2Color: colorHsl,
    blur: [60, 58, 90],
  };

  if (colorHsl[2] < 25) {
    // cor escura, fundo claro
    background = "#F9F9F9";
    spheresColor = {
      sphere1Color: [colorHsl[0], 99, 60],
      sphere2Color: [colorHsl[0], 85, 70],
      sphere3Color: [colorHsl[0], 78, 40],
      blur: [60, 58, 90],
    };
  }
  if (colorHsl[2] > 25 && colorHsl[2] < 55) {
    //cor media, fundo médio
    background = "#8f8f8f";
    spheresColor = {
      sphere1Color: [colorHsl[0], 99, 60],
      sphere2Color: [colorHsl[0], 85, 29],
      sphere3Color: [colorHsl[0], 78, 50],
      blur: [60, 58, 90],
    };
  }
  if (colorHsl[2] > 55) {
    // cor clara, fundo escuro
    background = "#000000";
    spheresColor = {
      sphere1Color: [colorHsl[0], 99, 71],
      sphere2Color: [colorHsl[0], 85, 30],
      sphere3Color: [colorHsl[0], 78, 50],
      blur: [120, 130, 180],
    };
  }

  const spheresColors = {
    sphere1Color: convert.hsl.rgb(
      spheresColor.sphere1Color[0],
      spheresColor.sphere1Color[1],
      spheresColor.sphere1Color[2]
    ),
    sphere2Color: convert.hsl.rgb(
      spheresColor.sphere2Color[0],
      spheresColor.sphere2Color[1],
      spheresColor.sphere2Color[2]
    ),
    sphere3Color: convert.hsl.rgb(
      spheresColor.sphere3Color[0],
      spheresColor.sphere3Color[1],
      spheresColor.sphere3Color[2]
    ),
    blur: spheresColor.blur,
  };

  return { background, spheresColors };
}
