import { Link } from "@tanstack/react-router";
import { Sparkles, Github, Twitter, Linkedin, type LucideIcon } from "lucide-react";
import { site } from "@/data/site";

type SocialEntry = { icon: LucideIcon; href: string; label: string };

const socials: SocialEntry[] = [
  { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: site.social.twitter, label: "X / Twitter" },
  { icon: Github, href: site.social.github, label: "GitHub" },
].filter((s): s is SocialEntry => Boolean(s.href));

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/40 py-12">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="text-lg font-bold">
                Code<span className="text-gradient">hence</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {site.tagline} We design, build, and ship intelligent apps for startups and
              businesses.
            </p>
            {socials.length > 0 && (
              <div className="mt-5 flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
              <li><Link to="/case-studies" className="hover:text-foreground">Case studies</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li>
                <a href={`mailto:${site.contactEmail}`} className="hover:text-foreground">
                  {site.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Codehence. Built for the AI era.
        </div>
      </div>
    </footer>
  );
}
