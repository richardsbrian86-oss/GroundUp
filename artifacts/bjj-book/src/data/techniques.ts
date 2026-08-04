export interface Technique {
  id: string;
  name: string;
  category: 'Guard' | 'Passing' | 'Sweeps' | 'Submissions' | 'Escapes' | 'Takedowns';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  giNoGi: 'Gi' | 'No-Gi' | 'Both';
  position: string;
  description: string;
  steps: string[];
  keyPoints: string[];
  commonMistakes: string[];
}

export const techniques: Technique[] = [
  {
    id: "triangle-choke",
    name: "Triangle Choke",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Closed Guard",
    description: "A fundamental blood choke utilizing the legs to trap the opponent's neck and one arm, forming a triangular shape that compresses the carotid arteries.",
    steps: [
      "Establish control of both of your opponent's wrists.",
      "Push one of their arms toward their stomach while pulling the other arm out.",
      "Shoot your hips up and throw your leg over the shoulder of the trapped arm.",
      "Cross your ankles temporarily to secure the posture.",
      "Grab your shin (not your foot) on the side of the trapped arm to adjust the angle.",
      "Place your foot on the hip on the non-trapped side to pivot your body perpendicular to them.",
      "Lock the triangle by placing the back of your knee over your own ankle.",
      "Squeeze your knees together and pull down on their head to finish."
    ],
    keyPoints: [
      "Angle is everything: you should be looking directly into their ear.",
      "Always grab your own shin to adjust, never your foot (prevents ankle injury).",
      "Hide their trapped shoulder entirely inside your legs."
    ],
    commonMistakes: [
      "Trying to finish while parallel to the opponent.",
      "Leaving the opponent's trapped arm loose instead of pulling it across your body.",
      "Crossing the feet too shallowly."
    ]
  },
  {
    id: "rear-naked-choke",
    name: "Rear Naked Choke",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Back Control",
    description: "The most dominant submission in grappling. A choke applied from behind the opponent, wrapping the arm completely around the neck.",
    steps: [
      "Establish back control with both hooks in (feet inside their thighs).",
      "Achieve a seatbelt grip (one arm over their shoulder, one under their armpit).",
      "Slide your over-hook arm deep across their neck, aligning your elbow with their chin.",
      "Grab your own bicep on the opposite arm.",
      "Place your opposite hand behind their head or upper back.",
      "Take a deep breath to expand your chest into their back.",
      "Squeeze your elbows together while rolling your wrists inward."
    ],
    keyPoints: [
      "Hide your choking hand behind their shoulder to prevent them from peeling it off.",
      "Squeeze with your back muscles (lats), not just your arms.",
      "Keep your head tight to their head to prevent them from escaping the side."
    ],
    commonMistakes: [
      "Crossing your feet (which opens you up to an ankle lock).",
      "Applying the choke over the chin rather than under it.",
      "Leaving space between your chest and their back."
    ]
  },
  {
    id: "armbar-from-guard",
    name: "Armbar",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Closed Guard",
    description: "A hyperextension of the elbow joint achieved by isolating the opponent's arm between your legs and driving your hips upward.",
    steps: [
      "Secure a deep grip on the opponent's tricep/elbow and their opposite collar (or wrist in no-gi).",
      "Place your foot on the hip on the side of the arm you are attacking.",
      "Bite down heavily with your other leg across their upper back to break their posture.",
      "Pivot your body 90 degrees by pushing off the hip.",
      "Pass your leg over their face.",
      "Pinch your knees together tightly.",
      "Control their wrist with both hands, thumb pointing to the ceiling.",
      "Raise your hips slowly to apply breaking pressure to the elbow."
    ],
    keyPoints: [
      "Knee pinch is non-negotiable; if your knees are wide, the arm will slip out.",
      "The opponent's thumb must point away from your chest.",
      "Keep the arm tight to your chest before raising hips."
    ],
    commonMistakes: [
      "Failing to break the opponent's posture before pivoting.",
      "Crossing the feet loosely over the head.",
      "Losing control of the thumb orientation."
    ]
  },
  {
    id: "kimura-from-guard",
    name: "Kimura",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Closed Guard",
    description: "A figure-four shoulder lock that isolates the shoulder joint and rotates it beyond its normal range of motion.",
    steps: [
      "Force the opponent to place their hands on the mat.",
      "Open your guard and sit up aggressively toward one arm.",
      "Wrap one arm over their tricep and reach through to grab your own wrist (figure-four grip).",
      "Use your grip to pull their elbow toward your chest while falling back.",
      "Relock your closed guard or put your foot on their hip to trap them.",
      "Push their hand toward the back of their head to apply the lock."
    ],
    keyPoints: [
      "Keep the opponent's arm bent at a 90-degree angle.",
      "Pin their elbow tight to your chest; don't let it flare out.",
      "Use your entire torso to rotate, not just your arms."
    ],
    commonMistakes: [
      "Falling straight back instead of pivoting to the side.",
      "Letting the opponent straighten their arm.",
      "Having a weak figure-four grip."
    ]
  },
  {
    id: "guillotine-choke",
    name: "Guillotine Choke",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Front Headlock / Guard",
    description: "A front choke applied by wrapping the arm around the neck, often utilized when the opponent shoots for a takedown or leaves their head low.",
    steps: [
      "Wrap your arm around the opponent's neck, bringing your forearm directly under their throat.",
      "Connect your hands together (chinstrap or high-elbow grip).",
      "If standing, pull guard by jumping your legs around their waist.",
      "Stretch your legs to push their hips away while crunching your upper body inward.",
      "Drive your choking forearm up into their neck."
    ],
    keyPoints: [
      "Crunch like a sit-up; don't just pull with your arms.",
      "Keep their head trapped tight under your armpit.",
      "If using a high-elbow variation, bring your non-choking elbow over their shoulder."
    ],
    commonMistakes: [
      "Squeezing without securing the body, allowing the opponent to pass.",
      "Applying pressure to the chin instead of the neck.",
      "Laying flat on your back instead of crunching."
    ]
  },
  {
    id: "closed-guard",
    name: "Closed Guard",
    category: "Guard",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Bottom",
    description: "The foundational defensive position where you wrap your legs around the opponent's torso, locking your ankles behind their back.",
    steps: [
      "Wrap both legs entirely around your opponent's hips/waist.",
      "Lock your ankles together.",
      "Control their posture using grips on the collar, sleeves, or behind the head/triceps.",
      "Use your legs to pull their weight forward and disrupt their balance.",
      "Keep your hips active, constantly looking for off-balancing opportunities."
    ],
    keyPoints: [
      "Heavily utilize your legs (knees to chest) to break posture, not just your arms.",
      "Always fight for inside grip control.",
      "Never lie flat; stay slightly on one hip."
    ],
    commonMistakes: [
      "Leaving the guard open and ankles uncrossed without intention.",
      "Allowing the opponent to sit up straight and establish grips.",
      "Remaining static when the opponent stands up."
    ]
  },
  {
    id: "spider-guard",
    name: "Spider Guard",
    category: "Guard",
    difficulty: "Intermediate",
    giNoGi: "Gi",
    position: "Bottom",
    description: "A dynamic open guard utilizing sleeve grips and feet placed on the opponent's biceps to control distance and off-balance.",
    steps: [
      "Establish strong grips on both of the opponent's sleeves.",
      "Place one foot on the inside of their bicep, pushing their arm out.",
      "Place the other foot on their hip or on the opposite bicep.",
      "Keep constant tension on the sleeves by pulling them toward you while pushing away with your feet.",
      "Shift your hips side to side to constantly off-balance them."
    ],
    keyPoints: [
      "Never let the opponent control your pant legs.",
      "Keep tension tight; if the sleeves are loose, the guard is easily passed.",
      "Use heavy hip movement to create sweeping angles."
    ],
    commonMistakes: [
      "Pushing with the feet without pulling the sleeves.",
      "Keeping the back flat on the mat.",
      "Letting the opponent strip the sleeve grips."
    ]
  },
  {
    id: "de-la-riva-guard",
    name: "De La Riva Guard",
    category: "Guard",
    difficulty: "Intermediate",
    giNoGi: "Both",
    position: "Bottom",
    description: "An open guard played against a standing opponent, hooking one of their legs from the outside while controlling their ankle.",
    steps: [
      "Control the opponent's lead ankle with your hand.",
      "Wrap your outside leg around their lead leg, inserting your foot inside their far thigh (the DLR hook).",
      "Place your other foot on their far hip, thigh, or bicep.",
      "Control a collar or sleeve with your free hand.",
      "Use the hook and grips to off-balance them laterally."
    ],
    keyPoints: [
      "The DLR hook must be active and flexed, applying pressure behind their knee.",
      "Maintain a strong grip on their heel/ankle so they cannot pivot away.",
      "Constantly push and pull to prevent them from settling."
    ],
    commonMistakes: [
      "Leaving the non-hooking leg dangling, allowing easy passing.",
      "Losing the ankle grip.",
      "Having a lazy, loose DLR hook."
    ]
  },
  {
    id: "butterfly-guard",
    name: "Butterfly Guard",
    category: "Guard",
    difficulty: "Intermediate",
    giNoGi: "Both",
    position: "Bottom",
    description: "A seated guard where the tops of your feet (hooks) are placed inside the opponent's thighs, ideal for elevating and sweeping.",
    steps: [
      "Sit up, never lying flat on your back.",
      "Place the tops of both feet (insteps) inside the opponent's inner thighs.",
      "Establish an overhook and an underhook, or collar/sleeve grips.",
      "Keep your knees flared outward.",
      "Use your hooks to elevate the opponent's center of gravity when they pressure forward."
    ],
    keyPoints: [
      "Posture is critical: stay seated with your head higher than theirs if possible.",
      "Your feet are hooks, not pushers; use them to lift.",
      "Always have at least one underhook or strong upper-body control."
    ],
    commonMistakes: [
      "Lying flat on your back.",
      "Letting the opponent flatten your legs together.",
      "Reaching too far forward and exposing your neck for guillotines."
    ]
  },
  {
    id: "torreando-pass",
    name: "Torreando (Bullfighter) Pass",
    category: "Passing",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Top",
    description: "A dynamic outside pass where you control the opponent's pants/legs and redirect them to bypass the guard entirely.",
    steps: [
      "Grab both of the opponent's knees (pants at the knee in Gi, inside/outside knee in No-Gi).",
      "Step back slightly to clear their hooks and create space.",
      "Push their legs aggressively to one side while stepping to the opposite side.",
      "Drop your weight onto their chest, establishing side control.",
      "Block their hips to prevent guard recovery."
    ],
    keyPoints: [
      "Keep your arms stiff; do not let them grab your sleeves.",
      "The pass requires lateral movement, not just forward pressure.",
      "Pin their far hip immediately upon passing."
    ],
    commonMistakes: [
      "Pushing the legs straight down instead of to the side.",
      "Moving too slowly, allowing the opponent to retain guard.",
      "Getting tangled in their grips before attempting the pass."
    ]
  },
  {
    id: "knee-slice-pass",
    name: "Knee Slice Pass",
    category: "Passing",
    difficulty: "Intermediate",
    giNoGi: "Both",
    position: "Top",
    description: "A slicing pass where you drive one knee across the opponent's thigh and hip line, cutting through their guard.",
    steps: [
      "Step one leg inside the opponent's guard, pinning their bottom leg.",
      "Drive your lead knee across their thigh, aiming for the mat next to their hip.",
      "Secure an underhook on the far side to flatten them out.",
      "Control their near-side arm or collar.",
      "Slide your knee entirely through to the mat.",
      "Pull your trailing foot free and settle into side control."
    ],
    keyPoints: [
      "The far-side underhook is critical; without it, they will take your back.",
      "Keep your chest heavy and low during the slide.",
      "Pin their bottom leg securely before initiating the cut."
    ],
    commonMistakes: [
      "Slicing without the underhook.",
      "Leaving the trailing foot trapped in half guard.",
      "Being too upright and getting swept backward."
    ]
  },
  {
    id: "stack-pass",
    name: "Stack Pass",
    category: "Passing",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Top",
    description: "A pressure pass where you fold the opponent's knees toward their face, restricting their hip mobility to pass safely.",
    steps: [
      "Dive one arm under the opponent's leg, securing a grip on their collar (or shoulder/lat in No-Gi).",
      "Control their opposite pant leg or hip.",
      "Drive forward off your toes, stacking their knees over their face.",
      "Walk your body toward the side of the trapped arm.",
      "Drop your chest heavy onto their hips once you clear the legs.",
      "Settle into side control."
    ],
    keyPoints: [
      "Apply pressure from your toes, not your knees.",
      "Keep their hips elevated off the mat.",
      "Be patient; let the pressure tire them out before clearing the legs."
    ],
    commonMistakes: [
      "Dropping to the knees while stacking, which kills the pressure.",
      "Rushing the pass before their hips are completely controlled.",
      "Leaving your neck exposed to a triangle choke upon entry."
    ]
  },
  {
    id: "scissor-sweep",
    name: "Scissor Sweep",
    category: "Sweeps",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Closed Guard",
    description: "A fundamental sweep using a scissor motion of the legs while pulling the opponent's upper body forward to destroy their base.",
    steps: [
      "Establish a cross-collar grip and control the opponent's sleeve on the same side.",
      "Open your guard and hip escape slightly to the side of the controlled sleeve.",
      "Place your top shin across their belt line.",
      "Lay your bottom leg flat on the mat alongside their knee.",
      "Pull aggressively with your grips to bring their weight forward onto you.",
      "Kick your top leg back while chopping their knee with your bottom leg.",
      "Follow the momentum to mount."
    ],
    keyPoints: [
      "You must pull their weight forward; the sweep fails if they are sitting back on their heels.",
      "The bottom leg must chop low at the knee, not high on the thigh.",
      "Maintain the sleeve grip through the transition to prevent them from posting."
    ],
    commonMistakes: [
      "Trying to sweep without pulling them forward first.",
      "Having a loose collar grip.",
      "Forgetting to hip escape to create the angle."
    ]
  },
  {
    id: "tripod-sweep",
    name: "Tripod Sweep",
    category: "Sweeps",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Open Guard",
    description: "A highly effective open guard sweep relying on pushing the hip while pulling the ankle, knocking a standing opponent backward.",
    steps: [
      "Control the opponent's ankle with one hand.",
      "Control their opposite sleeve or wrist.",
      "Place your foot on the hip on the same side you have the sleeve grip.",
      "Hook your other foot behind their knee on the side you have the ankle grip.",
      "Push hard on their hip while simultaneously pulling their ankle and chopping behind their knee.",
      "As they fall, immediately stand up to pass or secure top position."
    ],
    keyPoints: [
      "The push/pull motion must happen simultaneously.",
      "Keep the foot on the hip sticky; do not let them swat it away.",
      "Stand up immediately; if you hesitate, they will stand back up."
    ],
    commonMistakes: [
      "Pushing the hip but forgetting to pull the ankle.",
      "Lying flat on the mat while executing the sweep.",
      "Failing to control the upper body (sleeve/collar), allowing them to retain balance."
    ]
  },
  {
    id: "hip-bump-sweep",
    name: "Hip Bump Sweep",
    category: "Sweeps",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Closed Guard",
    description: "A sweeping technique utilized when the opponent sits back to avoid upper body attacks, using explosive hip extension to knock them over.",
    steps: [
      "Wait for the opponent to posture up and sit back on their heels.",
      "Open your guard and post up on your hand (not your elbow).",
      "Reach across and grab their tricep or trap their arm tight to your body.",
      "Explode your hips up and diagonally across their body.",
      "Drive through their shoulder.",
      "Land directly in the mount position."
    ],
    keyPoints: [
      "You must trap the arm on the side you are sweeping toward so they cannot post.",
      "The power comes from bridging your hips high off the mat.",
      "Post on your hand, not your elbow, to gain enough height."
    ],
    commonMistakes: [
      "Attempting the sweep when the opponent's weight is leaning forward.",
      "Failing to trap the arm.",
      "Just rolling over instead of bridging upward."
    ]
  },
  {
    id: "elbow-knee-escape",
    name: "Elbow-Knee Escape (Shrimp)",
    category: "Escapes",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Bottom Mount",
    description: "The fundamental method for escaping the mount by framing on the hips and sliding your knee through to recover guard.",
    steps: [
      "Keep your elbows tight to your body; do not reach up.",
      "Frame your forearms/hands on the opponent's hips.",
      "Turn on your side.",
      "Bring one heel close to your butt and bridge slightly.",
      "Shrimp (hip escape) aggressively, sliding your bottom knee through the gap.",
      "Catch their leg in half guard or push through to full guard."
    ],
    keyPoints: [
      "You must be on your side; you cannot shrimp effectively while flat on your back.",
      "Frames must be skeletal (bone structures), not muscular pushing.",
      "The escape is a combination of bridging and hip escaping."
    ],
    commonMistakes: [
      "Pushing the opponent's chest instead of the hips, exposing the arms to armbars.",
      "Lying flat on the back.",
      "Not bringing the knee high enough to establish the frame."
    ]
  },
  {
    id: "bridge-and-roll",
    name: "Bridge and Roll (Upa)",
    category: "Escapes",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Bottom Mount",
    description: "A mount escape utilizing an explosive bridge to roll the opponent over after trapping their posting limbs on one side.",
    steps: [
      "Trap one of the opponent's arms tightly to your chest.",
      "Trap the opponent's foot on the same side with your leg (hooking outside their ankle).",
      "Bring your heels close to your butt.",
      "Bridge explosively straight up into the air.",
      "Look and roll over your shoulder toward the side where their limbs are trapped.",
      "End up in their closed guard."
    ],
    keyPoints: [
      "Bridge UP before rolling to the side to completely disrupt their balance.",
      "The trapped side must be completely immobilized.",
      "Look where you want to go; your body will follow your head."
    ],
    commonMistakes: [
      "Rolling without bridging up first.",
      "Failing to trap the foot, allowing them to base out with their leg.",
      "Having a loose grip on the trapped arm."
    ]
  },
  {
    id: "double-leg-takedown",
    name: "Double Leg Takedown",
    category: "Takedowns",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Standing",
    description: "A wrestling-based takedown where you drop your elevation, penetrate through the opponent's stance, and attack both legs to drive them to the mat.",
    steps: [
      "Lower your stance (change levels) to drop beneath their guard.",
      "Take a penetration step forward, driving your lead knee between their feet.",
      "Wrap both arms tightly around the back of their knees.",
      "Keep your head up and tight against their hip or ribs.",
      "Step your trail leg up to the outside.",
      "Drive off your trail leg laterally to finish the takedown."
    ],
    keyPoints: [
      "Level change is critical; don't bend at the waist, bend at the knees.",
      "Keep your posture upright and neck strong to avoid guillotines.",
      "Drive through the opponent, not just to them."
    ],
    commonMistakes: [
      "Looking down at the mat, exposing the neck.",
      "Reaching for the legs without a penetration step.",
      "Landing with poor posture inside the opponent's closed guard."
    ]
  },
  {
    id: "single-leg-takedown",
    name: "Single Leg Takedown",
    category: "Takedowns",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Standing",
    description: "A takedown focusing on securing one of the opponent's legs, pinching it between yours, and utilizing various finishes to complete the throw.",
    steps: [
      "Set up the entry by snapping down or circling to expose their lead leg.",
      "Change levels and take a penetration step to the outside of their lead foot.",
      "Wrap both arms around their leg, head tight to the inside of their ribs.",
      "Stand up, pinching their leg tightly between your knees.",
      "Finish by running the pipe (stepping back and bowing) or tripping the far leg."
    ],
    keyPoints: [
      "Pinch your knees together to control the leg; don't rely only on your arms.",
      "Your head must be glued to their chest/ribs to prevent cross-face defense.",
      "Maintain strong posture."
    ],
    commonMistakes: [
      "Head on the outside (exposes you to guillotines).",
      "Letting the opponent sprawl and flatten you out.",
      "Holding the leg too loosely."
    ]
  }
];