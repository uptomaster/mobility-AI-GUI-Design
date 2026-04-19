"use client";

import { motion } from "framer-motion";
import { SectionFrame } from "./SectionFrame";
import { SECTION_PHOTOS } from "./sectionPhotos";

const spring = {
  type: "spring" as const,
  stiffness: 52,
  damping: 22,
  mass: 0.9,
};

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12% 0px" },
  transition: spring,
};

const sectionGrid =
  "grid min-h-screen grid-cols-1 items-center gap-12 py-20 md:gap-14 md:py-24 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-x-16";

export function JourneyExperience() {
  return (
    <div className="relative bg-[var(--warm-beige)]">
      <div className="relative z-10 mx-auto max-w-[1580px] px-[8%] pb-28">
        <section
          className={`${sectionGrid} items-start pt-24 md:pt-[180px] lg:items-center`}
        >
          <div className="min-w-0 lg:pt-4">
            <motion.span
              className="mb-3 block text-sm font-bold tracking-[0.08em] text-[var(--warm-peach)]"
              {...fadeUp}
            >
              The Paradox of Travel
            </motion.span>
            <motion.h1
              className="mb-6 max-w-[22ch] text-[clamp(2.25rem,4.5vw,4rem)] font-black leading-[1.12] text-[var(--text-dark)]"
              {...fadeUp}
              transition={{ ...spring, delay: 0.05 }}
            >
              즐거워야 할 여행이
              <br />
              <span className="text-[var(--warm-peach)]">
                ‘짐’과 ‘준비’ 앞에서 멈춰 선다
              </span>
            </motion.h1>
            <motion.p
              className="max-w-[520px] text-lg leading-relaxed text-[var(--text-sub)]"
              {...fadeUp}
              transition={{ ...spring, delay: 0.1 }}
            >
              이동을 편하게가 아닌,{" "}
              <strong className="font-semibold text-[var(--text-dark)]">
                즐거운 여행을 더 즐겁게
              </strong>
              . 크고 작은 Pause를 Flow로 바꿀 때, 여행자의 서사는 다시
              이어집니다.
            </motion.p>
          </div>
          <SectionFrame
            {...SECTION_PHOTOS.paradox}
            priority
            aspectClass="aspect-[3/4]"
          />
        </section>

        <section className={sectionGrid}>
          <motion.div
            className="rounded-[28px] border border-white/45 bg-white/65 p-9 shadow-[0_10px_40px_rgba(0,0,0,0.045)] backdrop-blur-[32px] md:p-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={spring}
          >
            <span className="mb-3 block text-sm font-bold tracking-[0.08em] text-[var(--warm-peach)]">
              Defining the Pauses
            </span>
            <h2 className="mb-8 flex items-center text-2xl font-bold text-[var(--text-dark)] md:text-[1.75rem]">
              <span
                className="mr-3 inline-block h-6 w-1 rounded-sm bg-[var(--warm-peach)]"
                aria-hidden
              />
              병목이 흐름을 끊는 순간
            </h2>
            <ul className="space-y-8">
              <li>
                <strong className="mb-2 block text-[1.05rem] text-[var(--accent-orange)]">
                  짧은 여행 · 선택의 Pause
                </strong>
                <p className="m-0 leading-[1.75] text-[var(--text-sub)]">
                  “무슨 가방을 들지?” 준비 단계의 망설임이 출발 전부터 속도를
                  떨어뜨립니다.
                </p>
              </li>
              <li>
                <strong className="mb-2 block text-[1.05rem] text-[var(--accent-orange)]">
                  긴 여행 · 물리의 Pause
                </strong>
                <p className="m-0 leading-[1.75] text-[var(--text-sub)]">
                  “짐이 너무 무거워.” 부피와 무게가 발걸음을 잡아 끕니다.
                </p>
              </li>
              <li>
                <strong className="mb-2 block text-[1.05rem] text-[var(--accent-orange)]">
                  이동 중 · 환경의 Pause
                </strong>
                <p className="m-0 leading-[1.75] text-[var(--text-sub)]">
                  계단과 거친 길, 예측 불가한 노면이 리듬을 깨뜨립니다.
                </p>
              </li>
            </ul>
          </motion.div>
          <SectionFrame
            {...SECTION_PHOTOS.pauses}
            aspectClass="aspect-[4/5]"
          />
        </section>

        <section className={sectionGrid}>
          <motion.div
            className="rounded-[28px] border border-white/45 bg-white/65 p-9 shadow-[0_10px_40px_rgba(0,0,0,0.045)] backdrop-blur-[32px] md:p-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            <span className="mb-3 block text-sm font-bold tracking-[0.08em] text-[var(--warm-peach)]">
              The Solution: Seamless Flow
            </span>
            <h2 className="mb-8 flex items-center text-2xl font-bold text-[var(--text-dark)] md:text-[1.75rem]">
              <span
                className="mr-3 inline-block h-6 w-1 rounded-sm bg-[var(--warm-peach)]"
                aria-hidden
              />
              오리가미와 바퀴가 연결하는 흐름
            </h2>
            <ul className="space-y-8">
              <li>
                <strong className="mb-2 block text-[1.05rem] text-[var(--accent-orange)]">
                  Origami Adaptation
                </strong>
                <p className="m-0 leading-[1.75] text-[var(--text-sub)]">
                  가변 레이어가 여정 길이에 맞춰 부피를 정리합니다. 스크롤에
                  따라 펼쳐지듯 부드럽게 확장·축소되는 구조로, 병목을
                  통과합니다.
                </p>
              </li>
              <li>
                <strong className="mb-2 block text-[1.05rem] text-[var(--accent-orange)]">
                  Wheel · 이동과 정지의 전환
                </strong>
                <p className="m-0 leading-[1.75] text-[var(--text-sub)]">
                  바퀴 메커니즘이 이동 모드와 정지(의자) 모드 사이를 유연하게
                  오가며, 쉼 없는 흐름을 이어 줍니다.
                </p>
              </li>
            </ul>
          </motion.div>
          <SectionFrame {...SECTION_PHOTOS.flow} aspectClass="aspect-[16/10]" />
        </section>

        <section className={sectionGrid}>
          <div>
            <motion.span
              className="mb-3 block text-sm font-bold tracking-[0.08em] text-[var(--warm-peach)]"
              {...fadeUp}
            >
              Uninterrupted Journey
            </motion.span>
            <motion.h2
              className="mb-6 max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)] font-black leading-[1.15] text-[var(--text-dark)]"
              {...fadeUp}
              transition={{ ...spring, delay: 0.05 }}
            >
              병목이 사라진 자리,
              <br />
              <span className="text-[var(--warm-peach)]">즐거움에만 몰입</span>
            </motion.h2>
            <motion.p
              className="mb-10 max-w-[520px] text-lg leading-relaxed text-[var(--text-sub)]"
              {...fadeUp}
              transition={{ ...spring, delay: 0.1 }}
            >
              Flow Unit는 멈춤을 줄이고 여정의 밀도를 높입니다. 이제 남는 것은
              장면과 사람, 그리고 리듬입니다.
            </motion.p>
            <motion.button
              type="button"
              className="w-fit rounded-[14px] bg-[var(--warm-peach)] px-10 py-4 text-[1.05rem] font-bold text-white shadow-[0_8px_24px_rgba(255,140,105,0.35)] transition hover:brightness-[1.03]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={spring}
            >
              프로젝트 상세
            </motion.button>
          </div>
          <SectionFrame {...SECTION_PHOTOS.outro} aspectClass="aspect-[3/4]" />
        </section>
      </div>
    </div>
  );
}
