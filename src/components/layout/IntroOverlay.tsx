'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

// KK monogram — three blade paths (from /public/images/logo.svg), inlined so each
// outline can draw itself in lime before inking to warm-white.
const LOGO_PATHS = [
  'M460.952,340.581C460.394,343.962 451.999,387.498 451.121,392.434C450.708,394.752 450.694,394.73 448.411,406.483C445.471,421.614 440.794,446.918 440.144,450.436C434.866,478.992 434.595,478.916 429.359,507.474C429.277,507.925 423.899,536.079 422.551,543.51C421.882,547.199 421.655,547.152 413.802,589.555C413.3,592.269 407.984,620.974 407.287,623.44C406.608,625.841 405.974,625.466 385.563,642.577C382.288,645.322 363.46,661.107 343.829,675.921C343.101,676.47 343.216,676.607 334.844,682.94C334.096,683.505 324.158,691.419 323.23,692.158C311.79,701.267 311.696,701.108 300.252,710.184C299.998,710.385 283.905,722.834 282.715,723.961C279.321,727.174 280.647,722.726 280.703,722.537C282.405,716.828 312.59,589.157 313.294,586.451C314.515,581.756 314.347,581.719 327.262,527.447C346.741,445.59 346.597,445.565 348.336,438.459C349.263,434.668 354.253,413.618 354.267,413.477C354.444,411.783 352.687,411.8 352.492,411.802C351.97,411.807 334.695,412.913 326.506,413.589C320.637,414.073 301.703,414.882 293.508,416.095C292.768,416.204 292.67,416.405 292.159,415.863C291.23,414.879 291.629,414.573 292.806,413.893C299.416,410.073 299.238,409.833 305.585,405.627C309.403,403.097 320.234,395.614 327.207,391.064C328.383,390.296 331.444,388.046 342.173,381.014C343.75,379.98 343.674,379.871 361.739,367.868C368.405,363.439 379.073,356.603 380.587,355.633C383.255,353.923 403.302,340.777 406.604,338.659C411.092,335.781 439.887,316.939 449.203,311.042C450.365,310.306 450.266,310.195 463.597,301.65C465.622,300.352 467.103,299.139 467.469,299.102C468.718,298.977 468.965,299.247 468.791,300.486C468.576,302.015 468.121,301.907 465.045,319.417C463.527,328.057 461.299,338.892 460.952,340.581Z',
  'M461.998,723.475C463.586,717.936 463.208,717.863 466.136,697.446C467.995,684.484 482.066,582.698 482.108,582.441C483.272,575.277 483.748,568.028 485.363,560.497C485.778,558.562 484.74,557.812 483.366,559.237C479.865,562.866 471.741,569.969 467.696,573.714C464.299,576.859 464.265,576.792 460.85,579.888C460.013,580.647 453.199,586.825 450.436,589.429C447.684,592.022 447.819,592.92 446.584,592.282C445.729,591.84 446.319,589.697 446.379,589.48C447.506,585.393 453.123,556.78 456.337,542.463C459.702,527.472 468.258,488.04 472.617,468.526C476.757,449.99 476.511,449.879 477.419,448.433C477.597,448.15 477.816,447.802 480.79,445.954C495.211,436.991 679.561,319.507 689.407,313.354C689.997,312.986 705.178,303.364 705.343,303.254C710.656,299.702 710.513,299.263 711.555,299.313C711.665,299.318 712.754,299.37 712.31,300.462C712.034,301.14 711.525,301.697 711.114,302.302C708.694,305.854 708.901,305.953 707.041,309.245C705.577,311.836 695.112,330.362 688.886,341.714C678.979,359.774 678.784,359.647 668.901,377.723C653.675,405.571 648.921,413.542 647.313,416.393C640.697,428.122 640.511,428 633.877,439.717C620.262,463.765 620.119,463.66 618.938,465.751C594.025,509.843 593.527,509.534 590.968,513.788C587.023,520.344 586.917,520.256 582.974,526.791C574.725,540.467 573.502,542.083 571.898,544.745C565.517,555.338 565.318,555.191 558.946,565.773C538.993,598.905 509.581,645.333 490.347,678.409C481.464,693.684 466.064,718.871 464.57,722.555C464.152,723.586 463.947,723.457 463.481,724.469C463.396,724.653 463.381,725.04 463.182,725C462.891,724.941 462.924,724.356 462.633,724.297C462.421,724.023 462.21,723.749 461.998,723.475Z',
  'M742.274,726.004C740.889,726.011 740.907,726 739.517,725.887C738.516,725.805 738.535,725.847 668.5,725.873C625.822,725.889 625.758,725.996 624.516,725.468C623.561,725.062 623.201,724.49 592.284,692.71C544.704,643.802 544.196,643.977 544.071,642.554C543.964,641.342 544.346,641.418 554.412,626.439C554.735,625.958 576.369,594.442 582.134,586.25C582.402,585.869 582.39,585.866 585.414,581.434C587.447,578.454 589.129,581.601 592.956,585.014C595.112,586.936 595.707,587.467 619.381,609.628C624.786,614.687 641.777,630.439 646.295,634.718C651.326,639.481 726.926,709.973 736.276,718.74C738.869,721.171 738.778,721.25 741.541,723.464C743.308,724.88 742.233,725.521 742.274,726.004Z',
]

