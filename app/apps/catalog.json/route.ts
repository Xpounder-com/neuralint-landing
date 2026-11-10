import { apps, appUrl } from "../../content/apps";

export function GET() {
  return Response.json({
    name: "NeuralInt app catalog",
    url: "https://neuralint.io/apps/",
    apps: apps.map(app => ({
      name: app.listingName, slug: app.slug, url: appUrl(app),
      description: app.description, operatingSystem: app.operatingSystem,
      image: "https://neuralint.io" + app.image,
      availability: app.available ? "available" : "pending-approval",
      downloadUrl: app.available ? app.storeUrl : null,
      priceUSD: app.available ? app.price : null,
      pricing: app.pricing, requirements: app.requirements, features: app.features,
      ...(app.hasLocalPolicies ? { supportUrl: appUrl(app) + "support/", privacyUrl: appUrl(app) + "privacy/" } : {}),
    })),
  });
}
