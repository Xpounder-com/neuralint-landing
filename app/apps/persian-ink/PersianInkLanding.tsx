import Image from "next/image";
import ThemeToggle from "../../components/ThemeToggle";
import InstallActions from "./InstallActions";
import { persianInkRelease } from "./release";

const assets = "/apps/persian-ink/";

function AppIdentity() {
  return (
    <a className="pi-identity" href="/apps/persian-ink/" aria-label="Persian Ink home">
      <Image src={`${assets}app-icon.png`} alt="" width={52} height={52} unoptimized />
      <span>Persian Ink</span>
    </a>
  );
}

export default function PersianInkLanding() {
  return (
    <div className="pi-landing">
      <a className="pi-skip" href="#main">Skip to content</a>
      <header className="pi-shell pi-topbar">
        <AppIdentity />
        <nav className="pi-nav" aria-label="Persian Ink navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#setup">Setup</a>
          <a href="/apps/persian-ink/support/">Support</a>
          <ThemeToggle />
        </nav>
      </header>
      <main id="main">
        <section className="pi-shell pi-hero" aria-labelledby="pi-title">
          <div className="pi-hero-copy" id="download">
            <h1 id="pi-title">Your<br />handwriting.<br /><em>Persian text.</em></h1>
            <p className="pi-lede">Write with Apple Pencil. Bring Persian to Notes and other supported apps.</p>
            <div className="pi-actions"><InstallActions statusId="pi-hero-release-status" /></div>
          </div>
          <figure className="pi-hero-figure">
            <p className="pi-lettering" lang="fa" dir="rtl">به خط خودت</p>
            <div className="pi-product-stage">
              <div className="pi-tablet pi-tablet-detail"><div className="pi-tablet-window">
                <Image src={`${assets}01-pencil-panel.png`} alt="Actual Persian Ink keyboard showing its Apple Pencil handwriting panel" width={2064} height={2752} unoptimized loading="eager" fetchPriority="high" />
              </div></div>
              <Image className="pi-pencil" src={`${assets}pencil-illustration.webp`} alt="" width={1024} height={1536} unoptimized aria-hidden="true" />
            </div>
            <figcaption>Actual app screen · handwriting panel detail</figcaption>
          </figure>
        </section>
        <div className="pi-shell pi-facts" aria-label="At a glance"><span>Apple Pencil writing</span><span>Offline after setup</span><span>One-time purchase</span></div>
        <section className="pi-workflow" id="how-it-works" aria-labelledby="pi-workflow-title">
          <div className="pi-shell">
            <h2 id="pi-workflow-title">Write. Review. Insert.</h2>
            <p className="pi-section-lede">A familiar gesture. A few careful words.</p>
            <ol className="pi-workflow-steps">
              <li><div className="pi-step-art"><span className="pi-step-number">01</span><span className="pi-ink-example" lang="fa" dir="rtl">سلام</span></div><h3>Write a line</h3><p>Use Apple Pencil in the keyboard panel.</p></li>
              <li><div className="pi-step-art"><span className="pi-step-number">02</span><span className="pi-candidate-example" lang="fa" dir="rtl">سلام</span></div><h3>Review the words</h3><p>Finish the dots. Tap Recognize. Choose a candidate.</p></li>
              <li><div className="pi-step-art"><span className="pi-step-number">03</span><span className="pi-text-example" lang="fa" dir="rtl">سلام</span></div><h3>Keep your thought going</h3><p>Insert the text into your supported app.</p></li>
            </ol>
            <p className="pi-example-note">Illustrated workflow. Recognition quality varies with handwriting.</p>
            <div className="pi-offline">
              <div><h3>Recognition stays on your iPad.</h3><p>Your handwriting is processed on device. After the Persian model is installed, recognition works offline with Full Access off.</p></div>
              <a href="/apps/persian-ink/support/#offline">How offline setup works <span aria-hidden="true">↗</span></a>
            </div>
            <p className="pi-sdk-note">Google ML Kit may send operational metrics when network access is available. <a href="/apps/persian-ink/privacy/">Read the privacy policy.</a></p>
          </div>
        </section>
        <section className="pi-shell pi-everyday" aria-labelledby="pi-everyday-title">
          <figure><div className="pi-tablet pi-tablet-portrait"><Image src={`${assets}02-character-typing.png`} alt="Actual app screen with the Persian character keyboard and the public greeting سلام typed in the practice page" width={2064} height={2752} unoptimized loading="lazy" /></div><figcaption>Actual app screen · Persian character keyboard</figcaption></figure>
          <div className="pi-everyday-copy">
            <h2 id="pi-everyday-title">For the places<br />you write.</h2>
            <p className="pi-section-lede">Draft a note. Send a thought. Keep the Persian that sounds like you.</p>
            <div className="pi-feature-row"><h3>More than handwriting</h3><p>Persian and English keys, numbers, punctuation and <span lang="fa" dir="rtl">نیم‌فاصله</span> for the finishing touches.</p></div>
            <div className="pi-feature-row"><h3>Made for supported text fields</h3><p>Tested in Apple Notes and a native text editor. Protected fields and apps that block third-party keyboards use Apple’s keyboard.</p></div>
            <a className="pi-text-link" href="/apps/persian-ink/support/#limits">See what is supported <span aria-hidden="true">↗</span></a>
          </div>
        </section>
        <section className="pi-shell pi-install" id="setup" aria-labelledby="pi-install-title">
          <div className="pi-install-offer">
            <h2 id="pi-install-title">Make room for<br />your words.</h2><p className="pi-price">{persianInkRelease.price}</p><p className="pi-price-caption">One time. No subscription.</p>
            <div className="pi-actions pi-actions-footer"><InstallActions statusId="pi-footer-release-status" showFacts={false} showSetup={false} /></div>
          </div>
          <ol className="pi-setup-steps">
            <li><span>01</span><div><h3>Add the keyboard</h3><p>Settings → General → Keyboard → Keyboards → Add New Keyboard → Persian Ink.</p></div></li>
            <li><span>02</span><div><h3>Download the Persian model</h3><p>While online, temporarily enable Allow Full Access. Download the model in the keyboard and wait for confirmation.</p></div></li>
            <li><span>03</span><div><h3>Turn Full Access off</h3><p>The keyboard is ready for offline recognition.</p></div></li>
            <li><span>04</span><div><h3>Write your first line</h3><p>Write with Apple Pencil, recognize, review and insert.</p></div></li>
          </ol>
        </section>
        <section className="pi-shell pi-beta" id="beta" aria-labelledby="pi-beta-title">
          <div><h2 id="pi-beta-title">Invited to TestFlight?</h2><p>Install Apple’s free TestFlight app. Open your Persian Ink invitation and tap <strong>View in TestFlight</strong>, or open TestFlight, tap <strong>Redeem</strong> and enter your redemption code. Choose Persian Ink, then <strong>Accept</strong>, <strong>Install</strong> and <strong>Open</strong>.</p><p className="pi-beta-help">An invitation is required; installing TestFlight alone does not unlock the beta. Missing an invitation? Check your email and spam, or <a href="mailto:mehrdadz@neuralint.io?subject=Persian%20Ink%20installation%20help">contact support</a>. Keep your code private.</p></div>
          <div className="pi-beta-actions"><a className="pi-button" href={persianInkRelease.testFlightDownloadUrl}>Download TestFlight <span aria-hidden="true">↗</span></a><a className="pi-text-link" href="/apps/persian-ink/support/">Full setup &amp; troubleshooting</a></div>
        </section>
        <p className="pi-shell pi-requirements">iPadOS 16 or later. Compatible Apple Pencil required for handwriting. Existing Notes drawings, photos and PDFs are not converted. Local App Store prices may vary.</p>
      </main>
      <footer className="pi-shell pi-footer">
        <div><AppIdentity /><p>An iPad. A Pencil. Your Persian.</p></div>
        <nav aria-label="Persian Ink information"><a href="/apps/persian-ink/privacy/">Privacy</a><a href="/apps/persian-ink/support/">Support</a><a href="/apps/terms/">Terms</a><a href="/apps/">NeuralInt apps <span aria-hidden="true">↗</span></a></nav>
        <p className="pi-copyright">© 2026 Neural Intelligence Labs</p>
      </footer>
    </div>
  );
}
