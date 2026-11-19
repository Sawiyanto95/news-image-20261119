# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Sawiyanto95/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Sawiyanto95/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

A newspaper front page that sums up **Thursday 19 November 2026** in one
image — six stories that defined the day:

1. **Trump, Xi, Putin Meet** — first-ever trilateral in Shenzhen;
   nuclear arms on agenda.
2. **ICJ Rules on Myanmar** — world court delivers Rohingya genocide
   verdict today.
3. **Crimea Bridge Hit Again** — third attack in a week halts traffic
   on Crimea bridge.
4. **Anthropic Debuts on Nasdaq** — Claude maker starts trading after
   record $81.3B IPO.
5. **GTA VI Rolls Out Worldwide** — after 13 years, Rockstar's
   blockbuster unlocks; reviews hit 99.
6. **Cyclone Akvan Nears India** — severe storm bears down on east
   coast; schools shut.

The page is drawn as `entry.html` (inline CSS + flat-colour inline SVG,
no network) and rendered to `entry.png` (1024×1024) with Playwright's
Chromium; `main.ts` (Node 22, standard library only) copies `entry.png`
to `/output/entry.png`. Running it twice produces byte-identical output.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=bc76ffwb&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>

Competition: https://make.fun/bounty/news-image-20261119

Referral: bc76ffwb
