import { Component, HostListener, OnDestroy } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title = 'my-site';
  headerHiddenMobile = false;
  private hideTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly hideDelayMs = 1200;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.isMobileViewport()) {
      this.clearHideTimer();
      this.headerHiddenMobile = false;
      return;
    }

    this.headerHiddenMobile = false;
    this.clearHideTimer();
    this.hideTimer = setTimeout(() => {
      this.headerHiddenMobile = true;
    }, this.hideDelayMs);
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (!this.isMobileViewport()) {
      this.clearHideTimer();
      this.headerHiddenMobile = false;
    }
  }

  showHeaderOnMobile(): void {
    if (!this.isMobileViewport()) {
      return;
    }
    this.headerHiddenMobile = false;
    this.clearHideTimer();
    this.hideTimer = setTimeout(() => {
      this.headerHiddenMobile = true;
    }, this.hideDelayMs);
  }

  private isMobileViewport(): boolean {
    return typeof window !== 'undefined' && window.innerWidth <= 720;
  }

  private clearHideTimer(): void {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
  }

  ngOnDestroy(): void {
    this.clearHideTimer();
  }
}
