export const XLogo = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={width}
    height={height}
    aria-hidden="true"
    className={fill}
  >
    <g>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </g>
  </svg>
);

export const HomeIcon = ({ fill }: { fill: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    color="white"
    aria-hidden="true"
    className={fill}
  >
    <g>
      <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"></path>
    </g>
  </svg>
);

export const ActiveHomeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    color="white"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path>
    </g>
  </svg>
);

export const ActiveSearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    color="white"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"></path>
    </g>
  </svg>
);

export const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
    </g>
  </svg>
);

export const NotificationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
    </g>
  </svg>
);
export const ActiveNotificationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"></path>
    </g>
  </svg>
);

export const MessageIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
    </g>
  </svg>
);
export const ActiveMessageIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"></path>
    </g>
  </svg>
);

export const GrokIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 33 32"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    className={`${fill}`}
  >
    <g>
      <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544M10.48 22.531c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path>
    </g>
  </svg>
);
export const GrokIconSidebar = ({
  width,
  height,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 33 32"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544M10.48 22.531c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path>
    </g>
  </svg>
);

export const ActiveGrokIcon = () => (
  <svg
    viewBox="0 0 42 42"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path
        clipRule="evenodd"
        d="M8 0C3.582 0 0 3.582 0 8v26c0 4.418 3.582 8 8 8h26c4.418 0 8-3.582 8-8V8c0-4.418-3.582-8-8-8H8zm19.997 17.35l-11.1 8.19 15.9-15.963v.015L37.391 5c-.082.117-.165.23-.248.345-3.49 4.804-5.194 7.153-3.826 13.03l-.009-.008c.943 4.001-.065 8.438-3.322 11.693-4.106 4.107-10.677 5.02-16.087 1.324l3.772-1.745c3.454 1.355 7.232.76 9.947-1.954 2.716-2.714 3.325-6.666 1.96-9.956-.259-.623-1.037-.78-1.58-.378zm-13.292-2.574c-3.314 3.31-3.983 9.047-.1 12.755l-.003.003L4 37c.663-.913 1.485-1.776 2.306-2.639l.04-.042c2.346-2.464 4.67-4.906 3.25-8.357-1.903-4.622-.795-10.038 2.73-13.56 3.664-3.66 9.06-4.583 13.568-2.729.998.37 1.867.897 2.545 1.387l-3.764 1.737c-3.505-1.47-7.52-.47-9.97 1.98z"
      ></path>
    </g>
  </svg>
);

export const BookmarkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
    </g>
  </svg>
);

export const ActiveBookmarkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"></path>
    </g>
  </svg>
);

export const JobsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zm11 14c0 .28-.22.5-.5.5h-15c-.27 0-.5-.22-.5-.5v-3.04c.59.35 1.27.54 2 .54h5v1h2v-1h5c.73 0 1.41-.19 2-.54v3.04zm0-6.49c0 1.1-.9 1.99-2 1.99h-5v-1h-2v1H6c-1.1 0-2-.9-2-2V8.5c0-.28.23-.5.5-.5h15c.28 0 .5.22.5.5v3.51z"></path>
    </g>
  </svg>
);

export const CommunitiesIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>
    </g>
  </svg>
);

export const ActiveCommunitiesIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-1.608 1.732-2.762 4.389-2.869 8.248l-.03 1.083zM9.616 9.27C10.452 8.63 11 7.632 11 6.5 11 4.57 9.433 3 7.5 3S4 4.57 4 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73zm6.884 1.726c-3.264 0-6.816 2.358-7 8.977L9.471 21h14.057l-.029-1.027c-.184-6.618-3.736-8.977-7-8.977zm2.116-1.726C19.452 8.63 20 7.632 20 6.5 20 4.57 18.433 3 16.5 3S13 4.57 13 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73z"></path>
    </g>
  </svg>
);

