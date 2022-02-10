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

  render() {
    const timestamp = moment(this.date, 'YYYY_MM_DD').format('MMMM Do, YYYY');

    const thumbnailPaths = [buildThumbnailpath(this.date, this.basePath)(), ...this.additionalPhotos.map(buildThumbnailpath(this.date, this.basePath))];

    return (
      <article>
        <span class="timestamp">{timestamp}</span>
        <div class="container">
          <div class="thumbnails">
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

const buildThumbnailpath = (date: string, basePath: string) => (part?: string) => `${basePath}/thumbnails/${date}${part ?? ''}_tn.jpg`;
