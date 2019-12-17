import React, { Component } from "react";

const color = "white";

export class WardrobePicture extends Component {
  render() {
    return (
      <div className="">
        <svg
          enableBackground="new 0 0 100 100"
          fill={color}
          height="120px"
          id="WardrobePicture"
          version="1.1"
          viewBox="0 0 48 48"
          width="120px"
        >
          <path d="M33.502,2H14.498c-1.378,0-2.5,1.122-2.5,2.5v39c0,1.378,1.122,2.5,2.5,2.5h19.004c1.379,0,2.5-1.122,2.5-2.5v-39  C36.002,3.121,34.881,2,33.502,2z M35.002,4.5v34.521H24.5V3h9.002C34.33,3,35.002,3.673,35.002,4.5z M14.498,3H23.5v36.021H12.998  V4.5C12.998,3.673,13.67,3,14.498,3z M12.998,43.5v-3.479H23.5V45h-9.002C13.67,45,12.998,44.326,12.998,43.5z M33.502,45H24.5  v-4.979h10.502V43.5C35.002,44.326,34.33,45,33.502,45z" />
          <path d="M21.143,22.237c0.276,0,0.5-0.224,0.5-0.5v-4.5c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v4.5  C20.643,22.013,20.867,22.237,21.143,22.237z" />
          <path d="M26.857,22.237c0.275,0,0.5-0.224,0.5-0.5v-4.5c0-0.276-0.225-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v4.5  C26.357,22.013,26.582,22.237,26.857,22.237z" />
          <path d="M20.372,41.145h-4.246c-0.276,0-0.5,0.225-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5h4.246c0.276,0,0.5-0.224,0.5-0.5  C20.872,41.369,20.647,41.145,20.372,41.145z" />
          <path d="M31.875,41.145h-4.246c-0.275,0-0.5,0.225-0.5,0.5c0,0.276,0.225,0.5,0.5,0.5h4.246c0.275,0,0.5-0.224,0.5-0.5  C32.375,41.369,32.15,41.145,31.875,41.145z" />
        </svg>
      </div>
    );
  }
}

export class ChestPicture extends Component {
  render() {
    return (
      <div className="">
        <svg
          enableBackground="new 0 0 100 100"
          height="120px"
          id="ChestPicture"
          version="1.1"
          viewBox="0 0 100 100"
          width="120px"
          fill={color}
        >
          <g>
            <path d="M13.783,4v88.087h7.807C22.053,94.318,24.032,96,26.398,96c2.367,0,4.348-1.682,4.811-3.913h37.338   C69.01,94.318,70.989,96,73.355,96c2.367,0,4.348-1.682,4.811-3.913h8.051V4H13.783z M26.398,94c-1.253,0-2.314-0.8-2.725-1.913   h5.45C28.714,93.2,27.652,94,26.398,94z M73.355,94c-1.253,0-2.314-0.8-2.725-1.913h5.45C75.671,93.2,74.609,94,73.355,94z    M84.217,90.087H15.783V60.783h68.434V90.087z M84.217,58.783H15.783V33.392h68.434V58.783z M84.217,31.392H15.783V6h68.434V31.392   z" />
            <polygon points="39.26,13.826 60.74,13.826 60.74,16.739 62.74,16.739 62.74,11.826 37.26,11.826 37.26,16.739 39.26,16.739  " />
            <polygon points="39.26,41.217 60.74,41.217 60.74,44.13 62.74,44.13 62.74,39.217 37.26,39.217 37.26,44.13 39.26,44.13  " />
            <polygon points="39.26,68.608 60.74,68.608 60.74,71.521 62.74,71.521 62.74,66.608 37.26,66.608 37.26,71.521 39.26,71.521  " />
          </g>
        </svg>
      </div>
    );
  }
}

