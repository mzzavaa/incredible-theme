# Fonts

Self-hosted. No CDN of any kind, per the build rules.

Drop these files here and Hugo Pipes will fingerprint them via
`partials/head.html`.

| File | Source |
|---|---|
| Newsreader[opsz,wght].woff2 | github.com/googlefonts/newsreader, fonts/variable |
| Newsreader-Italic[opsz,wght].woff2 | same repo, Italic variable file |
| Inter[wght].woff2 | github.com/rsms/inter, releases, Inter-Variable |
| IBMPlexMono-Regular.woff2 | github.com/IBM/plex, IBM-Plex-Mono/fonts/complete/woff2 |
| IBMPlexMono-Medium.woff2 | same |

Newsreader Italic is not optional. The second line of the signature headline
is often italic and a synthesised oblique reads wrong at display sizes.

IBM Plex Mono is loaded by incredible.builders only, and by the course-code
plate on incredible.training. Do not preload it on the other four sites.

Subset to latin + latin-ext before shipping. Newsreader full is around 180kB
per file; a latin subset lands near 28kB.
