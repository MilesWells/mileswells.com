import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'grow-modal',
  shadow: true,
  styleUrl: './modal.scss',
})
export class Modal {
  @Prop() isOpen: boolean;
  @Prop() handleClose: () => void;

  constructor() {
    window.addEventListener('keydown', ev => {
      if (ev.key === 'Escape') this.handleClose();
    });
  }

  render() {
    if (!this.isOpen) return null;

    return (
      <div
        class="modal"
        onClick={e => {
          if (e.target === e.currentTarget) this.handleClose();
        }}
      >
        <div class="modal-content">
          <div class="close-btn" onClick={this.handleClose}>
            Close
          </div>
          <slot />
        </div>
      </div>
    );
  }
}
