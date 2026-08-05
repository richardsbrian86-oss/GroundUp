import type { Technique } from '../types';

export const submissionTechniques: Technique[] = [
  {
    id: "triangle-choke",
    image: "triangle-choke.jpg",
    name: "Triangle Choke",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Closed Guard",
    description: "A blood choke that traps the opponent's neck and one arm between your legs, forming a triangle of your thigh, their own trapped shoulder, and the mat to compress both carotid arteries. It is one of the highest-percentage submissions from the guard because the legs are far stronger than the arms defending them.",
    steps: [
      "Control both wrists (or a sleeve and collar in the gi) and break their posture so their weight comes onto your hips.",
      "Push one arm across the centerline toward their opposite hip while pulling the other arm out wide, isolating one arm in and one arm out.",
      "Shoot your hips up off the mat and throw the leg on the trapped-arm side over their shoulder, high across the back of the neck.",
      "Cross your ankles temporarily to hold the position while you free your other leg from under their body.",
      "Grab your own shin (never your foot) and pull it down to bring your knee across the back of their neck, adjusting the diamond.",
      "Post your free foot on their hip and shrimp to create a perpendicular angle so you are looking into their ear, not the top of their head.",
      "Lock the figure-four by bending your free leg and placing the crook of your knee over your locking-leg ankle.",
      "Pull their head down toward your chest, drag the trapped arm across your centerline, and squeeze your knees together to finish."
    ],
    keyPoints: [
      "Angle is everything: rotate perpendicular so your hamstring crosses the far side of the neck, not the back of the skull.",
      "The trapped arm must be pulled across your centerline; a straight-in arm creates a shoulder wedge that relieves the choke.",
      "Adjust with a shin grip, never a foot grip, to protect your ankle and to keep the knee line tight.",
      "Squeeze with the knees and pull the head simultaneously; the leg lock is a clamp, not just a leg cross."
    ],
    commonMistakes: [
      "Trying to finish while parallel to the opponent instead of first cutting the angle.",
      "Leaving the trapped arm loose and straight in front of the throat, which blocks the artery from your thigh.",
      "Crossing the ankles too shallow so the locking leg sits on the neck instead of the crook of the knee.",
      "Letting posture rebuild before locking, allowing the opponent to stack and pass."
    ],
    setups: [
      "Off a failed armbar when they rip the arm out and leave the near arm across your body.",
      "From collar-sleeve or lasso guard when they posture and reach across to open the guard.",
      "As the counter to a stack or knee-slice pass when their head dives forward past your hip.",
      "Off a missed sweep where they post an arm on the mat to base out."
    ],
    followUps: [
      "Switch to the armbar on the trapped arm when they stack and stall the choke.",
      "Transition to an omoplata when they hide the far arm and posture straight up.",
      "Sweep to mount using the triangle legs when they drive forward to relieve pressure.",
      "Attack the far-side triangle-armlock (kata gatame style) combining choke and elbow when they fight the head."
    ],
    whenToUse: "The triangle rewards flexible, long-legged players and thrives against opponents who reach in with a single arm to open your guard. It is equally strong in gi and no-gi, but in no-gi the sweat makes cutting the angle and controlling the trapped arm more urgent. In modern competition it remains a staple counter to sloppy passing posture and a reliable finish off failed armbars.",
    concept: "Leverage isolation: the legs form a wedge that isolates one artery-side of the neck plus the shoulder, using the opponent's own trapped arm as the closing wall of the triangle."
  },
  {
    id: "rear-naked-choke",
    image: "rear-naked-choke.jpg",
    name: "Rear Naked Choke",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Back Control",
    description: "The highest-percentage submission in grappling, applied from behind by wrapping one arm across the throat and clamping the neck between the choking bicep and forearm. Because it requires no gi grips and is available from the sport's most dominant position, it is the benchmark finish every practitioner is measured against.",
    steps: [
      "Establish back control with a seatbelt (one arm over the shoulder, one under the armpit) and both hooks in or a body triangle.",
      "Use the over-shoulder hand to fight past the chin, threading your choking arm across the throat until your elbow is centered under the chin.",
      "Sink the bite of your elbow beneath the chin so the crook of your arm surrounds the neck, not the jaw.",
      "Grab the bicep of your non-choking arm to close the figure-four.",
      "Slide your non-choking hand behind their head, palm on the back of the skull.",
      "Expand your chest into their spine and glue your head to theirs on the choking-arm side to kill escape space.",
      "Draw your choking elbow toward the midline and drive the back of the head forward with the rear hand.",
      "Squeeze the lats and shoulders together, rolling your choking wrist inward to close the vise."
    ],
    keyPoints: [
      "Hide the choking hand behind their far shoulder while threading so they cannot peel it off before it is set.",
      "The elbow must be centered under the chin; an off-center elbow chokes the jaw or trachea, not the arteries.",
      "Power comes from expanding the chest and squeezing the back, not curling the biceps.",
      "Keep the head tight and chest connected so they cannot spin out the back door."
    ],
    commonMistakes: [
      "Crossing the ankles in front instead of using hooks or a body triangle, inviting a foot lock and giving a defensive frame.",
      "Choking over the chin rather than sinking the elbow under it.",
      "Leaving space between your chest and their back so they can turn in.",
      "Reaching for a hand grip instead of the bicep, weakening the figure-four."
    ],
    setups: [
      "Off back control after a body-lock or crucifix, hunting the seatbelt before the choke.",
      "From the back after a leg-drag or arm-drag to the back in no-gi scrambles.",
      "Off a mount-to-back transition when they turn in to escape and expose the back.",
      "From turtle by attacking the near-side seatbelt as they defend the hooks."
    ],
    followUps: [
      "Switch to a rear triangle or straitjacket armbar when they defend the neck two-on-one.",
      "Attack a bow-and-arrow (gi) or short choke off the collar when they strip the choking arm.",
      "Transition to a body-triangle-controlled armbar when they clear the hooks.",
      "Re-take the back and reset the seatbelt when they attempt a back escape to the mat."
    ],
    whenToUse: "The rear naked choke is universal across gi, no-gi, MMA, and self-defense, and it shines whenever you can maintain the back. It is especially valuable against larger opponents because a well-set choke defeats strength entirely. In the modern wrestling-influenced no-gi meta, back exposure off failed leg entries and scrambles makes the RNC the finish of choice.",
    concept: "Wedge and connection: the choking arm is a wedge closed by chest expansion, while head-to-head connection and hooks remove the escape channels around the wedge."
  },
  {
    id: "armbar",
    image: "armbar.jpg",
    name: "Armbar (Juji Gatame)",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Closed Guard / Mount",
    description: "A hyperextension of the elbow achieved by trapping the opponent's arm between your legs and driving your hips into the joint while their thumb points to the ceiling. It is a foundational attack available from nearly every dominant and guard position and the classic finish of the juji gatame family.",
    steps: [
      "Isolate one arm with a deep grip on the tricep and a control on the far collar or wrist to prevent them pulling the elbow free.",
      "Break their posture and clamp one leg heavily across their upper back to pin the shoulders.",
      "Post your other foot on the hip on the side of the target arm to pivot.",
      "Swivel your body ninety degrees so your hips slide under their trapped shoulder, hips tight to the armpit.",
      "Swing the leg across their head, pinching both knees tightly around the isolated arm.",
      "Trap their wrist to your chest with both hands, thumb pointing to the ceiling.",
      "Pinch your knees, drive your heels toward the mat, and keep their elbow above your hip line.",
      "Raise your hips slowly into the elbow to apply the break, controlling the wrist throughout."
    ],
    keyPoints: [
      "Knee pinch is non-negotiable; splayed knees let the arm slip and the head escape.",
      "Their thumb must point up so the elbow hyperextends against the joint, not rotates safely.",
      "Keep the elbow stacked above your pubic bone before lifting hips or you will only stretch the shoulder.",
      "Clamp the shoulder line with your top leg to stop them from stacking and posturing out."
    ],
    commonMistakes: [
      "Failing to break posture before pivoting, so they stack and pull the arm free.",
      "Crossing the feet loosely over the head instead of driving the heels down.",
      "Losing thumb orientation and letting them turn the elbow to a safe angle.",
      "Leaving a gap under the shoulder so they hitchhiker-escape or spin out."
    ],
    setups: [
      "From closed guard off a broken-posture cross-collar grip when they reach up to defend.",
      "From mount when they push into your chest or extend an arm to frame.",
      "Off a triangle attempt when they hide the near arm and posture up.",
      "From S-mount or back mount when they defend the neck with a straight arm."
    ],
    followUps: [
      "Switch to a triangle when they rip the arm out and leave the near arm inside.",
      "Transition to an omoplata or belly-down armbar when they roll to escape.",
      "Chain to the far-arm armbar or a sweep when they stack hard.",
      "Take the back when they turn in and clear the trapped arm."
    ],
    whenToUse: "The armbar is a fundamental every practitioner needs and works in gi and no-gi alike, though no-gi requires tighter wrist control against sweaty slips. It is a primary finish from mount and back for control-heavy players and a constant threat that pairs with the triangle and omoplata. Against explosive stackers, favor the belly-down variation to neutralize their posture.",
    concept: "Leverage isolation: isolate a single joint away from the body's helping muscles and apply a class-one lever with the hips as the fulcrum."
  },
  {
    id: "guillotine-choke",
    image: "guillotine-choke.jpg",
    name: "Guillotine Choke",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Front Headlock",
    description: "A front choke that wraps the arm around the neck from a front headlock, functioning either as a blood choke on the arteries or an air choke on the trachea depending on hand and forearm placement. It is a premier counter to level-change takedown attempts and to opponents who let their head drop below their hips.",
    steps: [
      "Snap the head down or catch it as they shoot, wrapping your choking arm around the neck so your forearm crosses the throat.",
      "Bring the choking hand deep so the blade of the wrist is under the chin, thumb up.",
      "Connect the choking hand to the other hand or wrist to close the frame.",
      "Sit to guard or pull them into closed guard so your legs pin their hips and stop the pass.",
      "Elevate your hips slightly and pinch your knees to keep their body from stepping around.",
      "Push their hips away by extending your legs while crunching your torso up into the choke.",
      "Drive your choking forearm upward into the neck and pull your hands into your own chest.",
      "Finish by arching back and squeezing the whole system as one unit."
    ],
    keyPoints: [
      "Finish with a full-body crunch and leg extension, not just an arm pull.",
      "Keep their head trapped and their body from passing to your guard-open side.",
      "Blade the wrist under the chin for the arterial version; flat forearm on the trachea for the air choke.",
      "Control the far shoulder or use guard pressure so they cannot posture straight up and out."
    ],
    commonMistakes: [
      "Squeezing without controlling the hips, letting the opponent pass to side control.",
      "Placing the pressure on the chin or face rather than the neck.",
      "Lying flat on the back instead of crunching and pushing the hips away.",
      "Letting the choking elbow flare wide so there is no forearm-to-neck contact."
    ],
    setups: [
      "As a counter to a poorly executed double- or single-leg shot where the head drops low.",
      "From a front headlock after a sprawl on their takedown attempt.",
      "Off a broken-posture closed guard when they duck their head to pass.",
      "Off a whizzer/underhook scramble when their head slips to the inside."
    ],
    followUps: [
      "Switch to the high-elbow (Marcelotine) variation when the arm-in defense appears.",
      "Transition to a D'Arce or anaconda when they clear the choke and their arm is in.",
      "Attack an arm-in guillotine or take the back when they defend the standard finish.",
      "Sweep to top or hit a guillotine sweep when they stand to relieve pressure."
    ],
    whenToUse: "The guillotine is a cornerstone no-gi finish and a critical deterrent against wrestlers who shoot with their head down, but it also works in the gi. It favors players comfortable pulling guard and controlling the front headlock. In the wrestling-heavy modern meta it doubles as both an offensive weapon and a defensive scramble threat.",
    concept: "Wedge and frame: the forearm is a wedge under the chin, closed by a full-body crunch while the legs frame the hips to deny the pass."
  },
  {
    id: "high-elbow-guillotine",
    image: "high-elbow-guillotine.jpg",
    name: "High Elbow (Marcelotine) Guillotine",
    category: "Submissions",
    difficulty: "Intermediate",
    giNoGi: "No-Gi",
    position: "Front Headlock",
    description: "Marcelo Garcia's arm-in guillotine variation where the choking elbow is driven high over the shoulder so the forearm bisects the neck even when the opponent's arm is trapped inside. It solves the classic weakness of the standard guillotine by making the arm-in position a finishing scenario rather than a defense.",
    steps: [
      "From a front headlock with their near arm inside, wrap the choking arm around the neck and shoulder.",
      "Point your choking elbow high toward the ceiling so your forearm lays across the front of the neck above their trapped arm.",
      "Feed the choking hand deep so the blade of the wrist reaches the far side of the throat.",
      "Grip the choking hand palm-to-palm or clasp the wrist, keeping the elbow high and tight.",
      "Rotate your chest toward the trapped-arm side to angle off and expose the neck.",
      "Pull the head into your chest while lifting the high elbow to cinch the forearm.",
      "Drop your bodyweight and turn away from them, using rotation rather than raw arm strength.",
      "Sit or pull guard if needed to add hip leverage and prevent the pass while finishing."
    ],
    keyPoints: [
      "The elbow must stay high and pointed up; a dropped elbow loses the arm-in advantage entirely.",
      "Angle off toward the trapped-arm side so the forearm crosses the neck rather than jamming the shoulder.",
      "Finish with body rotation and weight, not a bicep curl.",
      "Keep the choking wrist bladed deep across the far carotid, not stalled on the near shoulder."
    ],
    commonMistakes: [
      "Letting the elbow drop, which turns it into a weak standard guillotine against an arm-in defense.",
      "Staying square instead of rotating to create the cutting angle.",
      "Gripping too shallow so the forearm sits on the shoulder, not the neck.",
      "Relying on arm strength instead of turning the torso and dropping weight."
    ],
    setups: [
      "From a front headlock any time the opponent posts their near arm inside your frame.",
      "Off a sprawled takedown defense where their arm and head are both in.",
      "As an immediate switch from a standard guillotine when the arm slides in.",
      "Off an arm-drag or scramble that leaves their head and one arm on your centerline."
    ],
    followUps: [
      "Switch to a standard guillotine if they pull the near arm out.",
      "Transition to the back when they clear the neck by ducking under.",
      "Chain to a D'Arce as they drive across to defend the high elbow.",
      "Hit a guillotine sweep to top position when they stand to escape."
    ],
    whenToUse: "This is a signature no-gi weapon popularized by Marcelo Garcia and now standard in high-level submission grappling. It shines against wrestlers who defend the guillotine by shooting the arm in, precisely the situation that defeats the classic version. It rewards players who fight for the front headlock and are comfortable finishing without gi grips.",
    concept: "Vector angling: raising the elbow and rotating the torso redirects the choking forearm above the trapped arm so the vise closes on the neck instead of the shoulder."
  },
  {
    id: "kimura",
    image: "kimura.jpg",
    name: "Kimura",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Side Control / Guard",
    description: "A figure-four shoulder lock that rotates the arm internally behind the back beyond its range of motion, named for Masahiko Kimura who used it to break Helio Gracie's arm. It functions as both a high-percentage submission and a dominant controlling grip that leads to sweeps, back takes, and positional advances.",
    steps: [
      "Isolate the target arm and establish a figure-four: your near hand grips their wrist, your far hand threads under their arm to grab your own wrist.",
      "Pin their wrist to the mat or to their own body to remove slack from the shoulder.",
      "Position their elbow at roughly ninety degrees; a straight arm becomes a straight armlock instead.",
      "Kill their posting hand and clear their defensive grip on the belt or their own leg.",
      "Move your body to create a perpendicular angle to the shoulder you are attacking.",
      "Drive their wrist up toward the back of their head while keeping the elbow bent.",
      "Rotate their shoulder using your whole torso, not just the arms.",
      "Finish slowly, lifting the elbow and rotating the hand behind the back until the shoulder gives."
    ],
    keyPoints: [
      "Keep the elbow bent near ninety degrees so torque loads the shoulder, not the elbow.",
      "Pin the wrist and break their grip first; a gripped-out defender cannot be turned.",
      "Rotate with the torso and hips for power; arms alone stall against a strong opponent.",
      "Create an angle off the shoulder rather than yanking straight, which their frame can resist."
    ],
    commonMistakes: [
      "Letting the arm straighten so the lock slides off the shoulder.",
      "Failing to strip their grip when they clasp their belt, pants, or their own leg.",
      "Attacking square-on with pure arm strength instead of angling and using bodyweight.",
      "Losing wrist control and allowing them to spin the elbow out."
    ],
    setups: [
      "From side control when they push on your neck or leave the far arm reaching.",
      "From closed guard when they plant both hands on the mat to posture.",
      "From half guard bottom off an underhook when they post the far arm.",
      "Off a sprawl or front headlock when their arm is exposed on the mat."
    ],
    followUps: [
      "Use the kimura grip to sweep from guard when they resist the lock by turning away.",
      "Take the back when they roll forward to relieve shoulder pressure.",
      "Transition to a straight armlock or guillotine when they straighten the arm.",
      "Advance to mount or north-south using the trapped-arm control as a steering wheel."
    ],
    whenToUse: "The kimura is a universal control-and-finish available in gi and no-gi from side control, half guard, guard, and turtle. It is a favorite of pressure and control players because the grip itself is a positional tool, not just a submission. In the modern meta it anchors the 'kimura trap' systems that flow between sweeps, back takes, and the finish.",
    concept: "Leverage isolation with torsion: a figure-four grip isolates the shoulder and applies rotational torque, using bodyweight and angle as the lever."
  },
  {
    id: "americana",
    image: "americana.jpg",
    name: "Americana (Keylock)",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Side Control / Mount",
    description: "A figure-four shoulder lock that rotates the arm externally, the mirror image of the kimura, typically finished from a top pinning position. It is one of the first submissions taught because the top pressure and pinned wrist make it accessible and low-risk to attempt.",
    steps: [
      "From side control or mount, pin the far arm to the mat with their elbow bent at ninety degrees, palm up.",
      "Grip their wrist with your near hand, thumbless, driving it toward the mat.",
      "Thread your far hand under their upper arm and grab your own wrist to form the figure-four.",
      "Use your chest and shoulder to keep their wrist pinned as you lower your bodyweight.",
      "Lift their elbow slightly off the mat with your bottom forearm, acting as a fulcrum.",
      "Drag their hand down toward their hip in a paintbrush motion, keeping the elbow high.",
      "Keep the wrist and elbow moving together as a locked unit so the shoulder rotates.",
      "Apply the finish slowly by rotating the hand toward the hip until the shoulder gives."
    ],
    keyPoints: [
      "Maintain the ninety-degree elbow bend; a straightening arm escapes the lock.",
      "Drag the hand toward the hip, not straight down, and keep the elbow lifted as the fulcrum.",
      "Use bodyweight and the chest to pin the wrist rather than raw arm strength.",
      "Keep their elbow off the mat so the shoulder actually rotates."
    ],
    commonMistakes: [
      "Letting the elbow drift toward the head, which relieves shoulder rotation.",
      "Allowing the arm to straighten so the figure-four slides off.",
      "Cranking the wrist without lifting the elbow, which does nothing to the shoulder.",
      "Losing top pressure so they bridge and recover the arm."
    ],
    setups: [
      "From side control when the opponent frames or leaves the far arm bent on the mat.",
      "From mount when they push into your chest and expose a bent arm.",
      "As a follow-up when a kimura attempt is defended and the arm rotates the other way.",
      "Off a cross-face when they turn away and their bottom arm lies palm-up."
    ],
    followUps: [
      "Switch to a straight armlock when they straighten the arm to defend.",
      "Transition to a kimura when they rotate the elbow toward their head.",
      "Chain to mount or an arm-triangle when they turn into you to escape.",
      "Use the trapped arm to isolate for a step-over armbar."
    ],
    whenToUse: "The americana is a beginner-friendly, position-dependent finish that stays relevant against opponents who leave a bent arm on the mat under heavy top pressure. It appears less at elite level than the kimura because it is easier to defend by straightening the arm, but it remains a reliable option from strong side control and mount. It works equally in gi and no-gi.",
    concept: "Leverage isolation with torsion: the figure-four isolates the shoulder and the lifted elbow becomes the fulcrum for external rotation."
  },
  {
    id: "omoplata",
    image: "omoplata.jpg",
    name: "Omoplata",
    category: "Submissions",
    difficulty: "Intermediate",
    giNoGi: "Both",
    position: "Closed Guard",
    description: "A shoulder lock applied with the legs, rotating the opponent's arm behind their back while your leg triangles over their shoulder and your hips control the joint. Beyond the finish it is one of the most versatile control positions in the guard, feeding sweeps, back takes, and transitions.",
    steps: [
      "From guard, control a wrist or sleeve and push the arm across toward the far hip to isolate one arm.",
      "Swing the leg on the arm side over their shoulder, similar to a triangle entry, but keep the arm trapped underneath.",
      "Rotate your body toward the trapped arm, spinning perpendicular so your hips face away from their head.",
      "Bring your triangled leg's shin down across the back of their shoulder to pin it.",
      "Sit up and control their far hip or belt to prevent the forward roll escape.",
      "Clamp your knees together to trap the shoulder and keep the arm rotated behind them.",
      "Post up and drive your hips toward their trapped shoulder to load the joint.",
      "Finish by leaning your torso forward and rotating the shoulder, keeping their hips controlled."
    ],
    keyPoints: [
      "Control the far hip or belt to stop the number-one escape, the forward roll.",
      "Rotate fully perpendicular so your hips, not the mat, apply the shoulder torque.",
      "Keep the trapped arm pinned and knees pinched so the shoulder cannot slide free.",
      "Sit up before finishing; lying flat lets them posture and pull the arm out."
    ],
    commonMistakes: [
      "Failing to control the hips, allowing the forward-roll escape.",
      "Staying parallel so there is no rotational pressure on the shoulder.",
      "Letting the trapped arm straighten and slide out between the legs.",
      "Finishing flat on the back with no torso lean, giving away all the leverage."
    ],
    setups: [
      "As a follow-up to a defended triangle when they hide the far arm and posture up.",
      "From spider or lasso guard when the sleeve control lets you swing the leg through.",
      "Off a failed armbar when they pull the arm out and it stays trapped low.",
      "From rubber guard or a Gubber setup where the shoulder is already isolated."
    ],
    followUps: [
      "Sweep to the top position when they roll forward to escape the shoulder lock.",
      "Take the back when they stand and turn away from the pressure.",
      "Transition to a triangle or armbar when they pull the trapped arm free.",
      "Hit a Gogoplata or reverse omoplata from the same shoulder entanglement."
    ],
    whenToUse: "The omoplata is a versatile intermediate attack that rewards flexible guard players in both gi and no-gi, and it excels as a sweep-and-control system as much as a finish. It pairs naturally with triangle and armbar chains, punishing opponents who defend one by giving up another. It is especially valuable when the opponent postures out of tighter submissions.",
    concept: "Leverage isolation with the legs: the hips and leg form a lever on the shoulder while hip control removes the forward-roll release valve."
  },
  {
    id: "darce-choke",
    image: "darce-choke.jpg",
    name: "D'Arce Choke",
    category: "Submissions",
    difficulty: "Intermediate",
    giNoGi: "No-Gi",
    position: "Front Headlock / Half Guard Top",
    description: "An arm-in blood choke where the choking arm threads under the opponent's near armpit and across the neck, closing the vise with your own bicep and their shoulder. It is a mirror of the anaconda and a dominant no-gi weapon from front headlock and half-guard top positions.",
    steps: [
      "From a front headlock or half-guard top with their near arm extended, feed your choking arm deep under their armpit.",
      "Thread the arm across the front of the neck so your hand emerges near their far shoulder or neck.",
      "Bring your other arm behind their head to meet the choking hand.",
      "Lock a gable or palm-to-palm grip, keeping the choking bicep tight to their neck.",
      "Sprawl your hips heavy and flatten them out, driving your shoulder into the back of their head.",
      "Walk toward their far side to tighten the wedge of your bicep against their neck and their own shoulder against the other artery.",
      "Drop your chest and squeeze your elbows together, curling the choking hand toward your own head.",
      "Finish by lowering your body and turning the top of your head toward the mat to close the vise."
    ],
    keyPoints: [
      "The choking arm must go deep under the armpit and across the neck, not just around the head.",
      "Flatten and control the hips first; a choke on a turtled opponent with free hips will fail.",
      "Squeeze the bicep against one artery while their trapped shoulder compresses the other.",
      "Drop the head and drive the shoulder to add finishing pressure, not just arm squeeze."
    ],
    commonMistakes: [
      "Threading too shallow so the forearm sits on the shoulder instead of the neck.",
      "Attempting the finish while their hips are free and they can spin out.",
      "Squeezing without dropping bodyweight or turning the head to the mat.",
      "Losing the grip when the choking hand cannot reach the second arm; angle and depth fix this."
    ],
    setups: [
      "From half-guard top when the bottom player gives up an underhook and extends the near arm.",
      "From a sprawl on a shot when their head and one arm are trapped in front.",
      "As a switch from a failed guillotine when their arm slides inside.",
      "Off a snap-down or front headlock scramble in no-gi."
    ],
    followUps: [
      "Switch to an anaconda choke when they turn away from the D'Arce pressure.",
      "Pass to mount or side control when they defend the neck and give up the hips.",
      "Attack a Peruvian necktie or Japanese necktie from the same head-and-arm control.",
      "Take the back when they turn in to escape the choke."
    ],
    whenToUse: "The D'Arce is a high-level no-gi staple from half-guard top and front headlock, ideal against opponents who overextend the near arm while defending a pass. It rewards heavy pressure passers and front-headlock specialists. In the modern no-gi meta it is a standard reward for beating the underhook battle in half guard.",
    concept: "Inside-channel wedge: the choking arm occupies the channel under the armpit and across the neck, closing a vise between your bicep and the opponent's own shoulder."
  },
  {
    id: "anaconda-choke",
    image: "anaconda-choke.jpg",
    name: "Anaconda Choke",
    category: "Submissions",
    difficulty: "Intermediate",
    giNoGi: "No-Gi",
    position: "Front Headlock",
    description: "An arm-in front-headlock choke where the choking arm threads under the near armpit and the finish comes by rolling the opponent and compressing the neck against their own trapped shoulder. It is the roll-to-finish sibling of the D'Arce, attacking the same channel from a front headlock.",
    steps: [
      "From a front headlock, thread your choking arm under their near armpit and around toward the neck.",
      "Grab your own bicep or clasp a gable grip with the choking arm and your other arm.",
      "Cinch the grip so the crook of your elbow surrounds the neck and their trapped shoulder.",
      "Drive your shoulder into the back of their head to load the position.",
      "Roll them over your threaded arm toward the choking side, ending with them on their back or side.",
      "Come up onto your knees and toes, keeping your chest heavy on their trapped shoulder.",
      "Pinch your elbows and curl the choking hand while walking your knees toward their head.",
      "Finish by squeezing the vise and lowering your bodyweight into the neck."
    ],
    keyPoints: [
      "The roll must go over the threaded (choking) arm so their weight helps close the vise.",
      "Keep the choking crook of the elbow on the neck, not sliding up to the jaw.",
      "Chest pressure on the trapped shoulder is what compresses the second artery.",
      "Walk the knees toward the head after the roll to tighten rather than muscling the arms."
    ],
    commonMistakes: [
      "Rolling to the wrong side so the choke loosens instead of tightening.",
      "Ending up flat instead of coming up on the knees to apply chest pressure.",
      "Threading too shallow, leaving the forearm on the shoulder.",
      "Squeezing with the arms alone without settling bodyweight into the neck."
    ],
    setups: [
      "From a front headlock after snapping the opponent down.",
      "As a counter to a shot where you sprawl and trap head and near arm.",
      "As a switch from a failed guillotine when the near arm slips in.",
      "Off a turtle when they leave the near arm exposed under the armpit."
    ],
    followUps: [
      "Switch to a D'Arce when the roll does not materialize and you flatten them instead.",
      "Attack a Peruvian necktie from the same threaded-arm control.",
      "Take the back if they defend the neck and turn away after the roll.",
      "Pass to side control or mount when they surrender the hips defending the choke."
    ],
    whenToUse: "The anaconda is a no-gi front-headlock finish that shines against wrestlers and opponents who post their head and near arm forward, and it converts a scramble directly into a submission via the roll. It suits aggressive front-headlock players. In modern no-gi it pairs with the D'Arce as a two-directional threat from the same entry.",
    concept: "Inside-channel wedge plus kuzushi: the threaded arm forms the choking wedge while the roll uses the opponent's own falling weight to close the vise."
  },
  {
    id: "arm-triangle",
    image: "arm-triangle.jpg",
    name: "Arm Triangle (Kata Gatame)",
    category: "Submissions",
    difficulty: "Intermediate",
    giNoGi: "Both",
    position: "Mount / Side Control",
    description: "A blood choke that traps the opponent's own arm across their neck, compressing one carotid with their shoulder and the other with your bicep and head. It is finished from a top pin and is one of the highest-percentage submissions in MMA and no-gi from the mount and side control.",
    steps: [
      "From mount or side control, drive their near arm across their own face and neck, above the ear.",
      "Shoot your head to the same side, sliding your shoulder into the back of their trapped arm.",
      "Wrap your choking arm around the back of their neck and clasp a gable grip, pinning your head to theirs.",
      "Squeeze the elbows so their shoulder presses one carotid and your bicep presses the other.",
      "Come off the mount to the side, sprawling your hips out perpendicular to their body.",
      "Keep your chest heavy on their chest and drive your weight into the choke.",
      "Walk your feet away from their head, staying low and tight, to tighten the vise.",
      "Finish by squeezing the grip and pressing your head down while keeping the hips low and sprawled."
    ],
    keyPoints: [
      "Their arm must be pushed high, above the ear, so it lands across the neck and not the chest.",
      "Come off to the side and sprawl the hips; staying square in mount kills the pressure.",
      "Keep your head glued tight to theirs so there is no space to release the near carotid.",
      "Squeeze bicep and shoulder together; the choke is a vise, not a headlock."
    ],
    commonMistakes: [
      "Trying to finish while still square in mount rather than transitioning to the side.",
      "Failing to push the arm high enough, so it blocks the chin instead of the artery.",
      "Leaving the hips low and legs bunched near their head, giving a bridging escape.",
      "Letting the head float off theirs, releasing one side of the choke."
    ],
    setups: [
      "From mount when they push into your chest or extend an arm to frame.",
      "As a follow-up when an americana or armbar is defended and the arm crosses the neck.",
      "From side control off a failed submission when their near arm is high.",
      "Off a guard pass where you can immediately trap the far arm across the neck."
    ],
    followUps: [
      "Switch to an armbar or kimura when they clear the head and defend the choke.",
      "Transition to mount or knee-on-belly when they turn away and the choke stalls.",
      "Attack a north-south choke or D'Arce as you circle to their head.",
      "Re-mount and re-trap the arm when they bridge to escape."
    ],
    whenToUse: "The arm triangle is a top-position finish that works in gi, no-gi, and MMA, and it is a favorite of heavy pressure and control players who beat opponents to the pin. It is especially effective against opponents who habitually frame with a near arm from mount. In competition it is a reliable finish that also functions as a control to pass or reposition.",
    concept: "Wedge and self-blockade: the opponent's own trapped arm becomes one wall of the choke, with your bicep and head forming the other."
  },
  {
    id: "north-south-choke",
    image: "north-south-choke.jpg",
    name: "North-South Choke",
    category: "Submissions",
    difficulty: "Advanced",
    giNoGi: "No-Gi",
    position: "North-South",
    description: "A blood choke applied from the north-south position by trapping the opponent's neck in the crook of your elbow and using shoulder and bicep pressure against the carotid. Popularized at the highest level by Marcelo Garcia, it is a deceptively technical choke that relies on precise angle and shoulder placement rather than force.",
    steps: [
      "From north-south or a transition to it, control the near arm and slide your chest over their face and shoulder.",
      "Thread your choking arm around their neck so the crook of your elbow wraps the far side of the neck.",
      "Trap their near arm behind your knee or with your leg so it cannot frame.",
      "Lower your shoulder and bicep onto the near carotid, angling your chest toward their far hip.",
      "Clamp your choking hand to your own thigh or grab your other wrist to close the frame.",
      "Slide your body down and toward their legs so your bicep drives into the neck.",
      "Drop your shoulder weight and pinch the neck between your arm and shoulder.",
      "Finish by squeezing and rotating slightly toward their trapped arm, using bodyweight over strength."
    ],
    keyPoints: [
      "Trap the near arm so it cannot defend or frame against the shoulder pressure.",
      "The finish is an angle-and-weight choke; sliding down toward their hips tightens it more than squeezing.",
      "Drop the shoulder onto the carotid, not the trachea, for the blood choke.",
      "Keep the head and chest heavy so they cannot turn in and relieve the pressure."
    ],
    commonMistakes: [
      "Squeezing with the arm alone instead of driving shoulder weight and sliding the body.",
      "Leaving the near arm free so they frame and turn out.",
      "Placing pressure on the windpipe rather than the artery, stalling the finish.",
      "Staying too high toward their head instead of angling toward the hips."
    ],
    setups: [
      "From north-south after a mount or side-control transition when they turn to their side.",
      "As a follow-up when an opponent turns in to escape side control and gives the neck.",
      "Off a failed guillotine or arm-in scramble that puts you at the head.",
      "From front headlock when they roll to their back under pressure."
    ],
    followUps: [
      "Switch to a north-south kimura when they defend the neck and expose the far arm.",
      "Transition to mount or an armbar when they turn away from the choke.",
      "Re-establish side control and re-attack when they clear the choking arm.",
      "Chain to a crucifix or spinning armbar off the trapped near arm."
    ],
    whenToUse: "The north-south choke is an advanced no-gi finish best suited to control-oriented players who can maintain the top pin and dominate the head position. It excels against opponents who defensively turn to their side under side control. Though technical, it became a signature high-level submission through Marcelo Garcia's competition success.",
    concept: "Angle and bodyweight compression: precise shoulder placement on the carotid plus a downward sliding angle closes the choke with weight rather than force."
  },
  {
    id: "bow-and-arrow-choke",
    image: "bow-and-arrow-choke.jpg",
    name: "Bow and Arrow Choke",
    category: "Submissions",
    difficulty: "Intermediate",
    giNoGi: "Gi",
    position: "Back Control",
    description: "One of the strongest gi chokes, applied from back control using a deep cross-collar grip while the legs act like the bow, pulling the opponent's body one way and the collar the other. The mechanical advantage of the whole body against the neck makes it nearly impossible to muscle out of once locked.",
    steps: [
      "From back control, thread your choking hand deep into the far collar, four fingers in, thumb out, as deep as possible.",
      "Use your other hand to feed the collar and clear their defensive grips.",
      "With your free hand, grip their pant leg or knee on the same side as your choking hand.",
      "Rotate your body perpendicular, coming out from behind toward their shoulder like drawing a bow.",
      "Swing your leg over their near shoulder, using it to trap and steer their upper body.",
      "Place your other leg across their back or hip to control and prevent them turning in.",
      "Pull the collar toward you with the choking hand while pushing their leg away with the other hand.",
      "Extend through your legs and arch back to draw the bow, tightening the collar into the neck."
    ],
    keyPoints: [
      "The collar grip must be deep, at the back of the neck, before you rotate out.",
      "Use the leg over the shoulder to steer their body and prevent them from following you.",
      "Finish by pulling the collar and pushing the leg simultaneously, using the whole body as the bow.",
      "Trap the near arm or shoulder so they cannot turn in and defend the collar."
    ],
    commonMistakes: [
      "A shallow collar grip that slips out when you apply pressure.",
      "Rotating out before securing the grip and losing the choke entirely.",
      "Failing to control the far leg, so the push-pull mechanism has nothing to pull against.",
      "Letting them turn in toward you and clear the choking arm."
    ],
    setups: [
      "From back control after establishing a deep collar grip with the seatbelt.",
      "As a follow-up when a rear naked choke is defended in the gi and you switch to the collar.",
      "Off a turtle when you attack the collar and spin to the back.",
      "From a mount-to-back transition where you secure the collar as they turn."
    ],
    followUps: [
      "Switch to an armbar using the leg over the shoulder when they defend the collar.",
      "Transition to a triangle or crucifix when they clear the choking arm.",
      "Re-take the back when they roll to escape the rotation.",
      "Attack the near collar with a short choke when they two-hand defend the far collar."
    ],
    whenToUse: "The bow and arrow is a premier gi choke from the back and is a competition-winning staple at every level of IBJJF grappling. It shines against opponents who defend the rear naked choke, since the collar grip cannot simply be peeled. It rewards players who fight for deep collar control from back mount.",
    concept: "Whole-body leverage: the legs and torso form a bow that draws the collar against the neck, multiplying force far beyond what the arms alone could apply."
  },
  {
    id: "cross-collar-choke",
    image: "cross-collar-choke.jpg",
    name: "Cross Collar Choke",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Gi",
    position: "Closed Guard / Mount",
    description: "A fundamental gi blood choke using two deep cross grips in the opponent's collars, the bladed wrists compressing both carotid arteries as the elbows draw together. It is a bedrock technique from closed guard and mount that teaches grip depth and pulling mechanics.",
    steps: [
      "Open the collar with one hand and feed the first grip deep, four fingers inside, thumb out, to the back of the neck.",
      "Break their posture so the first grip can reach deep behind the neck.",
      "Bring the second hand across and grip the opposite collar, either above or below the first hand.",
      "Set both bladed wrists (knife edge) against the sides of the neck on the carotids.",
      "Pull the opponent's head down toward your chest to remove slack.",
      "Draw your elbows down and toward your own ribs, not out to the sides.",
      "Rotate your wrists so the blade of the forearm turns into the arteries.",
      "Finish by pulling the head in and flaring the elbows down while expanding the chest."
    ],
    keyPoints: [
      "At least the first grip must be deep behind the neck; a shallow grip chokes nothing.",
      "The blade of the wrist, not the flat, presses the carotids.",
      "Pull with the elbows down toward your ribs and the head toward your chest, not a wide spreading motion.",
      "Break posture first; an upright opponent has too much distance to choke."
    ],
    commonMistakes: [
      "Grips too shallow to reach the neck, so the forearms press the jaw or air.",
      "Pulling the elbows out wide instead of down and in.",
      "Failing to break posture, leaving the opponent's head out of range.",
      "Using the flat of the wrist rather than the bony blade against the arteries."
    ],
    setups: [
      "From closed guard after breaking posture with a collar grip.",
      "From mount when the opponent lies flat or turns their head.",
      "As a follow-up when a sweep or armbar is defended and the collar opens up.",
      "Off a broken-posture guard when they reach to open your legs."
    ],
    followUps: [
      "Switch to a scissor or hip-bump sweep when they posture to defend the choke.",
      "Transition to an armbar or triangle when they push a defending arm across.",
      "Attack the bow-and-arrow from the back if they turn to escape.",
      "Combine with a loop choke when they duck their head to defend."
    ],
    whenToUse: "The cross collar choke is a fundamental gi submission that stays viable at every level from closed guard and mount, and it is a classic threat that opens sweeps and armbars. It rewards players who develop deep, fast grips and posture control. It is a pure gi technique with no direct no-gi equivalent.",
    concept: "Bladed leverage on the arteries: two cross grips turn the collar and forearms into levers that compress both carotids as the elbows draw inward."
  },
  {
    id: "ezekiel-choke",
    image: "ezekiel-choke.jpg",
    name: "Ezekiel Choke",
    category: "Submissions",
    difficulty: "Intermediate",
    giNoGi: "Gi",
    position: "Mount",
    description: "A gi choke that uses your own sleeve as the choking implement, sliding the forearm across the neck while the sleeve grip anchors the vise. Named after Ezequiel Paraguassu, it is uniquely available from the top of mount and even from underneath, making it a versatile grip-dependent finish.",
    steps: [
      "From mount, slide one hand inside your opposite sleeve, gripping the cuff to anchor the choke.",
      "Feed the gripping arm behind the opponent's neck.",
      "Bring the free hand's forearm across the front of their throat, blade of the wrist down.",
      "Cinch the sleeve grip so the two forearms trap the neck like a scissor.",
      "Lower your chest and head to close the space and keep them pinned.",
      "Slide the choking forearm across the neck rather than pressing straight down.",
      "Draw your elbows together, curling the choking hand toward you.",
      "Finish by dropping your weight and squeezing the forearms into the neck."
    ],
    keyPoints: [
      "The sleeve grip is the anchor; without it the forearm has nothing to close against.",
      "Slide the choking forearm across the throat, applying a shearing motion, not a downward press.",
      "Keep chest and head heavy so they cannot bridge you off during the finish.",
      "Blade the wrist across the neck for arterial compression."
    ],
    commonMistakes: [
      "A weak or shallow sleeve grip that pops open under pressure.",
      "Pressing straight down on the throat instead of sliding across.",
      "Rising up and losing base, allowing a bridge-and-roll escape.",
      "Feeding the arm too shallow so the forearm sits on the jaw."
    ],
    setups: [
      "From mount when the opponent frames or turns their head to defend.",
      "From the bottom of closed guard or turtle as a surprise counter-choke.",
      "As a follow-up when an americana or arm-triangle is defended in mount.",
      "Off a cross-face when they turn away and expose the far side of the neck."
    ],
    followUps: [
      "Switch to an arm-triangle or americana when they defend the sleeve choke.",
      "Transition to an armbar when they push a defending arm up.",
      "Take the back when they turn in to escape the mount pressure.",
      "Re-mount and re-grip when they bridge and partially escape."
    ],
    whenToUse: "The Ezekiel is a gi-only choke that excels from mount against opponents who turtle their neck or turn away, and it is one of the few chokes available even from the bottom position. It rewards players comfortable managing sleeve grips under pressure. It is a strong option when standard collar chokes are unavailable because the opponent has buried their collars.",
    concept: "Self-anchored vise: the sleeve grip converts your own gi into the closing wall of a two-forearm scissor across the neck."
  },
  {
    id: "loop-choke",
    image: "loop-choke.jpg",
    name: "Loop Choke",
    category: "Submissions",
    difficulty: "Advanced",
    giNoGi: "Gi",
    position: "Front Headlock / Guard",
    description: "A gi choke that loops a collar grip around the neck and finishes by circling your head and dropping your bodyweight, using the opponent's forward pressure against them. It is a signature counter to aggressive posture-down passers and duck-under attempts.",
    steps: [
      "Secure a grip on the near-side collar with your fingers inside, blade of the wrist ready.",
      "Feed or invite the opponent's head forward, often as they attempt to pass or posture down.",
      "Bring your free hand or forearm across the back of their neck to form the loop.",
      "Wrap the collar around the neck so your gripping forearm crosses one carotid.",
      "Circle your own head toward their far hip, pulling the loop tight around the neck.",
      "Drop your bodyweight and roll slightly to add momentum to the loop.",
      "Trap their head and keep your elbow tight so the loop cannot unspool.",
      "Finish by rolling to your side or belly-down, tightening the collar with your falling weight."
    ],
    keyPoints: [
      "The choke uses the opponent's forward pressure; invite the head down rather than fighting it.",
      "Circle your own head and drop weight to tighten the loop rather than pulling with the arm.",
      "Keep the collar grip snug against the carotid before committing to the roll.",
      "Trap the head so the loop stays closed as you rotate."
    ],
    commonMistakes: [
      "Trying to muscle the choke with the arm instead of using the loop and bodyweight.",
      "A loose collar grip that unwinds as you rotate.",
      "Attempting it against an upright, postured opponent with no forward pressure.",
      "Failing to trap the head, letting them pull out the back of the loop."
    ],
    setups: [
      "As a counter to a knee-slice or over-under passer who drives their head forward.",
      "Off a duck-under or arm-drag attempt in the gi when their head dips.",
      "From front headlock when you have a collar grip and they posture down.",
      "From guard when they reach in and lower their head to open your legs."
    ],
    followUps: [
      "Sweep to top when they resist the roll and post to defend.",
      "Transition to the back when they duck through to escape the loop.",
      "Switch to a guillotine or clock choke when the loop opens.",
      "Chain to a cross-collar choke when they posture back up."
    ],
    whenToUse: "The loop choke is an advanced gi technique that punishes aggressive, head-forward passing and is a favorite counter for guard players against pressure passers. It rewards timing and grip precision over strength. In competition it is a lethal surprise against opponents who habitually lower their head to pass.",
    concept: "Redirection and kuzushi: the opponent's own forward momentum is looped into a collar vise closed by your falling bodyweight."
  },
  {
    id: "inside-heel-hook",
    image: "inside-heel-hook.jpg",
    name: "Inside Heel Hook",
    category: "Submissions",
    difficulty: "Advanced",
    giNoGi: "No-Gi",
    position: "Inside Sankaku (Honey Hole)",
    description: "A rotational knee attack that captures the heel to twist the lower leg and torque the knee's ligaments, applied from inside positions such as the inside sankaku or 411/honey hole. It is the highest-finishing submission of the modern leg lock meta and demands strict control and controlled application because the ligament damage is sudden.",
    steps: [
      "Establish an inside sankaku (inside senkaku / 411) with your legs entangling their near leg and controlling the knee line.",
      "Pinch your knees to trap their thigh and expose the heel, killing their ability to rotate free.",
      "Bring the heel to the crook of your choking-side elbow, capturing it with the blade of your forearm.",
      "Clasp a palm-to-palm or figure-four grip to lock the heel against your forearm.",
      "Pin their knee and hip with your legs so the femur cannot follow the rotation.",
      "Elevate the captured heel and rotate it toward their little-toe side (laterally) to load the knee.",
      "Turn your whole torso in the direction of the rotation, not just the arms.",
      "Apply the finish slowly and controlled, as the ACL and MCL fail with little warning."
    ],
    keyPoints: [
      "Control the knee line first; the heel hook only works when the femur cannot rotate away.",
      "Trap the heel in the crook of the elbow, not the hand, and rotate laterally toward the little toe.",
      "Finish by rotating the torso, keeping the entanglement tight so they cannot spin out.",
      "Apply slowly in training; heel hooks damage ligaments before pain gives a tap warning."
    ],
    commonMistakes: [
      "Attacking the heel before securing the knee, letting them spin their leg free (boot).",
      "Gripping the foot with the hand instead of trapping the heel with the forearm.",
      "Rotating in the wrong direction so the ankle bends instead of the knee twisting.",
      "Applying explosively, which causes injury and violates most training etiquette."
    ],
    setups: [
      "From ashi garami progressing to inside sankaku as they turn to escape.",
      "Off a single-leg-X or X-guard entry when you elevate and enter the leg.",
      "From the K-guard or false-reap entries in the modern leg-lock game.",
      "As a counter to a passer's leg drag when you catch the near leg and enter inside."
    ],
    followUps: [
      "Switch to a kneebar when they straighten the leg to defend the heel.",
      "Transition to a backside-50/50 or take the back when they hide the heel.",
      "Re-enter to the sankaku when they boot the heel out.",
      "Attack a toe hold when the heel is buried but the foot is exposed."
    ],
    whenToUse: "The inside heel hook is the crown jewel of the modern no-gi leg-lock meta and the highest-percentage finish in submission-only formats like ADCC and EBI. It rewards specialists in ashi garami and the sankaku positions. It is banned in most gi rulesets and is applied only with strict control due to its injury profile.",
    concept: "Rotational leverage across an isolated joint: trapping the knee line lets heel rotation transmit shear directly into the knee's ligaments."
  },
  {
    id: "outside-heel-hook",
    image: "outside-heel-hook.jpg",
    name: "Outside Heel Hook",
    category: "Submissions",
    difficulty: "Advanced",
    giNoGi: "No-Gi",
    position: "50/50 / Outside Ashi",
    description: "A rotational knee attack that captures the heel from an outside leg entanglement such as 50/50 or outside ashi garami, twisting the lower leg medially to torque the knee. It anchors the 50/50 exchange that dominates high-level no-gi and is subject to the same controlled-application demands as its inside counterpart.",
    steps: [
      "Establish 50/50 or outside ashi garami, controlling their leg with your legs and pinching the knees.",
      "Kill the knee line by keeping their thigh pinned and their foot from rotating free.",
      "Capture the heel in the crook of your outside-arm elbow, blade of the forearm across the Achilles.",
      "Lock a figure-four or palm-to-palm grip to fix the heel to your forearm.",
      "Control their hip and knee with your legs so the femur cannot follow the twist.",
      "Elevate the heel and rotate it toward their big-toe side (medially) to load the knee.",
      "Rotate your torso away, using bodyweight and hip movement rather than arm strength.",
      "Apply the finish slowly and with control, respecting the abrupt ligament failure."
    ],
    keyPoints: [
      "Win the knee-line and inside-position battle in 50/50 before exposing the heel.",
      "Rotate the heel medially (toward the big toe) for the outside variation.",
      "Finish with torso rotation and hip movement, keeping the entanglement locked.",
      "Control the far leg and hip so they cannot rotate out or counter-attack your leg."
    ],
    commonMistakes: [
      "Fighting for the heel without first controlling the knee line in 50/50.",
      "Rotating the wrong direction so you attack the ankle instead of the knee.",
      "Losing the inside position in the 50/50 exchange and getting caught yourself.",
      "Cranking explosively rather than applying the controlled rotation."
    ],
    setups: [
      "From 50/50 after winning the inside sankaku or knee-line battle.",
      "Off an outside ashi garami entry from a failed pass or a leg drag.",
      "As a counter to the opponent entering your legs, re-countering in 50/50.",
      "Off a single-leg-X to 50/50 transition when they defend the inside attack."
    ],
    followUps: [
      "Switch to a kneebar or toe hold when the heel is defended.",
      "Transition to backside 50/50 or take the back when they turn away.",
      "Re-enter the entanglement when they boot the heel free.",
      "Attack an inside heel hook by switching legs to the sankaku when possible."
    ],
    whenToUse: "The outside heel hook governs the 50/50 position that is ubiquitous in elite no-gi and ADCC competition, where whoever wins the inside heel-line usually wins the exchange. It rewards leg-lock specialists who understand the counter-for-counter nature of 50/50. Like all heel hooks it is banned in most gi rulesets and applied only with control."
    ,
    concept: "Rotational leverage from a mutual entanglement: controlling the knee line first converts medial heel rotation into destructive knee shear."
  },
  {
    id: "straight-ankle-lock",
    image: "straight-ankle-lock.jpg",
    name: "Straight Ankle Lock",
    category: "Submissions",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Ashi Garami",
    description: "A footlock that hyperextends the ankle by driving the blade of your forearm into the Achilles tendon while arching your body backward. It is the safest and most beginner-legal leg attack, permitted in most rulesets, and serves as the gateway into the broader ashi garami and leg-lock system.",
    steps: [
      "Enter an ashi garami, trapping one of the opponent's legs between yours with an outside hook over their thigh.",
      "Pinch your knees to control their leg and keep them from rotating away.",
      "Slide your same-side arm under their Achilles so the blade of your forearm sits on the tendon.",
      "Clasp your hands in a figure-four or gable grip, cupping their heel to your chest.",
      "Pull their foot tight to your chest, eliminating any slack in the ankle.",
      "Point their toes and drive the blade of your forearm into the Achilles.",
      "Arch your hips and lean your shoulders back to hyperextend the ankle.",
      "Finish by extending through the hips while curling the heel toward you."
    ],
    keyPoints: [
      "The blade of the radius bone, not the crook of the elbow, drives into the Achilles.",
      "Pull the heel tight to your chest to remove slack before arching.",
      "Finish with a hip extension and shoulder lean-back, not just an arm squeeze.",
      "Control their leg with your legs so they cannot roll out or rotate free."
    ],
    commonMistakes: [
      "Placing the crook of the elbow rather than the forearm blade on the tendon.",
      "Leaving slack in the ankle so the arch does nothing.",
      "Failing to control the free leg, letting them kick or roll to escape.",
      "Crossing your feet and giving up leg control in the ashi garami."
    ],
    setups: [
      "From open guard when the opponent stands and you enter ashi garami on the lead leg.",
      "As a counter to a torreando or leg-drag pass by catching the passing leg.",
      "Off a single-leg-X entry as the beginner-legal finish.",
      "From butterfly or seated guard when you fall into an ashi garami entanglement."
    ],
    followUps: [
      "Progress to an inside or outside heel hook (in heel-hook-legal rulesets) when the ankle lock is defended.",
      "Switch to a kneebar when they straighten and pull the leg through.",
      "Transition to a leg-drag or sweep when they defend and posture.",
      "Re-enter to a stronger ashi position when they hide the heel."
    ],
    whenToUse: "The straight ankle lock is the most beginner-appropriate and widely legal leg attack, allowed even in IBJJF white-belt divisions, making it the entry point to the leg-lock system for everyone. It works in gi and no-gi and is a reliable finish and control from ashi garami. Even at elite level it remains a threat that forces defensive reactions opening up heel hooks.",
    concept: "Isolated joint hyperextension: the forearm blade acts as a fulcrum against the Achilles while hip extension provides the lever to hyperextend the ankle."
  },
  {
    id: "kneebar",
    image: "kneebar.jpg",
    name: "Kneebar",
    category: "Submissions",
    difficulty: "Advanced",
    giNoGi: "Both",
    position: "Leg Entanglement / Top Half",
    description: "A joint lock that hyperextends the knee, mechanically analogous to an armbar but applied to the leg, by trapping the thigh between your legs and driving the hips into the back of the knee. It is a powerful finish from leg entanglements and top half guard, punishing straightened legs.",
    steps: [
      "Isolate one of the opponent's legs, trapping the thigh high between your own legs.",
      "Pinch your knees to pin their thigh so the femur cannot rotate or slide out.",
      "Bring their foot to one side of your body, controlling it against your chest or armpit.",
      "Align the back of their knee joint with your pubic bone or hip.",
      "Point their toes and control the foot to prevent them spinning to relieve pressure.",
      "Fall back or drop your hips, keeping their leg trapped tight and straight.",
      "Drive your hips forward into the back of their knee while pulling the foot toward you.",
      "Finish by arching your hips into the joint slowly to hyperextend the knee."
    ],
    keyPoints: [
      "Trap the thigh high and pinch the knees so the leg cannot rotate out.",
      "Align the knee joint with your hips so the hyperextension lands on the knee, not the hip.",
      "Control the foot and toe direction to stop the spin-out escape.",
      "Finish with slow hip extension; the knee, like the elbow, gives with little warning."
    ],
    commonMistakes: [
      "Letting the thigh slip low so they rotate the knee and escape.",
      "Misaligning the joint so you stretch the hip instead of the knee.",
      "Failing to control the foot, allowing them to spin free.",
      "Applying explosively and risking serious ligament injury."
    ],
    setups: [
      "From top half guard when the opponent extends their bottom leg.",
      "As a follow-up to a straight ankle lock when they straighten the leg to defend.",
      "Off a leg-drag or pass when you catch and isolate the trailing leg.",
      "From saddle/411 by rotating up to attack the knee instead of the heel."
    ],
    followUps: [
      "Switch to a heel hook or toe hold (where legal) when they bend the knee to defend.",
      "Transition to an ankle lock when they straighten and pull toward you.",
      "Take the top position or pass when they roll to escape the kneebar.",
      "Re-enter the leg entanglement when they clear the leg."
    ],
    whenToUse: "The kneebar is an advanced attack legal at brown and black belt in the gi and broadly available in no-gi, effective against opponents who straighten a leg while defending passes or other leg locks. It rewards players fluent in leg entanglements and transitions. It pairs naturally with the ankle lock and heel hook as a straightened-leg counter within the leg-lock game.",
    concept: "Isolated joint hyperextension: identical leverage to the armbar applied to the knee, using the hips as the fulcrum against a trapped, straightened leg."
  },
  {
    id: "toe-hold",
    image: "toe-hold.jpg",
    name: "Toe Hold",
    category: "Submissions",
    difficulty: "Advanced",
    giNoGi: "Both",
    position: "Leg Entanglement",
    description: "A rotational foot lock that torques the ankle and, secondarily, the knee by twisting the foot medially with a figure-four grip on the toes and instep. It is a versatile attack from many leg entanglements and a common answer when a heel is hidden but the foot is exposed.",
    steps: [
      "Establish a leg entanglement controlling the opponent's leg and knee line.",
      "Grip the top of their foot near the toes with one hand, thumb toward the sole.",
      "Thread your other hand under their ankle and grab your own gripping wrist to form a figure-four.",
      "Pin their knee and thigh with your legs so the femur cannot follow the rotation.",
      "Bring the foot tight to your body to remove slack from the ankle.",
      "Rotate the foot by curling the toes toward the sole and twisting toward their little-toe side.",
      "Use your whole torso to apply the rotation, not just the hands.",
      "Finish slowly by increasing the twist, as it torques both the ankle and knee."
    ],
    keyPoints: [
      "Control the knee line so the twist loads the ankle rather than spinning the whole leg free.",
      "Use a tight figure-four grip on the foot; a slipping grip loses all torque.",
      "Rotate with the torso, curling the toes under, not just wrenching with the wrists.",
      "Keep the foot tight to your body to remove slack before applying the twist."
    ],
    commonMistakes: [
      "Loose grip that slips off the foot when pressure is applied.",
      "Failing to control the knee so the opponent rotates the whole leg to escape.",
      "Twisting in the wrong direction, reducing the effect on the ankle and knee.",
      "Applying explosively, which can damage the ankle and knee suddenly."
    ],
    setups: [
      "From ashi garami or saddle when the heel is hidden but the foot is reachable.",
      "As a follow-up to a defended heel hook when they hide the heel.",
      "From 50/50 when you can secure the figure-four on the exposed foot.",
      "Off a straight ankle lock when they turn the foot and expose the toes."
    ],
    followUps: [
      "Switch to a heel hook (where legal) when they defend the toe hold and expose the heel.",
      "Transition to a kneebar when they straighten the leg.",
      "Re-enter the entanglement when they rotate free of the foot grip.",
      "Attack an ankle lock when the foot straightens back out."
    ],
    whenToUse: "The toe hold is an advanced foot lock legal at brown and black belt in the gi and broadly in no-gi, valuable precisely because it attacks when the heel is unavailable. It rewards leg-lock players who chain between foot and knee attacks. It is a reliable finisher against defenders who hide the heel by curling the foot in.",
    concept: "Rotational leverage on the foot: a figure-four converts a medial twist into torque across the ankle and knee once the knee line is controlled."
  },
  {
    id: "buggy-choke",
    image: "buggy-choke.jpg",
    name: "Buggy Choke",
    category: "Submissions",
    difficulty: "Advanced",
    giNoGi: "No-Gi",
    position: "Bottom Side Control",
    description: "A modern no-gi choke launched from the bottom of side control by trapping the top player's own arm and head with your legs, forming a triangle-like configuration that compresses the neck. It is a surprising defensive-to-offensive attack popularized in recent competition grappling.",
    steps: [
      "From bottom side control, wait for or bait the top player's near arm to be near your head.",
      "Frame and shrimp to create the angle to bring your leg up toward their head.",
      "Trap their head and their trapping-side arm by throwing your near leg over the back of their neck.",
      "Bring your same-side arm across to grip your own shin or thigh, closing the triangle configuration.",
      "Pull their head down into the space with your leg while trapping their arm inside.",
      "Squeeze your leg and pull your knee toward you to compress the neck.",
      "Angle your hips and rotate slightly to align the leg across the carotid.",
      "Finish by pulling the trapped structure tight and squeezing the leg against the neck."
    ],
    keyPoints: [
      "The top player's own trapped arm forms one wall of the choke, so isolating it is essential.",
      "Create an angle by shrimping before throwing the leg over the head.",
      "Pull the knee toward you and squeeze the leg to compress the carotid, not just the trachea.",
      "Trap the head and arm tightly so the top player cannot posture or pull the arm out."
    ],
    commonMistakes: [
      "Attempting it without first trapping the near arm, so there is no second wall.",
      "Failing to create an angle, so the leg lands on the head instead of the neck.",
      "Loose leg control that lets the top player posture up and out.",
      "Rushing the finish before the head and arm are fully trapped."
    ],
    setups: [
      "From bottom side control when the top player's near arm is high near your head.",
      "As a counter when the top player reaches across to control your far side.",
      "Off a failed escape when your shrimp brings your leg near their neck.",
      "When the top player drives a cross-face and leaves the near arm exposed."
    ],
    followUps: [
      "Escape to guard recovery when the choke is defended but the angle is created.",
      "Transition to an armbar or omoplata on the trapped arm when they defend the neck.",
      "Sweep to top when they posture to defend and lose their base.",
      "Re-trap and re-angle when they pull the head partway out."
    ],
    whenToUse: "The buggy choke is a modern no-gi novelty that turns bottom side control, a losing position, into a genuine submission threat, and it has appeared in high-level EBI and submission-only competition. It rewards flexible players comfortable inverting under pressure. It is best used as a surprise counter rather than a primary game, since strong top players can posture to defend it.",
    concept: "Self-blockade wedge from the bottom: the top player's own trapped arm and your leg form the two walls of a triangle-style vise around the neck."
  }
];
