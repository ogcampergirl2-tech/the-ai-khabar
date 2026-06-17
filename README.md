# The AI Khabar

A weekly AI newsletter + blog for curious people and aspiring builders.
Static website. Plain HTML/CSS/JS, no build step, no dependencies.

> Tagline: *AI news, explained for the rest of us.*

## Structure

```
The AI Khabar/
├── index.html              Home (lede, format, blog teasers, membership, CTA)
├── about.html              The mission + an editable "who's behind it" section
├── blog.html               Index of longer reads
├── posts/
│   ├── what-is-an-llm.html      Sample explainer
│   └── ai-agents-explained.html Sample explainer
├── assets/
│   ├── style.css           All styling (editorial: Fraunces + Hanken Grotesk)
│   ├── main.js             Mobile nav, sticky brand, signup handling
│   └── favicon.svg         The "K" mark
└── README.md
```

## Run it locally

Just open `index.html` in a browser. For clean relative paths, you can also serve it:

```powershell
# from this folder, with Python on PATH:
python -m http.server 8080
# then visit http://localhost:8080
```

## Connect the newsletter (make signup real)

Right now the signup forms validate the email and show a friendly demo
message. To collect real subscribers (free + paid):

1. Create a publication on **beehiiv** (recommended, since it handles free *and*
   paid tiers natively), Substack, or Mailchimp.
2. Grab the embed/form action URL.
3. In each `<form data-signup>`, add `data-endpoint="<your form URL>"`
   (and set the form's `action`/`method` to match the provider). The script
   then lets the browser submit to your provider instead of showing the demo
   note. See `assets/main.js` for the exact hook.

### Paid tier
The **Membership** section on the home page already lays out Free vs
**Khabar Pro**. With beehiiv, set up a paid tier in your dashboard and point
the "Go Pro" button at its subscribe URL. Prices in the markup (₹49/mo,
₹490/yr) live in `index.html`; edit there.

## Personalise before launch

- **About → "Who's behind it"**: replace the placeholder with your real story.
- Footer social links (`#`): point to your real LinkedIn / X / newsletter.
- Email address `hello@theaikhabar.com`: change to yours.
- Accent colour lives in `assets/style.css` → `--accent`.

## Publish (GitHub Pages)

1. `git init` here, commit, push to a new GitHub repo.
2. Repo → Settings → Pages → deploy from `main` / root.
3. Add your custom domain (e.g. theaikhabar.com) in Pages settings + a CNAME.
4. Put the live URL in the repo description/homepage field.
