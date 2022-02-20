import { Component, h } from '@stencil/core';

@Component({
  tag: 'grow-about',
  shadow: true,
  styleUrl: './about.scss',
})
export class About {
  render() {
    return (
      <div>
        <p>
          Welcome to my cannabis grow journal! My name is Miles Wells and getting right into it: during a rough episode of treatment resistent depression I used recreational
          cannabis and MMJ (Medicinal Marjiuana) to stabilize my symptoms while I was trying different treatments. If I did not use cannabis I would have undoubtedly turned to
          alcohol. Considering the length of my depressive episode, the fact alcoholism runs in my family, and my history of abusing alcohol I'm confident I would have seriously
          hurt or killed myself through excessive drinking.
        </p>
        <p>
          I had much greater success with cannabis than with SSRIs (Selective Seritonin Reuptake Inhibitor) attempting to stabilize while going through therapy. Ultimately therapy
          and TMS (Transcranial Magnetic Stimulation) was my "cure" that took me into remission. Cannabis and taking an SNRI (Seritonin-Norepinephrine Reuptake Inhibitor) have
          allowed me to keep my mood more neutral while therapy is allowing me to work towards positivity!
        </p>
        <p>
          MMJ became available here in Virginia in 2017 for epilepsy, but the law was expanded in 2018 to cover any diagnosed condition or disease. Dispensary prices in Virginia
          are quite high, however. Roughly $17-22 per gram of flower depending on what you get. Growing your own, by contrast, is remarkably cheap. So cheap that I could throw away
          all of my supplies and buy them again for every grow and it would STILL be cheaper than buying MMJ from a dispensary. Thankfully, growing one's own cannabis was made
          legal in 2021 with the same group of legislation that legalized cannabis posession by adults 21+.
        </p>
        <p>
          {' '}
          All of my grows use a deep water culture method without any kind of solid media. I first learned this technique from{' '}
          <a href="https://www.growweedeasy.com/high-yield-bubbleponics-technique" target="_blank">
            Grow Weed Easy
          </a>
          .
        </p>
        <p>
          The motivation for this site is to learn to use{' '}
          <a href="https://stenciljs.com/" target="_blank">
            StencilJS
          </a>{' '}
          to construct Web Components as well as document my cannabis grows.
        </p>
      </div>
    );
  }
}
