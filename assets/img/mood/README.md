# Mood library

Twenty-six brand images, shared by every site on the theme. Near-black ground,
one warm brass light source, no blue, no people, no text. They exist so that a
page never has to ship with an empty image slot or a stock photograph.

Use from any site with the path relative to `assets/`:

```
image: "img/mood/mechanism.webp"
```

Both `hero.html` and `image-slot.html` resolve `resources.Get` against the theme
and the site, so a site can shadow any of these by placing a file at the same
path in its own `assets/`.

## Composition, and why it matters

The hero scrim is a 100 degree gradient that is opaque on the left and clear on
the right, because the headline sits on the left. **A hero image must therefore
put its subject on the right or in the centre.** Images marked `subject left`
below are fine as `image-slot` figures and wrong as heroes: the gradient will
paint over the subject.

| File | Subject | Reads as |
|---|---|---|
| `arc.webp` | right | A long light arc through darkness. Path, trajectory, energy |
| `armillary.webp` | centre | Armillary sphere under glass. Mapping, orientation, domains |
| `calipers.webp` | centre | Calipers on slate. Measurement, scoping, estimation |
| `clamp.webp` | centre right | Clamp holding a steel sphere. Pressure, hardening, security |
| `dividers.webp` | centre | Brass dividers. Comparison, division of scope |
| `emitter.webp` | right | Optical device throwing light rays. Evidence, proof, output |
| `gears.webp` | full frame | Clockwork gear train. Machinery, automation, process |
| `gearwheel.webp` | centre left | Large gear mechanism. A hub, a mechanism at rest |
| `glass-stack.webp` | centre | Light through stacked glass plates. Layers, architecture |
| `gyroscope.webp` | centre | Gyroscope. Direction held under movement |
| `gyroscope-small.webp` | centre | The same object, small in a vast dark frame. Scarcity, discovery |
| `instrument-case.webp` | centre right | Instruments in a velvet case. A curated set, a roster |
| `key.webp` | centre | Antique key on slate. Handover, access, ownership |
| `lattice.webp` | centre | Golden lattice structure. Networks, agents, intelligence |
| `lens.webp` | centre | Lens cylinder with a light beam. Optics, video, focus |
| `mechanism.webp` | right | Pocket watch movement. Craft, precision. The signature hero |
| `optics.webp` | right | Optical instrument with lenses and gears. Inspection, audit |
| `pantograph.webp` | centre right | Brass plotting linkage. Drawing, spatial work, translation |
| `pen-and-paper.webp` | right | Fountain pen on paper. Proposals, contracts, the written word |
| `plumb-line.webp` | centre | Plumb bob over a block. A standard, true vertical, governance |
| `pour.webp` | centre | Molten brass poured into a mould. First form, prototype |
| `prism.webp` | centre right | Prism splitting a beam. Raw input turned into structure, data |
| `seams.webp` | full frame | Dark slate tiles lit along the seams. Substrate, platform, texture |
| `sphere.webp` | centre | Gold sphere split into two halves. Hybrid, a designed split |
| `tools.webp` | **left** | Brass tools in a holder. Craft, the toolkit. Figures only |
| `tourbillon.webp` | full frame | Tourbillon movement. A system kept running, operations |

## Provenance and rules

Rendered brand imagery, not photographs of real places or people, and not stock.
Source: the Engineering Mastery deck series, September 2026. Master files are
1376 by 768 and are stored as JPEG because they are photographic; Hugo produces
the WebP variants.

- **Do not add text to these files.** Text belongs in HTML where it can be read,
  translated and searched. Per-site statement images that carry baked-in wording
  live in that site's own `assets/`, not here, because their words are specific to
  one domain.
- **Do not add a face here.** See `IMAGE-BRIEF.md` in the portfolio root:
  generated portraits are a design placeholder and are misleading as published
  content. Real photographs of real people belong in the site that names them.
- **Keep the ground near-black and the accent brass.** An image with a blue cast
  or a second light source breaks the set, and the set is the point.
