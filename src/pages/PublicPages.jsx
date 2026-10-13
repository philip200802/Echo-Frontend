import { useState } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import { BsCheckLg, BsExclamationTriangle, BsEye, BsEyeSlash, BsSoundwave } from "react-icons/bs";
import "../styles/public.css";

const legalSections = {
  terms: {
    title: "Terms and Conditions",
    intro: "These terms govern your use of the EchoStream platform. Please review this draft with appropriate legal counsel before production use.",
    sections: [
      ["introduction", "Introduction and Acceptance of Terms", "By accessing EchoStream, you agree to use the platform responsibly and in accordance with these terms. If you do not agree, please do not use the service."],
      ["eligibility", "Eligibility and User Accounts", "You are responsible for providing accurate account information and for keeping it up to date. Access to some features may depend on your age, location, or role."],
      ["security", "Account Security and Responsibilities", "Keep your credentials confidential and notify EchoStream if you suspect unauthorized access. Activity performed through your account may be associated with you."],
      ["listeners", "Listener Responsibilities", "Use the service lawfully and do not attempt to disrupt availability, bypass access controls, or misuse other users' information."],
      ["artists", "Artist Accounts and Music Uploads", "Artists must have the rights and permissions needed for music, artwork, and other materials they upload. You are responsible for the accuracy of your submissions."],
      ["copyright", "Copyright and Intellectual Property", "EchoStream, its branding, and platform software are protected by applicable intellectual-property laws. Rights in user content remain with the applicable owner, subject to the license described below."],
      ["prohibited", "Prohibited Content and Activities", "Do not upload unlawful, abusive, infringing, malicious, deceptive, or harmful content, or use the service to harass, impersonate, or defraud others."],
      ["availability", "Music Streaming and Platform Availability", "Features may change and the service may occasionally be unavailable for maintenance or reasons outside our control. We do not promise uninterrupted availability."],
      ["content", "User-Generated Content and Licensing", "By submitting content, you grant EchoStream the limited rights needed to host, process, display, and stream it as part of the service. You retain ownership of your content."],
      ["termination", "Account Suspension and Termination", "We may restrict or terminate access when necessary to protect users, the platform, or comply with law. You may stop using the service at any time."],
      ["third-party", "Third-Party Services", "The platform may link to or depend on third-party services. Their terms and privacy practices apply independently of EchoStream."],
      ["liability", "Disclaimer and Limitation of Liability", "The service is provided on an as-available basis to the extent permitted by applicable law. Any limitations must be reviewed and adapted by qualified legal counsel."],
      ["changes", "Changes to These Terms", "We may update these terms as the service evolves. We will publish the updated version and revise the date above."],
      ["contact", "Contact Information", "For questions about these terms, contact EchoStream through the support channel made available in the application."]
    ]
  },
  privacy: {
    title: "Privacy Policy",
    intro: "This draft explains, at a high level, how EchoStream may handle information in connection with the platform. It requires review against the deployed application and applicable law before production use.",
    sections: [
      ["introduction", "Introduction", "This policy applies to information processed through EchoStream and describes our intended approach to privacy. It should be read together with the Terms and Conditions."],
      ["collect", "Information We Collect", "The application may receive information you submit, such as account details and content. Technical information may also be processed to operate and secure the service. The exact data inventory should be confirmed before publication."],
      ["account", "Account and Profile Information", "Account and profile information is used to create and manage your account and provide features you request. Do not submit information you do not have permission to share."],
      ["use", "How We Use Your Information", "Information may be used to provide, maintain, secure, improve, and communicate about the service, subject to the final data practices approved for EchoStream."],
      ["verification", "Email Verification and Authentication", "Email addresses and authentication tokens may be processed to verify accounts, support sign-in, and deliver password-reset instructions. Tokens should be short-lived and invalidated after use."],
      ["password", "Password Security", "Passwords are intended to be handled by the backend as hashes rather than stored in plain text. Never share your password or reset tokens."],
      ["uploads", "Music Uploads and User Content", "Uploaded content may be processed to provide streaming and artist features. The final policy should document storage, moderation, and sharing behavior used in production."],
      ["cookies", "Cookies and Similar Technologies", "The deployed application should document any cookies, local storage, analytics, or similar technologies it uses, including their purposes and controls."],
      ["third-party", "Third-Party Services", "Email delivery, hosting, analytics, or other providers may process information on EchoStream's behalf where configured. The final provider list and applicable disclosures require review."],
      ["security", "Data Storage and Security", "We use reasonable safeguards appropriate to the service, but no system can guarantee absolute security. Technical and organizational safeguards should be documented against the production configuration."],
      ["retention", "Data Retention and Account Deletion", "Information should be retained only as long as needed for the purposes described or required by law. Contact support to request account deletion where available."],
      ["rights", "User Privacy Rights", "Depending on your location, you may have rights concerning access, correction, deletion, portability, or objection. The final process and regional notices require legal review."],
      ["children", "Children's Privacy", "EchoStream is not intended for children where prohibited by applicable law. The final age requirements and parental-consent process must be confirmed before launch."],
      ["changes", "Changes to This Policy", "We may update this policy as the platform changes. The latest version will show its effective date."],
      ["contact", "Contact Information", "For privacy questions or requests, contact EchoStream through the support channel made available in the application."]
    ]
  }
};

