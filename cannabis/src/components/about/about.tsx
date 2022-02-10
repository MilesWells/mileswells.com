import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'grow-about',
  shadow: true,
})
export class About {
  render() {
    return (
      <Host>
        <p>Placeholder for welcome</p>
        <p>Placeholder for mental health stuff + MMJ</p>
      </Host>
    );
  }
}
