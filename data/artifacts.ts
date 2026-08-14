import type { Artifact } from "@/types/artifact";

/**
 * The artifact database.
 *
 * REAL entries are backed by verifiable sources (Wikimedia Commons, Wikisource,
 * legislation.gov.uk). AI entries are original fictional reconstructions built
 * for this game — clearly labelled as such the moment a player reveals the
 * answer, per the deceptionDetails / historicalContext fields.
 */
export const artifacts: Artifact[] = [
  // ───────────────────────── REAL ─────────────────────────
  {
    id: "real-gandhi-portrait-1931",
    type: "photograph",
    title: "Gandhi, Studio Portrait",
    difficulty: "easy",
    answer: "real",
    date: "1931",
    location: "London, England",
    people: ["Mahatma Gandhi"],
    visual: {
      kind: "image",
      src: "/artifacts/gandhi-portrait-1931.jpg",
      alt: "Studio portrait of Mahatma Gandhi, London, 1931, wrapped in a shawl",
    },
    explanation:
      "Gandhi travelled to London in 1931 as the sole Congress delegate to the Second Round Table Conference on Indian constitutional reform — his only visit to England during the independence struggle. This studio portrait was taken during that trip, showing him in the simple homespun dress he had adopted as a mark of Swadeshi self-reliance, a striking contrast to the formal dress of the conference itself.",
    whyReal:
      "The photograph is credited to Elliott & Fry, a long-established London portrait studio, and is catalogued and dated to 1931 — consistent with Gandhi's documented itinerary that year. The plain shawl, round spectacles and closely cropped grey hair match his appearance in independently dated newsreel footage from the same conference.",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mahatma-Gandhi,_studio,_1931.jpg",
  },
  {
    id: "real-gandhi-salt-march-1930",
    type: "photograph",
    title: "Gandhi on the Salt March",
    difficulty: "easy",
    answer: "real",
    date: "March 1930",
    location: "Gujarat, on the road from Sabarmati Ashram to Dandi",
    people: ["Mahatma Gandhi"],
    visual: {
      kind: "image",
      src: "/artifacts/gandhi-salt-march-1930.jpg",
      alt: "Mahatma Gandhi walking with a bamboo staff during the 1930 Salt March",
    },
    explanation:
      "On 12 March 1930, Gandhi set out from Sabarmati Ashram with 78 followers on a 24-day, roughly 385-kilometre march to the coastal village of Dandi, to break the British salt tax by making salt from seawater. The march grew into thousands by the time it reached the coast, and it is now regarded as the moment that turned civil disobedience into a genuinely mass movement.",
    whyReal:
      "The image is catalogued and widely reproduced as a photograph of the march itself, taken in transit rather than posed in a studio — visible in the unguarded gait, the walking staff, and the informal roadside setting rather than a studio backdrop.",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Marche_sel.jpg",
  },
  {
    id: "real-bose-portrait-1930s",
    type: "photograph",
    title: "Subhas Chandra Bose, Portrait",
    difficulty: "medium",
    answer: "real",
    date: "c. 1930s",
    location: "Calcutta (Kolkata), Bengal",
    people: ["Subhas Chandra Bose"],
    visual: {
      kind: "image",
      src: "/artifacts/bose-portrait-1930s.jpg",
      alt: "Portrait photograph of Subhas Chandra Bose in Indian National Congress-era dress",
    },
    explanation:
      "Subhas Chandra Bose rose through the Indian National Congress to become its president in 1938 and 1939, before breaking with Gandhi over strategy and eventually forming the Indian National Army (Azad Hind Fauj) with Axis support during the Second World War, to fight for India's independence by force.",
    whyReal:
      "The photograph is held and credited by the Netaji Research Bureau in Kolkata, the institution founded by Bose's family and associates that curates his personal papers and photographic archive — one of the most direct lines of provenance available for images of Bose.",
    sourceName: "Netaji Research Bureau, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Subhas_Chandra_Bose_NRB.jpg",
  },
  {
    id: "real-nehru-gandhi-1946",
    type: "photograph",
    title: "Nehru and Gandhi Share a Joke",
    difficulty: "medium",
    answer: "real",
    date: "6 July 1946",
    location: "Bombay (Mumbai)",
    people: ["Jawaharlal Nehru", "Mahatma Gandhi", "Vijaya Lakshmi Pandit"],
    visual: {
      kind: "image",
      src: "/artifacts/nehru-gandhi-1946.jpg",
      alt: "Jawaharlal Nehru laughing with Mahatma Gandhi at an All India Congress Committee meeting, Bombay, 1946",
    },
    explanation:
      "Taken at an All India Congress Committee meeting in Bombay just over a year before independence, during the fraught negotiations over the Cabinet Mission Plan and the formation of an interim government. Nehru's sister, Vijaya Lakshmi Pandit, appears at the left.",
    whyReal:
      "The photograph is credited to Max Desfor, a working Associated Press photojournalist active in South Asia in this period, and is dated precisely to 6 July 1946 — consistent with the documented AICC session held in Bombay that week.",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Nehru_and_Gandhi,_All_India_Congress,_Mumbai,_July_6,_1946.jpg",
  },
  {
    id: "real-cripps-gandhi-1942",
    type: "photograph",
    title: "Stafford Cripps Meets Gandhi",
    difficulty: "hard",
    answer: "real",
    date: "April 1942",
    location: "Birla House, New Delhi",
    people: ["Stafford Cripps", "Mahatma Gandhi"],
    visual: {
      kind: "image",
      src: "/artifacts/cripps-gandhi-1942.jpg",
      alt: "Sir Stafford Cripps in conversation with Mahatma Gandhi on the steps of Birla House, Delhi, April 1942",
    },
    explanation:
      "Sir Stafford Cripps was sent to India by Churchill's War Cabinet in March 1942 to negotiate Indian political support for the war effort in return for a promise of dominion status after the war. The mission collapsed within weeks — Gandhi reportedly called the offer 'a post-dated cheque on a crumbling bank' — and its failure directly set the stage for the Quit India movement that August.",
    whyReal:
      "The photograph was taken by No. 9 Army Film & Photographic Unit, the official British military unit responsible for wartime documentation, and is held in the Imperial War Museums collection under catalogue number IND 740, released to the public domain as UK government work.",
    sourceName: "Imperial War Museums, via Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Sir_Stafford_Cripps_with_Mahatma_Gandhi_on_the_steps_of_Birla_House,_Delhi,_during_his_mission_to_India,_April_1942._IND740.jpg",
  },
  {
    id: "real-swadeshi-poster-1930s",
    type: "poster",
    title: "\"Concentrate on Charkha and Swadeshi\"",
    difficulty: "medium",
    answer: "real",
    date: "1930s",
    location: "India (mass-produced bazaar print)",
    visual: {
      kind: "image",
      src: "/artifacts/swadeshi-poster-1930s.jpg",
      alt: "1930s Indian bazaar art poster reading Concentrate on Charkha and Swadeshi, showing figures spinning cotton",
    },
    explanation:
      "This is an example of \"bazaar art\" — cheaply printed popular prints sold in Indian markets — carrying a Swadeshi message: concentrate on the charkha (spinning wheel) and on swadeshi (home-made) goods rather than imported British cloth. Gandhi promoted hand-spinning from 1920 onward as both an economic boycott and a daily discipline that any Indian, rich or poor, could take part in.",
    whyReal:
      "The print survives as an example of the popular commercial art that circulated the Swadeshi message far beyond Congress's own official material — the kind of ephemeral, mass-market object that rarely survives in institutional archives but occasionally turns up in private and university collections.",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Concentrate_on_Charkha_and_Swadeshi_bazaar_art.jpg",
  },
  {
    id: "real-wwi-recruitment-poster",
    type: "propaganda",
    title: "Indian Army Recruitment Poster",
    difficulty: "hard",
    answer: "real",
    date: "c. 1914–1918",
    location: "British India",
    visual: {
      kind: "image",
      src: "/artifacts/wwi-recruitment-poster.jpg",
      alt: "Hindi-language British Indian Army recruitment poster from the First World War, showing a soldier standing over a map of India",
    },
    explanation:
      "A colonial-government recruitment poster in Hindi, urging Indians to enlist during the First World War, in which more than a million Indian soldiers ultimately served. The unmet promises of postwar self-government that followed this recruitment drive — combined with the repressive Rowlatt Act and the 1919 Jallianwala Bagh massacre — fed directly into the mass Non-Cooperation Movement of 1920.",
    whyReal:
      "This is genuine colonial-era propaganda produced by the British administration, not nationalist material — a reminder that not every artifact from this period was made by the independence movement. Its plain, direct composition and full Hindi text are typical of official wartime recruitment printing of the era.",
    sourceName: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Indian_Army_World_War_I_Hindi_Recruitment_Poster.jpg",
  },
  {
    id: "real-harijan-1939",
    type: "newspaper",
    title: "Harijan, 23 September 1939",
    difficulty: "medium",
    answer: "real",
    date: "23 September 1939",
    location: "Poona (Pune)",
    people: ["Mahatma Gandhi (editor)"],
    visual: {
      kind: "image",
      src: "/artifacts/harijan-1939.jpg",
      alt: "Front page of Harijan, Mahatma Gandhi's weekly newspaper, dated 23 September 1939",
    },
    explanation:
      "Harijan was one of several weeklies Gandhi personally edited, successor to Young India, focused chiefly on the removal of untouchability and rural reconstruction. This issue appeared three weeks after Britain declared war on Germany, during the period when the Congress leadership was debating the terms of any support for the British war effort.",
    whyReal:
      "The paper's masthead credits Gandhi directly as editor, consistent with his real editorship of Harijan from 1933 until his death — a role he treated as seriously as his political organising, using the paper to publish extended essays rather than short news items.",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Harijan_September_23_1939.jpg",
  },
  {
    id: "real-tryst-with-destiny-1947",
    type: "speech",
    title: "\"A Tryst with Destiny\"",
    difficulty: "easy",
    answer: "real",
    date: "14–15 August 1947",
    location: "Constituent Assembly, New Delhi",
    people: ["Jawaharlal Nehru"],
    visual: {
      kind: "quote",
      excerpt:
        "Long years ago we made a tryst with destiny, and now the time comes when we shall redeem our pledge... At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom.",
      speaker: "Jawaharlal Nehru",
      context: "Constituent Assembly, New Delhi — midnight, 14–15 August 1947",
    },
    explanation:
      "Delivered to India's Constituent Assembly in the minutes surrounding midnight on 14–15 August 1947, as British rule formally ended and India and Pakistan came into being as independent dominions. It is routinely ranked among the most significant political speeches of the twentieth century.",
    whyReal:
      "The full text was recorded in the Constituent Assembly Debates and has been reprinted and archived continuously since — one of the best-documented speeches in modern Indian history, with no meaningful textual disputes over its wording.",
    sourceName: "Wikisource",
    sourceUrl: "https://en.wikisource.org/wiki/A_Tryst_With_Destiny",
  },
  {
    id: "real-quit-india-speech-1942",
    type: "speech",
    title: "The \"Do or Die\" Speech",
    difficulty: "medium",
    answer: "real",
    date: "8 August 1942",
    location: "Gowalia Tank Maidan, Bombay",
    people: ["Mahatma Gandhi"],
    visual: {
      kind: "quote",
      excerpt:
        "I am the same Gandhi as I was in 1920... There is nothing but purest Ahimsa in all that I am saying and doing today... We shall either free India or die in the attempt; we shall not live to see the perpetuation of our slavery.",
      speaker: "Mahatma Gandhi",
      context: "Gowalia Tank Maidan, Bombay — the night before his arrest, 8 August 1942",
    },
    explanation:
      "Delivered on the eve of the launch of the Quit India Resolution, hours before Gandhi and the entire Congress Working Committee were arrested before dawn. The speech, and the mass uprising that followed his arrest, is remembered as the final and largest nationwide movement of the independence struggle.",
    whyReal:
      "The speech was recorded and transcribed at the time and has been reproduced in Congress proceedings and subsequent scholarship ever since, making it one of the most widely corroborated speeches of the period.",
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Quit_India_speech",
  },
  {
    id: "real-independence-act-1947",
    type: "document",
    title: "Indian Independence Act 1947",
    difficulty: "medium",
    answer: "real",
    date: "Royal assent 18 July 1947; in force 15 August 1947",
    location: "Palace of Westminster, London",
    visual: {
      kind: "quote",
      excerpt:
        "An Act to make provision for the setting up in India of two independent Dominion States, to substitute other provisions for certain provisions of the Government of India Act, 1935, which apply outside those Dominions, and to provide for other matters consequential on or connected with the setting up of those Dominions.",
      speaker: "The Parliament of the United Kingdom",
      context: "10 & 11 Geo. 6, Chapter 30 — enacted 18 July 1947",
    },
    explanation:
      "The Act by which the UK Parliament ended British paramountcy over India, created the two new dominions of India and Pakistan, and set the transfer of power for midnight on 15 August 1947. It passed through Parliament in a matter of weeks after the plan was announced by Lord Mountbatten in June 1947.",
    whyReal:
      "This is the actual short-title citation and opening preamble of the statute as enacted, still catalogued today under its official chapter number by the UK's official legislation archive.",
    sourceName: "legislation.gov.uk (The National Archives, UK)",
    sourceUrl: "https://www.legislation.gov.uk/ukpga/1947/30/contents/enacted",
  },
  {
    id: "real-gandhi-irwin-letter-1930",
    type: "letter",
    title: "Letter to Lord Irwin",
    difficulty: "hard",
    answer: "real",
    date: "2 March 1930",
    location: "Sabarmati Ashram, Ahmedabad",
    people: ["Mahatma Gandhi", "Lord Irwin"],
    visual: {
      kind: "quote",
      excerpt:
        "Dear Friend... I regard this tax to be the most iniquitous of all from the poor man's standpoint... If my letter makes no appeal to your heart, on the eleventh day of this month I shall proceed with such co-workers of the Ashram as I can take, to disregard the provisions of the Salt Laws.",
      speaker: "Mahatma Gandhi, to Lord Irwin, Viceroy of India",
      context: "Sabarmati Ashram, Ahmedabad — 2 March 1930",
    },
    explanation:
      "Ten days before the Salt March began, Gandhi wrote directly to the Viceroy, Lord Irwin, laying out eleven demands — including repeal of the salt tax — and warning plainly that he would break the salt laws if they went unmet. Irwin's office did not engage substantively with the demands, and the march began as promised on 12 March.",
    whyReal:
      "The letter's text is preserved in the Collected Works of Mahatma Gandhi and is one of the most frequently quoted documents of the civil disobedience period, cited by historians on both the Indian and British sides of the negotiation.",
    sourceName: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Salt_March",
  },

  // ───────────────────────── AI-GENERATED ─────────────────────────
  {
    id: "ai-photo-railway-crowd",
    type: "photograph",
    title: "Crowd at a Railway Station",
    difficulty: "easy",
    answer: "ai",
    generated: true,
    date: "claimed: 1946",
    location: "claimed: an unnamed railway station, North India",
    visual: {
      kind: "illustration",
      render: "crowd-photo",
      variant: 1,
      caption:
        "A leader addresses a crowd from a railway carriage window during a whistle-stop tour.",
    },
    explanation:
      "This image presents itself as a photograph of a nationalist leader addressing supporters from a train window during a station stop on a campaign tour — the kind of scene widely photographed in the mid-1940s.",
    historicalContext:
      "Whistle-stop crowds were a real and well-documented feature of the 1940s political trail — leaders including Nehru routinely spoke from train windows and running boards to crowds gathered along the route. That genuine pattern is exactly what makes an invented version of the scene easy to believe at a glance.",
    deceptionDetails: [
      "The raised hand at the centre of the crowd shows six fingers — a classic generative-image error.",
      "The bunting strung along the platform alternates the tricolour in the wrong order on neighbouring flags, something no period printer would have produced.",
      "Several faces in the back rows repeat with identical features, a sign of a tiled crowd rather than a photographed one.",
      "The station signage renders as illegible pseudo-script rather than real Devanagari, Urdu or Roman lettering.",
    ],
  },
  {
    id: "ai-photo-charkha-courtyard",
    type: "photograph",
    title: "Spinning Khadi in a Courtyard",
    difficulty: "medium",
    answer: "ai",
    generated: true,
    date: "claimed: early 1930s",
    location: "claimed: a village courtyard, undisclosed",
    visual: {
      kind: "illustration",
      render: "crowd-photo",
      variant: 2,
      caption: "Women spin cotton on charkhas in a courtyard during the boycott of foreign cloth.",
    },
    explanation:
      "This image presents itself as a photograph of women spinning their own khadi at home as part of the swadeshi boycott of foreign cloth — a domestic ritual repeated in thousands of courtyards through the 1920s and 30s.",
    historicalContext:
      "Home spinning became a genuine mass civic ritual after Gandhi made the charkha a symbol of self-reliance from 1920 onward, and authentic photographs of women's spinning circles are common in the archival record — which is exactly why a generated version of the scene reads as plausible.",
    deceptionDetails: [
      "Every charkha in the courtyard is mechanically identical down to the spoke pattern; real handmade charkhas of the period varied in size, wood grain and finish.",
      "The spun thread runs as an unbroken, evenly lit line rather than the slightly uneven, fuzzed thread hand-spinning actually produces.",
      "One woman's sari drapes in two contradictory directions across the same shoulder.",
      "The courtyard's stone paving repeats in an obvious identical tile every few feet.",
    ],
  },
  {
    id: "ai-photo-jail-release",
    type: "photograph",
    title: "Prisoners Released from Jail",
    difficulty: "hard",
    answer: "ai",
    generated: true,
    date: "claimed: 1945",
    location: "claimed: outside a district jail, undisclosed",
    visual: {
      kind: "illustration",
      render: "crowd-photo",
      variant: 3,
      caption: "A group of released political prisoners is greeted at a jail gate.",
    },
    explanation:
      "This image presents itself as a photograph documenting the release of Congress prisoners jailed during Quit India, greeted by family and well-wishers at the gate.",
    historicalContext:
      "Mass releases like this genuinely took place: between 1945 and early 1946 the colonial government released most of the roughly 100,000 people detained during the 1942 crackdown, and jail-gate reunions were a real, frequently photographed genre of the period — which is what makes this fabrication so quietly convincing.",
    deceptionDetails: [
      "The jail gate's ironwork includes a hinge that is structurally attached to nothing.",
      "A wristwatch worn by a man in the foreground would have been an unusual luxury import in this setting, and its face blurs into illegible numerals on close inspection.",
      "Shadows fall in two different directions across the same courtyard, implying two light sources rather than one sun.",
      "No specific jail, prisoner, or press credit for this image can be traced in any archive — it exists nowhere prior to this reconstruction.",
    ],
  },
  {
    id: "ai-poster-noncooperation-charkha",
    type: "poster",
    title: "\"Boycott Foreign Cloth\" Poster",
    difficulty: "easy",
    answer: "ai",
    generated: true,
    date: "claimed: 1921",
    location: "claimed: Bombay Presidency",
    visual: {
      kind: "illustration",
      render: "poster",
      variant: 1,
      tone: "campaign",
      headline: "BOYCOTT FOREIGN CLOTH",
      tagline: "Spin Your Own. Wear Khadi. Save Swaraj.",
    },
    explanation:
      "This poster presents itself as Non-Cooperation Movement material from 1921, urging the boycott of foreign cloth and the wearing of khadi, built around a charkha emblem.",
    historicalContext:
      "The boycott of foreign cloth really was a central plank of the Non-Cooperation Movement of 1920–22, and genuine posters, handbills, and bonfires of foreign cloth were widespread — which is why a fabricated poster on this exact theme reads as entirely plausible.",
    deceptionDetails: [
      "The wheel at the centre is the 24-spoke Ashoka Chakra used on India's national flag adopted in 1947 — a symbol that did not exist publicly until 26 years after this poster's claimed 1921 date. The 1920s charkha symbol looked like an actual spinning wheel, not this stylised chakra.",
      "The lettering uses a bold geometric sans-serif in a style that did not appear in Indian print until digital type design decades later.",
      "The border repeats saffron–green–white–saffron–green–white rather than the fixed saffron-white-green order used on every Congress flag of the period.",
    ],
  },
  {
    id: "ai-poster-women-quit-india",
    type: "poster",
    title: "\"Women, Join the August Struggle\"",
    difficulty: "medium",
    answer: "ai",
    generated: true,
    date: "claimed: 1942",
    location: "claimed: undisclosed",
    visual: {
      kind: "illustration",
      render: "poster",
      variant: 2,
      tone: "campaign",
      headline: "WOMEN, JOIN THE AUGUST STRUGGLE",
      tagline: "Every Home a Fortress of Freedom",
    },
    explanation:
      "This poster presents itself as a 1942 appeal calling on women specifically to join the Quit India movement, echoing the real, prominent role women played in that year's underground struggle.",
    historicalContext:
      "Women played a large and often underappreciated role in Quit India — Aruna Asaf Ali famously hoisted the flag at Gowalia Tank Maidan after the senior leadership was arrested, and Usha Mehta ran a secret Congress Radio station. Genuine appeals to women were part of the real print culture of the movement, which is what makes an invented one plausible.",
    deceptionDetails: [
      "The illustrated hand holding the flagpole has an extra knuckle joint and no visible thumb.",
      "The flag being raised shows white at the top rather than saffron.",
      "The date in the corner is rendered with a drop-shadow effect that 1940s letterpress or lithography could not produce.",
      "The printer's imprint line at the bottom cites a press name that appears in no catalogue of period print shops.",
    ],
  },
  {
    id: "ai-propaganda-colonial-warning",
    type: "propaganda",
    title: "\"Notice to the Public\"",
    difficulty: "hard",
    answer: "ai",
    generated: true,
    date: "claimed: August 1942",
    location: "claimed: Punjab Province",
    visual: {
      kind: "illustration",
      render: "poster",
      variant: 3,
      tone: "notice",
      headline: "NOTICE TO THE PUBLIC",
      tagline: "Unlawful assembly will be dispersed by force.",
    },
    explanation:
      "This presents itself as an official colonial government notice warning the public against joining unlawful assemblies during the Quit India disturbances of August 1942.",
    historicalContext:
      "The colonial government did issue real warnings, curfew orders, and collective fines under the Defence of India Rules during 1942, including public notices posted in towns — the genre is entirely authentic, even though this specific notice is not.",
    deceptionDetails: [
      "The government crest in the header combines elements of two official seals that were never used together.",
      "No matching notice appears in the Punjab Police's Abstracts of Intelligence or the National Archives of India catalogue for August 1942, despite an unusually well-preserved paper trail for the province.",
      "The English prose uses phrasing ('individuals are advised to refrain from') more typical of late-20th-century bureaucratic writing than the more formal, legalistic constructions used in 1940s colonial notices.",
    ],
  },
  {
    id: "ai-newspaper-sentinel",
    type: "newspaper",
    title: "\"The Delhi Sentinel\" Front Page",
    difficulty: "medium",
    answer: "ai",
    generated: true,
    date: "claimed: 6 April 1930",
    location: "claimed: Delhi",
    visual: {
      kind: "illustration",
      render: "newspaper",
      variant: 1,
      masthead: "THE DELHI SENTINEL",
      headline: "THOUSANDS GATHER AS SALT MARCH REACHES COAST",
      dateline: "6 April 1930",
    },
    explanation:
      "This presents itself as the front page of a Delhi daily called The Delhi Sentinel, reporting the Salt March's arrival at Dandi on 6 April 1930 — the day Gandhi broke the salt law by picking up a lump of natural salt on the beach.",
    historicalContext:
      "The real arrival of the march at Dandi, and Gandhi's symbolic breaking of the salt law, genuinely was front-page news across India and internationally within days — so a fabricated front page describing a real event is especially deceptive.",
    deceptionDetails: [
      "No newspaper called The Delhi Sentinel appears in the historical listings of the Registrar of Newspapers for India or in any library catalogue of the period.",
      "The masthead is set in a clean modern sans-serif; Indian dailies of 1930 set their mastheads in serif or blackletter-influenced display type.",
      "The body columns run edge-to-edge with no visible column rules, a layout convention that did not appear in Indian newspapers until decades later.",
      "The byline mixes two incompatible period conventions for attributing wire versus local reporting.",
    ],
  },
  {
    id: "ai-newspaper-swaraj-herald",
    type: "newspaper",
    title: "\"The Swaraj Herald\" — Independence Eve",
    difficulty: "hard",
    answer: "ai",
    generated: true,
    date: "claimed: 15 August 1947",
    location: "claimed: undisclosed",
    visual: {
      kind: "illustration",
      render: "newspaper",
      variant: 2,
      masthead: "THE SWARAJ HERALD",
      headline: "AT MIDNIGHT, A NATION AWAKES",
      dateline: "15 August 1947",
    },
    explanation:
      "This presents itself as the independence-day front page of a paper called The Swaraj Herald, reporting Nehru's midnight address and the transfer of power.",
    historicalContext:
      "15 August 1947 was, in reality, the single biggest newspaper day in the subcontinent's history, with every major daily running special independence editions — a fabricated one blends in easily among genuine front pages from that date.",
    deceptionDetails: [
      "No paper by this name appears in the British Library's South Asia newspaper holdings or the Registrar of Newspapers for India records for 1947.",
      "The reported time of Nehru's address is given as 11:45 pm; the Constituent Assembly session that night is documented as beginning close to 11 pm and running past midnight, so the fabricated detail is subtly, not wildly, wrong.",
      "The cover price is printed as '50 paise' — the decimal paisa this implies was not introduced until 1957; papers in 1947 priced copies in annas and pies.",
    ],
  },
  {
    id: "ai-speech-bose-fabricated",
    type: "speech",
    title: "Radio Address, attributed to Bose",
    difficulty: "medium",
    answer: "ai",
    generated: true,
    date: "claimed: 1944",
    location: "claimed: Singapore",
    visual: {
      kind: "quote",
      excerpt:
        "Comrades, the hour has come when empires fall not to armies alone, but to the unshakeable will of a people who have chosen to be free. I ask of you not applause, but action; not sympathy, but sacrifice.",
      speaker: "attributed to Subhas Chandra Bose",
      context: "claimed: Azad Hind Radio broadcast, Singapore, 1944",
    },
    explanation:
      "This presents itself as a radio broadcast by Subhas Chandra Bose to Indian National Army troops and Azad Hind Radio listeners in 1944, in the stirring register associated with his real wartime broadcasts.",
    historicalContext:
      "Bose did broadcast repeatedly on Azad Hind Radio from Singapore and Rangoon through 1943–44, using exactly this kind of rousing, sacrificial rhetoric, and genuine transcripts of several broadcasts survive — which is what makes a plausible pastiche so convincing.",
    deceptionDetails: [
      "No transcript, contemporary press report, or INA veteran memoir records this specific line in any surviving broadcast log.",
      "The rhetorical antithesis 'not applause, but action' is a pattern more common in later 20th-century motivational speech-writing than in Bose's verified 1940s broadcasts.",
      "The speech never names a concrete demand, unit or campaign, unlike Bose's real broadcasts, which almost always tied rhetoric to a specific military or political event.",
    ],
  },
  {
    id: "ai-speech-volunteer-fabricated",
    type: "speech",
    title: "Speech to Volunteers Before a March",
    difficulty: "easy",
    answer: "ai",
    generated: true,
    date: "claimed: 1930",
    location: "claimed: an unnamed district town",
    visual: {
      kind: "quote",
      excerpt:
        "Brothers and sisters, today we do not carry weapons — we carry the weight of a hundred years, and it will not break our shoulders. Walk beside me, and if I fall, walk on without me.",
      speaker: "attributed to an unnamed Congress volunteer organiser",
      context: "claimed: address to satyagrahi volunteers before a district march, 1930",
    },
    explanation:
      "This presents itself as a rousing speech by a local, unnamed Congress volunteer organiser to satyagrahis before a district-level march during the civil disobedience period.",
    historicalContext:
      "Thousands of genuinely unrecorded local speeches like this were given by district and town-level organisers throughout the 1930 civil disobedience movement — most left no transcript at all, which is exactly the gap this fabrication is designed to fill convincingly.",
    deceptionDetails: [
      "Because the speaker is deliberately unnamed and no date, place or eyewitness is given, the excerpt cannot be checked against any archive, memoir or newspaper report — a red flag for any quotation offered as historical fact.",
      "The line 'the weight of a hundred years' presumes a clean round-number count that no contemporary source uses; period rhetoric more often invoked 1857 or specific recent grievances such as the Rowlatt Act and Jallianwala Bagh.",
      "The sentence structure favours short, punchy modern motivational cadences over the longer, more formal periodic sentences typical of English-language political oratory transcribed in 1930s India.",
    ],
  },
  {
    id: "ai-letter-satyagrahi-jail",
    type: "letter",
    title: "Letter from Yerawada Jail",
    difficulty: "medium",
    answer: "ai",
    generated: true,
    date: "claimed: 1932",
    location: "claimed: Yerawada Central Jail, Poona",
    visual: {
      kind: "quote",
      excerpt:
        "Dearest Ba and the children, do not grieve for these walls; they have given me more time to think of you than freedom ever did. Tell brother that the charkha he sent has already worn a groove in my palm. We are fed well enough, and the warder here is not unkind...",
      speaker: "attributed to an unnamed satyagrahi prisoner, to his family",
      context: "claimed: Yerawada Central Jail, near Poona, 1932",
    },
    explanation:
      "This presents itself as a personal letter home from an ordinary satyagrahi imprisoned at Yerawada during the 1932 civil disobedience revival, describing prison routine and family news.",
    historicalContext:
      "Yerawada Jail held tens of thousands of civil disobedience prisoners in the early 1930s, including Gandhi himself at various points, and surviving prisoner letters — heavily marked by jail censorship — are a real and valuable archival genre held by institutions such as the National Archives of India.",
    deceptionDetails: [
      "No censor's stamp, jail registration number, or docketing mark appears anywhere on the letter; every verified surviving prisoner letter from Yerawada in this period carries visible censorship marks, since all outgoing mail was read and stamped by jail authorities.",
      "The prisoner is never named, and no matching entry exists in any published Yerawada jail register or prisoner memoir for the claimed date.",
      "The warm, almost sentimental tone toward 'the warder' is inconsistent with the more guarded language political prisoners typically used in letters they knew would be read by jail censors.",
    ],
  },
  {
    id: "ai-document-colonial-memo",
    type: "document",
    title: "Internal Memorandum on Congress Arrests",
    difficulty: "hard",
    answer: "ai",
    generated: true,
    date: "claimed: August 1942",
    location: "claimed: an unnamed district, United Provinces",
    visual: {
      kind: "quote",
      excerpt:
        "SECRET. It is recommended that the arrest of the principal Congress organisers in this district proceed before dawn on the ninth, so as to forestall any coordinated response. Local informants suggest that resistance, if any, will be limited to the town centre...",
      speaker: "attributed to an unnamed District Magistrate",
      context: "claimed: confidential district memorandum, August 1942",
    },
    explanation:
      "This presents itself as a leaked confidential colonial administration memo planning the pre-dawn arrest of local Congress leaders at the start of the Quit India crackdown.",
    historicalContext:
      "The real Quit India arrests were executed in exactly this way: the entire Congress Working Committee and thousands of local leaders were detained in coordinated pre-dawn raids beginning 9 August 1942, planned through genuine confidential correspondence between district officials and provincial governments — which is what makes the shape of this fabrication so plausible.",
    deceptionDetails: [
      "No matching file can be located in the Home Department (Political) proceedings at the National Archives of India, nor in the standard published collections of Quit India-era official correspondence, despite those records being unusually well preserved.",
      "The memo is unsigned and undated beyond the month, and cites no file or docket number; real colonial administrative correspondence was compulsively numbered and filed.",
      "The phrase 'forestall any coordinated response' uses a more modern security-bureaucratic register than the stiffer, more Latinate administrative English typical of genuine 1942 Indian Civil Service correspondence.",
    ],
  },
];

export function getArtifactById(id: string): Artifact | undefined {
  return artifacts.find((a) => a.id === id);
}
