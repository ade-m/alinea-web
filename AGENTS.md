# AGENTS.md — ALINEA Research Foundation

## 1. Project Identity

This repository contains the official website for:

**ALINEA Research Foundation**

Tagline:

> From Inquiry to Impact.

Core principle:

> We start with the problem, not the technology.

ALINEA is an applied research foundation based in Indonesia.
It explores how research, intelligent technologies, and engineering
can be translated into systems that address real-world problems.

The website should position ALINEA as a credible research institution,
not as a startup, software company, or student community.


## 2. Research Direction

ALINEA focuses primarily on applied and interdisciplinary research.

Current research areas:

### Applied Artificial Intelligence
Practical AI for:
- intelligent systems
- AI agents
- automation
- decision support
- machine learning applications
- real-world problem solving

### Computer Vision
Research involving:
- visual understanding
- image processing
- object detection
- recognition
- visual intelligence
- intelligent perception systems

### Artificial Intelligence of Things (AIoT)
Combining AI with:
- IoT
- sensors
- edge devices
- embedded systems
- environmental monitoring
- autonomous physical systems

### Data-Driven Systems
Research involving:
- data analytics
- decision support
- intelligent monitoring
- data-driven decision systems
- evidence-based systems

### AgriTech
Technology applied to:
- agriculture
- livestock
- monitoring
- productivity
- food systems
- intelligent farming

### Technology for Real-World Impact
Research should ultimately contribute to practical impact in areas such as:
- communities
- education
- agriculture
- environment
- public services
- industry

Do NOT limit ALINEA exclusively to AI.

The research scope may expand in the future.


## 3. Research Philosophy

The website should communicate this research process:

PROBLEM
↓
OBSERVATION
↓
RESEARCH
↓
EVIDENCE
↓
PROTOTYPE
↓
VALIDATION
↓
DEPLOYMENT
↓
IMPACT

Technology is a tool, not the starting point.

Prefer:

"What problem are we trying to solve?"

over:

"What technology can we use?"


## 4. Brand Personality

ALINEA should feel:

- intelligent
- curious
- independent
- experimental
- credible
- modern
- understated
- research-driven
- human
- internationally relevant

Avoid making ALINEA feel:

- corporate
- overly futuristic
- like an AI startup
- like a SaaS landing page
- like a university department
- like a student organization
- overly formal
- overly decorative


## 5. Visual Direction

Primary style:

**Minimalism + restrained brutalism**

Background should predominantly be:

#FFFFFF
or slightly off-white.

Use:

- generous whitespace
- large typography
- strong typographic hierarchy
- thin or medium black borders
- visible grids
- asymmetric layouts where appropriate
- editorial layouts
- restrained geometric elements
- subtle experimental interactions

The brutalist influence should be subtle.

Think:

research institution
+
independent design studio
+
academic publication

NOT:

generic startup landing page.


## 6. Color Philosophy

Primary:

- White / Off-white
- Near black
- Neutral gray

Accent colors may be introduced sparingly.

Current preferred accent direction:

- acid/lime green
- muted green
- research/technical neutrals

Accent colors should never dominate the interface.

Avoid excessive gradients.


## 7. Typography

Typography is one of the main visual elements.

Prefer modern sans-serif fonts.

Characteristics:

- clean
- geometric or neo-grotesque
- highly readable
- suitable for large editorial headings

Headings may use:

UPPERCASE

when appropriate.

Hero typography should be large and expressive.

Example:

FROM
INQUIRY
TO IMPACT.

Avoid excessive font weights and decorative fonts.


## 8. Motion

Motion should reinforce the research/editorial experience.

Allowed:

- subtle parallax
- scroll-based typography movement
- reveal animations
- subtle hover transformations
- marquee text
- small micro-interactions
- geometric motion

Animations must remain subtle.

Do NOT create:

- excessive bouncing
- unnecessary 3D
- aggressive scroll hijacking
- heavy particle effects
- animations that reduce readability

Always respect:

prefers-reduced-motion


## 9. Homepage Structure

Recommended homepage architecture:

### Hero

ALINEA

FROM INQUIRY
TO IMPACT.

Supporting statement explaining applied research.

---

### About

Explain what ALINEA is.

Core idea:

Ideas deserve to go further.

Research should move beyond papers and contribute to real-world change.

---

### Research Areas

Present the main research domains:

01 Applied AI
02 Computer Vision
03 AIoT
04 Data-Driven Systems
05 AgriTech
06 Real-World Impact

This list may evolve.

---

### How We Work

Use the philosophy:

We start with the problem, not the technology.

Visualize:

Observe → Research → Build → Deploy

or the expanded research process.

---

### Research / Projects

Show actual ALINEA research projects.

Each project may contain:

- title
- research area
- problem
- year
- status
- collaborators
- short abstract
- publications
- prototype
- impact

---

### Publications

Support future publication listings.

Possible metadata:

Title
Authors
Year
Venue
DOI
Research Area