// First-load brand loader: the monogram draws itself in lime, inks to white, then
// the curtain lifts once the page is actually loaded. Plays once per session.
export function IntroOverlay() {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem('kk-intro-seen')) {
      setShow(false)
      return
    }
    sessionStorage.setItem('kk-intro-seen', '1')
    document.body.style.overflow = 'hidden'

    // Hold the curtain until BOTH the animation floor has elapsed AND the page has
    // loaded — so the site is ready behind it. A ceiling guarantees we never trap.
    let minDone = false
    let pageLoaded = document.readyState === 'complete'
    const finishIfReady = () => {
      if (minDone && pageLoaded) setShow(false)
    }

    // Floor: ~2.2s to draw + ink the logo, then a long hold (with the lime glow
    // pulsing) so the finished mark really lands before the curtain lifts.
    const minMs = reduce ? 500 : 5200
    const maxMs = reduce ? 1200 : 9000
    const minT = setTimeout(() => { minDone = true; finishIfReady() }, minMs)
    const maxT = setTimeout(() => setShow(false), maxMs)
    const onLoad = () => { pageLoaded = true; finishIfReady() }
    if (!pageLoaded) window.addEventListener('load', onLoad)

    return () => {
      clearTimeout(minT)
      clearTimeout(maxT)
      window.removeEventListener('load', onLoad)
    }
  }, [reduce])

  useEffect(() => {
    if (!show) document.body.style.overflow = ''
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#090909]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: reduce ? 0 : '-100%' }}
          transition={{ duration: reduce ? 0.3 : 0.7, ease: EXPO }}
          aria-hidden="true"
        >
          {/* Subtle lime frame drawing around the viewport */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.rect
              x="1" y="1" width="98" height="98"
              stroke="#AAEE00"
              strokeWidth={1}
              strokeOpacity={0.5}
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: reduce ? 0 : 1.6, ease: EXPO, delay: reduce ? 0 : 0.15 }}
            />
          </svg>

          {/* Monogram — outlines draw in lime, then ink to warm-white */}
          <motion.svg
            className="relative w-56 md:w-80"
            viewBox="0 0 8334 8334"
            fill="none"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.9, filter: 'drop-shadow(0 0 0px rgba(170,238,0,0))' }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: reduce
                ? 'drop-shadow(0 0 0px rgba(170,238,0,0))'
                : [
                    'drop-shadow(0 0 10px rgba(170,238,0,0.25))',
                    'drop-shadow(0 0 34px rgba(170,238,0,0.65))',
                  ],
            }}
            transition={{
              opacity: { duration: reduce ? 0.2 : 0.7, ease: EXPO },
              scale: { duration: reduce ? 0.2 : 0.7, ease: EXPO },
              filter: reduce
                ? { duration: 0 }
                : { duration: 1.4, ease: 'easeInOut', delay: 2.3, repeat: Infinity, repeatType: 'reverse' },
            }}
          >
            <g transform="matrix(8.138672,0,0,8.138672,0,0)">
              {LOGO_PATHS.map((d, i) => {
                const delay = reduce ? 0 : i * 0.18
                return (
                  <motion.path
                    key={i}
                    d={d}
                    fill="#EDEAE4"
                    stroke="#AAEE00"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{
                      pathLength: reduce ? 1 : 0,
                      fillOpacity: reduce ? 1 : 0,
                      strokeOpacity: reduce ? 0 : 1,
                    }}
                    animate={{ pathLength: 1, fillOpacity: 1, strokeOpacity: 0 }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : {
                            pathLength: { duration: 1.2, ease: EXPO, delay },
                            fillOpacity: { duration: 0.7, ease: EXPO, delay: delay + 1.0 },
                            strokeOpacity: { duration: 0.6, ease: EXPO, delay: delay + 1.25 },
                          }
                    }
                  />
                )
              })}
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
