# MSL Pakistan Site Rebuild Brief

Prepared: 2026-04-14

## 1. Executive Summary

The live site at `mslpakistan.org` is a WordPress build with a broad public surface area, but its information architecture is inconsistent and the published content has clear hygiene issues. The current frontend in this repo is not a partial rebuild of that site. It is a single-route Next.js marketing page for a different organization, with Turkish Student Federation branding, different navigation, different copy, and no matching inner pages, utilities, or content models.

This means the rebuild should not be treated as a visual reskin. It needs a proper re-platforming effort with:

- a corrected sitemap
- a real content model
- page templates for core org content, news, team, events, and utility flows
- explicit decisions on what to keep, merge, remove, or repair

## 2. Key Findings

- The live site exposes at least 25 indexed/public URLs via sitemap alone, plus additional linked URLs not present in the sitemap.
- The XML sitemap is incomplete. `our-departments` links to department detail pages that are not present in the sitemap.
- The live site contains low-value or accidental pages: `sample-page`, `hello-world`, empty archive states, duplicate commerce paths, and category/tag archives with poor value.
- Several linked department URLs appear broken or unpublished: `dawah-squad`, `it-department`, `literacture`, `madadgar-team`, `media-department`, `muslim-kids`, `scout`, `universities-department`.
- Leadership profile pages appear templated inconsistently. Several meta descriptions repeat the same placeholder bio text.
- Commerce is duplicated/confusing: `online-store`, `shop`, product pages, `register`, `my-account`, and `checkout-2`.
- The repo currently has only one public route: `/`.
- The current frontend metadata and content are for `Turkish Student Federation`, not MSL Pakistan.
- A search result for the domain surfaced a spam/gambling-style URL, which suggests possible indexation or site integrity problems that should be checked during migration.

## 3. Live Site Inventory

### 3.1 Core Pages From Sitemap

| URL | Type | Observed Purpose | Recommendation |
| --- | --- | --- | --- |
| `/` | Core | Homepage introducing MSL Pakistan, its identity, leadership, content, and CTAs | Keep, rebuild cleanly |
| `/about-us/` | Core | Organization overview, ideology, mission, nationwide presence, overview sections | Keep |
| `/our-departments/` | Core | Directory page for internal departments | Keep |
| `/meet-our-team/` | Core | Leadership/team listing | Keep |
| `/our-activities/` | Core | Activities overview | Keep, likely merge tightly with events/programs |
| `/all-events/` | Core | Events archive with upcoming/ongoing/recent states | Keep |
| `/news-blogs/` | Content hub | Blog/news archive with filters/search/live feed | Keep |
| `/the-student-time/` | Content hub | Magazine/archive page for student publication | Keep if publication is active, otherwise merge into news/media |
| `/get-involved/` | CTA | Volunteer/support/get involved landing page | Keep |
| `/join/` | CTA | Membership/join-the-movement page | Keep |
| `/contact-us/` | Utility | Contact form and org contact details | Keep |
| `/verify-membership/` | Utility | Membership verification tool/page | Keep only if this workflow is real and maintained |
| `/generate-membership-card/` | Utility | Membership card generation tool/page | Keep only if this workflow is real and maintained |
| `/terms-conditions/` | Legal | Terms | Keep |
| `/privacy-policy-2/` | Legal | Privacy policy | Keep, rename slug |
| `/register/` | Account | Account creation | Keep only if accounts are required |
| `/my-account/` | Account | Logged-in account area | Keep only if accounts are required |
| `/checkout-2/` | Commerce utility | Checkout flow | Remove or replace with canonical checkout route |
| `/online-store/` | Commerce | Store landing page | Keep only if merchandise sales are active |
| `/shop/` | Commerce | WooCommerce shop archive | Merge with `/online-store/` or remove one |
| `/sample-page/` | Accidental | Default WordPress sample page | Remove |

### 3.2 Leadership Detail Pages

| URL | Type | Observed Purpose | Recommendation |
| --- | --- | --- | --- |
| `/habib-anwer/` | Team detail | Leadership profile page | Keep if person is current |
| `/asad-baig/` | Team detail | Leadership profile page | Keep if person is current |
| `/muhammad-hammad/` | Team detail | Leadership profile page | Keep if person is current |
| `/abdul-rehman-hashim/` | Team detail | Leadership profile page | Keep if person is current |
| `/umer-abbas/` | Team detail | Leadership profile page | Keep if person is current |

Notes:

- Several profile pages show repeated placeholder-like meta description text.
- Team detail pages should become a proper reusable content type, not hand-built one-offs.

### 3.3 Blog / News Posts From Sitemap