export class BedPicture extends Component {
  render() {
    return (
      <div>
        <svg
          
          height="120px"
          id="BedPicture"
          version="1.1"
          viewBox="0 0 512 512"
          width="120px"     
          fill={color}     
        >
          <path
            d="M457.106,274.303c0.703-1.426,1.11-3.022,1.11-4.717V253.92c0-10.756-8.752-19.507-19.509-19.507  h-12.86v-87.491c0-15.948-12.974-28.922-28.922-28.922H115.878c-15.948,0-28.922,12.975-28.922,28.922v87.491H73.279  c-10.757,0-19.508,8.751-19.508,19.507v15.666c0,1.695,0.407,3.294,1.112,4.72C40.106,278.307,29.2,291.826,29.2,307.852v46.687  c0,8.568,6.97,15.539,15.539,15.539h32.245v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557  h314.527v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557h21.481  c8.569,0,15.539-6.971,15.539-15.539v-46.687C482.8,291.822,471.889,278.3,457.106,274.303z M94.156,146.922  c0-11.978,9.744-21.722,21.722-21.722h281.048c11.979,0,21.723,9.745,21.723,21.722v86.574h-42.646v-9.549  c0-5.765-4.689-10.455-10.455-10.455h-75.09c-5.765,0-10.455,4.69-10.455,10.455v9.549h-47.2v-9.549  c0-5.765-4.69-10.455-10.454-10.455h-75.091c-5.766,0-10.455,4.69-10.455,10.455v9.549H94.156V146.922z M368.803,223.947v9.549  h-81.601v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.09C367.342,220.692,368.803,222.153,368.803,223.947z M225.602,223.947v9.549  h-81.6v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.091C224.142,220.692,225.602,222.153,225.602,223.947z M60.972,253.92  c0-6.786,5.521-12.307,12.308-12.307h365.429c6.786,0,12.309,5.521,12.309,12.307v15.666c0,1.931-1.57,3.502-3.502,3.502H64.474  c-1.932,0-3.502-1.571-3.502-3.502V253.92z M96.918,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399  c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M438.579,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399  c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M475.6,354.538c0,4.599-3.74,8.339-8.339,8.339H44.739  c-4.599,0-8.339-3.74-8.339-8.339v-46.687c0-15.193,12.36-27.555,27.555-27.555h37.282h309.525h37.281  c15.195,0,27.556,12.361,27.556,27.555V354.538z"
            id="double_x5F_bed"
          />
        </svg>
      </div>
    );
  }
}

