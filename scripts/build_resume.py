"""Builds static/miles-wells-resume.pdf.

Requires reportlab (pip install reportlab). Run from the repo root:

    python3 scripts/build_resume.py

The text is duplicated from src/lib/components/Hero.svelte, src/lib/jobs.ts,
Skills.svelte and Education.svelte; update it here when the site content changes.
Margins and leading are tuned so the page fits on one sheet with no single-word
last lines, so re-check the output after changing text or spacing.
"""

from pathlib import Path

from reportlab.lib.colors import Color, black
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUT = Path(__file__).resolve().parent.parent / "static" / "miles-wells-resume.pdf"
MARGIN_X = 38
MARGIN_Y = 46
BODY = 10.5
LEADING = 13.6

NAVY = Color(0.121569, 0.227451, 0.372549)
GREY = Color(0.266667, 0.266667, 0.266667)
NAVY_HEX = "#1F3A5F"

SUMMARY = (
    "Staff Software Engineer with 10 years of full-stack experience, specializing in UI "
    "architecture and the integration layer between frontends and backend services. Spent seven "
    "years as the sole UI engineer at a robotics integrations software company, owning front-end "
    "architecture, testing standards, performance, and design-driven UX. TypeScript-first, with a "
    "rigorous approach to testing and a pragmatic approach to AI-assisted development."
)

JOBS = [
    (
        "Staff Software Engineer · SVT Robotics",
        "Jul 2019 – Sep 2026 · Remote, Norfolk, VA",
        [
            "Sole UI engineer for the company; owned end-to-end front-end architecture across multiple applications built with TypeScript and Next.js",
            "Partnered directly with the product designer as the primary technical voice on UX decisions, translating design intent into performant, production-ready interfaces",
            "Established testing standards for UI projects (role-based visual regression, role-based interaction testing, E2E coverage, and schema-based validation of external service integrations), cutting test effort from days to the roughly one hour it takes to run the full automated suite",
            "Isolated E2E tests to eliminate flaky failures and the reruns they caused",
            "Added automated Largest Contentful Paint and Cumulative Layout Shift testing to critical user paths, and used the results to bring LCP under 2.5 seconds and CLS under 0.1",
            "Built AI tooling that lets anyone at the company with GitHub access create proof-of-concept features directly inside our applications using real data, with each one going through the normal dev review process. This shortened the path from idea to customers' hands and saved developer time",
        ],
    ),
    (
        "Frontend Developer · Validic",
        "Mar 2018 – Mar 2019 · Durham, NC",
        [
            "Built a professional services product for remote monitoring of diabetes patients using React Router and Redux",
            "Worked on the Impact team on a remote patient monitoring platform using React, TypeScript, and GraphQL, with a Node middleware layer enabling SSO via SAML or OIDC",
        ],
    ),
    (
        "Software Engineer · Dude Solutions",
        "Jun 2016 – Mar 2018 · Cary, NC",
        [
            "Designed and implemented features for a work order management platform, building RESTful APIs in .NET with an Entity Framework data layer",
            "Led adoption of new technology for the Maintenance Manager product, including Node services and Socket.IO real-time alerts",
            "Built an eventing system for preventative maintenance scheduling using Quartz.NET",
        ],
    ),
]

SKILLS = [
    ("Languages &amp; Frameworks:", "TypeScript, JavaScript, React, Next.js, Node.js, .NET / C#"),
    ("Testing:", "Chromatic, Storybook, Playwright, Schema Validation, Visual Regression, E2E"),
    ("Data:", "REST APIs, WebSockets, PostgreSQL, Elasticsearch, RabbitMQ"),
    ("Auth:", "OAuth, OIDC, SAML"),
]

name = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=22.5, leading=27, textColor=NAVY, alignment=TA_CENTER)
tagline = ParagraphStyle("tagline", fontName="Helvetica", fontSize=10, leading=13, textColor=GREY, alignment=TA_CENTER, spaceBefore=4)
contact = ParagraphStyle("contact", fontName="Helvetica", fontSize=BODY, leading=14, alignment=TA_CENTER, spaceBefore=4)
body = ParagraphStyle("body", fontName="Helvetica", fontSize=BODY, leading=LEADING, textColor=black)
summary = ParagraphStyle("summary", parent=body, spaceBefore=13)
section = ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=11, leading=13.5, textColor=NAVY, spaceBefore=15)
job_title = ParagraphStyle("job_title", fontName="Helvetica-Bold", fontSize=10.8, leading=13.65)
job_meta = ParagraphStyle("job_meta", fontName="Helvetica-Oblique", fontSize=10.2, leading=13.65, textColor=GREY, alignment=TA_RIGHT)
bullet = ParagraphStyle("bullet", parent=body, leftIndent=14, bulletIndent=2, bulletColor=NAVY, bulletFontName="Helvetica", bulletFontSize=BODY, spaceBefore=2.5)
skill = ParagraphStyle("skill", parent=body, spaceBefore=2)

doc = SimpleDocTemplate(
    str(OUT),
    pagesize=letter,
    leftMargin=MARGIN_X,
    rightMargin=MARGIN_X,
    topMargin=MARGIN_Y,
    bottomMargin=MARGIN_Y,
    title="Miles Wells — Resume",
    author="Miles Wells",
    invariant=1,
)
width = letter[0] - 2 * MARGIN_X - 12  # frame has 6pt padding each side


def heading(text):
    return [
        Paragraph(text, section),
        HRFlowable(width="100%", thickness=0.6, color=NAVY, spaceBefore=2, spaceAfter=6),
    ]


story = [
    Paragraph("Miles Wells", name),
    Paragraph("STAFF SOFTWARE ENGINEER · DURHAM, NC", tagline),
    Paragraph(
        f'<a href="mailto:milescwells@pm.me" color="{NAVY_HEX}">milescwells@pm.me</a>'
        "&nbsp;&nbsp;·&nbsp;&nbsp;"
        f'<a href="https://mileswells.com" color="{NAVY_HEX}">mileswells.com</a>',
        contact,
    ),
    Paragraph(SUMMARY, summary),
    *heading("EXPERIENCE"),
]

for i, (title, meta, bullets) in enumerate(JOBS):
    header = Table(
        [[Paragraph(title, job_title), Paragraph(meta, job_meta)]],
        colWidths=[width * 0.5, width * 0.5],
        style=TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
            ]
        ),
    )
    block = [header, *[Paragraph(b, bullet, bulletText="•") for b in bullets]]
    if i:
        story.append(Spacer(1, 9))
    story.append(KeepTogether(block))

story += heading("SKILLS")
for i, (label, value) in enumerate(SKILLS):
    story.append(Paragraph(f"<b>{label}</b> {value}", body if i == 0 else skill))

story += heading("EDUCATION")
story.append(Paragraph("<b>B.S., Computer Science</b> — North Carolina State University, 2016", body))

doc.build(story)
