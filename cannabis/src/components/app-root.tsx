import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <Host>
        <nav-bar />
        <stencil-router>
          <stencil-route-switch>
            <stencil-route url="/" component="grow-jack-herer" exact={true} />
          </stencil-route-switch>
        </stencil-router>
      </Host>
    );
  }
}