export class DrillPicture extends Component {
  render() {
    return (
      <div>
        <svg
          id="DrillPicture"
          viewBox="-2 -5 32 32"
          height="120px"
          width="120px"
          fill={color}
        >
          <title />
          <polygon
            fill="none"
            points="8.62 11.18 8.44 11.86 9.82 12.24 10.21 12.04 10.21 11.5 10.48 10.51 11.01 9.25 10.16 9.25 8.62 11.18"
          />
          <polygon
            fill="none"
            points="26.95 4.43 25.7 4.43 25.7 4.84 26.95 4.84 27.22 4.63 26.95 4.43"
          />
          <path
            d="M29.14,9.23h-1.4V8.5H27.07V8.21l-2-.32V6.5l-5.94-1v3H18.48V5.59L15.2,5.3v0H15l-0.23,0v0H4.43L2,6.24v7.29l2.39,1H5.55l-2.72,9.9L3.54,25.6,7.92,26.8l1-.64L10,22.08,9.68,20l0.68-2.46L11.91,18l0.79-.4V16.82l0.25-.9,0.59-1.41h1.22v0l0.23,0H15.2v0l3.28-.3v-2.9h0.68v3l5.94-1V11.89l2-.32V11.28h0.68V10.55h1.4L30,9.89Zm-18.88,7L9.22,20l0.36,2.07L9.32,23,7.38,21.64,7,19.71l1-3.57L9.3,14.5h2.33Zm2.26-.46-0.27,1V17.3l-0.38.19-1.39-.38,0.19-.68,1.54-1.93h0.85Zm2.23-1.71H9.08L7.62,15.93l-1,3.76L7,21.9l2.22,1.59-0.66,2.4-0.68.44-4-1.1-0.52-.87L6.14,14.06H4.52l-2-.82V6.55l2-.82H14.75v8.33ZM18,13.78L15.2,14V5.75L18,6v7.77Zm1.13-2.94H18.48V8.94h0.68v1.89Zm5.49,2.06-5,.82V6.06l5,0.82v6Zm2-1.71-1.52.25V8.34l1.52,0.25v2.6Zm0.68-.35H27.07V8.94H27.3v1.89ZM29,10.1H27.74V9.68H29l0.27,0.21Z"
            transform="translate(-2.04 -5.26)"
          />
          <rect height="1.89" width="0.23" x="25.03" y="3.69" />
          <rect height="1.89" width="0.68" x="16.44" y="3.69" />
          <polygon
            fill="none"
            points="23.06 6.18 24.58 5.93 24.58 3.33 23.06 3.09 23.06 6.18"
          />
          <polygon
            fill="none"
            points="17.57 8.46 22.61 7.64 22.61 1.63 17.57 0.81 17.57 8.46"
          />
          <path
            fill="none"
            d="M2.49,6.55v6.69l2,0.82H6.14L3.31,24.34l0.52,0.87,4,1.1,0.68-.44,0.66-2.4L7,21.9,6.59,19.69l1-3.76,1.45-1.87h5.67V5.72H4.52Zm7.65,5.15,0.37-.58h3.17l0.37,0.58v1l-0.37.58H10.51l-0.37-.58v-1ZM7,12.51l-0.35.22H4.07l-0.35-.22V12l0.35-.22H6.62L7,12v0.46Zm0-1-0.35.22H4.07l-0.35-.22V11.06l0.35-.22H6.62L7,11.06v0.47Zm0-1-0.35.22H4.07l-0.35-.22V10.08l0.35-.22H6.62L7,10.08v0.46Zm0-1-0.35.22H4.07L3.72,9.53V9.06l0.35-.22H6.62L7,9.06V9.53Zm0-1-0.35.22H4.07L3.72,8.55V8.08l0.35-.22H6.62L7,8.08V8.55ZM7,7.1V7.57l-0.35.22H4.07L3.72,7.57V7.1l0.35-.22H6.62Z"
            transform="translate(-2.04 -5.26)"
          />
          <polygon
            fill="none"
            points="7.26 9.25 5.99 10.88 5.01 14.45 5.34 16.38 7.28 17.77 7.54 16.8 7.18 14.73 8.22 10.97 9.59 9.25 7.26 9.25"
          />
          <polygon
            fill="none"
            points="13.16 8.78 15.99 8.52 15.99 0.75 13.16 0.49 13.16 8.78"
          />
          <polygon
            fill="none"
            points="11.48 7.75 11.71 7.38 11.71 6.53 11.48 6.16 8.63 6.16 8.4 6.53 8.4 7.38 8.63 7.75 11.48 7.75"
          />
          <path
            d="M13.68,13.3l0.37-.58v-1l-0.37-.58H10.51l-0.37.58v1l0.37,0.58h3.17Zm-3.25-1.52,0.23-.37h2.85l0.23,0.37v0.85L13.52,13H10.67l-0.23-.37V11.79Z"
            transform="translate(-2.04 -5.26)"
          />
          <polygon
            fill="none"
            points="1.98 2.14 2.12 2.23 4.49 2.23 4.63 2.14 4.63 2.01 4.49 1.93 2.12 1.93 1.98 2.01 1.98 2.14"
          />
          <path
            d="M3.72,7.1V7.57L4.07,7.78H6.62L7,7.57V7.1L6.62,6.89H4.07ZM6.53,7.18L6.67,7.27V7.4l-0.14.08H4.16L4,7.4V7.27l0.14-.08H6.53Z"
            transform="translate(-2.04 -5.26)"
          />
          <polygon
            fill="none"
            points="2.12 2.91 1.98 3 1.98 3.12 2.12 3.21 4.49 3.21 4.63 3.12 4.63 3 4.49 2.91 2.12 2.91"
          />
          <path
            d="M4.07,7.87l-0.35.22V8.55L4.07,8.76H6.62L7,8.55V8.08L6.62,7.87H4.07Zm2.6,0.51-0.14.08H4.16L4,8.38V8.25l0.14-.08H6.53L6.67,8.25V8.38Z"
            transform="translate(-2.04 -5.26)"
          />
          <polygon
            fill="none"
            points="2.12 3.89 1.98 3.98 1.98 4.11 2.12 4.19 4.49 4.19 4.63 4.11 4.63 3.98 4.49 3.89 2.12 3.89"
          />
          <path
            d="M4.07,8.85l-0.35.22V9.53L4.07,9.74H6.62L7,9.53V9.06L6.62,8.85H4.07Zm2.6,0.51-0.14.08H4.16L4,9.36V9.23l0.14-.08H6.53L6.67,9.23V9.36Z"
            transform="translate(-2.04 -5.26)"
          />
          <polygon
            fill="none"
            points="2.12 4.91 1.98 5 1.98 5.13 2.12 5.21 4.49 5.21 4.63 5.13 4.63 5 4.49 4.91 2.12 4.91"
          />
          <path
            d="M4.07,9.87l-0.35.22v0.46l0.35,0.22H6.62L7,10.55V10.08L6.62,9.87H4.07Zm2.6,0.51-0.14.08H4.16L4,10.38V10.25l0.14-.08H6.53l0.14,0.08v0.13Z"
            transform="translate(-2.04 -5.26)"
          />
          <polygon
            fill="none"
            points="2.12 5.89 1.98 5.98 1.98 6.11 2.12 6.19 4.49 6.19 4.63 6.11 4.63 5.98 4.49 5.89 2.12 5.89"
          />
          <path
            d="M4.07,10.85l-0.35.22v0.47l0.35,0.22H6.62L7,11.53V11.06l-0.35-.22H4.07Zm2.6,0.51-0.14.08H4.16L4,11.36V11.23l0.14-.08H6.53l0.14,0.08v0.13Z"
            transform="translate(-2.04 -5.26)"
          />
          <polygon
            fill="none"
            points="2.12 6.87 1.98 6.96 1.98 7.09 2.12 7.17 4.49 7.17 4.63 7.09 4.63 6.96 4.49 6.87 2.12 6.87"
          />
          <path
            d="M4.07,11.83L3.72,12v0.46l0.35,0.22H6.62L7,12.51V12l-0.35-.22H4.07Zm2.6,0.51-0.14.08H4.16L4,12.34V12.21l0.14-.08H6.53l0.14,0.08v0.13Z"
            transform="translate(-2.04 -5.26)"
          />
        </svg>
      </div>
    );
  }
}

