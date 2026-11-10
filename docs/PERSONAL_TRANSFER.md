# Personal-account transfer and retained domain

The repository is now `mehrdadxzaker/neuralint-landing`. Its stable repository
ID is `1230268025`. `neuralint-platform` remains in Xpounder and is independent
of this website.

## Domain and DNS remain unchanged

GitHub Pages continues to host `https://neuralint.io`. The ownership transfer
retained the existing custom-domain binding, enforced HTTPS, and approved TLS
certificate for both `neuralint.io` and `www.neuralint.io`. The root and sitemap
returned HTTP 200, and www still redirects to the same apex domain.

No DNS record, domain verification, or domain claim was changed. The apex A and
AAAA records remain the existing GitHub Pages addresses; the www CNAME remains
`xpounder-com.github.io`. The earlier proposed www CNAME change was not applied
and is no longer part of this move. Owning the domain and changing a DNS target
are separate things; this transfer preserves both the domain and its records.

The organization Pages verification list contained only `xpounder.com`, so no
organization verification of `neuralint.io` needed to be released. Do not add a
verification claim or change DNS as part of this documentation update.

The [verification-only plan](migrations/personal-pages-dns-plan.json) records
the settings to preserve and contains no proposed DNS mutations. Runtime code,
canonical URLs, exported `CNAME`, SEO metadata, the publishing workflow, and app
privacy/support routes are unchanged. Vercel access is not required for this
repository move.

## Verification and later maintenance

Recheck Pages source/permissions, the same custom-domain binding and TLS before
any separately authorized future publishing change. Confirm the root, www
redirect, sitemap, and app legal/support routes continue to work. If a domain or
certificate problem appears, inspect it before changing records or claiming a
domain; this document does not authorize those changes.

The repository transfer does not change App ownership, Azure trust, platform
runtime/database settings, Apple identities, or personal-account billing.

References: [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site),
[repository transfers](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository).