export const PremiumIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M8.52 3.59c.8-1.1 2.04-1.84 3.48-1.84s2.68.74 3.49 1.84c1.34-.21 2.74.14 3.76 1.16s1.37 2.42 1.16 3.77c1.1.8 1.84 2.04 1.84 3.48s-.74 2.68-1.84 3.48c.21 1.34-.14 2.75-1.16 3.77s-2.42 1.37-3.76 1.16c-.8 1.1-2.05 1.84-3.49 1.84s-2.68-.74-3.48-1.84c-1.34.21-2.75-.14-3.77-1.16-1.01-1.02-1.37-2.42-1.16-3.77-1.09-.8-1.84-2.04-1.84-3.48s.75-2.68 1.84-3.48c-.21-1.35.14-2.75 1.16-3.77s2.43-1.37 3.77-1.16zm3.48.16c-.85 0-1.66.53-2.12 1.43l-.38.77-.82-.27c-.96-.32-1.91-.12-2.51.49-.6.6-.8 1.54-.49 2.51l.27.81-.77.39c-.9.46-1.43 1.27-1.43 2.12s.53 1.66 1.43 2.12l.77.39-.27.81c-.31.97-.11 1.91.49 2.51.6.61 1.55.81 2.51.49l.82-.27.38.77c.46.9 1.27 1.43 2.12 1.43s1.66-.53 2.12-1.43l.39-.77.82.27c.96.32 1.9.12 2.51-.49.6-.6.8-1.55.48-2.51l-.26-.81.76-.39c.91-.46 1.43-1.27 1.43-2.12s-.52-1.66-1.43-2.12l-.77-.39.27-.81c.32-.97.12-1.91-.48-2.51-.61-.61-1.55-.81-2.51-.49l-.82.27-.39-.77c-.46-.9-1.27-1.43-2.12-1.43zm4.74 5.68l-6.2 6.77-3.74-3.74 1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36z"></path>
    </g>
  </svg>
);

export const ActivePremiumIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
    </g>
  </svg>
);

export const VerifiedOrgIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"></path>
    </g>
  </svg>
);

export const ProfileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
    </g>
  </svg>
);

export const ActiveProfileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    fill="fill-black dark:fill-white"
  >
    <g>
      <path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>
    </g>
  </svg>
);

export const MoreIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    className="fill-black dark:fill-white"
  >
    <g>
      <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
    </g>
  </svg>
);

export const PostIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    aria-hidden="true"
    fill="rgb(15, 20, 25)"
    className={`${className}`}
  >
    <g>
      <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
    </g>
  </svg>
);
export const MediaIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    aria-hidden="true"
    fill="rgb(29, 155, 240)"
  >
    <g>
      <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
    </g>
  </svg>
);

export const GifIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    aria-hidden="true"
    fill="rgb(29, 155, 240)"
  >
    <g>
      <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
    </g>
  </svg>
);

export const PollIcon = ({
  width,
  height,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    fill="rgb(29, 155, 240)"
  >
    <g>
      <path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path>
    </g>
  </svg>
);

export const EmojiIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    fill={`${fill}`}
  >
    <g>
      <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
    </g>
  </svg>
);
export const ScheduleIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    fill={`${fill}`}
  >
    <g>
      <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path>
    </g>
  </svg>
);

export const LocationIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    fill={`${fill}`}
  >
    <g>
      <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>{" "}
    </g>
  </svg>
);

export const ReplyIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    fill={`${fill}`}
  >
    <g>
      <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
    </g>
  </svg>
);

export const RepostIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    fill={`${fill}`}
  >
    <g>
      <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
    </g>
  </svg>
);

export const LikeIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    fill={`${fill}`}
  >
    <g>
      <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>{" "}
    </g>
  </svg>
);
export const ViewIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    fill={`${fill}`}
  >
    <g>
      <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>{" "}
    </g>
  </svg>
);

export const BookMarkIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    fill={`${fill}`}
  >
    <g>
      <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>{" "}
    </g>
  </svg>
);

export const ShareIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    fill={`${fill}`}
  >
    <g>
      <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>{" "}
    </g>
  </svg>
);

export const CloseIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    fill={`${fill}`}
  >
    <g>
      <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
    </g>
  </svg>
);

export const NewMessageIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    className={`${fill}`}
  >
    <g>
      <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path>
    </g>
  </svg>
);

export const ExpandIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    className={`${fill}`}
  >
    <g>
      <path d="M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z"></path>
    </g>
  </svg>
);

export const OpenConversationIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    className={`${fill}`}
  >
    <g>
      <path d="M3 3h8v2H6.414l5.543 5.54-1.414 1.42L5 6.41V11H3V3zm16.5 5H14V6h5.5C20.881 6 22 7.12 22 8.5v11c0 1.38-1.119 2.5-2.5 2.5h-11C7.119 22 6 20.88 6 19.5V14h2v5.5c0 .28.224.5.5.5h11c.276 0 .5-.22.5-.5v-11c0-.28-.224-.5-.5-.5z"></path>
    </g>
  </svg>
);

export const CollapseIcon = ({
  width,
  height,
  fill,
}: {
  width: string;
  height: string;
  fill: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={`${width}`}
    height={`${height}`}
    aria-hidden="true"
    className={`${fill}`}
  >
    <g>
      <path d="M12 11.59L3.96 3.54 2.54 4.96 12 14.41l9.46-9.45-1.42-1.42L12 11.59zm0 7l-8.04-8.05-1.42 1.42L12 21.41l9.46-9.45-1.42-1.42L12 18.59z"></path>
    </g>
  </svg>
);
