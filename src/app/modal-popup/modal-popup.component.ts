import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-modal-async',
  templateUrl: './nz-modal-demo.component.html'
})
export class NzDemoModalAsyncComponent {
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    console.log("popup trueee");

    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