export class TVImage extends Component {
  render() {
    return (
      <div>
        <svg
          enableBackground="new 0 0 48 48"
          id="TVImage"
          version="1.1"
          viewBox="0 0 48 48"
          width="70px"
          height="70px"
          fill={color}
          stroke={color}
          strokeWidth="0.3"
        >
          <path d="M41.5,1.298h-35c-2.48,0-4.5,2.019-4.5,4.5v19.708c0,2.48,2.02,4.5,4.5,4.5h35c2.482,0,4.5-2.02,4.5-4.5V5.798  C46,3.317,43.982,1.298,41.5,1.298z M45,25.506c0,1.93-1.57,3.5-3.5,3.5h-35c-1.93,0-3.5-1.57-3.5-3.5V5.798  c0-1.93,1.57-3.5,3.5-3.5h35c1.93,0,3.5,1.57,3.5,3.5V25.506z" />
          <path d="M30.998,46.701c0.826,0,1.5-0.674,1.5-1.5V32.805c0-0.828-0.674-1.5-1.5-1.5h-4.305c-0.828,0-1.5,0.672-1.5,1.5v12.396  c0,0.826,0.672,1.5,1.5,1.5H30.998z M26.193,45.201V32.805c0-0.277,0.225-0.5,0.5-0.5h4.305c0.275,0,0.5,0.223,0.5,0.5v12.396  c0,0.275-0.225,0.5-0.5,0.5h-4.305C26.418,45.701,26.193,45.477,26.193,45.201z" />
          <path d="M28.846,36.174c0.947,0,1.717-0.771,1.717-1.719c0-0.945-0.77-1.717-1.717-1.717s-1.717,0.771-1.717,1.717  C27.129,35.402,27.898,36.174,28.846,36.174z M28.846,33.738c0.396,0,0.717,0.322,0.717,0.717c0,0.396-0.321,0.719-0.717,0.719  s-0.717-0.322-0.717-0.719C28.129,34.061,28.449,33.738,28.846,33.738z" />
          <path d="M28.846,37.527c-0.813,0-1.475,0.662-1.475,1.475s0.662,1.475,1.475,1.475c0.813,0,1.473-0.662,1.473-1.475  S29.658,37.527,28.846,37.527z M28.846,39.475c-0.262,0-0.475-0.211-0.475-0.475c0-0.262,0.213-0.473,0.475-0.473  c0.26,0,0.473,0.211,0.473,0.473C29.318,39.264,29.105,39.475,28.846,39.475z" />
          <path d="M28.846,42.074c-0.813,0-1.475,0.662-1.475,1.475s0.662,1.475,1.475,1.475c0.813,0,1.473-0.662,1.473-1.475  S29.658,42.074,28.846,42.074z M28.846,44.021c-0.262,0-0.475-0.211-0.475-0.473c0-0.264,0.213-0.475,0.475-0.475  c0.26,0,0.473,0.211,0.473,0.475C29.318,43.811,29.105,44.021,28.846,44.021z" />
          <path d="M41.5,4.034h-35c-0.973,0-1.764,0.792-1.764,1.765v19.708c0,0.973,0.791,1.764,1.764,1.764h35  c0.973,0,1.766-0.791,1.766-1.764V5.798C43.266,4.825,42.473,4.034,41.5,4.034z M42.266,25.506c0,0.422-0.344,0.766-0.766,0.766h-35  c-0.422,0-0.764-0.344-0.764-0.766V5.798c0-0.421,0.342-0.765,0.764-0.765h35c0.422,0,0.766,0.343,0.766,0.765V25.506z" />
          <path d="M30.998,31.305h-4.305c-0.828,0-1.5,0.672-1.5,1.5v12.396c0,0.826,0.672,1.5,1.5,1.5h4.305c0.826,0,1.5-0.674,1.5-1.5  V32.805C32.498,31.977,31.824,31.305,30.998,31.305z M31.498,45.201c0,0.275-0.225,0.5-0.5,0.5h-4.305c-0.275,0-0.5-0.225-0.5-0.5  V32.805c0-0.275,0.225-0.5,0.5-0.5h4.305c0.275,0,0.5,0.225,0.5,0.5V45.201z" />
        </svg>
      </div>
    );
  }
}

