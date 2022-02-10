import { Component, h, Host, JSX, getAssetPath, Fragment } from '@stencil/core';

@Component({
  tag: 'grow-jack-herer',
  shadow: true,
  assetsDirs: ['assets'],
  styleUrl: './jack-herer.scss',
})
export class JackHerer {
  render() {
    const dates = Object.keys(content);
    const basePath = getAssetPath('./assets');

    return (
      <Host>
        <h3>Jack Herer</h3>
        <div class="article-container">
          {dates.map(date => (
            <grow-day-entry basePath={basePath} date={date} article={content[date].article} additionalPhotos={content[date].additionalPhotos} />
          ))}
        </div>
      </Host>
    );
  }
}

const content: {
  [k: string]: {
    additionalPhotos?: string[];
    article: JSX.Element;
  };
} = {
  '2021_10_15': {
    article: <p>Starting with four seeds.</p>,
  },
  '2021_10_20': {
    article: <p>Germination + seedlings! A bit leggy.</p>,
  },
  '2021_10_25': {
    article: <p>Three plants came up, added their collars</p>,
  },
  '2021_11_4': {
    additionalPhotos: ['(2)'],
    article: <p>Time to move them to their own reservoirs!</p>,
  },
  '2021_11_15': {
    article: <p>Lots of growth!</p>,
  },
  '2021_11_19': {
    article: <p>This is when I topped the plants. If I was going to train them this is also when I'd do that.</p>,
  },
  '2021_11_27': {
    article: <p>Explosive growth!</p>,
  },
  '2021_12_3': {
    article: <p>So many nodes popping up!</p>,
  },
  '2021_12_5': {
    article: <p>One on the left is starting to have health problems. Notice its stunted growth compared to the others.</p>,
  },
  '2021_12_11': {
    article: <p>You can really see the difference between the plants now. The stunted one has even started to switch to flowering!</p>,
  },
  '2021_12_14': {
    article: (
      <Fragment>
        <p>Lights were probably on a bit high. Since the two on the right grew so much they likely got too close to the lights for how high I had them set.</p>
        <p>The plant in the back has started to flower!</p>
      </Fragment>
    ),
  },
  '2021_12_26': {
    article: (
      <Fragment>
        <p>All plants are now flowering!</p>
        <p>Plant in back is recovering from light burn. Plant in front is still not recovering.</p>
      </Fragment>
    ),
  },
  '2021_12_31': {
    article: <p>The two large plants are doing nicely, but starting to crowd out the smaller one.</p>,
  },
  '2022_1_1': {
    additionalPhotos: ['(2)', '(3)', '(4)', '(5)'],
    article: (
      <Fragment>
        <p>Disaster! Fluffy white mold on the stunted plant! Get it out of here!</p>
        <p>The two larger plants are thankfully look fine!</p>
      </Fragment>
    ),
  },
  '2022_1_12': {
    additionalPhotos: ['(2)'],
    article: (
      <Fragment>
        <p>The buds are starting to take shape!</p>
        <p>The second photo is actually from the 14th. I think it shows how fast the buds fill out in the beginning.</p>
      </Fragment>
    ),
  },
  '2022_1_18': {
    additionalPhotos: ['(2)'],
    article: <p>Buds are still continuing to grow. Close up of the plant in back shows how it's racing ahead of the other plant towards harvest.</p>,
  },
  '2022_1_23': {
    additionalPhotos: ['(2)', '(3)', '(4)'],
    article: (
      <Fragment>
        <p>Bud growth is progressing. The difference in pace of flowering is very obvious now!</p>
        <p>The final photo shows the size of the root ball growing the 5gal bucket!</p>
      </Fragment>
    ),
  },
  '2022_2_2': {
    additionalPhotos: ['(2)', '(3)', '(5)', '(6)', '(7)', '(8)', '(10)', '(11)'],
    article: (
      <Fragment>
        <h5>Early harvest =(</h5>
        <p>
          The plant in front started to yellow on the fan leaves starting at the top of the plant. This is indicitive of potassium deficiency. I was either too late or there were
          additional problems because the yellowing didn't stop after changing out the reservoir with some fresh food with extra potassium. The yellowing started to get too close
          to the buds for my comfort. Unfortunately this plant wasn't as far along as the other. Most of its tricombs showed little milkiness. Crossing my fingers that it's still
          fine and just a little weaker than the other plant!
        </p>
        <p>
          The plant that was further along was certianly ready to go. I couldn't get any clear photos using my USB microscope but the tricombs were nice and cloudy! This plant
          could definitely have gone on longer, though. There weren't any amber tricombs, which to me is a good thing, but there were still some tricombs that lacked the milkiness
          you'd expect from prime harvest time.
        </p>
      </Fragment>
    ),
  },
};