function Brand({ className = "" }) {
  return <Link to="/" className={`brand-link d-inline-flex align-items-center gap-2 ${className}`}><BsSoundwave size={30} aria-hidden="true" />EchoStream</Link>;
}

function PublicHeader() {
  return <header className="public-header"><nav className="container py-3 d-flex justify-content-between align-items-center" aria-label="Main navigation"><Brand /><div className="d-flex gap-3"><Link className="public-link" to="/terms">Terms</Link><Link className="public-link" to="/privacy-policy">Privacy</Link></div></nav></header>;
}

function PublicFooter() {
  return <footer className="public-footer mt-5"><div className="container py-4 d-flex flex-wrap gap-3 justify-content-between align-items-center"><small className="text-secondary">© {new Date().getFullYear()} EchoStream</small><div className="d-flex gap-3"><Link className="public-link" to="/terms">Terms and Conditions</Link><Link className="public-link" to="/privacy-policy">Privacy Policy</Link><a className="public-link" href="mailto:support@echostream.example">Contact Support</a></div></div></footer>;
}

function LegalPage({ type }) {
  const document = legalSections[type];
  return <div className="public-page"><PublicHeader /><main className="container py-5 legal-copy"><div className="mb-4"><span className="badge text-bg-light border text-secondary">Draft for legal review</span><h1 className="display-5 fw-bold mt-3">{document.title}</h1><p className="lead text-secondary">{document.intro}</p><p className="small text-secondary mb-0">Last updated: October 13, 2026</p></div><aside className="legal-toc rounded-3 p-4 mb-5" aria-label="Table of contents"><h2 className="h5 mt-0">Contents</h2><ol className="mb-0">{document.sections.map(([id, title]) => <li key={id}><a className="public-link" href={`#${id}`}>{title}</a></li>)}</ol></aside><article>{document.sections.map(([id, title, body], index) => <section key={id} id={id}><h2>{index + 1}. {title}</h2><p>{body}</p></section>)}</article><Link className="public-link d-inline-block mt-4" to="/">← Back to EchoStream</Link></main><PublicFooter /></div>;
}

function AuthShell({ children }) {
  return <div className="public-page"><header className="public-header"><div className="container py-3"><Brand /></div></header><main className="container py-5 d-flex justify-content-center">{children}</main></div>;
}

export function EmailVerifiedPage() {
  const location = useLocation();

  if (new URLSearchParams(location.search).get("verified") === "false") {
    return <EmailNotVerifiedPage />;
  }

  return <AuthShell><div className="public-card p-4 p-md-5 text-center" style={{ maxWidth: 520 }}><div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: 82, height: 82, background: "#e3f5ef", color: "#00685f" }}><BsCheckLg size={42} aria-hidden="true" /></div><h1 className="h2 fw-bold">Email verified successfully!</h1><p className="text-secondary my-3">Your email address has been verified. You're all set to enjoy your music on EchoStream.</p><Link className="btn public-btn rounded-pill w-100 py-3 mt-2" to="/listener/signin">Continue to Sign In</Link><Link className="public-link d-inline-block mt-3" to="/">Go to Homepage</Link></div></AuthShell>;
}

