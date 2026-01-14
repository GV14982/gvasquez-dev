---
title: In Defence of "Old Tech"
summary: As the world moves increasingly towards highly convenient walled surveilance gardens, let's take a step back and look at existing technology that we can use to enrich our lives without enriching tech companies.
pubDate: "2026-01-13"
editedDates: []
categories:
  - computing
---

I feel like I grew up towards the end of what some might consider the "Golden Age" of the internet. Other's might even say that by the time I registered my first email address, `dogwash7@aol.com` in 2000, the internet had already been enshitified. And of course the newer generations will probably just tell me to "Just put my fries in the bag, Unc" and go back to scrolling TikTok.

I'm in my early 30's now. Not quite Zoomer, not quite Unc (although I have plenty of nieces and nephews). I was born on the tail end of the Millennials in the early 90's, and have had the opportunity to experience the internet during its transformation from 1.0 to 2.0 (And 3 or 5 depending on what cryptocurrency you're currently gambling on). Part of me is nostalgic for those early "Web 2.0" times. I remember when I created my Twitter account in 2007 and wanted to show all my friends this cool new website. They all asked why they would use it over Facebook. Conversely, after over two decades in our increasingly online society there are glaring holes in this idealistic connected worldview.

One of my goals recently has been to reduce my reliance on big tech companies (Not like you can avoid them completely), and revisit older technology and how to utilize it in our modern landscape. I'm really tired of constant data mining, lack of interoperability, and limitations on creativity and expression. I want to outline some of the things I use in my "anti-big tech stack" that I have started using. This isn't an exhaustive list, just a little snapshot of some of the things that I have found most impactful.

## Articles and Digital Reading

The amount of people who get their news from large "Social Media" sites (If you can even call them that anymore) is staggering. One of my most positive achievements of recent years was to completely drop those large sites. Dropping Twitter (Before the rename to X), all Meta products, and TikTok has been such a relief. I still have a Bluesky which I rarely use and a Mastodon account on the local Philly instance (Shout out [jawns.club](https://jawns.club/)). Outside of those, I almost exclusively use feeds. Mostly RSS, but Atom when possible. The power for me to just view the content I actually care about and not have a basically never-ending stream of _stuff_ is so refreshing.

This is actually what inspired me to start blogging in 2026. What better way to start this off than a celebration of the technology that has inspired me.

I have setup a [MiniFlux](https://miniflux.app/) server on a VPS that I host a bunch of other stuff on. This makes it so all my devices get access to the same set of feeds, plus I can access it through a web browser!

## Email

Email is one of those backbone services that most people take for granted. Gmail used to be the holy grail of modern email providers. Now it is literally just a funnel for data to train LLMs[^1].

My initial push to move towards older technology was how gross and invasive the digital data mining trade has become. So what can users who want to get off of Gmail do for their email?

### Providers

- [Purelymail](https://purelymail.com/)[^2]
  - My personal favorite option due to just how reasonable their prices are.
- [Fastmail](https://www.fastmail.com/)
  - A worthy contender, always pushing email technology forward (Especially with their work on the [JMAP standard](https://jmap.io/index.html))
- [Tuta Mail](https://tuta.com/secure-email)
  - Privacy focused mail, contacts, and calendar. Decent price too.
- [Proton Mail](https://proton.me/mail).
  - The privacy focused GSuite killer. Prices are okay, I just don't want to have all my data under the control of a single company.

## Calendars

Digital calendars are one of those super useful things that have a pretty robust standard behind them. However, the number of services I have to use to sign up for events, RSVP to parties, and more is pretty exhausting. Rather than being able to use the CalDAV server that Purelymail gives me, I have to have an account on Meetup, Partiful, Luma, Discord Events and Facebook Events. It actually ends up being a bigger hassle than being able to have single source of truth, my calendar.

## Personal Website

I have been getting really inspired by the [IndieWeb](https://indieweb.org) movement. There is this really fun [local meetup](https://iffybooks.net/series/homebrew-website-club/)[^3] that I have attended a couple of times. It's been so great to talk to people from all skill levels about what they are currently tinkering with.

### Hosting

- [Cloudflare Pages](https://pages.cloudflare.com/)
  - This is where I host this site! It's super easy to use and has great integrations.
- [Neocities](https://neocities.org/)
  - A reboot of Geocities, this is a great place for beginners to get started without much technical overhead.
- [Netlify](https://www.netlify.com/)
  - One of the first "JAMStack" services. Still a solid choice in 2026!
- `Self Host!`
  - This is what I am planning to do as I get my home lab up and running again after moving. This is something I plan to write some posts about so keep an eye out for that!

### My Blogging Goals

I recently read a great article from [Joan Westenberg](https://www.joanwestenberg.com/the-case-for-blogging-in-the-ruins/) on blogging in the age of "social media". At the end of the post she encourages the reader to:

> Start a blog. Start one because the practice of writing at length, for an audience you respect, about things that matter to you, is itself valuable. Start one because owning your own platform is a form of independence that becomes more important as centralized platforms become less trustworthy. Start one because the format shapes the thought, and this format is good for thinking.

[^1]: <https://www.malwarebytes.com/blog/news/2025/11/gmail-is-reading-your-emails-and-attachments-to-train-its-ai-unless-you-turn-it-off>

[^2]: Not sponsored or anything, just really love the service.

[^3]: Shout out to [Zephyr](https://zephnet.biz/), the organizer!
