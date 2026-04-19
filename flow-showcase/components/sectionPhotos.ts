/** `public/photos/` 아래에 동일 파일명으로 이미지를 넣으면 각 섹션에 표시됩니다. */
export const SECTION_PHOTOS = {
  paradox: {
    src: "/photos/01-paradox.jpg",
    alt: "여행을 앞둔 순간, 짐과 준비의 무게",
  },
  pauses: {
    src: "/photos/02-pauses.jpg",
    alt: "이동을 방해하는 환경과 병목",
  },
  flow: {
    src: "/photos/03-flow.jpg",
    alt: "흐름을 이어 주는 구조와 이동",
  },
  outro: {
    src: "/photos/04-outro.jpg",
    alt: "끊김 없는 여정의 즐거움",
  },
} as const;
