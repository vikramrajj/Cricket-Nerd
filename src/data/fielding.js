export const fieldingPositions = [
  // Close Catching (The Slips Cordon & Inner Ring)
  { id: 'wk', name: 'Wicket Keeper', x: 50, y: 65, role: 'Wicket Keeper', intent: 'Primary catcher and stumpings.', description: 'Stands behind the stumps. The most crucial fielding position, involved in almost every delivery.' },
  { id: 'slip1', name: 'First Slip', x: 45, y: 68, role: 'Close Catcher', intent: 'Thick outside edges.', description: 'Next to the keeper. Prime position for catching outside edges from fast bowlers.' },
  { id: 'slip2', name: 'Second Slip', x: 42, y: 69, role: 'Close Catcher', intent: 'Wider outside edges.', description: 'Catches wider edges. Essential when the ball is swinging or seaming.' },
  { id: 'slip3', name: 'Third Slip', x: 39, y: 70, role: 'Close Catcher', intent: 'Aggressive slip catching.', description: 'Used primarily in Test cricket with a very new ball or a highly aggressive field.' },
  { id: 'gully', name: 'Gully', x: 33, y: 65, role: 'Close Catcher', intent: 'Angled bat deflections.', description: 'Behind square on the off-side. Catching position for balls flying off angled bats or thick edges.' },
  { id: 'leg_slip', name: 'Leg Slip', x: 55, y: 68, role: 'Close Catcher', intent: 'Fine leg-side deflections.', description: 'Mirror to the slips on the leg side. Used to catch fine deflections off the pads or bat.' },
  { id: 'silly_point', name: 'Silly Point', x: 42, y: 55, role: 'Intimidator', intent: 'Bat-pad catches off spinners.', description: 'Extremely close on the off-side. Used against spinners to catch prods and bat-pad deflections.' },
  { id: 'short_leg', name: 'Short Leg', x: 58, y: 55, role: 'Intimidator', intent: 'Fends off short-pitched bowling.', description: 'Extremely close on the leg-side. Lethal catching position against spinners and fast, short-pitched bowling.' },

  // The 30-Yard Circle (Off-Side)
  { id: 'point', name: 'Point', x: 20, y: 50, role: 'Ring Fielder', intent: 'Saving square cuts.', description: 'Square of the wicket. A highly active saving position expecting hard cuts and square drives.' },
  { id: 'backward_point', name: 'Backward Point', x: 22, y: 58, role: 'Ring Fielder', intent: 'Fast, finer cuts.', description: 'Slightly behind square. Deployed when the pace is high and cuts are flying finer.' },
  { id: 'cover', name: 'Cover', x: 25, y: 35, role: 'Ring Fielder', intent: 'Stopping cover drives.', description: 'In front of square. Fielders here must be exceptionally agile to dive and stop fierce cover drives.' },
  { id: 'extra_cover', name: 'Extra Cover', x: 32, y: 28, role: 'Ring Fielder', intent: 'Plugging the off-side gap.', description: 'Between cover and mid-off. Plugs the gap to prevent boundaries from expansive, lofted drives.' },
  { id: 'mid_off', name: 'Mid Off', x: 42, y: 20, role: 'Ring Fielder', intent: 'Saving the straight single.', description: 'Straightish on the off-side. Vital for stopping straight drives and saving the single.' },

  // The 30-Yard Circle (Leg-Side)
  { id: 'mid_on', name: 'Mid On', x: 58, y: 20, role: 'Ring Fielder', intent: 'Saving the straight single.', description: 'Straightish on the leg-side. Stops straight drives and monitors the non-striker.' },
  { id: 'mid_wicket', name: 'Mid Wicket', x: 75, y: 35, role: 'Ring Fielder', intent: 'Catching flicked shots.', description: 'In front of square. A prime catching area for flicked balls and mistimed pull shots.' },
  { id: 'square_leg', name: 'Square Leg', x: 80, y: 50, role: 'Ring Fielder', intent: 'Stopping grounded pulls.', description: 'Square of the wicket. Key position for stopping pull shots and calling square-leg umpire decisions.' },
  { id: 'backward_square', name: 'Backward Square Leg', x: 78, y: 60, role: 'Ring Fielder', intent: 'Stopping the sweep.', description: 'Behind square on the leg-side. Often stops sweeping shots.' },
  { id: 'fine_leg', name: 'Short Fine Leg', x: 75, y: 70, role: 'Ring Fielder', intent: 'Saving fine leg deflections.', description: 'Inside the circle behind the wicket. Defends against the fine paddle sweep or tickles off the pads.' },
  { id: 'short_third_man', name: 'Short Third Man', x: 25, y: 70, role: 'Ring Fielder', intent: 'Saving reverse sweeps/cuts.', description: 'Inside the circle behind the wicket on the off-side. Usually protects against late cuts and reverse sweeps.' },

  // The Boundary (Deep) - Off-Side
  { id: 'third_man', name: 'Deep Third Man', x: 15, y: 88, role: 'Boundary Rider', intent: 'Catching thick edges.', description: 'Boundary rider on the fine off-side. Often scores highly on "runs saved" from edges.' },
  { id: 'deep_point', name: 'Deep Point', x: 8, y: 50, role: 'Boundary Rider', intent: 'Protecting the slash cut.', description: 'Boundary rider square of the wicket. Put in place when the batsman is aggressively slashing outside off-stump.' },
  { id: 'deep_cover', name: 'Deep Cover', x: 12, y: 30, role: 'Boundary Rider', intent: 'Stopping boundary drives.', description: 'Boundary rider for cover drives. Crucial in T20s to stop the 4s in the powerplay.' },
  { id: 'sweeper', name: 'Sweeper Cover', x: 18, y: 22, role: 'Boundary Rider', intent: 'Patrolling the massive gap.', description: 'A deep boundary position roaming the massive gap between deep cover and long off.' },
  { id: 'long_off', name: 'Long Off', x: 35, y: 8, role: 'Boundary Rider', intent: 'Catching lofted drives.', description: 'Straight down the ground boundary rider. Expects to catch straight, lofted drives.' },

  // The Boundary (Deep) - Leg-Side
  { id: 'long_on', name: 'Long On', x: 65, y: 8, role: 'Boundary Rider', intent: 'Catching huge straight hits.', description: 'The leg-side equivalent of Long Off. Crucial for catching massive hits straight down the ground.' },
  { id: 'deep_mid_wicket', name: 'Deep Mid Wicket', x: 85, y: 25, role: 'Boundary Rider', intent: 'Guarding cow-corner.', description: 'The cow corner guardian. Stationed on the boundary for slog sweeps and massive pull shots.' },
  { id: 'deep_square_leg', name: 'Deep Square Leg', x: 90, y: 50, role: 'Boundary Rider', intent: 'Catching aggressive hooks.', description: 'Boundary rider square on the leg side. Set back specifically to catch aggressive hook and pull shots.' },
  { id: 'deep_fine_leg', name: 'Deep Fine Leg', x: 85, y: 88, role: 'Boundary Rider', intent: 'Catching top-edges.', description: 'Boundary rider fine on the leg side. Catches top-edges from hook shots or prevents boundaries from errant leg-side deliveries.' }
];
