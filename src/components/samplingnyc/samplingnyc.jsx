import './samplingnyc.css'
import oldHome from './old-home.jpg'
import oldSwipe from './old-swipe.jpg'
import oldLineup from './old-lineup.jpg'
import newHome from './new-home.jpg'
import newSwipe from './new-swipe.jpg'
import newLineup from './new-lineup.jpg'
import newPlan from './new-plan.jpg'
import routeFinder from './route-transit.jpg'
import wireframe from './wireframe.png'
import { ArrowUpRightIcon } from '../icons/icons'

const SamplingNYC = () => {
  return (
    <article className='case-study'>
      <header className='case-study__header'>
        <div className='eyebrow'>Passion project · July 2026 – present</div>
        <h1 className='case-study__title'>samplingNYC</h1>
        <p className='case-study__lede'>
          An app for finding free events in New York, where you swipe through each day's events and save the ones you like.
        </p>
        <div className='case-study__facts'>
          <div>
            <div className='label'>MVP</div>
            <div className='case-study__fact'>Live in 5 days</div>
          </div>
          <div>
            <div className='label'>Cost to run</div>
            <div className='case-study__fact'>~$15/year</div>
          </div>
          <div>
            <div className='label'>Events a month</div>
            <div className='case-study__fact'>~340</div>
          </div>
        </div>
        <div className='case-study__actions'>
          <a className='button button--primary case-study__button' href='https://samplingnyc.com' target='_blank' rel='noreferrer'>
            Visit samplingnyc.com
            <ArrowUpRightIcon />
          </a>
        </div>
      </header>

      <section className='case-study__section'>
        <h2>The problem</h2>
        <p>
          New York has free events all over the city, from brand launches to tastings, and websites like <a href='https://www.nycforfree.co/' target='_blank' rel='noreferrer'>NYC for FREE</a> and <a href='http://averagesocialite.com/' target='_blank' rel='noreferrer'>Average Socialite</a> list them. When I started, these sites only showed events on a calendar or in hard-to-use lists, along with each event taking up a whole page.
        </p>
        <p>
          This made planning a day pretty slow. I would open a new tab for every event, copy the ones I liked into my notes app, and then look up each address to figure out what order to go in. To share the plan with friends, I would send them a list or a pile of screenshots.
        </p>
      </section>

      <section className='case-study__section'>
        <h2>What I built</h2>
        <p>
          samplingNYC puts each day's events into one stack of cards, where you swipe right to save an event and left to skip it. Each card has a short summary and tags for perks like free food or free drinks (samplingNYC had these tags before NYC for FREE added its own). Your saved events then become a list you can reorder, share with a link, and turn into a plan for the day.
        </p>
        <div className='case-study__screens'>
          <figure>
            <img src={newSwipe} alt='A samplingNYC event card with pass and save buttons' />
            <figcaption>Swipe to save or skip</figcaption>
          </figure>
          <figure>
            <img src={newLineup} alt='A lineup of saved events with share, re-order, and sort buttons' />
            <figcaption>Your saved lineup</figcaption>
          </figure>
        </div>
      </section>

      <section className='case-study__section'>
        <h2>How it runs for about $15 a year</h2>
        <p>
          I wanted the app to cost as little as possible to run, so it has no server of its own, no database to pay for, and no user accounts. Instead, it works in four steps: a) three times a day, small programs called scrapers visit the event websites and copy down each event, running for free on GitHub where the code is stored, b) Gemini, Google's AI model, writes a short summary of each event, adds perk tags, and removes events that cost money or are listed twice, c) each day's events are saved as a simple data file right next to the code, which acts as the app's database, and d) the website reads those files to show the cards, while your saved events stay in your own browser, so you don't need an account.
        </p>
        <p>
          I also tried to keep the AI costs low. I chose Gemini 3.6 Flash as the model, as it was the cheapest one that could still do what I needed. The app also sends Gemini several events at once instead of one at a time, and it checks for repeat events first, so Gemini never summarizes the same event twice. Due to this, the only bills are the web address – $10.46 a year – and about $0.40 a month for Gemini.
        </p>
      </section>

      <section className='case-study__section'>
        <h2>The feature I cut</h2>
        <p>
          My first idea for planning the day was Route Finder, where you would pick two saved events and see how to get from one to the other on a map. To do this, I built my own small version of Google Maps using free, open-source tools for maps and transit directions.
        </p>
        <p>
          Getting good directions turned out to be the hard part. Most free events are close together in Manhattan, and the whole point is to spend nothing, so walking is usually the best choice. However, the transit tool kept suggesting a five-minute bus ride when a 20-minute walk made more sense, so I had to tune it to strongly prefer walking.
        </p>
        <p>
          Route Finder launched in the first week, but two months later, I replaced it with Plan my day, which lists every stop in order and opens each trip in Google Maps or Apple Maps. People use samplingNYC on their phones, and their phones already have a maps app they know and trust. Looking back, building my own map app seems to have been solving the wrong problem.
        </p>
        <div className='case-study__screens'>
          <figure>
            <img src={routeFinder} alt='Route Finder showing a transit route on a map between two events' />
            <figcaption>Route Finder, with a 1-minute bus ride in the middle</figcaption>
          </figure>
          <figure>
            <img src={newPlan} alt='Plan my day listing four stops in order with travel times between them' />
            <figcaption>Plan my day, which replaced it</figcaption>
          </figure>
        </div>
      </section>

      <section className='case-study__section'>
        <h2>The redesign</h2>
        <p>
          The first version had a bright, flat look inspired by Duolingo, but I wanted samplingNYC to feel less like a deal app and more like an insider guide. One of the reasons I decided to change the design was NYC for FREE's redesign, as their new look was similar to my original one, and I wanted samplingNYC to stand apart from them. In September, I rebranded it by having Claude act as a brand designer and ask me yes-or-no questions until we had a direction. The main users would be women in their 20s and 30s, and the app should feel upscale while still saying "free" up front.
        </p>
        <div className='case-study__compare'>
          <div className='label'>Before · July 2026</div>
          <div className='case-study__screens case-study__screens--three'>
            <img src={oldHome} alt='Original samplingNYC home page' />
            <img src={oldSwipe} alt='Original swipe card' />
            <img src={oldLineup} alt='Original saved lineup' />
          </div>
          <div className='label'>After · September 2026</div>
          <div className='case-study__screens case-study__screens--three'>
            <img src={newHome} alt='Redesigned samplingNYC home page' />
            <img src={newSwipe} alt='Redesigned swipe card' />
            <img src={newLineup} alt='Redesigned saved lineup' />
          </div>
        </div>
      </section>

      <section className='case-study__section'>
        <h2>How I built it</h2>
        <p>
          I drew the first design in Figma, under the app's working name, Free NYC Mapped, and made the product and technical decisions, such as which tools to use, how to run it for almost nothing, where to store the data, swiping as the main way to use the app, and every feature that was added or cut. I then built it through agentic coding with Claude Code. I made the first change on July 24, 2026, and the site went live five days later on July 29.
        </p>
        <figure className='case-study__wireframe'>
          <img src={wireframe} alt='Figma wireframe of four screens: home with Today and Tomorrow buttons, a swipe card with go back, X, and check mark buttons, and the selected and removed event lists' />
          <figcaption>My Figma wireframe for the MVP</figcaption>
        </figure>
      </section>

      <section className='case-study__section'>
        <h2>What's next</h2>
        <p>
          The scrapers depend on how each event website is built, so when those websites change, the scrapers can break, which has happened a few times already. Next, I'm adding monitoring so I'll find out right away when a scraper breaks, hopefully before my friends notice. After that, I want to add more event websites.
        </p>
      </section>
    </article>
  )
}

export default SamplingNYC
