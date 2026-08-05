// Plain-language definitions for Jiu-Jitsu jargon.
// Used by src/lib/glossify.tsx to annotate technique copy the first time
// a term appears on a given technique page, so readers with zero grappling
// background can follow along without leaving the page.
//
// `patterns` are literal phrases to match (case-insensitive). Internal
// spaces/hyphens are treated interchangeably by the matcher, so listing
// "half guard" also matches "half-guard".

export interface GlossaryTerm {
  id: string;
  patterns: string[];
  definition: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  // Uniform / ruleset
  { id: "no-gi", patterns: ["no-gi", "nogi"], definition: "grappling without the jacket uniform — usually shorts and a rash guard, so there's no cloth to grip" },
  { id: "gi", patterns: ["gi-clad", "gi"], definition: "the traditional woven jacket-and-pants uniform used in classical Jiu-Jitsu" },
  { id: "ibjjf", patterns: ["ibjjf"], definition: "the International Brazilian Jiu-Jitsu Federation, the largest organizer of gi competition" },

  // Core positions
  { id: "guard", patterns: ["guard"], definition: "a bottom position where you use your legs to control, defend against, and attack an opponent in front of you" },
  { id: "closed-guard", patterns: ["closed guard"], definition: "a guard with your ankles locked together behind the opponent's back" },
  { id: "open-guard", patterns: ["open guard"], definition: "any guard where your legs aren't locked shut, giving more mobility to attack or sweep" },
  { id: "half-guard", patterns: ["half guard", "half-guard"], definition: "a guard where only one of the opponent's legs is trapped between yours" },
  { id: "deep-half-guard", patterns: ["deep half guard", "deep half"], definition: "a half guard where you slide fully underneath the opponent's hips to off-balance them" },
  { id: "butterfly-guard", patterns: ["butterfly guard"], definition: "a seated guard with your feet hooked inside the opponent's thighs, used to elevate and sweep them" },
  { id: "spider-guard", patterns: ["spider guard"], definition: "a gi guard that grips both sleeves while planting feet on the opponent's arms to control distance" },
  { id: "lasso-guard", patterns: ["lasso guard", "lasso"], definition: "a gi guard where one leg wraps around and traps the opponent's arm to break their posture" },
  { id: "reverse-de-la-riva", patterns: ["reverse de la riva", "rdlr"], definition: "a guard hooking the inside of the opponent's near leg, mainly used to stop a knee-cut pass" },
  { id: "de-la-riva", patterns: ["de la riva"], definition: "an open guard that hooks one of the opponent's legs from outside while they're standing, setting up sweeps or back takes" },
  { id: "x-guard", patterns: ["x-guard"], definition: "an open guard played from underneath a standing opponent, trapping one of their legs between both of yours" },
  { id: "single-leg-x", patterns: ["single-leg-x", "single-leg x", "single leg x"], definition: "a guard that isolates one of the opponent's legs with both of yours, often leading to sweeps or leg locks" },
  { id: "50-50", patterns: ["50/50"], definition: "a tangled leg position where both players have a leg hooked around the other's, each threatening a leg lock" },
  { id: "worm-guard", patterns: ["worm guard"], definition: "a gi guard that wraps the opponent's own belt around your body to control and off-balance them" },
  { id: "z-guard", patterns: ["z-guard"], definition: "a half-guard variation where your shin angles across the opponent's body as a shield" },
  { id: "sit-up-guard", patterns: ["sit-up guard"], definition: "an open guard played sitting upright, used to grip-fight before the opponent can pass" },
  { id: "mount", patterns: ["mount"], definition: "a dominant top position where you sit astride the opponent's torso with both knees on the mat" },
  { id: "side-control", patterns: ["side control"], definition: "a top pinning position where you lie perpendicular across the opponent's torso" },
  { id: "back-control", patterns: ["back control", "back mount", "back take"], definition: "a dominant position behind the opponent, with hooks or a body triangle controlling their hips" },
  { id: "turtle", patterns: ["turtle"], definition: "a defensive posture where the bottom player curls onto hands and knees to protect the back and neck" },
  { id: "north-south", patterns: ["north-south"], definition: "a top control position facing the opposite direction from the opponent, chest to chest but head-to-hip" },

  // Takedowns / entries
  { id: "takedown", patterns: ["takedown"], definition: "a technique that brings the fight from standing to the ground, usually into top position" },
  { id: "sprawl", patterns: ["sprawl"], definition: "driving your hips back and legs away to stop an opponent's takedown attempt" },
  { id: "double-leg", patterns: ["double leg"], definition: "a takedown where you drive through and lift both of the opponent's legs to bring them down" },
  { id: "single-leg", patterns: ["single leg", "single-leg"], definition: "a takedown where you control and lift one of the opponent's legs to bring them down" },
  { id: "scramble", patterns: ["scramble"], definition: "a fast, chaotic exchange where neither player has secured position yet" },
  { id: "knee-cut", patterns: ["knee-cut", "knee-slice"], definition: "a guard pass where you drive one knee across the opponent's hip and thigh to get past their legs" },
  { id: "torreando", patterns: ["torreando"], definition: "a standing guard pass where you control the opponent's legs and step around them, like a matador" },
  { id: "body-lock", patterns: ["body lock"], definition: "controlling an opponent by wrapping both arms tightly around their torso" },

