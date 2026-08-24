# Incredible theme

The shared Hugo theme for the Incredible domain family. Dark and gold, one
design system across seven sites.

Consumed as a git submodule at `themes/incredible`. Each site supplies only its
own `data/site.yaml` (sublabel, strapline, CTA lines, primary CTA) and any
layout it genuinely needs to override.

## Use

```
git submodule add https://github.com/mzzavaa/incredible-theme themes/incredible
```

Then in `hugo.toml`:

```toml
theme = "incredible"
```

## Contents

- `assets/css/tokens.css` every custom property, one place
- `assets/css/base.css` reset, type scale, container, rhythm
- `assets/css/components.css` every component, grouped and commented
- `layouts/` baseof, home, page, list, rss, and all partials

## Rules

- No em-dashes and no emoji, anywhere, including comments.
- Page briefs render only outside production builds. See `layouts/page.html`.
- Requires Hugo extended 0.164 or later. Modern template lookup only, never
  `layouts/_default/`.
