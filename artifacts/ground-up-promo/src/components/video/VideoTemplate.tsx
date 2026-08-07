import { useEffect, useRef } from 'react';

import { useVideoPlayer } from '@/lib/video';
import { AnimatePresence, motion } from 'framer-motion';

import { Scene1, Scene2, Scene3, Scene4, Scene5, Scene6 } from './video_scenes';

// Total video duration: ~26.5 seconds
export const SCENE_DURATIONS: Record<string, number> = {
  intro: 4500, // Scene1: Not just moves...
  reveal: 4500, // Scene2: Ground Up system
  library: 4000, // Scene3: 74 Techniques
  challenge: 5000, // Scene4: Escape Challenge
  gentleArt: 4000, // Scene5: The Gentle Art
  outro: 4500, // Scene6: Outro lockup
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  intro: Scene1,
  reveal: Scene2,
  library: Scene3,
  challenge: Scene4,
  gentleArt: Scene5,
  outro: Scene6,
};

const SCENE_START_SEC: Record<string, number> = (() => {
  const out: Record<string, number> = {};
  let cumulativeMs = 0;
  for (const [key, ms] of Object.entries(SCENE_DURATIONS)) {
    out[key] = cumulativeMs / 1000;
    cumulativeMs += ms;
  }
  return out;
})();

const AUDIO_SEEK_EPSILON_SEC = 0.18;

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  muted = false,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  muted?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '');
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;
    const targetTime = SCENE_START_SEC[baseSceneKey] ?? 0;
    if (Math.abs(audio.currentTime - targetTime) > AUDIO_SEEK_EPSILON_SEC) {
      audio.currentTime = targetTime;
    }
    audio.play().catch(() => {});
  }, [currentSceneKey, baseSceneKey, muted]);

  return (
    <div className="w-full h-screen overflow-hidden relative bg-bg-dark">
      <div className="noise-overlay" />

      {/* Persistent global element (e.g. subtle vignette or frame) */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-40 border-[2vw] border-transparent"
        animate={{
          borderColor:
            sceneIndex === 1 || sceneIndex === 4
              ? 'rgba(0,0,0,0.05)'
              : 'rgba(0,0,0,0)',
        }}
        transition={{ duration: 1 }}
      />

      <AnimatePresence mode="popLayout">
        {SceneComponent && <SceneComponent key={currentSceneKey} />}
      </AnimatePresence>

      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/bg_music.mp3`}
        preload="auto"
        autoPlay
        muted={muted}
      />
    </div>
  );
}
