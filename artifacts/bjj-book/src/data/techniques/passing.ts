import type { Technique } from '../types';

export const passingTechniques: Technique[] = [
  {
    id: "torreando-pass",
    name: "Torreando Pass",
    category: "Passing",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Standing vs Open Guard",
    description:
      "The torreando (bullfighter) pass is a dynamic standing pass where you pin and redirect the opponent's legs to one side, then step around to the opposite side to bypass the guard entirely. It relies on speed, distance management, and denying the opponent their guard connection rather than on crushing pressure.",
    steps: [
      "Stand in a strong, athletic posture with your hips back and knees slightly bent, out of range of the opponent's feet and lasso hooks.",
      "Grip both pant legs at the knee (or cup behind both knees in No-Gi), keeping your arms straight so they cannot lasso your sleeves or set spider-guard hooks.",
      "Circle slightly and pop the legs upward to break their frame and clear any De La Riva or hook that is attached to you.",
      "Explosively push both legs to one side and down toward the mat, pinning their knees together and turning their hips away from you.",
      "As their legs go down, step your near foot deep past their hip on the opposite side, taking a wide angle to run around the corner of their hips.",
      "Immediately drop a cross-face or shoulder pressure onto their far shoulder and switch one hand to block the near hip, killing guard recovery.",
      "Sprawl your legs back and bring your chest to their chest, sliding your knee up to establish a solid side control.",
      "Consolidate by securing a cross-face and underhook, staying heavy through your chest so they cannot re-guard or shrimp."
    ],
    keyPoints: [
      "Keep your arms straight and your elbows in — bent arms invite lasso, spider, and collar-drag counters.",
      "The pass is lateral: you push the legs down and to the side while your body travels the opposite direction around the corner.",
      "Pin the near hip the instant you clear the legs; passing the legs means nothing if the hip re-inserts a frame.",
      "Stay light on your feet and change levels late — dropping your weight only once the legs are neutralized."
    ],
    commonMistakes: [
      "Pushing the legs straight down instead of down and across, which lets the opponent simply re-pommel and recover.",
      "Bending the arms and letting the opponent grip the sleeves to lasso or off-balance you.",
      "Committing to one direction so the opponent reads it and hits a leg-drag or wheel sweep off your momentum.",
      "Failing to secure the far hip/shoulder after the step, allowing an immediate guard recovery or granby."
    ],
    setups: [
      "Against a supine open guard where the opponent has no active grips on you.",
      "Immediately after standing up out of closed guard once their ankles uncross.",
      "When the opponent pushes their feet into your hips and you can grip the pants above their pushing feet.",
      "As a reaction to a failed De La Riva entry, popping the DLR hook off and controlling the knees."
    ],
    followUps: [
      "If they turn to turtle to defend, follow to the back or attack a front headlock.",
      "When they block your path with a strong frame, switch to a leg-drag by pulling one leg across your centerline.",
      "If they follow your redirection and turn in, transition to a knee-slice on the opened side.",
      "Combine with the x-pass — fake the torreando one way, then blast the far leg down and cut through."
    ],
    whenToUse:
      "The torreando is a staple against reactive, supine open guards and works especially well against opponents who rely on feet-on-hips or loose spider connections. It shines for faster, more athletic passers in both gi and no-gi, and is a foundational answer taught before pressure passing. In modern competition it is often used to set up leg-drags rather than as a finishing pass on its own.",
    concept:
      "Distance management and guard disconnection: by controlling the legs at range and redirecting them, you sever the opponent's ability to attach frames and reconnect their hips to yours.",
    image: "torreando-pass.jpg"
  },
  {
    id: "knee-slice-pass",
    name: "Knee Slice Pass",
    category: "Passing",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Half Guard / Headquarters",
    description:
      "The knee slice (knee cut) is a pressure-passing staple where you drive one knee diagonally across the opponent's near thigh and hip line to slice through the guard and flatten them. It is one of the most reliable passes in modern gi and no-gi because it combines a strong wedge with an unpassable underhook fight.",
    steps: [
      "From headquarters, staple the opponent's bottom leg by pinning their shin/knee to the mat with your outside knee and shin.",
      "Secure a far-side underhook and a cross-face or shoulder pressure so their near shoulder is driven to the mat.",
      "In the gi, grip the far collar over their shoulder or trap the near-side sleeve; in No-Gi, use the underhook and a head/shoulder pin.",
      "Angle your slicing knee inward so your shin points across their near hip, driving the knee toward the mat beside their far hip.",
      "Keep your chest low and your posture forward so they cannot use your height to hook and off-balance you backward.",
      "Slice your knee down and through while your trailing foot stays wide to base and prevent being rolled.",
      "As your shin reaches the mat, sag your hip through to strip the leg from around your knee and clear the entanglement.",
      "Settle chest-to-chest into side control, maintaining the cross-face and underhook so they cannot re-hook or turn in."
    ],
    keyPoints: [
      "The far-side underhook is non-negotiable — without it the opponent takes your back or hits a coyote/knee-shield recovery.",
      "Keep your chest heavy and posture slightly forward; sitting upright lets them lift your knee and recover half guard.",
      "Pin the bottom leg completely before slicing so it cannot follow your knee and re-establish the shield.",
      "Slice the knee to the mat, not just forward — the shin must reach the floor to fully clear the entanglement."
    ],
    commonMistakes: [
      "Slicing without the underhook, gifting the back take or an easy re-guard.",
      "Staying too upright and getting hooked and swept backward by a knee shield.",
      "Leaving the trailing foot narrow so the opponent bumps and rolls you over.",
      "Rushing the cut before the shoulder is pinned, allowing them to frame into your neck and re-pummel."
    ],
    setups: [
      "From headquarters position after splitting the opponent's knee-shield legs.",
      "Off a torreando when the opponent turns in to defend, opening the near-side cut.",
      "When passing half guard and the opponent gives up the underhook to frame on your hip.",
      "As a counter to a failed De La Riva when you can flatten the outside hook and drive your knee across."
    ],
    followUps: [
      "If they frame and stop your knee, switch to a long-step pass to the backside.",
      "When they turn away to defend the cross-face, take the back or attack with a near-side crossface and mount.",
      "If they establish a strong knee shield, back-step to headquarters and re-attack the smash side.",
      "Combine with the leg-drag: if they scoot their hips out, drag the near leg across and settle."
    ],
    whenToUse:
      "The knee slice is the backbone of modern pressure passing and works for nearly every body type in both gi and no-gi. It is the primary partner of the headquarters position and is favored in high-level competition because it forces the underhook battle that dictates the entire exchange. It is especially strong against knee-shield and half-guard players who like to frame.",
    concept:
      "Wedges and inside position: your slicing shin acts as a wedge cutting the guard while the underhook wins the shoulder line, converting a 50/50 frame battle into top control.",
    image: "knee-slice-pass.jpg"
  },
  {
    id: "stack-pass",
    name: "Stack Pass (Double Under)",
    category: "Passing",
    difficulty: "Beginner",
    giNoGi: "Both",
    position: "Closed/Open Guard",
    description:
      "The stack pass folds the opponent's hips over their own head by scooping both legs (double under) and driving forward, robbing them of the hip mobility needed to retain guard. It is a heavy, patient pressure pass that trades mobility for smothering control and is a classic answer to closed and high guards.",
    steps: [
      "Open the closed guard or engage the open guard and dive both arms under the opponent's thighs, scooping the legs onto your shoulders (double unders).",
      "Clasp your hands together low behind their hips or grip the belt/far collar to lock the double-under frame.",
      "Come up onto your toes and drive forward and slightly upward, stacking their knees toward their face and lifting their hips off the mat.",
      "Keep your head up and your back straight so they cannot flatten you or catch a triangle as you enter.",
      "Walk your feet toward the side you intend to pass, angling your shoulders to tip their stacked weight to that side.",
      "As their hip settles to the mat on the far side, release one arm and shoot it across to a cross-face or far-side underhook.",
      "Slide your chest down over their now-flattened hips, transitioning your shoulder pressure from the legs to the torso.",
      "Consolidate side control by pinning the near hip and securing the cross-face so they cannot bridge back into you."
    ],
    keyPoints: [
      "Pressure comes from your toes and forward drive, not from dropping your knees to the mat.",
      "Keep their hips elevated and stacked — a flat pelvis means they retain the ability to shrimp and re-guard.",
      "Head up and posture strong on entry; a lowered head is a triangle waiting to happen.",
      "Be patient and let the stack fatigue their hip flexors before you commit to clearing the legs."
    ],
    commonMistakes: [
      "Dropping to the knees while stacking, which collapses the forward pressure and lets the hips return to the mat.",
      "Lowering the head on entry and getting caught in a triangle or omoplata.",
      "Rushing to clear the legs before their hips are fully controlled and elevated.",
      "Clasping too high on the back, which lets the opponent invert and spin out to the back."
    ],
    setups: [
      "When breaking open a closed guard and immediately diving both arms under the thighs.",
      "Against a high or rubber guard where the legs are already elevated toward your shoulders.",
      "As a counter to an armbar attempt when you can stack forward and pin the attacking leg.",
      "From a failed torreando when the opponent's hips come up, transitioning into the double under."
    ],
    followUps: [
      "If they turn away to relieve the stack, follow to the back or a near-side crossface pin.",
      "When they push your head down to defend, switch to a single-under and attack the far side.",
      "If they invert to escape, follow the rotation and re-stack or transition to a leg-drag.",
      "Combine with the over-under: release one under-hook and drop into an over-under smash on the resisting side."
    ],
    whenToUse:
      "The stack pass is ideal for strong, heavier passers and against flexible guard players who rely on hip elevation and inversion. It remains highly relevant in the gi against closed and high guards, and in no-gi it doubles as a defense to triangles and armbars by folding the attacker. It rewards patience and is a go-to when you want to smother a dynamic, mobile guard.",
    concept:
      "Immobilizing the hips: by folding the pelvis over the shoulders you remove the opponent's primary engine — hip movement — so the guard cannot regenerate.",
    image: "stack-pass.jpg"
  },
  {
    id: "leg-drag",
    name: "Leg Drag",
    category: "Passing",
    difficulty: "Intermediate",
    giNoGi: "Both",
    position: "Open Guard",
    description:
      "The leg drag pulls one of the opponent's legs across your centerline and pins it to the mat, taking away their ability to frame with that leg while you settle your weight on their thigh. It is the defining pass of the modern open-guard meta, functioning as both a pass and a dominant control position from which to attack the back.",
    steps: [
      "From standing or a knee-cut posture, secure control of one ankle/pant leg and clear any hook attached to you.",
      "Pull that leg across your body so their shin crosses your centerline, dragging their knee past your opposite hip.",
      "Pinch the dragged leg between your thigh and the mat, planting the leg so their foot points away and their hip is turned down.",
      "Bring your near hip and thigh down onto their thigh to staple it, killing the leg's ability to re-frame.",
      "Reach across to control the far hip and the far shoulder or lat, establishing a cross-body connection.",
      "Keep your weight forward and your head over their centerline so they cannot spin underneath or invert away.",
      "Step or slide your knee toward their far hip, closing the space and threatening to slide into side control or the back.",
      "Finish either by settling chest-to-chest into side control or by chasing the exposed back as they turn to defend."
    ],
    keyPoints: [
      "Drag the leg fully across your centerline — a half-drag lets them re-pommel and recover.",
      "Staple the dragged thigh with your hip weight; controlling only the ankle leaves the leg free to reframe.",
      "Immediately win the far-side upper-body connection (hip and shoulder) to prevent inversion and back exposure.",
      "Keep your posture forward and low so a granby or inversion cannot spin them free."
    ],
    commonMistakes: [
      "Dragging with the arms only and not pinning the leg with body weight, letting the leg pop back in.",
      "Neglecting the far-side control, so the opponent inverts and takes your back.",
      "Standing too tall after the drag, giving room for a re-guard or wheel sweep.",
      "Chasing the pass forward without first killing the near hip, allowing a scramble back to guard."
    ],
    setups: [
      "As a finish to a torreando — redirect the legs, then drag the near leg across.",
      "From De La Riva or single-leg X defense, clearing the hook and dragging the leg over.",
      "Off a knee-slice when the opponent scoots their hips out, converting the shin into a drag.",
      "When the opponent pushes a foot into your hip, pass the foot across and drag the leg down."
    ],
    followUps: [
      "If they turn in to defend, take the back with a seatbelt and second-hook insertion.",
      "When they frame to stop your forward pass, switch to a crackdown/backstep to side control.",
      "If they try to re-pommel the dragged leg, transition to a body lock and walk around.",
      "Combine with the over-under smash if they load weight back onto the free leg."
    ],
    whenToUse:
      "The leg drag is the centerpiece of contemporary open-guard passing and is essential against De La Riva, X-guard, and single-leg-X players. It is equally effective in gi and no-gi and is a hallmark of the leg-lock and berimbolo era, since it neutralizes the exact positions those systems rely on. It suits technical passers who prefer angle and control over raw pressure.",
    concept:
      "Line control and back exposure: by pulling the leg across the centerline you rotate the opponent's hips away, isolating them on a line that naturally exposes the back.",
    image: "leg-drag.jpg"
  },
  {
    id: "body-lock-pass",
    name: "Body Lock Pass",
    category: "Passing",
    difficulty: "Intermediate",
    giNoGi: "Both",
    position: "Open/Half Guard",
    description:
      "The body lock pass clamps a tight over-under grip around the opponent's hips and connects your hips to theirs, using whole-body pressure and footwork to walk around the guard while denying all frames. Popularized at the highest levels of no-gi and gi competition, it is a low-risk, high-percentage pass built on hip connection rather than speed.",
    steps: [
      "Enter by pinning the opponent's legs down or to one side and closing the distance until your hips reach theirs.",
      "Lock a body lock around their hips: one arm over the near hip, one arm under the far hip, hands clasped low and tight against the belt line.",
      "Drop your chest to their chest and drive your shoulder into their sternum to flatten them and kill their upper-body frames.",
      "Post your outside leg wide for base and use your inside knee to trap and staple their legs against the mat.",
      "Walk your feet toward the direction of the over-arm, tilting them onto the side where you have the underhook.",
      "Keep your grip locked and your hips heavy so they cannot create space to reframe or reinsert a knee shield.",
      "As their hips flatten, slide your top knee across their beltline and switch your over-arm to a cross-face.",
      "Release the lock only once side control is fully consolidated with a cross-face and near-hip pin."
    ],
    keyPoints: [
      "Keep the clasp low on the hips and pull your elbows tight — a high grip on the ribs is easily broken and off-balanced.",
      "Hip-to-hip connection is everything; the moment there is daylight between your hips they can reframe.",
      "Drive with your legs and walk your feet around, do not muscle with your arms.",
      "Flatten the near shoulder with chest pressure so they cannot turn in and recover half guard."
    ],
    commonMistakes: [
      "Locking too high around the ribs, letting the opponent posture and strip the grip.",
      "Losing hip connection during the walk-around, which gives space to reinsert frames.",
      "Standing up to reposition and losing the flattening pressure.",
      "Releasing the body lock before side control is truly secure, allowing an immediate re-guard."
    ],
    setups: [
      "From half guard when the opponent gives up the underhook and you can close to their hips.",
      "Off a smash pass when their knee shield collapses and you can clamp the body lock.",
      "As a counter to seated open guard by ducking under grips and clasping the hips.",
      "From a failed leg drag when they re-pommel, switching to the body lock to walk around."
    ],
    followUps: [
      "If they turn away to defend, follow to the back with a seatbelt.",
      "When they frame against the walk-around, change direction and tilt toward the underhook side.",
      "If they establish a deep knee shield, back-step and re-clamp lower on the hips.",
      "Combine with mount — as you flatten them, ride the tilt straight up into mount."
    ],
    whenToUse:
      "The body lock pass is a hallmark of the current pressure-passing meta and is especially dominant in no-gi where grips are limited, though it works equally well in the gi. It suits patient, strong passers and is favored in competition for its low risk to leg locks and its relentless hip control. It excels against seated and half-guard players who rely on frames and knee shields.",
    concept:
      "Hip-to-hip connection and frame denial: by clamping the hips and eliminating space you remove every lever the opponent needs to frame, invert, or recover.",
    image: "body-lock-pass.jpg"
  },
  {
    id: "over-under-pass",
    name: "Over-Under Pass",
    category: "Passing",
    difficulty: "Intermediate",
    giNoGi: "Both",
    position: "Open Guard",
    description:
      "The over-under pass splits the opponent's legs by driving one shoulder over one thigh while the other arm passes under the far thigh, stacking and smashing them into an immobile ball. It is the quintessential grinding pressure pass, trading all speed for a relentless, sustained crush that wears down the guard.",
    steps: [
      "Split the opponent's legs and drive your head and shoulder over one thigh, pinning it against their own torso (the over side).",
      "Slide your other arm deep under the far thigh and grip the belt, hip, or clasp your hands (the under side).",
      "Keep your over-side elbow and head tight so their over-leg is pinned and cannot re-frame into your neck.",
      "Come up onto your toes and drive your shoulder pressure forward and down, stacking their weight over the under-leg side.",
      "Keep your hips low and your knees off the mat so all your weight lands on their trapped legs.",
      "Walk your feet toward the under-side, circling your body around their hips while maintaining the smash.",
      "As their hips turn and flatten, drop your over-side shoulder to a cross-face and slide your knee across.",
      "Consolidate side control, only releasing the under grip once the cross-face and hip pin are locked."
    ],
    keyPoints: [
      "Head and shoulder pressure on the over-leg is the anchor — if the head lifts, the pass collapses.",
      "Stay on your toes with knees off the mat so your full weight smashes their legs.",
      "Keep the under-arm deep and grip low to prevent them from inverting and spinning out the back.",
      "Grind and walk patiently; the over-under is a war of attrition, not an explosive pass."
    ],
    commonMistakes: [
      "Letting the head pop up off the over-leg, freeing their frame and allowing a re-guard.",
      "Resting on the knees, which removes the crushing weight that makes the pass work.",
      "Keeping the under-arm shallow, letting the opponent invert and expose your back.",
      "Trying to rush around instead of maintaining constant pressure while walking the feet."
    ],
    setups: [
      "Against a supine open guard after splitting the legs from a stack or torreando.",
      "From the stack pass when one leg drops, converting the double-under into an over-under.",
      "When the opponent framing with a knee shield gives you access to go over one thigh and under the other.",
      "As a counter to butterfly guard by flattening one hook and diving over-under."
    ],
    followUps: [
      "If they turn away from the smash, follow to the back or a tight side-control pin.",
      "When they invert to defend, follow the roll and re-establish the over-under on the other side.",
      "If they push your head off, switch to a body lock and walk around.",
      "Combine with the stack pass — re-scoop the under leg and fold them if they straighten out."
    ],
    whenToUse:
      "The over-under is the archetypal grinding pass for heavy, patient, and physically strong passers in both gi and no-gi. It is exceptional against flexible, mobile guards because the smash removes their ability to create angles. It is a lower-tempo alternative to the leg drag and body lock, best suited to competitors who want to control pace and impose fatigue.",
    concept:
      "Splitting and smashing: by taking opposite sides of the legs you divide the guard's structure and use body weight to compress it into an immobile, frameless ball.",
    image: "over-under-pass.jpg"
  },
  {
    id: "floating-pass",
    name: "Floating Pass",
    category: "Passing",
    difficulty: "Advanced",
    giNoGi: "Both",
    position: "Open Guard",
    description:
      "The floating pass uses light, mobile chest and shoulder pressure that constantly redistributes over the opponent's centerline, staying a step ahead of their frames rather than smashing through them. It is a high-level, movement-based pass that treats top pressure as a dynamic point of contact you 'float' around the guard.",
    steps: [
      "Establish a light chest-to-chest or chest-to-thigh connection over the opponent's centerline, staying on your toes.",
      "Keep your weight suspended and mobile so you can shift your point of contact the instant they move.",
      "Read their frame and hip movement, floating your chest toward whichever side they open as they try to recover.",
      "Use a cross-face or shoulder pressure to steer their head away from the direction you intend to pass.",
      "When they turn to their side to reframe, float over the top and follow their rotation, staying chest-to-shoulder.",
      "Keep your knees and hips off the mat so you can pivot and redirect without being trapped by a re-inserted leg.",
      "As they run out of frames, drop your weight decisively and pin the near hip and far shoulder.",
      "Settle into side control or take the back, converting the moment their frames finally fail."
    ],
    keyPoints: [
      "Stay light and mobile — floating means suspending your weight so you can chase their movement, not resting it.",
      "Cross-face and head control steer the pass; where the head goes the hips follow.",
      "Keep your base points (knees, hips) off the mat so a re-inserted hook cannot anchor you.",
      "Anticipate the next frame rather than reacting to the current one; the pass lives one beat ahead of the guard."
    ],
    commonMistakes: [
      "Committing full weight too early and getting bumped or elevated into a sweep.",
      "Floating without controlling the head, so the opponent frames back into center.",
      "Being too slow to redirect, letting them re-guard between your shifts.",
      "Losing the toes-up mobile base and getting stapled by a re-inserted leg."
    ],
    setups: [
      "When passing a supine guard after breaking their grips and establishing light centerline contact.",
      "Off a knee-slice that stalls, switching from a wedge to a floating redirection.",
      "Against a scrambly guard player whose constant movement you can ride and stay ahead of.",
      "From a body lock that opens up, releasing to float when they turn to defend."
    ],
    followUps: [
      "If they give you their back while reframing, take it with a seatbelt.",
      "When they finally flatten, drop into a tight side control or mount.",
      "If they load your weight for a sweep, float to the opposite side and continue passing.",
      "Combine with the leg-drag when they present a leg to your centerline mid-float."
    ],
    whenToUse:
      "The floating pass is an advanced tool for technical, athletic passers with excellent balance and timing, and is best against dynamic, scramble-heavy guards in both gi and no-gi. It is favored by modern high-level competitors who face inversion and berimbolo-based guards, since it never gives the static contact those systems exploit. It rewards feel and anticipation over strength.",
    concept:
      "Dynamic weight distribution: instead of anchoring pressure, you keep your center of mass mobile and always redistributed over the opponent's, so their frames never find a stable point to push against.",
    image: "floating-pass.jpg"
  },
  {
    id: "x-pass",
    name: "X-Pass",
    category: "Passing",
    difficulty: "Intermediate",
    giNoGi: "Both",
    position: "Open Guard",
    description:
      "The x-pass crosses one of the opponent's legs down and away while you step your own legs across it in an X pattern, blasting past the guard with a quick change of direction. It is a fast, deceptive standing pass that pairs perfectly with the torreando as a two-way threat.",
    steps: [
      "Stand in front of the open guard controlling both pant legs at the knees with straight arms.",
      "Push one leg down and across toward the mat, crossing it over the opponent's other leg to stack their knees.",
      "As you pin that leg down, step your same-side foot across and past their pinned legs, crossing your legs into the X.",
      "Drive your weight down onto the stacked legs so they cannot untangle or reframe.",
      "Whip your trailing leg around and past their hips, changing direction sharply to clear the guard.",
      "Drop a cross-face and far-side control as your chest arrives over their torso.",
      "Kill the near hip so they cannot shrimp back into guard as you land.",
      "Settle chest-to-chest into side control with a cross-face and underhook."
    ],
    keyPoints: [
      "Cross the legs and pin them together — stacking the knees removes the frames on both sides at once.",
      "Change direction sharply; the x-pass works because you commit one way then blast past.",
      "Keep the arms straight until the legs are pinned to avoid grip counters and lassos.",
      "Land with immediate hip and shoulder control, as the speed of the pass leaves them room to scramble."
    ],
    commonMistakes: [
      "Not fully crossing/pinning the legs, so the opponent re-pommels as you step by.",
      "Telegraphing the direction, letting them read it and counter with a sweep or back take.",
      "Standing too tall on the step-by and getting off-balanced.",
      "Failing to secure control on landing, allowing an immediate re-guard from the scramble."
    ],
    setups: [
      "As the natural pair to a torreando — fake the redirect one way, then x-pass the far leg.",
      "When the opponent pushes both feet into your hips and you can cross one leg down.",
      "Off a stalled leg-drag when they defend the drag, crossing the leg to blast past.",
      "Against a supine open guard where you have clean double pant-knee grips."
    ],
    followUps: [
      "If they turn to turtle, follow to the back or a front headlock.",
      "When they block your landing, switch to a knee-slice on the opened side.",
      "If they scramble to re-guard, transition to a leg-drag on the presented leg.",
      "Combine with the torreando as a constant left/right threat to freeze their frames."
    ],
    whenToUse:
      "The x-pass is a fast, athletic pass ideal for passers who like to move and combine threats, and it works in both gi and no-gi. It is most effective against reactive supine guards and pairs with the torreando to create a two-directional dilemma. It is less about pressure and more about speed and deception, so it suits mobile competitors.",
    concept:
      "Directional commitment and misdirection: by crossing the legs and changing direction you force the guard to guess, and passing succeeds in the gap created by their wrong guess.",
    image: "x-pass.jpg"
  },
  {
    id: "long-step-pass",
    name: "Long Step Pass",
    category: "Passing",
    difficulty: "Intermediate",
    giNoGi: "Both",
    position: "Half Guard / Open Guard",
    description:
      "The long step (backstep) pass clears the legs by swinging your trailing leg back and around behind you, rotating your hips to the opposite direction to escape leg entanglements and slide into a pin. It is a key counter to knee shields and leg-lock entries, using rotation instead of forcing through frames.",
    steps: [
      "From a knee-cut or half-guard top position, feel the opponent's knee shield or hook blocking your forward pass.",
      "Post your lead hand and drive your shoulder pressure into their chest to keep them flattened.",
      "Swing your trailing leg back and around in a long step, rotating your hips away from the opponent's frames.",
      "As you step, face your hips toward their legs momentarily to clear the entanglement and free your trapped knee.",
      "Keep your chest connected to their torso throughout the rotation so you never lose the pin during the switch.",
      "Complete the rotation so you are now facing back toward their head from the opposite side.",
      "Slide your knee across their beltline and re-establish a cross-face as your hips finish the turn.",
      "Settle into side control or kesa-gatame, killing the near hip so they cannot follow the rotation and re-guard."
    ],
    keyPoints: [
      "Keep chest connection throughout the step; losing contact during rotation gives them the space to recover.",
      "The long step clears leg entanglements — it is a primary escape from knee shields and single-leg-X threats.",
      "Rotate your hips fully so you end facing the correct direction, not stalled halfway.",
      "Post and pressure the upper body first so they cannot follow you around during the switch."
    ],
    commonMistakes: [
      "Losing chest contact mid-rotation, allowing the opponent to spin and reframe.",
      "Half-stepping so the trapped leg never fully clears the entanglement.",
      "Failing to control the upper body, letting them turn and follow your backstep to the back.",
      "Being slow and stalling in the transition, giving them time to re-pommel or attack a leg."
    ],
    setups: [
      "When a knee-slice stalls against a strong knee shield, backstepping to the other side.",
      "As a counter to single-leg-X or ashi-garami entries, long-stepping the leg free.",
      "From half guard when the opponent frames and blocks your forward pass.",
      "Off a leg-drag when they re-pommel, backstepping to clear and re-pin."
    ],
    followUps: [
      "If they follow your rotation, take the back or spin to a crossface pin.",
      "When they re-pommel the leg, chain into a smash pass or re-long-step.",
      "If they expose the back during the switch, insert a hook and take the back.",
      "Combine with the knee-slice as a two-way threat: cut one way, backstep the other."
    ],
    whenToUse:
      "The long step is an essential pass in the leg-lock era because it lets you clear ashi-garami and knee-shield entanglements without stepping into danger. It is used heavily in no-gi and modern gi passing and suits agile passers with good hip mobility. It is most valuable against opponents who rely on knee shields and leg entries to stall your forward pressure.",
    concept:
      "Rotational passing and entanglement escape: by swinging the trailing leg behind you, you rotate out of the opponent's frames and leg locks rather than trying to force through them.",
    image: "long-step-pass.jpg"
  },
  {
    id: "smash-pass",
    name: "Smash Pass",
    category: "Passing",
    difficulty: "Intermediate",
    giNoGi: "Both",
    position: "Half Guard",
    description:
      "The smash pass drives the opponent's knees together and flattens their bottom leg by wedging your knee and shoulder pressure across their thighs, eliminating the frame the knee shield provides. It is the pressure-based half-guard pass that pairs with the knee slice as the two answers from headquarters.",
    steps: [
      "From headquarters, drive your near knee across the opponent's top thigh to pin their knees together.",
      "Sag your hip and weight down onto their trapped legs so the knee shield collapses toward the mat.",
      "Fight for the far-side underhook or use a cross-face to flatten their near shoulder.",
      "Use your shoulder and chest pressure to smash their top knee down across their bottom leg.",
      "Once the legs are stacked and flat, walk your body toward the smash side while keeping the pin.",
      "Slide your top knee up over their beltline as the guard flattens beneath your weight.",
      "Switch your grip to a cross-face and near-hip pin as your chest arrives over their torso.",
      "Consolidate side control, keeping constant downward pressure so they cannot reinsert the knee shield."
    ],
    keyPoints: [
      "Smash the top knee across the bottom leg to kill the knee shield frame before you try to advance.",
      "Keep your weight sagging and heavy; the smash is powered by dropping hips, not by hand-fighting.",
      "Win the shoulder line with an underhook or cross-face so they cannot turn in and re-frame.",
      "Walk toward the smashed side patiently rather than lunging, keeping the legs pinned the whole way."
    ],
    commonMistakes: [
      "Trying to advance before the knee shield is fully flattened, letting them reframe.",
      "Staying too upright so your weight is off their legs and the smash has no effect.",
      "Ignoring the underhook and getting turned into or swept.",
      "Rushing the walk-around and letting a knee re-insert between your bodies."
    ],
    setups: [
      "From headquarters as the pressure counter when they build a strong knee shield.",
      "When a knee-slice stalls, converting to a smash to flatten the shield first.",
      "From top half guard when the opponent frames with a deep knee shield.",
      "Off a body lock that opens up, smashing the legs together to walk around."
    ],
    followUps: [
      "If they give up the underhook to frame, switch to a knee-slice.",
      "When they turn away from the smash, take the back or a crossface pin.",
      "If they get a deep knee shield back, back-step to headquarters and re-attack.",
      "Combine with the long step if they threaten a leg entanglement during the smash."
    ],
    whenToUse:
      "The smash pass is the pressure half of the headquarters game and is ideal for strong, heavy passers in both gi and no-gi. It is the primary answer to knee-shield half guard and complements the knee slice, forming a smash-or-slice dilemma. It shines against opponents who rely on frames and knee shields to stall and buy recovery time.",
    concept:
      "Frame collapse through compression: by smashing the knees together you eliminate the knee-shield wedge, converting a framing battle into a weight-based pin.",
    image: "smash-pass.jpg"
  },
  {
    id: "headquarters-position",
    name: "Headquarters (HQ) Position",
    category: "Passing",
    difficulty: "Intermediate",
    giNoGi: "Both",
    position: "Headquarters",
    description:
      "Headquarters is the central passing hub where you pin the opponent's knee-shield leg with your shin while facing their hips, from which the knee slice, smash, long step, and back-step branch as a decision tree. It is less a single pass than a controlling position that neutralizes half guard and forces the opponent to commit to a defense you then counter.",
    steps: [
      "Approach the half-guard or knee-shield player and pin their bottom shin/knee to the mat with your outside leg and shin.",
      "Angle your knee inward so your shin blocks their knee shield and staples their bottom leg to the floor.",
      "Keep your posture forward with your chest over their centerline and your head up.",
      "Fight for the far-side underhook while denying them yours, establishing the shoulder-line battle.",
      "Control their knee-shield knee with your hand or forearm so they cannot re-pommel or reframe.",
      "Read the opponent's reaction: if they frame with the shield, prepare to smash; if they open, prepare to slice.",
      "Maintain the leg staple and hip connection so they cannot recover full guard or invert away.",
      "Branch into a knee slice, smash, long step, or back-step based on how they defend the position."
    ],
    keyPoints: [
      "The staple on the bottom leg is the foundation — if that leg frees, the whole position collapses.",
      "Headquarters is a decision hub, not a pass itself; your job is to control and then react to their defense.",
      "Win the underhook battle early, as it dictates whether you slice or smash.",
      "Keep your posture forward and head up to avoid being off-balanced by the knee shield."
    ],
    commonMistakes: [
      "Letting the stapled leg escape, giving back the knee shield and guard recovery.",
      "Stalling in the position without threatening a pass, letting them re-pommel and reframe.",
      "Losing the underhook fight and getting turned into or swept.",
      "Sitting back or upright so the knee shield can extend and off-balance you."
    ],
    setups: [
      "As the landing spot from a torreando or leg drag when the opponent recovers a knee shield.",
      "From standing when you split the knee-shield legs and staple the bottom leg.",
      "Off a failed knee-slice, retreating to HQ to re-establish control.",
      "When passing half guard and the opponent frames with a knee shield."
    ],
    followUps: [
      "If they frame hard with the shield, smash the knees together and walk around.",
      "When they open or give the underhook, cut through with a knee slice.",
      "If they threaten a leg entanglement, long-step or back-step to clear and re-pin.",
      "Combine slice and smash as a constant either/or dilemma to freeze their defense."
    ],
    whenToUse:
      "Headquarters is the modern default for dealing with knee-shield half guard and is fundamental for pressure passers in both gi and no-gi. It is central to contemporary competition passing because it forces the opponent into a binary defense while keeping you safe from leg entries. It suits methodical passers who want to control the pace and chain passes off a single dominant hub.",
    concept:
      "Positional control and the decision tree: by stapling the leg and winning the shoulder line you create a hub from which multiple passes branch, always countering the opponent's chosen defense.",
    image: "headquarters-position.jpg"
  }
];
