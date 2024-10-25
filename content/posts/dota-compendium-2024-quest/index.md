---
title: A Data-Driven Look at My Dota 2 Compendium Quest
aliases: []
date: 2024-10-25
time: 21:30
categories:
  - blog
tags:
  - python
  - gaming
  - data
---

<img border="0" src="imgs/activity-2023.png" />

## Introduction

I have been playing games for a while, and it has been usually FPS games, where it started from CS1.6 to CSGO for more than 3,000 hours and playing Valorant for 2 more years, and a couple of other ones, and at some point I realized I need to try some new style and started playing dota 2. 

My first-ever game of Dota 2 was at around May 2022, where I had no idea what I was doing and why I was doing it, those 5 games I remember closing them in between and had no idea what to build by looking at the items in the shop. For context, Dota has around 125 heroes and understanding all the heroes takes significant amount of time, and even on top of it when I saw Rubick hero, which steals other hero's spells, I was so impressed by the game design and I devoted a major amount of time understanding and tried being good at it.

## The Journey Through Time

<aside>
    <h4>Source Code</h2>
    <p>All the visualization/animation is done via Python, you can have a look at notebook with all the code present: <a href="https://github.com/shashank-sharma/shashank-sharma.github.io/tree/master/content/posts/dota-compendium-2024-quest/data/dota2-player-analysis.ipynb">Link</a></p>
</aside>

### Overall winrate progression

If you notice, initially, for a few 100 games, I struggled understanding the game because of which my net wins were in negative. But slowly, I started winning more than losses because of which win rate did increase and got almost linear thereafter.

{{< rawhtml >}} 

<video width=100% controls autoplay>
    <source src="imgs/dota2-progression.mp4" type="video/webm">
    Your browser does not support the video tag.  
</video>

{{< /rawhtml >}}

<aside class="left">
    <h4>Patch Behaviour</h2>
    <p>Also, another quick observation, at some patches (blue lines), it requires players to complete objectives which makes them play into an uncomfortable position which leads to losing streak. For example, playing those heroes which they are not comfortable</p>
</aside>

### Win and Losses per month

This has always been surprising that my win/loss per month has been always approx 50%, still it doesn't mean a player is not improving, for example plot above shows win/loss progression has been changing, and game itself is adapting which is giving me tougher games and slowly making me grow rather than throwing me in some random unfair game continuously.

<img src="imgs/winrate.png" alt="Dota 2 Winrate" />

### Dota 2 Gaming activity for past 3 years

<aside class="left">
    <h4>Recent Activities</h2>
    <p>For past few weeks, I have been playing a bit less, since I started playing Deadlock</p>
</aside>

<img src="imgs/activity-2022.png" alt="Dota 2 Activity 2022" />

<img src="imgs/activity-2023.png" alt="Dota 2 Activity 2023" />

<img src="imgs/activity-2024.png" alt="Dota 2 Activity 2024" />

### Playtime distribution

One of the best visualization which I did, personally I dislike playing in the morning even if I have time, but you will notice few played time, which is there because I did play few during the weekend.

<aside>
    <h4>Sleep/Dinner time</h2>
    <p>As per my Samsung sleep time statistics, my average bedtime is 04:55, hence a couple of games played even at around 04:00. Another interesting take, if you notice, 21:00 games played is lower compared to 20:00 and 22:00, reason being I eat my dinner at that time.</p>
</aside>

<img src="imgs/playtime.png" alt="Dota 2 Playtime Distribution" />

### Playing patterns throught the week

This is an interesting plot, which shows my playtime across the week/hours, where if you notice, on weekend, I have been very aggressive towards playing early or playing late until 05:00

<img src="imgs/playpattern.png" alt="Dota 2 Playing Pattern" />

### Heroes played throught my dota journey

As mentioned in the introduction, Rubick has been my favourite hero, and that was my hero which I have been aiming to reach grandmaster title (Title to prove my love for that hero); hence you might enjoy looking at this visualization of which heroes I have been playing for past few years.

View it in fullscreen for better experience

<aside class="left">
    <h4>Heroes selection</h2>
    <p>As mentioned, Dota 2 has around 125 heroes, out of which I liked playing support heroes a lot, but it changed from 2023 where I started experimenting with a couple of heroes and enjoyed Offlane role as well, hence slow growth for top 10 heroes except Rubick, and new heroes coming in left side.</p>
</aside>

<video width=100% controls autoplay>
    <source src="imgs/dota2-dynamic-animation.mp4" type="video/webm">
    Your browser does not support the video tag.  
</video>

### Heroes played by their attributes

Some interesting observation here, I hate playing agility heroes, and enjoy playing intelligence which are mostly supports and strength heroes which are offlaners.

