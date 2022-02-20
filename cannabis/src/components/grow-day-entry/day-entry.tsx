import { Component, h, Prop, JSX } from '@stencil/core';
import moment from 'moment';

@Component({
  tag: 'grow-day-entry',
  shadow: true,
  styleUrl: './day-entry.scss',
})
export class DayEntry {
  @Prop() basePath: string;
  @Prop() date: string;
  @Prop() article: JSX.Element;
  @Prop() additionalPhotos: string[] = [];
  @Prop() handleThumbnailClick: () => void;

  render() {
    const timestamp = moment(this.date, 'YYYY_MM_DD').format('MMMM Do, YYYY');

    const thumbnailPaths = [buildThumbnailPath(this.date, this.basePath), ...this.additionalPhotos.map(part => buildThumbnailPath(this.date, this.basePath, part))].map(
      tn => `${tn}.jpg`,
    );

    return (
      <article>
        <span class="timestamp">{timestamp}</span>
        <div class="container">
          <div class="thumbnails" onClick={this.handleThumbnailClick}>
            {thumbnailPaths.map(path => (
              <img src={path} />
            ))}
          </div>
          <section>{this.article}</section>
        </div>
      </article>
    );
  }
}

const buildPath = (date: string, basePath: string, part?: string) => `${basePath}/thumbnails/${date}${part ?? ''}`;
const buildThumbnailPath = (date: string, basePath: string, part?: string) => `${buildPath(date, basePath, part)}_tn`;