export class CurtainsImage extends Component {
  render() {
    return (
      <div>
        <svg
          id="CurtainsImage"
          version="1.1"
          viewBox="0 0 64 64"
          width="70px"
          height="70px"
          fill={color}
        >
          <g>
            <path d="M1,1v1v61h1c0.617,0,1.215-0.32,1.972-0.727C5.031,61.706,6.349,61,8,61c1.059,0,1.844,0.3,2.839,0.68   C12.382,62.268,14.301,63,18,63h1v-1c0-6.07-2.364-11.778-6.657-16.071L12,45.586v-3.028c8.646-5.181,14-14.576,14-24.681v-2.663   c2.714-1.855,4.835-4.516,6-7.643c1.165,3.127,3.286,5.788,6,7.643v2.663c0,10.106,5.354,19.5,14,24.681v3.028l-0.343,0.343   C47.364,50.222,45,55.93,45,62v1h1c3.699,0,5.618-0.732,7.161-1.32C54.156,61.3,54.941,61,56,61c1.651,0,2.969,0.706,4.028,1.273   C60.785,62.68,61.383,63,62,63h1V2V1H1z M14.981,17.858C14.79,26.27,11.807,34.445,6.519,41H3V9.729   C5.42,14.094,9.821,17.204,14.981,17.858z M3,45v-2h7v2H3z M3.028,60.511C3.019,60.516,3.009,60.521,3,60.525V47h2.485l0.632,0.885   c2.398,3.358,3.713,7.281,3.855,11.386C9.378,59.109,8.744,59,8,59C5.847,59,4.15,59.909,3.028,60.511z M16.976,60.979   c-2.363-0.101-3.777-0.552-4.976-0.999c-0.004-4.67-1.416-9.147-4.072-12.979h2.659l0.343,0.343   C14.603,51.017,16.727,55.825,16.976,60.979z M24,17.876C24,27.38,18.914,36.212,10.718,41H9.05   c4.939-6.646,7.72-14.713,7.928-23.001C16.986,17.999,16.993,18,17,18c2.51,0,4.884-0.586,7-1.62V17.876z M17,16   C9.617,16,3.55,10.255,3.035,3h3.014c0.176,1.959,0.863,3.818,2.023,5.427l1.622-1.17C8.783,5.993,8.247,4.534,8.077,3h3.013   c0.478,2.833,2.942,5,5.91,5c1.002,0,1.995-0.253,2.871-0.73l-0.958-1.756C18.33,5.832,17.668,6,17,6c-1.858,0-3.411-1.279-3.858-3   h7.72c-0.129,0.501-0.344,0.977-0.661,1.399l1.6,1.201C22.382,4.825,22.758,3.939,22.915,3h3.026c-0.5,4.493-4.317,8-8.941,8   c-2.271,0-4.439-0.848-6.106-2.388l-1.357,1.469C11.575,11.964,14.225,13,17,13c5.728,0,10.442-4.402,10.949-10h3.016   C30.45,10.255,24.383,16,17,16z M33.035,3h3.014c0.072,0.798,0.226,1.585,0.469,2.347l1.905-0.607   C38.244,4.175,38.142,3.59,38.077,3h3.014c0.478,2.833,2.942,5,5.91,5V6c-1.858,0-3.411-1.279-3.858-3h7.723   c-0.302,1.164-1.112,2.155-2.242,2.657l0.812,1.828C51.29,6.661,52.576,4.96,52.908,3h3.022c-0.148,1.329-0.576,2.611-1.285,3.75   l1.698,1.057C57.25,6.351,57.776,4.704,57.931,3h3.034C60.45,10.255,54.383,16,47,16S33.55,10.255,33.035,3z M40,17.876V16.38   c2.116,1.034,4.49,1.62,7,1.62c0.007,0,0.014-0.001,0.022-0.001C47.23,26.287,50.01,34.354,54.949,41h-1.667   C45.086,36.212,40,27.38,40,17.876z M54,45v-2h7v2H54z M53.071,47.343L53.414,47h2.659c-2.656,3.832-4.068,8.309-4.072,12.979   c-1.2,0.448-2.613,0.898-4.976,0.999C47.273,55.825,49.397,51.017,53.071,47.343z M60.972,60.511C59.85,59.909,58.153,59,56,59   c-0.744,0-1.378,0.109-1.972,0.271c0.141-4.105,1.457-8.028,3.855-11.386L58.515,47H61v13.525   C60.991,60.521,60.981,60.516,60.972,60.511z M61,41h-3.519c-5.288-6.555-8.271-14.73-8.462-23.142   c5.16-0.654,9.562-3.764,11.981-8.13V41z" />
            <path d="M55.074,9.471l-1.468-1.359C51.908,9.947,49.5,11,47,11c-3.22,0-6.215-1.737-7.816-4.535l-1.735,0.994   C39.405,10.877,43.065,13,47,13C50.055,13,52.998,11.714,55.074,9.471z" />
          </g>
        </svg>
      </div>
    );
  }
}