<img src="imgs/hero-performance.png" alt="Dota 2 Hero attributes" />

## 2024 Compendium quest

One of the best things I like about dota is the events which they bring out, I do feel bad thinking about some of the great or insane events which I might have missed before 2022, and looking at them now, I feel like I missed a lot there. CSGO on its own got maybe 1–2 operations in my 4 years journey but dota 2, holy they have been playing a totally different game, just look at their prize pool for 2019-2021.

The Compendium is like an interactive digital battle pass or seasonal passport in Dota 2 that turns watching and playing the game into an engaging collection experience. Think of it as a combination of a fantasy sports league, a digital collectible album, and a progression system.

The end goal is to reach 300lvl which in turn gives you a miniature size trophy of "The International" which is like a major tournament which happens once every year. To achieve 300lvl, one has to complete some objectives to get lvl:

1. Play and win one dota game every day for 8 weeks continuously
2. Play fantasy game and if you are under 99 percentiles
3. Predict tournament winners
4. Achieve patterns in bingo cards

### Result

#### Bingo

In Bingo, total I missed 3 cards, which is actually good as I lost only 6 levels.

{{< image-scroll-captions images="imgs/bingo-1.png, Bingo card 1;imgs/bingo-2.png,Bingo card 2;imgs/bingo-3.png,Bingo card 3" >}}

#### Fantasy

In Fantasy, I reached maximum 99% rewards for two parts, in the second part, somehow I messed up the key attributes assigned to players.

{{< image-scroll-captions images="imgs/fantasy-1.png, Fantasy 1: 99.01%;imgs/fantasy-2.png,Fantasy 2: 96.90%;imgs/fantasy-3.png,Fantasy 3: 99.15%" >}}

#### Oracle: Win Prediction

Win prediction was actually tough for me, surprisingly prediction for Team Liquid has been so on point, I did hope of tundra winning, but that didn't happen hence, I lost few of the points there.

{{< image-scroll-captions images="imgs/oracle-1.png, Decider;imgs/oracle-2.png,Lower bracket 1;imgs/oracle-3.png,Lower bracket 2;imgs/oracle-4.png,Finals" >}}

### Point logs

As you might have seen, I have been doing data-driven decision, and collecting data has been a challenge, when it comes to point logs for my compendium 2024, I didn't know how will I be able to export this data into a table?

I tried using vconsole2 which shows network calls in dota 2 coordinators, but it didn't show any raw message, I tried using Wireshark as well to intercept the message, but then binary data is difficult to decrypt. Based off my knowledge, I didn't know whether it is possible or not; hence I decided to go the tough way, which is letting computer vision do its job manually.

Hence, I recorded a points log video which scrolls from bottom to top and used each frame and fed it to Python OpenCV code to detect unique entries and created a CSV file.

{{< image-scroll-captions images="imgs/debug_result.png, Frame from video;imgs/debug_gray.png,Grayscale;imgs/debug_thresh.png,Thresholding" >}}

Full source code: [Link](https://gist.github.com/shashank-sharma/781652094e69b0595b88b2c841ba1136)

Video link: [Link](https://shashanksharma.xyz/posts/dota-compendium-2024-quest/imgs/aegis-logs.mp4)

And finally, the parsed CSV file: [Link](https://shashanksharma.xyz/posts/dota-compendium-2024-quest/data/compendium_logs.csv) (2 week of points missing)

### Conclusion

<img src="imgs/aegis.png" alt="Dota 2 Hero attributes" />

Overall, I spent initial money to purchase compendium 2024, and 1 extra set of levels to complete my 300 levels, and as of now I am really looking forward to Aegis 2024, hence looking forward to posting an image here :)

I regret buying extra level, as I didn't knew if Week 8 will still be in progress hence as of now my final level is 343.

### Bonus

Hackerman moment

<img src="imgs/bonus-image.png" alt="Dota 2 Hero attributes" />

{{< time-mountain data="[{\"date\": \"03 Oct\", \"hours\": 0.01, \"position\": 3.0}, {\"date\": \"07 Oct\", \"hours\": 0.02, \"position\": 20.0}, {\"date\": \"10 Oct\", \"hours\": 0.05, \"position\": 28.5}, {\"date\": \"14 Oct\", \"hours\": 0.01, \"position\": 37.0}, {\"date\": \"21 Oct\", \"hours\": 1.71, \"position\": 54.0}, {\"date\": \"22 Oct\", \"hours\": 2.99, \"position\": 62.5}, {\"date\": \"23 Oct\", \"hours\": 1.97, \"position\": 71.0}, {\"date\": \"24 Oct\", \"hours\": 3.73, \"position\": 79.5}, {\"date\": \"25 Oct\", \"hours\": 1.21, \"position\": 88.0}]" >}}