| URL | Type | Observed Purpose | Recommendation |
| --- | --- | --- | --- |
| `Urdu post slug 1` | Post | Urdu issue/policy article or press statement | Keep if editorially approved |
| `Urdu post slug 2` | Post | Urdu post | Keep if editorially approved |
| `/umer-abbas-president-msl-pakistan/` | Post | Leadership/news post | Keep if editorially approved |
| `Urdu post slug 3` | Post | Content/article page | Keep if editorially approved |
| `Urdu post slug 4` | Post | Tribute/farewell post | Keep if editorially approved |
| `/ex-president-ans-muhsi/` | Post | English profile/tribute post | Keep if editorially approved |
| `/hello-world/` | Accidental | Default WordPress post | Remove |

### 3.4 Commerce Pages / Products

| URL | Type | Observed Purpose | Recommendation |
| --- | --- | --- | --- |
| `/product/allah-is-calling-volume-ii/` | Product | Book/product detail | Keep only if store is active |
| `/product/msl-hoddies/` | Product | Merchandise product detail | Keep only if store is active |
| `/product-category/uncategorised/` | Commerce archive | Default taxonomy page | Remove/noindex |

### 3.5 Archive / Taxonomy Pages

| URL | Type | Observed Purpose | Recommendation |
| --- | --- | --- | --- |
| `/category/uncategorised/` | Archive | Default category archive | Remove/noindex |
| `/category/press-release/` | Archive | Press release archive | Keep only if content volume justifies it |
| `/category/blogs/` | Archive | Blog archive | Usually merge into `/news-blogs/` |
| `/category/the-students-times/` | Archive | Magazine archive | Keep only if publication remains separate |
| `/tag/student-organization-of-pakistan/` | Archive | Tag archive | Remove/noindex |
| `/tag/muslim-student-league-pakistan/` | Archive | Tag archive | Remove/noindex |
| `Urdu tag archive` | Archive | Tag archive | Remove/noindex |
| `/tag/mslpakistan/` | Archive | Tag archive | Remove/noindex |
| `/tag/petrol-price/` | Archive | Tag archive | Remove/noindex |

### 3.6 Public URLs Linked On Site But Missing From Sitemap

These were discoverable from internal links but were not present in the sitemap inventory.

| URL | Status | Observed Purpose | Recommendation |
| --- | --- | --- | --- |
| `/courses/islamic-matters` | 200 | Course/program detail | Keep if this is an active program line |
| `/events` | non-200 | Alternate events route | Resolve or redirect |
| `/dawah-squad` | non-200 | Department detail | Rebuild only if real |
| `/it-department` | non-200 | Department detail | Rebuild only if real |
| `/literacture` | non-200 | Department detail, slug typo | Fix slug/content model |
| `/madadgar-team` | non-200 | Department detail | Rebuild only if real |
| `/media-department` | non-200 | Department detail | Rebuild only if real |
| `/muslim-kids` | non-200 | Department detail | Rebuild only if real |
| `/scout` | non-200 | Department detail | Rebuild only if real |
| `/universities-department` | non-200 | Department detail | Rebuild only if real |

## 4. Live IA Summary

The live site currently mixes several page families:

- Organization pages: home, about, departments, team, activities
- Publishing: news/blogs, magazine, individual posts
- Events: archive/calendar-style views
- Membership: join, verify membership, generate membership card
- Contact/support: contact, get involved
- Commerce: store, shop, products, register/account/checkout
- Legal: privacy, terms

The structure is broad enough to justify a real multi-template site, not a single long homepage.

## 5. Current Frontend Inventory

### Implemented Routes

| Route | Status | Notes |
| --- | --- | --- |
| `/` | Implemented | Only public route in the repo |

### Current Frontend Characteristics

- Brand name is `Turkish Student Federation`, not MSL Pakistan.
- Metadata title/description are for Turkish Student Federation.
- Navigation is anchor-only: `Programs`, `Impact`, `Community`, `Resources`.
- The page is a marketing-style landing page with no real route hierarchy.
- No inner-page templates exist for about, team, departments, news, events, contact, legal, or utility tools.
- No CMS/content source is wired in.
- No membership verification/card generation flows exist.
- No blog/news listing or article templates exist.
- No team profile template exists.
- No commerce or account flows exist.

### Current Homepage Sections

The local homepage currently includes:

- hero
- credibility metrics
- mission
- why join
- curriculum/programs
- updates
- pillars
- impact stats
- featured video
- newsletter/join section

This structure is generic and reusable, but the copy, taxonomy, CTAs, and brand are all misaligned with the live site.

## 6. Live Site vs Current Frontend

| Area | Live Site | Current Frontend | Gap |
| --- | --- | --- | --- |
| Brand | MSL Pakistan | Turkish Student Federation | Complete mismatch |
| Route count | Multi-page site, 25+ public URLs | Single route | Major gap |
| About content | Dedicated page | Folded into generic homepage sections | Missing page |
| Departments | Directory plus linked department details | None | Missing page family |
| Team | Team listing plus profiles | None | Missing page family |
| News/blogs | Archive plus posts | Teaser cards only | Missing listing and post templates |
| Student Time | Dedicated publication page | None | Missing page |
| Events | Archive/calendar flow | None | Missing page |
| Join/membership | Dedicated join + verification + card tools | Generic newsletter CTA | Missing workflows |
| Contact | Dedicated contact page/form | None | Missing page |
| Legal | Terms + privacy pages | None | Missing pages |
| Commerce | Store/products/account/checkout present | None | Missing or intentionally omitted |
| Content source | WordPress dynamic content | Hardcoded TS object | Major architecture gap |

