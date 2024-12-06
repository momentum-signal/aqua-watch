import * as React from "react";

import { IconSvgProps } from "@/lib/types/icon.types";
import Svg, { Path } from "react-native-svg";

export const AppLogo: React.FC<IconSvgProps> = ({
  size = 40,
  width,
  height,
}) => (
  //   <svg
  //     fill="none"
  //     height={size || height}
  //     viewBox="0 0 32 32"
  //     width={size || width}
  //     {...props}
  //   >
  //     <path
  //       clipRule="evenodd"
  //       d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
  //       fill="currentColor"
  //       fillRule="evenodd"
  //     />
  //   </svg>

  <Svg
    height={size || height}
    width={size || width}
    viewBox="-51.2 -51.2 614.40 614.40"
    fill="none"
  >
    <Path
      d="M400,320c0,88.37-55.63,144-144,144S112,408.37,112,320c0-94.83,103.23-222.85,134.89-259.88a12,12,0,0,1,18.23,0C296.77,97.15,400,225.17,400,320Z"
      stroke="#5DCCFC"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <Path
      d="M344,328a72,72,0,0,1-72,72"
      stroke="#5DCCFC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </Svg>
);
