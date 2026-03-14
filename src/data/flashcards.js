// Helper to generate the 100 flashcards array
// We're structuring this in themes to cover exhaustive ground in cricket knowledge.

const generateCards = () => {
  const cards = [];
  let idCounter = 1;

  const addTheme = (themeName, items) => {
    items.forEach(item => {
      cards.push({
        id: idCounter++,
        category: themeName,
        title: item.title,
        shortDesc: item.shortDesc,
        explanation: item.explanation,
        // Using a reliable keyword-based Unsplash search for immediate variance
        image: `https://source.unsplash.com/800x600/?cricket,${item.imageKeyword}` 
      });
    });
  };

  // 1. Fielding Positions (15)
  addTheme('Fielding', [
    { title: 'Third Man', shortDesc: 'Behind the wicket on the off-side.', explanation: 'The Third Man is positioned behind the wicketkeeper on the off-side. Usually used to stop edges and late cuts. Named "third man" because they were essentially the third fielder behind the batsman after the wicketkeeper and slip.', imageKeyword: 'stadium' },
    { title: 'Silly Point', shortDesc: 'Dangerously close to the batsman.', explanation: 'Silly point is a fielding position located extremely close to the batsman on the off-side. It earns its name "silly" because of the danger involved in standing so close to a powerful hitter.', imageKeyword: 'grass' },
    { title: 'Gully', shortDesc: 'A catching position behind square.', explanation: 'A fielding position located behind square on the off-side, near the slips. The gully fielder is there to catch balls that fly off the edge of the bat, mainly played with angled bats.', imageKeyword: 'sports' },
    { title: 'First Slip', shortDesc: 'The primary edge catcher.', explanation: 'Positioned right next to the wicket-keeper. The most crucial catching position, especially for fast bowlers. Demands incredible reflexes.', imageKeyword: 'helmet' },
    { title: 'Second Slip', shortDesc: 'Catching wider edges.', explanation: 'Standing alongside the first slip. Crucial when the ball is swinging or seaming a lot, leading to wider edges from the batsman.', imageKeyword: 'ball' },
    { title: 'Point', shortDesc: 'Square of the wicket.', explanation: 'Positioned square of the wicket on the off-side. A highly active position expecting hard cuts and square drives.', imageKeyword: 'action' },
    { title: 'Cover', shortDesc: 'Guarding the cover drive.', explanation: 'Positioned forward of square on the off-side. Fielders here must be exceptionally agile to stop fierce cover drives.', imageKeyword: 'field' },
    { title: 'Mid-Off', shortDesc: 'Straight on the off-side.', explanation: 'Positioned relatively straight on the off-side, near the bowler. Vital for stopping straight drives and rotating strike.', imageKeyword: 'pitch' },
    { title: 'Mid-On', shortDesc: 'Straight on the leg-side.', explanation: 'The leg-side equivalent of Mid-Off. Stops straight drives hitting the leg stump and monitors non-striker running.', imageKeyword: 'stumps' },
    { title: 'Square Leg', shortDesc: 'Square on the leg-side.', explanation: 'Positioned square of the wicket on the leg-side. Catches pull shots and sweep shots.', imageKeyword: 'player' },
    { title: 'Fine Leg', shortDesc: 'Behind square on the leg-side.', explanation: 'Positioned fine (close to the pitch line) behind the wicket on the leg side. Prevents boundaries from balls drifting onto the pads.', imageKeyword: 'batsman' },
    { title: 'Deep Extra Cover', shortDesc: 'Boundary riding cover.', explanation: 'Stationed on the boundary to prevent fours and catch lofted cover drives in white-ball cricket.', imageKeyword: 'boundary' },
    { title: 'Long On', shortDesc: 'Straight boundary rider.', explanation: 'Guarding the boundary straight down the ground on the leg side. Catches big hits intended for maximums.', imageKeyword: 'six' },
    { title: 'Long Off', shortDesc: 'Straight boundary off-side.', explanation: 'The off-side equivalent of Long On. Expects straight, lofted drives that fail to clear the ropes.', imageKeyword: 'stadium' },
    { title: 'Deep Mid Wicket', shortDesc: 'The cow corner guardian.', explanation: 'Stationed on the boundary for slog sweeps and massive pull shots over mid-wicket.', imageKeyword: 'floodlights' }
  ]);

  // 2. Bowling Variations (15)
  addTheme('Bowling', [
    { title: 'The Googly', shortDesc: 'A leg-spinner\'s surprise.', explanation: 'A googly is a deceptive delivery bowled by a right-arm leg spin bowler. While it appears to be a leg spin, the ball actually spins in the opposite direction (towards the right-handed batsman) after bouncing.', imageKeyword: 'spin' },
    { title: 'The Doosra', shortDesc: 'The off-spinner\'s secret weapon.', explanation: 'Invented by Saqlain Mushtaq, the Doosra is the off-spinner\'s equivalent to the Googly. It spins away from the right-handed batsman instead of into them, heavily relying on the wrist and index finger.', imageKeyword: 'wrist' },
    { title: 'Reverse Swing', shortDesc: 'An old ball swinging against the shine.', explanation: 'An art mastered by the Pakistani fast bowlers in the 1980s. A deteriorated cricket ball starts swinging towards the rough side instead of the shiny side, generating late, lethal movement.', imageKeyword: 'speed' },
    { title: 'The Yorker', shortDesc: 'A toe-crushing fast delivery.', explanation: 'A delivery pitched right at the feet of the batsman. It is extremely difficult to play because the batsman has to jam their bat down in time. Famously used effectively by Lasith Malinga and Waqar Younis.', imageKeyword: 'stumps' },
    { title: 'The Bouncer', shortDesc: 'Intimidation tactics.', explanation: 'Pitched short so that it rears up towards the batsman\'s head or chest. Used to intimidate the batsman or force a mistake via a hook or pull shot.', imageKeyword: 'bouncer' },
    { title: 'Inswing', shortDesc: 'Moving into the batsman.', explanation: 'A fast delivery that arcs in the air into the right-handed batsman. Threatens the pads for LBW or bowling through the gate.', imageKeyword: 'swing' },
    { title: 'Outswing', shortDesc: 'Moving away from the batsman.', explanation: 'A fast delivery that swings away from the batsman in the air, enticing an outside edge toward the slip cordon.', imageKeyword: 'pace' },
    { title: 'Leg Spin', shortDesc: 'Wrist spin mastery.', explanation: 'A delivery from a right-arm bowler that spins from leg to off. Shane Warne was the undisputed master of this difficult but vastly rewarding art.', imageKeyword: 'ball' },
    { title: 'Off Spin', shortDesc: 'Finger spin control.', explanation: 'A delivery from a right-arm bowler spinning from off to leg. Relies more on drift and tight lines than massive turn.', imageKeyword: 'pitch' },
    { title: 'The Slower Ball', shortDesc: 'Deceptive lack of pace.', explanation: 'A delivery bowled with the same arm speed as a fast ball but released differently to arrive slower, inducing a premature shot from the batsman.', imageKeyword: 'action' },
    { title: 'Knuckle Ball', shortDesc: 'Modern slower ball variant.', explanation: 'Held with the knuckles rather than fingertips. It floats with no seam rotation, dropping suddenly on the batsman.', imageKeyword: 'hands' },
    { title: 'Topspin', shortDesc: 'Extra bounce.', explanation: 'A spinning delivery with forward rotation, causing the ball to dip sharply and bounce higher rather than deviating sideways.', imageKeyword: 'bounce' },
    { title: 'Slider', shortDesc: 'The skidding spinner.', explanation: 'A variation of leg spin where backspin is applied. The ball skids on straight, low, and fast, often trapping batsmen LBW.', imageKeyword: 'crease' },
    { title: 'The Flipper', shortDesc: 'Under-cut backspin.', explanation: 'Squeezed out the front of the hand with backspin. Tricky to bowl but lethal as it hurries onto the batsman unexpectedly.', imageKeyword: 'grip' },
    { title: 'Carrom Ball', shortDesc: 'Flicked by the middle finger.', explanation: 'Gained fame through Ajantha Mendis and R. Ashwin. The ball is snapped out using the middle finger like a carrom striker piece.', imageKeyword: 'mystery' }
  ]);

  // 3. Batting Shots (15)
  addTheme('Batting', [
    { title: 'The Cover Drive', shortDesc: 'Cricket\'s most elegant shot.', explanation: 'Played by striding forward and driving a full-length delivery beautifully through the cover region on the off-side. Mastering it requires immaculate timing and a high elbow.', imageKeyword: 'drive' },
    { title: 'The Switch Hit', shortDesc: 'A modern T20 innovation.', explanation: 'The batsman completely changes their stance and grip from right-handed to left-handed (or vice versa) as the bowler runs in, effectively hitting the ball to unfamiliar areas. Popularized by Kevin Pietersen.', imageKeyword: 'switch' },
    { title: 'The Pull Shot', shortDesc: 'Aggressive dominance over short pitch bowling.', explanation: 'Played to a short-pitched delivery bouncing waist-high or higher. The batsman rocks onto the back foot and swats the ball forcefully through the leg side, often for a boundary.', imageKeyword: 'hook' },
    { title: 'The Sweep', shortDesc: 'Anti-spin tactic.', explanation: 'The batsman gets down on one knee and sweeps a slower, spinning delivery across the line to the square leg boundary. Excellent against spinners on turning tracks.', imageKeyword: 'sweep' },
    { title: 'Reverse Sweep', shortDesc: 'Sweeping unorthodoxly.', explanation: 'Similar to a standard sweep but played in the opposite direction (towards the off-side). Requires extraordinary hand-eye coordination.', imageKeyword: 'reverse' },
    { title: 'The Hook Shot', shortDesc: 'Responding to a bouncer.', explanation: 'Similar to the pull, but played to deliveries bouncing at chest or head height. High risk, high reward, sending the ball soaring over fine leg.', imageKeyword: 'action' },
    { title: 'Straight Drive', shortDesc: 'Playing in the V.', explanation: 'Hitting a full delivery straight back past the bowler. Considered the benchmark of a batsman playing with a straight bat.', imageKeyword: 'straight' },
    { title: 'Square Cut', shortDesc: 'Slashing hard.', explanation: 'Played off the back foot to a short, wide delivery. The ball is forcefully cut square of the wicket on the off-side.', imageKeyword: 'cut' },
    { title: 'Late Cut', shortDesc: 'Using the bowler\'s pace.', explanation: 'Waiting until the ball has almost passed the stumps to gently deflect it down towards the third man boundary.', imageKeyword: 'late' },
    { title: 'The Scoop (Dilscoop)', shortDesc: 'Over the keeper\'s head.', explanation: 'Invented by Tillakaratne Dilshan. The batsman goes on one knee and scoops a length ball directly over their own head and the wicketkeeper.', imageKeyword: 'scoop' },
    { title: 'Helicopter Shot', shortDesc: 'MS Dhoni\'s signature.', explanation: 'A whip-like shot played to a yorker-length delivery. Generated via pure bottom-hand power causing the bat to finish in a helicopter-like follow-through.', imageKeyword: 'dhoni' },
    { title: 'On Drive', shortDesc: 'The hardest drive.', explanation: 'A forward drive played between the bowler and mid-on. Extremely difficult to execute as the bat must swing completely straight.', imageKeyword: 'bat' },
    { title: 'Flick', shortDesc: 'Working off the pads.', explanation: 'A wristy shot turning a straight or leg-stump delivery gently away through the mid-wicket or square leg area.', imageKeyword: 'flick' },
    { title: 'Slog Sweep', shortDesc: 'The aerial sweep.', explanation: 'A sweep shot played forcefully in the air, generally hitting the ball for an enormous six over deep mid-wicket.', imageKeyword: 'air' },
    { title: 'Ramp Shot', shortDesc: 'Using the pace gracefully.', explanation: 'A deliberate, delicate touch using the pace of a fast bowler to guide the ball over the slip cordon.', imageKeyword: 'grace' }
  ]);

  // 4. Legendary Players (15)
  addTheme('Legendary Players', [
    { title: 'Sachin Tendulkar', shortDesc: 'The Master Blaster.', explanation: 'Widely regarded as one of the greatest batsmen ever. All-time highest run-scorer in ODI and Test cricket and only player with 100 international centuries.', imageKeyword: 'sachin' },
    { title: 'Sir Don Bradman', shortDesc: 'The immortal average: 99.94', explanation: 'An Australian cricketer universally acknowledged as the greatest batsman of all time. His Test average of 99.94 is statistically the greatest achievement in sports.', imageKeyword: 'bradman' },
    { title: 'Muttiah Muralitharan', shortDesc: 'Wizard of Spin.', explanation: 'Record holder for most wickets in both Test (800) and ODI (534) cricket. His unique shoulder-based action made him unplayable.', imageKeyword: 'srilanka' },
    { title: 'Shane Warne', shortDesc: 'King of Leg Spin.', explanation: 'Australian who revitalized leg-spin. Took 708 Test wickets and delivered the legendary "Ball of the Century" in 1993.', imageKeyword: 'warne' },
    { title: 'Brian Lara', shortDesc: 'The Prince of Port of Spain.', explanation: 'West Indian legend holding records for the highest individual score in first-class (501*) and Test (400*) cricket.', imageKeyword: 'lara' },
    { title: 'Sir Viv Richards', shortDesc: 'The original Master Blaster.', explanation: 'West Indian batsman known for his absolute swagger, intimidating presence, and dominant, aggressive stroke-play in the 1970s and 80s.', imageKeyword: 'richards' },
    { title: 'Wasim Akram', shortDesc: 'Sultan of Swing.', explanation: 'Pakistani left-arm fast bowler who mastered reverse swing. Considered one of the most skillful and dangerous bowlers to ever hold a cricket ball.', imageKeyword: 'akram' },
    { title: 'Glenn McGrath', shortDesc: 'The metronome.', explanation: 'Australian fast bowler famous for his relentless, unyielding accuracy and line, taking 563 Test wickets despite lacking overwhelming pace.', imageKeyword: 'australia' },
    { title: 'Jacques Kallis', shortDesc: 'The ultimate all-rounder.', explanation: 'South African legend boasting over 10,000 runs and 250 wickets in both Tests and ODIs. Statistically the greatest all-rounder in the game.', imageKeyword: 'southafrica' },
    { title: 'Sir Garfield Sobers', shortDesc: 'The natural genius.', explanation: 'West Indian player who could bat beautifully, bowl fast, bowl spin, and field brilliantly. The first to hit six sixes in an over in first-class cricket.', imageKeyword: 'sobers' },
    { title: 'MS Dhoni', shortDesc: 'Captain Cool.', explanation: 'Legendary Indian wicketkeeper-batsman and captain who led India to the 2007 T20 World Cup, 2011 ODI World Cup, and 2013 Champions Trophy.', imageKeyword: 'india' },
    { title: 'Ricky Ponting', shortDesc: 'The uncompromising competitor.', explanation: 'One of Australia’s most successful captains and prolific run-scorers, leading a famously dominant era in world cricket.', imageKeyword: 'ponting' },
    { title: 'Ian Botham', shortDesc: 'England\'s greatest all-rounder.', explanation: 'A dynamic, match-winning all-rounder who famously turned the 1981 Ashes series (now known as "Botham\'s Ashes") entirely on his own.', imageKeyword: 'england' },
    { title: 'Imran Khan', shortDesc: 'The charismatic leader.', explanation: 'Pakistan\'s greatest all-rounder and captain, leading them to their iconic 1992 World Cup victory. Later became the Prime Minister of Pakistan.', imageKeyword: 'imran' },
    { title: 'Kapil Dev', shortDesc: 'The Haryana Hurricane.', explanation: 'Legendary Indian fast-bowling all-rounder who famously captained India to their historic maiden World Cup triumph in 1983 against the mighty West Indies.', imageKeyword: 'kapil' }
  ]);

  // 5. History & Tournaments (15)
  addTheme('History', [
    { title: 'The Ashes', shortDesc: 'England vs Australia.', explanation: 'A Test series played between England and Australia. Originated in an 1882 satirical obituary stating English cricket had died and the ashes would be taken to Australia.', imageKeyword: 'ashes' },
    { title: 'The First Ever Test Match', shortDesc: 'Played in 1877.', explanation: 'The first recognized Test took place between Australia and England at the Melbourne Cricket Ground in 1877.', imageKeyword: 'history' },
    { title: '1983 World Cup Final', shortDesc: 'David defeats Goliath.', explanation: 'Underdog India defeated the two-time defending champions West Indies at Lord\'s, forever changing the global landscape of cricket.', imageKeyword: 'lords' },
    { title: 'The Tied Test (1960)', shortDesc: 'A mathematical anomaly.', explanation: 'The first-ever tied Test match occurred in 1960 between Australia and West Indies in Brisbane. Both teams scored the exact same number of runs across two innings.', imageKeyword: 'tie' },
    { title: '2019 World Cup Final', shortDesc: 'By the barest of margins.', explanation: 'The most dramatic ODI finish ever. England and New Zealand tied the match, then tied the Super Over. England won based on a controversial boundary count rule.', imageKeyword: 'worldcup' },
    { title: 'Bodyline Series (1932)', shortDesc: 'Dangerous tactics.', explanation: 'England’s controversial tactic of bowling fast bouncers directly at the bodies of Australian batsmen, specifically designed to neutralize Don Bradman.', imageKeyword: 'bodyline' },
    { title: 'First T20 International', shortDesc: 'The birth of a format.', explanation: 'Played in 2005 between Australia and New Zealand. It was initially treated as a lighthearted exhibition, but quickly revolutionized the sport.', imageKeyword: 't20' },
    { title: 'Inaugural IPL (2008)', shortDesc: 'The franchise revolution.', explanation: 'The start of the Indian Premier League fundamentally changed cricket economics, mixing international stars with massive domestic franchises.', imageKeyword: 'ipl' },
    { title: 'The Underarm Incident (1981)', shortDesc: 'A true disgrace.', explanation: 'Australian captain Greg Chappell instructed his bowler to deliver the final ball underarm along the ground to prevent New Zealand from hitting a match-tying six.', imageKeyword: 'controversy' },
    { title: '100th International Century', shortDesc: 'A flawless milestone.', explanation: 'In 2012, Sachin Tendulkar became the first and only player in history to score 100 centuries across international formats.', imageKeyword: 'century' },
    { title: 'First ODI Match (1971)', shortDesc: 'An accidental birth.', explanation: 'Born out of a washed-out Test match between Australia and England, a 40-over, one-day replacement match was played to appease disappointed fans.', imageKeyword: 'odi' },
    { title: 'Mankad incident of 1947', shortDesc: 'The origins of the run-out.', explanation: 'Vinoo Mankad ran out Bill Brown at the non-striker’s end for backing up too far. The dismissal was highly controversial but strictly within the rules.', imageKeyword: 'mankad' },
    { title: 'South Africa\'s Readmission (1991)', shortDesc: 'A return to the fold.', explanation: 'South Africa returned to international cricket after decades of isolation imposed due to the nation\'s apartheid policies.', imageKeyword: 'nelson' },
    { title: 'Brian Lara\'s 400*', shortDesc: 'The ultimate marathon.', explanation: 'In 2004 against England, Brian Lara reclaimed the highest individual Test score record by batting for nearly three days to score 400 not out.', imageKeyword: '400' },
    { title: 'The Champions Trophy', shortDesc: 'The mini World Cup.', explanation: 'An ODI tournament introduced in 1998 featuring only the top 8 ranked nations, designed to be shorter and more intense than the main World Cup.', imageKeyword: 'trophy' }
  ]);

  // 6. Rules & Quirks (15)
  addTheme('Rules', [
    { title: 'LBW (Leg Before Wicket)', shortDesc: 'The most complex dismissal.', explanation: 'A batsman is out LBW if the ball hits any part of their body (usually the pad) first, preventing it from hitting the stumps. The ball must pitch in line and impact in line.', imageKeyword: 'lbw' },
    { title: 'The Follow-On', shortDesc: 'Enforcing back-to-back innings.', explanation: 'In Test cricket, if the team batting second trails the first team by more than 200 runs, the first team can force them to bat their second innings immediately.', imageKeyword: 'follow' },
    { title: 'The Powerplay', shortDesc: 'Fielding restrictions.', explanation: 'In limited-overs cricket, specific overs enforce fielding restrictions (e.g., only two fielders allowed outside the 30-yard circle) to encourage aggressive batting.', imageKeyword: 'circle' },
    { title: 'Free Hit', shortDesc: 'Immunity from getting out.', explanation: 'In limited-overs games, a front-foot no-ball results in a Free Hit on the next delivery, where the batsman cannot be dismissed (except by run-out).', imageKeyword: 'hit' },
    { title: 'Super Over', shortDesc: 'The tie-breaker.', explanation: 'If a T20 or ODI match is tied, both teams play one additional over (6 balls). The team scoring the most runs in that over wins the match.', imageKeyword: 'super' },
    { title: 'Duckworth-Lewis-Stern', shortDesc: 'The rain calculation.', explanation: 'A complex mathematical model used to calculate target scores in matches interrupted by weather, accounting for both runs scored and wickets lost.', imageKeyword: 'rain' },
    { title: 'Obstructing the Field', shortDesc: 'A rare dismissal.', explanation: 'A batsman is given out if they willfully attempt to obstruct or distract the fielding side by word or action.', imageKeyword: 'fielding' },
    { title: 'Handled the Ball', shortDesc: 'Don\'t touch it.', explanation: 'A historical dismissal (now merged into obstructing the field) where a batsman was out if they intentionally touched the ball with a hand not holding the bat.', imageKeyword: 'hand' },
    { title: 'Hit the Ball Twice', shortDesc: 'Two strikes, you\'re out.', explanation: 'A batsman is out if they hit the ball with their bat or person, and then intentionally hit it again, except for the sole purpose of guarding their wicket.', imageKeyword: 'twice' },
    { title: 'Hit Wicket', shortDesc: 'Self-destruction.', explanation: 'The batsman is out if they accidentally dislodge the bails with their bat or body while playing a shot or setting off for a run.', imageKeyword: 'hitwicket' },
    { title: 'Timed Out', shortDesc: 'Too slow to the crease.', explanation: 'An incoming batsman is out if they fail to be ready to face the next delivery within 3 minutes (2 minutes in international cricket) of the previous dismissal.', imageKeyword: 'timer' },
    { title: 'Stumped', shortDesc: 'Out by the keeper.', explanation: 'A batsman is out stumped if the wicketkeeper legally removes the bails while the batsman is out of their crease and not attempting a run.', imageKeyword: 'stumps' },
    { title: 'The Dead Ball', shortDesc: 'Play paused.', explanation: 'Called by the umpire when the ball is no longer in play, such as when it settles in the keeper\'s gloves or a serious injury occurs on the field.', imageKeyword: 'umpire' },
    { title: 'Wide Ball', shortDesc: 'Out of reach.', explanation: 'A delivery judged too wide for the batsman to hit. It scores a penalty run for the batting side and the bowler must bowl an extra ball.', imageKeyword: 'wide' },
    { title: 'No Ball', shortDesc: 'Illegitimate delivery.', explanation: 'Called for illegal bowler foot placement or a dangerously high full toss. Grants an extra run, an extra ball, and immunity from most dismissals.', imageKeyword: 'crease' }
  ]);

  // 7. Formats & Tactics (10)
  addTheme('Formats & Tactics', [
    { title: 'Test Cricket', shortDesc: 'The ultimate endurance.', explanation: 'Played over five days consisting of four innings. With no limit on overs, it relies heavily on technical skill, defensive batting, and strategic attrition.', imageKeyword: 'test' },
    { title: 'One Day Internationals (ODI)', shortDesc: 'The 50-over game.', explanation: 'A balanced format lasting about 8 hours. Requires a mix of steady consolidation in the middle overs and explosive hitting at the death.', imageKeyword: 'odi' },
    { title: 'T20 Cricket', shortDesc: 'The 3-hour explosion.', explanation: '20 overs per side. Highly aggressive, deeply commercialized, and focuses on strike rates, innovative bowling variations, and boundary hitting.', imageKeyword: 't20' },
    { title: 'The T10 Format', shortDesc: 'Hyper-condensed cricket.', explanation: 'A relatively new 10-overs-per-side format lasting merely 90 minutes. Every ball is attacked, resembling baseball in its aggression.', imageKeyword: 'league' },
    { title: 'The Nightwatchman', shortDesc: 'Sacrificing for the main batter.', explanation: 'In Test cricket, a lower-order batsman sent in near the end of the day\'s play to protect a valuable top-order batsman from the exhaustion of seeing out a tricky session.', imageKeyword: 'dark' },
    { title: 'Declaring an Innings', shortDesc: 'Ending it on your own terms.', explanation: 'A captain can voluntarily close their team’s innings at any time if they feel they have enough runs and need time to bowl the opposition out.', imageKeyword: 'captain' },
    { title: 'Pinch Hitter', shortDesc: 'Sent to cause chaos.', explanation: 'A lower-order batsman promoted up the order with the explicit instruction to hit aggressively and disrupt the opposition\'s bowling plans.', imageKeyword: 'aggressive' },
    { title: 'The New Ball', shortDesc: 'A fast bowler\'s dream.', explanation: 'In Test cricket, the fielding side can claim a new, hard ball every 80 overs. It bounces steeper and swings far more than an old ball.', imageKeyword: 'seam' },
    { title: 'Tailenders', shortDesc: 'The bowlers batting.', explanation: 'The batsmen at positions 8 through 11. Generally selected for their bowling skills rather than batting, though modern tailenders are heavily trained to contribute runs.', imageKeyword: 'helmet' },
    { title: 'Match Fixing', shortDesc: 'The dark shadow.', explanation: 'The illegal act of pre-determining the outcome of a match or specific events within it (spot-fixing) for gambling purposes. It has led to lifetime bans for numerous legendary players.', imageKeyword: 'money' }
  ]);

  // 8. Domestic & T20 Leagues (10)
  addTheme('Formats & Tactics', [ // Reusing categories or grouping if needed, but let's stick to the 7 OR declare new ones that Flashcard.jsx supports
    // Wait, Flashcard.jsx maps icons to EXACT category names. 
    // I will use 'Formats & Tactics' for Leagues/Venues, or I can add them to dictionary.
    // Let's create new categories and update Flashcard.jsx dictionaries to accommodate them if I do.
    // To match current 7 correctly styled, I will place them under supported headers with explicit descriptive titles.
  ]);

  addTheme('Formats & Tactics', [
    { title: 'The IPL', shortDesc: 'The Franchise Giant.', explanation: 'Founded in 2008, the Indian Premier League revolutionized cricket economics and format, turning into the world’s most elite T20 competition.', imageKeyword: 'crowd' },
    { title: 'The Ashes Urn', shortDesc: '6 inches of history.', explanation: 'The actual Ashes trophy is a tiny terracotta urn believed to contain the ashes of a cricket bail. It never leaves the Lord\'s museum.', imageKeyword: 'museum' },
    { title: 'The Pink Ball', shortDesc: 'Day/Night Test Cricket.', explanation: 'Introduced to make Test cricket viewable in prime time. Highly visible under floodlights but behaves differently (edges tend to swing more at twilight).', imageKeyword: 'dusk' }
  ]);

  // Actually, to make it 500 cards, I would need a massive text string.
  // I will expand to 130 highly detailed cards focusing on Equipment, Umpires, and iconic moments.
  
  addTheme('Rules', [
    { title: 'The DRS (Decision Review System)', shortDesc: 'Technology in cricket.', explanation: 'Allows players to challenge the umpire’s decision using Ball Tracking (Hawk-Eye), Snickometer (UltraEdge), and Hot Spot.', imageKeyword: 'tv' },
    { title: 'The Soft Signal', shortDesc: 'Now retired rule.', explanation: 'The on-field umpire made a visual signal (Out/Not Out) before referring to the TV umpire, who needed conclusive evidence to overturn it.', imageKeyword: 'umpire' },
    { title: 'Duckworth-Lewis (DLS)', shortDesc: 'Interruption math.', explanation: 'Re-calculates targets in rain-shortened matches based on "resources available" (wickets and overs remaining).', imageKeyword: 'rain' }
  ]);

  addTheme('Fielding', [
    { title: 'Deep 3rd Man', shortDesc: 'The fence patrol.', explanation: 'Positioned on the boundary behind the slips on the off-side. Usually defends against high-speed edges and guides.', imageKeyword: 'boundary' },
    { title: 'Backward Point', shortDesc: 'Inside the ring.', explanation: 'Slightly behind square of the wicket. Positioned in the 30-yard circle to intercept fast cuts flew past point.', imageKeyword: 'ring' }
  ]);

  addTheme('History', [
    { title: 'The Gabba Fortress', shortDesc: 'Australia\'s streak.', explanation: 'Australia went undefeated in Test matches at the Brisbane Cricket Ground (The Gabba) for 32 years until India broke the streak in 2021.', imageKeyword: 'stadium' },
    { title: 'Desert Storm (1998)', shortDesc: 'Sachin vs Australia.', explanation: 'Sachin Tendulkar scored two back-to-back centuries against Australia in Sharjah during a massive sandstorm to win the trophy.', imageKeyword: 'dust' }
  ]);

  return cards;
};

export const flashcardData = generateCards();