## 7. Rebuild Recommendation

### 7.1 Suggested Final Sitemap

This is the recommended cleaned sitemap for a proper rebuild.

#### Primary Navigation

- `/`
- `/about`
- `/departments`
- `/team`
- `/activities`
- `/events`
- `/news`
- `/student-time`
- `/join`
- `/get-involved`
- `/contact`

#### Secondary / Utility

- `/membership/verify`
- `/membership/card`
- `/privacy`
- `/terms`

#### Optional Based On Business Decision

- `/store`
- `/store/[product-slug]`
- `/account`
- `/register`
- `/checkout`

#### Dynamic Content Types

- `/team/[slug]`
- `/news/[slug]`
- `/student-time/[slug]` or fold publication entries into `/news/[slug]`
- `/departments/[slug]` if department detail pages are real
- `/events/[slug]` if events need detail pages

### 7.2 Content Consolidation Decisions Needed

- Decide whether `our-activities` and `all-events` remain separate or become one "Programs & Events" system.
- Decide whether `the-student-time` is a separate publication brand or just a content category under news.
- Decide whether store/account/checkout remain part of the rebuilt site.
- Decide whether membership verification and card generation are core public workflows or admin/member-only utilities.
- Decide which team members and posts are current enough to migrate.
- Decide whether department detail pages actually exist and deserve real landing pages.

## 8. Recommended Content Model

### Core Types

- `page`: home, about, contact, join, get involved, privacy, terms
- `department`: title, slug, summary, mission, programs, lead, contact, status
- `person`: name, role, region/department, bio, photo, links, status
- `post`: title, slug, category, language, publish date, author, hero image, body
- `event`: title, status, start/end date, location, summary, body, registration link
- `program`: title, slug, summary, eligibility, CTA, related department

### Utility Types

- `membershipRecord` or external API-backed verification source
- `membershipCardRequest`
- `product` only if commerce stays

## 9. Rebuild Priorities

### Phase 1: Foundation

- Replace all Turkish Student Federation branding and metadata
- Establish route structure and layout system
- Build reusable page templates
- Set up SEO metadata, OG images, canonical handling, and redirects

### Phase 2: Core Public Experience

- Homepage
- About
- Departments
- Team
- News archive + post template
- Contact
- Join / Get involved
- Privacy / Terms

### Phase 3: Secondary Systems

- Events archive/detail pages
- Student Time publication flow
- Membership verification/card tools
- Commerce, only if still needed

### Phase 4: Migration / Cleanup

- Migrate approved content only
- Redirect removed pages
- Remove/noindex accidental archives and defaults
- Audit search index for spam or stale URLs

## 10. Technical Direction For The Rebuild

Recommended approach:

- Keep Next.js as the frontend
- Move away from hardcoded `home-content.ts`
- Use a CMS or structured content source
- Build route-driven pages, not anchor-only sections
- Use reusable collections for team, posts, departments, and events
- Add redirect mapping from old slugs to new canonical URLs

Good backend/content options:

- headless WordPress if the client wants continuity
- Sanity, Payload, or Strapi if the goal is a cleaner long-term editing workflow
- MDX/content collections only if the site will be maintained by technical users

## 11. Risks To Address During Migration

- Broken live links currently exposed from `our-departments`
- Duplicate/low-value archive pages being indexed
- Placeholder/default WordPress content still public
- Potential spam indexation on the domain
- Unclear ownership of store/account functionality
- Unclear source of truth for membership verification/card generation

## 12. Immediate Build Brief

If the site is being rebuilt now, the practical brief should be:

1. Rebuild MSL Pakistan as a proper multi-page organization website in Next.js.
2. Preserve only approved public content and current organizational structures.
3. Launch with core pages first: home, about, departments, team, news, join, contact, legal.
4. Add events, publication archive, membership tools, and commerce only after confirming they are live requirements.
5. Clean the URL structure, remove legacy WordPress defaults, and redirect old URLs to canonical destinations.
6. Treat the current local frontend as a visual prototype only, not as the site architecture.

## 13. Source Snapshot

Live sources used:

- `https://mslpakistan.org/wp-sitemap.xml`
- `https://mslpakistan.org/page-sitemap.xml`
- `https://mslpakistan.org/post-sitemap.xml`
- `https://mslpakistan.org/product-sitemap.xml`
- `https://mslpakistan.org/category-sitemap.xml`
- `https://mslpakistan.org/post_tag-sitemap.xml`
- key live pages including `/`, `/about-us/`, `/our-departments/`, `/meet-our-team/`, `/news-blogs/`, `/join/`, `/contact-us/`

Local sources used:

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/home-content.ts`
- `src/components/home/*`