  // Control concepts
  { id: "underhook", patterns: ["underhook", "underhooks"], definition: "an arm threaded under the opponent's arm and around their body — one of the most valuable control points in grappling" },
  { id: "overhook", patterns: ["overhook", "whizzer"], definition: "an arm wrapped over the top of the opponent's arm, controlling it from above" },
  { id: "crossface", patterns: ["crossface", "cross face"], definition: "pressing your forearm across the opponent's face and neck to control their head and flatten them out" },
  { id: "kuzushi", patterns: ["kuzushi"], definition: "a Japanese term for off-balancing an opponent so their weight and structure are compromised" },
  { id: "posture", patterns: ["posture"], definition: "keeping your spine upright and aligned so the opponent can't easily control or attack you" },
  { id: "base", patterns: ["base"], definition: "a stable, balanced position that's hard to knock over or off-balance" },
  { id: "frame", patterns: ["frame", "framing"], definition: "using a rigid arm or leg like a brace to create and hold space between you and an opponent" },
  { id: "hook", patterns: ["hook", "hooks"], definition: "using your foot or leg to control the opponent's body, usually from behind, underneath, or entangled" },
  { id: "sweep", patterns: ["sweep"], definition: "reversing position from the bottom to the top, typically from a guard" },
  { id: "grip-fighting", patterns: ["grip fighting", "grip-fighting"], definition: "the battle to establish or deny hand/sleeve/collar control before either player can execute their game plan" },
  { id: "two-on-one", patterns: ["two-on-one"], definition: "controlling one of the opponent's arms using both of your hands, isolating that limb" },
  { id: "collar-tie", patterns: ["collar tie"], definition: "a no-gi grip controlling the back of the opponent's neck or head with one or both hands" },
  { id: "hip-escape", patterns: ["hip escape", "shrimping"], definition: "a fundamental movement where you scoot your hips away to create space or escape a pin" },
  { id: "bridging", patterns: ["bridging"], definition: "lifting your hips off the mat, usually to create space or escape being pinned" },
  { id: "dogfight", patterns: ["dogfight"], definition: "a scramble position from half guard where both players are up on their sides fighting for the underhook" },
  { id: "arm-drag", patterns: ["arm drag", "armdrag"], definition: "pulling the opponent's arm across their body to open an angle to take their back" },
  { id: "posting", patterns: ["posting"], definition: "planting a hand or foot on the mat to stop yourself being off-balanced or rolled" },

  // Submissions
  { id: "submission", patterns: ["submission"], definition: "a hold or lock that forces an opponent to give up (\"tap\") rather than risk injury" },
  { id: "tap", patterns: ["tapping", "tap"], definition: "signaling surrender — usually by tapping the mat or the opponent — to stop before a submission causes injury" },
  { id: "kimura", patterns: ["kimura"], definition: "a shoulder lock that traps the arm behind the back using a figure-four grip on the wrist" },
  { id: "americana", patterns: ["americana"], definition: "a shoulder lock that bends the arm to 90 degrees and rotates it upward, like a key turning in a lock" },
  { id: "armbar", patterns: ["armbar"], definition: "a joint lock that hyperextends the elbow by trapping the arm between your legs" },
  { id: "triangle-choke", patterns: ["triangle choke", "triangle"], definition: "a choke using your legs, locked in a figure-four around the opponent's neck and one arm" },
  { id: "omoplata", patterns: ["omoplata"], definition: "a shoulder lock applied with the legs — like an armbar, but for the shoulder joint" },
  { id: "guillotine", patterns: ["guillotine"], definition: "a front choke applied while facing an opponent, wrapping their neck under your arm" },
  { id: "rear-naked-choke", patterns: ["rear-naked choke"], definition: "a choke applied from behind, wrapping an arm around the opponent's neck" },
  { id: "cross-collar-choke", patterns: ["cross-collar choke"], definition: "a choke using the opponent's own jacket collar, gripped by both hands and crossed" },
  { id: "darce", patterns: ["darce", "d'arce", "anaconda"], definition: "a front-headlock choke that wraps around the opponent's neck and arm as they bend forward" },
  { id: "ezekiel", patterns: ["ezekiel"], definition: "a choke using the sleeve of your own gi, wrapped around the opponent's neck" },
  { id: "loop-choke", patterns: ["loop choke"], definition: "a choke using the collar looped around the opponent's neck from an angle, often off a failed pass" },
  { id: "buggy-choke", patterns: ["buggy choke"], definition: "a leg-entanglement choke that uses your leg to cut off blood flow at the opponent's neck" },
  { id: "heel-hook", patterns: ["heel hook"], definition: "a powerful leg lock that injures the knee by twisting the heel" },
  { id: "ankle-lock", patterns: ["ankle lock", "straight ankle lock", "straight ankle"], definition: "a leg lock that hyperextends the ankle joint" },
  { id: "kneebar", patterns: ["kneebar"], definition: "a leg lock that hyperextends the knee — like an armbar, but for the leg" },
  { id: "toe-hold", patterns: ["toe hold"], definition: "a leg lock that twists the foot and ankle using a figure-four grip on the foot" },
  { id: "leg-lock", patterns: ["leg lock", "leg-lock"], definition: "a general term for submissions that attack the knee, ankle, or foot" },
  { id: "wristlock", patterns: ["wristlock"], definition: "a submission that bends or twists the wrist joint past its normal range" },
  { id: "calf-slicer", patterns: ["calf slicer"], definition: "a submission that compresses the calf muscle against the shin bone" },
  { id: "electric-chair", patterns: ["electric chair"], definition: "a leg-lock sweep and submission entry from single-leg X, twisting the opponent's hips and knee" },
];