export class PictureImage extends Component {
  render() {
    return (
      <div>
        <svg
          id="PictureImage"
          enableBackground="new 0 0 48 48"
          height="70px"
          version="1.1"
          viewBox="0 0 48 48"
          width="70px"
          fill={color}
        >
          <g id="Expanded">
            <g>
              <g>
                <path d="M14.707,12.707l-1.414-1.414l11-11C24.48,0.105,24.735,0,25,0c0.001,0,0.002,0,0.003,0     c0.266,0.001,0.521,0.107,0.708,0.297l10.875,11l-1.422,1.406L24.996,2.418L14.707,12.707z" />
              </g>
              <g>
                <path d="M48,48H0V11h48V48z M2,46h44V13H2V46z" />
              </g>
              <g>
                <path d="M44,44H4V15h40V44z M6,42h36V17H6V42z" />
              </g>
              <g>
                <path d="M27.232,43.64c-0.335-0.402-6.723-8.15-9.232-17c-2.509,8.851-8.896,16.598-9.232,17l-1.537-1.28     C7.329,42.243,17,30.503,17,20c0-0.552,0.448-1,1-1s1,0.448,1,1c0,10.516,9.67,22.243,9.768,22.36L27.232,43.64z" />
              </g>
              <g>
                <rect height="2" width="10" x="13" y="35" />
              </g>
              <g>
                <path d="M38,43h-2v-6h-2v6h-2v-7c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V43z" />
              </g>
              <g>
                <path d="M38,36h-2v-6c0-0.552,0.448-1,1-1h6v2h-5V36z" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
