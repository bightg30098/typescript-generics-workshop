import { CSSProperties } from "react";

/**
 * In this implementation, we need to specify the theme
 * inside useStyled wherever we use it. This is not ideal.
 *
 * See if you can refactor useStyled into a function called
 * makeUseStyled which returns a useStyled function, typed
 * with the theme.
 *
 * Desired API:
 *
 * const useStyled = makeUseStyled<MyTheme>();
 */

const makeUseStyled = <TTheme>() => {
  const useStyled = (func: (theme: TTheme) => CSSProperties) => {
    // Imagine that this function hooks into a global theme
    // and returns the CSSProperties
    return {} as CSSProperties;
  };

  return useStyled
}

interface MyTheme {
  color: {
    primary: string;
  };
  fontSize: {
    small: string;
  };
}

const useStyled = makeUseStyled<MyTheme>();

const buttonStyle = useStyled((theme) => ({
  color: theme.color.primary,
  fontSize: theme.fontSize.small,
}));

const divStyle = useStyled((theme) => ({
  backgroundColor: theme.color.primary,
}));
