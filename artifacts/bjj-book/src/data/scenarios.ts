export interface ScenarioChoice {
  id: string;
  label: string;
  correct: boolean;
  feedback: string;
}

export interface Scenario {
  id: string;
  title: string;
  tagline: string;
  /** Backdrop image filename, resolved via techniqueImage() */
  image: string;
  narration: string;
  prompt: string;
  choices: ScenarioChoice[];
  /** Real technique this scenario resolves into */
  techniqueId: string;
  resolutionNarration: string;
}

export const scenarios: Scenario[] = [
  {
    id: "mount",
    title: "Tackled to the Ground",
    tagline: "He's on top of you, throwing punches.",
    image: "elbow-knee-escape.jpg",
    narration:
      "You're on your back. Someone heavier tackled you, and now he's straddling your hips with a fist cocked back. You have about two seconds before it lands.",
    prompt: "What do you do?",
    choices: [
      {
        id: "push",
        label: "Push up on his chest with both hands",
        correct: false,
        feedback:
          "Straightening your arms into his chest hands him exactly what he wants — a straight, exposed elbow, and a clear lane to keep swinging. You're still stuck under him.",
      },
      {
        id: "buck",
        label: "Buck your hips hard to throw him off",
        correct: false,
        feedback:
          "A raw hip buck with nothing trapped just resettles his weight lower and angrier. Against someone bigger than you, pure strength loses this fight.",
      },
      {
        id: "frame",
        label: "Turn onto your side, elbows tucked to your knees",
        correct: true,
        feedback:
          "That's it — you just stopped thinking about strength and started thinking about structure.",
      },
    ],
    techniqueId: "elbow-knee-escape",
    resolutionNarration:
      "You just used the Elbow-Knee Escape — the single most-taught escape in Jiu-Jitsu, and it works precisely because it never relies on out-muscling anyone. By turning to your side and gluing your elbows to your knees, you build a skeletal frame he can't collapse. A bridge unweights his hips for a split second; a shrimp of your own hips slides a knee into the gap that opens up. That knee becomes a wall between you and him — and from there, you can stand up, escape, or start fighting from guard on your own terms.",
  },
  {
    id: "side-control",
    title: "Pinned to the Ground",
    tagline: "His weight is crushing your chest. You can't breathe.",
    image: "side-control-escape.jpg",
    narration:
      "You went down and now he's beside you, not on top of your hips — chest-to-chest, forearm jammed across your throat, all of his weight pressing down. You can barely get a breath in, let alone think straight.",
    prompt: "What do you do?",
    choices: [
      {
        id: "push-shoulder",
        label: "Push straight into his shoulder with everything you have",
        correct: false,
        feedback:
          "Pure strength against a crossface is a fight your arms will lose every time — his whole bodyweight is behind that pressure, and yours will gas out first.",
      },
      {
        id: "frame",
        label: "Turn onto your side, elbow to your near knee, and bridge",
        correct: true,
        feedback:
          "Exactly — you just took his pressure and turned it into an opening instead of fighting it head-on.",
      },
      {
        id: "flip",
        label: "Try to roll onto your stomach and crawl away",
        correct: false,
        feedback:
          "Turning your back on someone who already controls you just hands them a free ride to your back — and a choke you won't see coming.",
      },
    ],
    techniqueId: "side-control-escape",
    resolutionNarration:
      "You just used the Side Control Escape — the core survival skill for the most common pin in grappling. Turning to your side and connecting elbow to knee denies him the mount before it happens. A bridge into his crossface buys you a half-second of space at your hips; a shrimp fills that space with your knee, wedging a shield between his hip and yours. From there you rebuild guard and you're back in the fight — instead of stuck underneath it.",
  },
  {
    id: "rear-grab",
    title: "Grabbed From Behind",
    tagline: "An arm just wrapped around your neck.",
    image: "back-escape.jpg",
    narration:
      "You didn't see it coming — an arm's snaked around your neck from behind, his legs hooked around your hips, pulling you off balance as he starts to squeeze.",
    prompt: "What do you do?",
    choices: [
      {
        id: "pull-arm",
        label: "Grab the choking arm with both hands and pull down",
        correct: false,
        feedback:
          "One arm alone rarely wins a tug-of-war against someone actively finishing a choke. You need to control the fight, not just the symptom.",
      },
      {
        id: "spin",
        label: "Twist around immediately to face him",
        correct: false,
        feedback:
          "Turning in before the choke is defused just hands him a better angle to finish it — you'd be fighting blind, chin-first.",
      },
      {
        id: "hands",
        label: "Fight for both wrists, tuck your chin, and walk your shoulders to the mat",
        correct: true,
        feedback:
          "Good instinct — you protected your neck first and let position come second.",
      },
    ],
    techniqueId: "back-escape",
    resolutionNarration:
      "You just used the Back Escape — the escape every grappler learns because back control is the single most dominant position there is. Winning the hand-fight for his choking arm neutralizes the danger to your neck before anything else. Tucking your chin and walking your shoulders down to the mat, on the side away from the choking arm, strips his hooks one at a time. Once your shoulders are pinned to the floor, his legs simply can't hold on anymore — and you're free to turn in and fight from the front.",
  },
];
