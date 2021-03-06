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
        <grow-disclaimer />
        <stencil-router>
          <stencil-route-switch>
            <stencil-route url="/" component="grow-about" exact />
            <stencil-route url="/costs" component="grow-costs" exact />
            <stencil-route url="/grow/jack-herer" component="grow-jack-herer" exact />
          </stencil-route-switch>
        </stencil-router>
      </Host>
    );
  }
}
