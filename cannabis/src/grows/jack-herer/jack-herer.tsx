import { Component, h, Host, JSX } from '@stencil/core';

@Component({
  tag: 'grow-jack-herer',
  shadow: true,
  styleUrl: './jack-herer.scss',
})
export class JackHerer {
  render() {
    const dates = Object.keys(content);

    return (
      <Host>
        <h3>Jack Herer</h3>
        <div class="article-container">
          {dates.map(date => (
            <grow-day-entry date={date} article={content[date].article} additionalPhotos={content[date].additionalPhotos} />
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
};