export function EmailNotVerifiedPage() {
  return <AuthShell><div className="public-card p-4 p-md-5 text-center" style={{ maxWidth: 520 }}><div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: 82, height: 82, background: "#fff1f0", color: "#dc3545" }}><BsExclamationTriangle size={40} aria-hidden="true" /></div><h1 className="h2 fw-bold">Email verification failed</h1><div className="alert alert-danger text-start" role="alert">Your email address could not be verified. The link may be invalid or expired.</div><p className="text-secondary my-3">Please request a new verification email and try again.</p><Link className="btn public-btn rounded-pill w-100 py-3 mt-2" to="/listener/signup">Create an Account</Link><Link className="public-link d-inline-block mt-3" to="/listener/signin">Back to Sign In</Link></div></AuthShell>;
}

export function ResetPasswordPage() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const validLength = password.length >= 8;
  const matches = password.length > 0 && password === confirmation;
  async function submit(event) {
    event.preventDefault();
    if (!token) return setStatus({ type: "error", message: "This reset link is missing a token." });
    if (!validLength) return setStatus({ type: "error", message: "Your password must be at least 8 characters." });
    if (!matches) return setStatus({ type: "error", message: "Passwords must match." });
    setStatus({ type: "", message: "" });

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/auth/reset-password/${token}`,
        { newPassword: password }
      );
      setStatus({ type: "success", message: "Your password has been reset successfully." });
    } catch (error) {
      const message = error.response?.data?.message || "We could not reset your password. Please request a new reset link and try again.";
      setStatus({ type: "error", message });
    }
  }
  return <AuthShell><div className="public-card p-4 p-md-5 w-100" style={{ maxWidth: 480 }}><h1 className="h2 fw-bold">Create a New Password</h1><p className="text-secondary">Choose a strong password to secure your EchoStream account.</p>{status.message && <div className={`alert alert-${status.type === "success" ? "success" : "danger"}`} role="alert">{status.message}</div>}{status.type === "success" ? <Link className="btn public-btn rounded-pill w-100 py-3" to="/listener/signin">Return to Sign In</Link> : <form onSubmit={submit}><label className="form-label fw-semibold" htmlFor="new-password">New password</label><div className="input-group mb-2"><input id="new-password" className="form-control" type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="new-password" required /><button className="btn btn-outline-secondary" type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <BsEyeSlash /> : <BsEye />}</button></div><div className={`password-requirement ${validLength ? "valid" : ""}`}>• At least 8 characters</div><label className="form-label fw-semibold mt-3" htmlFor="confirm-password">Confirm new password</label><div className="input-group"><input id="confirm-password" className="form-control" type={showConfirmation ? "text" : "password"} value={confirmation} onChange={(event) => setConfirmation(event.target.value)} autoComplete="new-password" required /><button className="btn btn-outline-secondary" type="button" aria-label={showConfirmation ? "Hide confirmation" : "Show confirmation"} onClick={() => setShowConfirmation(!showConfirmation)}>{showConfirmation ? <BsEyeSlash /> : <BsEye />}</button></div><div className={`password-requirement ${matches ? "valid" : ""}`}>• Passwords must match</div><button type="submit" className="btn public-btn rounded-pill w-100 py-3 mt-4" style={{ backgroundColor: "#00685F", borderColor: "#00685F" }} disabled={!password || !confirmation}>Reset Password</button></form>}<div className="text-center mt-4"><Link className="public-link" to="/listener/signin">Back to Sign In</Link></div></div></AuthShell>;
}


export const TermsPage = () => <LegalPage type="terms" />;
export const PrivacyPage = () => <LegalPage type="privacy" />;