---

### People

Show people behind ALINEA.

Possible roles:

Founder
Researcher
Research Fellow
Research Associate
Collaborator

Avoid overly corporate organizational charts.

---

### Partners / Collaborators

Only show verified collaborations.

Never fabricate partners.

---

### Contact

Keep simple.

Include official contact channels and social links.


## 10. Copywriting

Primary website language:

English.

Writing should be:

- concise
- intelligent
- clear
- human
- evidence-oriented
- internationally understandable

Avoid buzzwords such as:

"revolutionary"
"world-changing"
"cutting-edge"
"disruptive"
"game-changing"

unless objectively justified.

Prefer:

"We explore..."

"We investigate..."

"We build..."

"We study..."

"We collaborate..."

"We test..."

"We deploy..."

"We learn..."

Avoid unsupported claims.


## 11. Key Brand Phrases

Primary:

> From Inquiry to Impact.

Research philosophy:

> We start with the problem, not the technology.

Supporting phrases that may be used:

> Ideas deserve to go further.

> Research beyond the paper.

> Intelligence, connected to reality.

> Turning evidence into action.

Do not overload a page with all of these at once.


## 12. Instagram

Official Instagram:

@alinearesearch.id

When linking externally, use the full Instagram URL.


## 13. Technical Principles

Keep the codebase:

- simple
- modular
- maintainable
- responsive
- accessible
- performant

Prefer semantic HTML.

Use:

header
nav
main
section
article
footer

where appropriate.

Avoid unnecessary dependencies.


## 14. CSS

Use CSS variables for design tokens.

Example:

:root {
  --background: #ffffff;
  --foreground: #111111;
  --muted: #737373;
  --border: #111111;
  --accent: #d9ff43;
}

Keep:

spacing
typography
colors
borders
breakpoints

consistent.

Do not scatter arbitrary values throughout the stylesheet.


## 15. JavaScript

JavaScript should primarily support:

- navigation
- parallax
- animation
- filtering
- research/project interactions

Avoid JavaScript when CSS can solve the problem.

Scroll effects should use:

requestAnimationFrame

when appropriate.

Avoid expensive scroll listeners.


## 16. Responsive Design

The website must work well on:

- desktop
- laptop
- tablet
- mobile

Mobile is not a reduced desktop version.

Reconsider layout and hierarchy for smaller screens.

Large typography must remain readable without horizontal overflow.


## 17. Accessibility

Always:

- maintain sufficient contrast
- use semantic HTML
- provide alt text
- support keyboard navigation
- use visible focus states
- respect reduced motion
- avoid interaction that depends only on hover


## 18. Performance

Prioritize:

- fast initial load
- optimized images
- minimal JavaScript
- minimal dependencies
- lazy-loaded media
- efficient animations

Do not add large libraries merely for simple visual effects.


## 19. Content Integrity

Never invent:

- research projects
- publications
- researchers
- grants
- awards
- institutional affiliations
- partners
- statistics
- research results

If information is unknown, use a placeholder or TODO.

Example:

TODO: Add verified publication data.

Never publish fictional information simply to make the website look complete.


## 20. Updating Research Areas

Research areas are expected to evolve.

When adding a new research area:

1. Confirm that it fits ALINEA's applied research philosophy.
2. Keep naming concise.
3. Avoid unnecessary overlap with existing areas.
4. Update navigation/filtering if necessary.
5. Preserve the overall visual system.

Do not redesign the website simply because a research area changes.


## 21. Adding Projects

When adding a research project, prefer this structure:

Project Name

Research Area:
Year:
Status:

Problem:
What real-world problem does the project address?

Research:
What question or hypothesis is being investigated?

Approach:
How is the problem being studied?

Technology:
What technologies are involved?

Outcome:
What was produced or discovered?

Impact:
What practical value could the research provide?


## 22. Design Decision Rule

Whenever choosing between:

A visually impressive solution

and

A clear, meaningful research experience

choose clarity.

Whenever choosing between:

More decoration

and

More whitespace

prefer whitespace.

Whenever choosing between:

Technology-first messaging

and

Problem-first messaging

choose problem-first.


## 23. Before Completing Any Change

Before considering a website update complete, check:

- Does it still feel like ALINEA?
- Is the content factually accurate?
- Is the research positioning clear?
- Is the design predominantly white/minimal?
- Is brutalism restrained?
- Is typography intentional?
- Does it work on mobile?
- Does parallax remain smooth?
- Does reduced-motion work?
- Are interactions accessible?
- Are images optimized?
- Are there unnecessary dependencies?
- Did we accidentally make it look like a SaaS startup?
- Did we invent any research information?

If any answer is problematic, fix it before finishing.


## 24. North Star

Every design, content, and engineering decision should reinforce:

ALINEA is a place where meaningful questions
become research,
research becomes evidence,
and evidence moves toward real-world impact.

FROM INQUIRY TO IMPACT.