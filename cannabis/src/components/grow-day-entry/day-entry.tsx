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
  @Prop() handleThumbnailClick: (fullSizePath: string) => void;

  render() {
    const timestamp = moment(this.date, 'YYYY_MM_DD').format('MMMM Do, YYYY');

    const parts = [undefined, ...this.additionalPhotos];
    const paths = parts.map(part => buildPath(this.date, this.basePath, part));
    const thumbnailPaths = parts.map(part => buildThumbnailPaths(this.date, this.basePath, part));

    return (
      <article>
        <span class="timestamp">{timestamp}</span>
        <div class="container">
          <div class="thumbnails">
            {thumbnailPaths.map((path, idx) => (
              <img onClick={() => this.handleThumbnailClick(paths[idx])} src={path} />
            ))}
            {thumbnailPaths.length === 1 && <div class="placeholder" />}
          </div>
          <section>{this.article}</section>
        </div>
      </article>
    );
  }
}

const buildPath = (date: string, basePath: string, part?: string) => `${basePath}/${date}${part ?? ''}.JPG`;
const buildThumbnailPaths = (date: string, basePath: string, part?: string) => `${basePath}/thumbnails/${date}${part ?? ''}_tn.jpg`;
