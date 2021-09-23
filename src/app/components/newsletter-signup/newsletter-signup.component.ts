import { NewsletterService } from '@api/services';
import { SimpleAnalyticsService } from '@services/simple-analytics.service';
import {
  Component,
  OnInit,
  ElementRef,
  HostBinding,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap, takeUntil } from 'rxjs/operators';
import { HotToastService } from '@ngneat/hot-toast';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss'],
})
export class NewsletterSignupComponent implements OnInit, OnDestroy {
  @HostBinding('class') class =
    'max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8';
  @ViewChild('emailAddress') input: ElementRef<HTMLInputElement>;
  newsletterSignup: FormGroup;

  private destroy$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    public element: ElementRef<HTMLElement>,
    private sa: SimpleAnalyticsService,
    private toast: HotToastService,
    private newsletterService: NewsletterService
  ) {
    this.setupForm();
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupForm() {
    this.newsletterSignup = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }

  signupNewsletter() {
    if (this.newsletterSignup.valid) {
      this.sa.event('newsletter_submit_with_email');
      this.newsletterService
        .subscribe({ body: this.newsletterSignup.value })
        .pipe(
          this.toast.observe({
            loading: 'Signing you up...',
            success: 'Successfully signed up. Thank you!',
            error: 'Oh no, something went wrong! Please try again.',
          }),
          tap(() => {
            this.sa.event('newsletter_subscribed');
          }),
          takeUntil(this.destroy$)
        )
        .subscribe({ complete: () => this.newsletterSignup.reset() });
    }
  }
}
