import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'grow-modal',
  shadow: true,
  styleUrl: './modal.scss',
})
export class Modal {
  @Prop() isOpen: boolean;
  @Prop() handleClose: () => void;

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
          <slot />
        </div>
      </div>
    );
  }
}
