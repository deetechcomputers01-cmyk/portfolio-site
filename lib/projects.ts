export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type ProjectGalleryGroup = {
  id: string;
  label: string;
  note?: string;
  items: ProjectScreenshot[];
};

export type ProjectGalleryDevice = {
  id: string;
  label: string;
  groups: ProjectGalleryGroup[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  image: string;
  tags: string[];
  liveUrl: string;
  gallery?: ProjectGalleryDevice[];
};

export const PROJECTS: Project[] = [
  {
    slug: "deetech-computers",
    title: "Deetech Computers — Ecommerce Platform",
    tagline:
      "A full-stack electronics storefront for a Ghana-based computer retailer — catalog, cart, checkout, affiliates, and an admin dashboard, built end to end.",
    description: [
      "Deetech Computers is a production e-commerce platform for a Ghana-based computer and electronics retailer, covering everything from product discovery to order fulfillment. I built the customer-facing storefront and the backend API that powers it end to end.",
      "The storefront handles a full shopping flow — category browsing, search and filtering, product detail pages with specs and reviews, cart, checkout, and both online and offline order tracking — alongside an affiliates program, wishlists, and account management for addresses, orders, and notifications.",
      "The backend is a Node.js/Express API on MongoDB with JWT and Google authentication, rate limiting, input validation, and structured logging. An admin dashboard gives the store team control over products, orders, banners, and users — shown here only in part, for confidentiality.",
    ],
    image: "/projects/deetech/desktop/main/homepage-1.png",
    tags: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://www.deetechcomputers.com/",
    gallery: [
      {
        id: "desktop",
        label: "Desktop",
        groups: [
          {
            id: "main",
            label: "Main screens",
            items: [
              { src: "/projects/deetech/desktop/main/homepage-1.png", alt: "Homepage — hero banner carousel" },
              { src: "/projects/deetech/desktop/main/homepage-2.png", alt: "Homepage — trusted brands & categories" },
              { src: "/projects/deetech/desktop/main/homepage-3.png", alt: "Homepage — curated product sections" },
              { src: "/projects/deetech/desktop/main/footer.png", alt: "Site footer" },
              { src: "/projects/deetech/desktop/main/page-search.png", alt: "Search results" },
              { src: "/projects/deetech/desktop/main/filter.png", alt: "Product filters" },
              { src: "/projects/deetech/desktop/main/product-list.png", alt: "Product listing" },
              { src: "/projects/deetech/desktop/main/product-detail.png", alt: "Product detail page" },
              { src: "/projects/deetech/desktop/main/product-specs.png", alt: "Product specifications tab" },
              { src: "/projects/deetech/desktop/main/review-section.png", alt: "Product reviews" },
              { src: "/projects/deetech/desktop/main/related-section.png", alt: "Related products" },
              { src: "/projects/deetech/desktop/main/cart.png", alt: "Shopping cart" },
              { src: "/projects/deetech/desktop/main/payment-1.png", alt: "Checkout — payment" },
              { src: "/projects/deetech/desktop/main/confirmation.png", alt: "Order confirmation" },
              { src: "/projects/deetech/desktop/main/confirmation-2.png", alt: "Order confirmation details" },
              { src: "/projects/deetech/desktop/main/wishlist.png", alt: "Wishlist" },
              { src: "/projects/deetech/desktop/main/affiliates.png", alt: "Affiliates program" },
              { src: "/projects/deetech/desktop/main/affiliates-2.png", alt: "Affiliates — dashboard" },
              { src: "/projects/deetech/desktop/main/affiliates-3.png", alt: "Affiliates — earnings" },
              { src: "/projects/deetech/desktop/main/login-form.png", alt: "Login" },
              { src: "/projects/deetech/desktop/main/info-pages.png", alt: "Info pages" },
              { src: "/projects/deetech/desktop/main/track-order-offline.png", alt: "Offline order tracking" },
            ],
          },
          {
            id: "account",
            label: "Account",
            items: [
              { src: "/projects/deetech/desktop/account/personal-info.png", alt: "Account — personal info" },
              { src: "/projects/deetech/desktop/account/address.png", alt: "Account — saved addresses" },
              { src: "/projects/deetech/desktop/account/orders-1.png", alt: "Account — order history" },
              { src: "/projects/deetech/desktop/account/orders-2-tracking.png", alt: "Account — order tracking" },
              { src: "/projects/deetech/desktop/account/wishlist-account.png", alt: "Account — wishlist" },
              { src: "/projects/deetech/desktop/account/review-account.png", alt: "Account — reviews" },
              { src: "/projects/deetech/desktop/account/affiliates-account.png", alt: "Account — affiliates" },
              { src: "/projects/deetech/desktop/account/notifications.png", alt: "Account — notifications" },
              { src: "/projects/deetech/desktop/account/onsite-message.png", alt: "Account — on-site messages" },
              { src: "/projects/deetech/desktop/account/password.png", alt: "Account — change password" },
            ],
          },
          {
            id: "admin",
            label: "Admin",
            note: "Shown in part, for confidentiality.",
            items: [
              { src: "/projects/deetech/desktop/admin/admin-dashboard.png", alt: "Admin — dashboard" },
              { src: "/projects/deetech/desktop/admin/admin-products.png", alt: "Admin — products" },
              { src: "/projects/deetech/desktop/admin/admin-product-edit.png", alt: "Admin — edit product" },
              { src: "/projects/deetech/desktop/admin/admin-product-edit-2.png", alt: "Admin — edit product variants" },
              { src: "/projects/deetech/desktop/admin/admin-orders.png", alt: "Admin — orders" },
              { src: "/projects/deetech/desktop/admin/admin-users-tracking.png", alt: "Admin — user tracking" },
              { src: "/projects/deetech/desktop/admin/banner.png", alt: "Admin — banner management" },
            ],
          },
        ],
      },
      {
        id: "mobile",
        label: "Mobile",
        groups: [
          {
            id: "main",
            label: "Main screens",
            items: [
              { src: "/projects/deetech/mobile/main/homepage-1.png", alt: "Homepage — hero banner" },
              { src: "/projects/deetech/mobile/main/homepage-2.png", alt: "Homepage — categories & products" },
              { src: "/projects/deetech/mobile/main/hamburger-menu.png", alt: "Navigation menu" },
              { src: "/projects/deetech/mobile/main/footer.png", alt: "Site footer" },
              { src: "/projects/deetech/mobile/main/product-list.png", alt: "Product listing" },
              { src: "/projects/deetech/mobile/main/filter-1.png", alt: "Product filters" },
              { src: "/projects/deetech/mobile/main/filter-2.png", alt: "Product filters — expanded" },
              { src: "/projects/deetech/mobile/main/product-detail-1.png", alt: "Product detail page" },
              { src: "/projects/deetech/mobile/main/product-detail-2.png", alt: "Product detail — specs" },
              { src: "/projects/deetech/mobile/main/product-detail-3.png", alt: "Product detail — reviews" },
              { src: "/projects/deetech/mobile/main/cart.png", alt: "Shopping cart" },
              { src: "/projects/deetech/mobile/main/checkout.png", alt: "Checkout" },
              { src: "/projects/deetech/mobile/main/payment-1.png", alt: "Checkout — payment" },
              { src: "/projects/deetech/mobile/main/payment-2.png", alt: "Checkout — payment method" },
              { src: "/projects/deetech/mobile/main/payment-3.png", alt: "Checkout — payment confirmation" },
              { src: "/projects/deetech/mobile/main/wishlist.png", alt: "Wishlist" },
            ],
          },
          {
            id: "account",
            label: "Account",
            items: [
              { src: "/projects/deetech/mobile/account/account-overview.png", alt: "Account overview" },
              { src: "/projects/deetech/mobile/account/personal-info.png", alt: "Account — personal info" },
              { src: "/projects/deetech/mobile/account/address.png", alt: "Account — saved addresses" },
              { src: "/projects/deetech/mobile/account/orders-1.png", alt: "Account — order history" },
              { src: "/projects/deetech/mobile/account/orders-2.png", alt: "Account — order details" },
              { src: "/projects/deetech/mobile/account/orders-3.png", alt: "Account — order tracking" },
              { src: "/projects/deetech/mobile/account/wishlist.png", alt: "Account — wishlist" },
              { src: "/projects/deetech/mobile/account/review.png", alt: "Account — reviews" },
              { src: "/projects/deetech/mobile/account/affiliates-1.png", alt: "Account — affiliates" },
              { src: "/projects/deetech/mobile/account/affiliates-2.png", alt: "Account — affiliates dashboard" },
              { src: "/projects/deetech/mobile/account/notifications.png", alt: "Account — notifications" },
              { src: "/projects/deetech/mobile/account/onsite-message.png", alt: "Account — on-site messages" },
              { src: "/projects/deetech/mobile/account/search.png", alt: "Search" },
              { src: "/projects/deetech/mobile/account/password.png", alt: "Account — change password" },
            ],
          },
          {
            id: "admin",
            label: "Admin",
            note: "Shown in part, for confidentiality.",
            items: [
              { src: "/projects/deetech/mobile/admin/dashboard-1.png", alt: "Admin — dashboard" },
              { src: "/projects/deetech/mobile/admin/dashboard-2.png", alt: "Admin — dashboard details" },
              { src: "/projects/deetech/mobile/admin/sidebar.png", alt: "Admin — navigation sidebar" },
              { src: "/projects/deetech/mobile/admin/products-1.png", alt: "Admin — products" },
              { src: "/projects/deetech/mobile/admin/products-2.png", alt: "Admin — products list" },
              { src: "/projects/deetech/mobile/admin/product-edit-1.png", alt: "Admin — edit product" },
              { src: "/projects/deetech/mobile/admin/product-edit-2.png", alt: "Admin — edit product details" },
              { src: "/projects/deetech/mobile/admin/product-edit-3.png", alt: "Admin — edit product images" },
              { src: "/projects/deetech/mobile/admin/product-edit-4.png", alt: "Admin — edit product variants" },
              { src: "/projects/deetech/mobile/admin/orders-1.png", alt: "Admin — orders" },
              { src: "/projects/deetech/mobile/admin/orders-2.png", alt: "Admin — order details" },
              { src: "/projects/deetech/mobile/admin/banner.png", alt: "Admin — banner management" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "northstar-analytics",
    title: "Northstar — Analytics Platform",
    tagline:
      "Self-serve analytics dashboard letting product teams query event data without writing SQL, backed by a columnar store.",
    description: [
      "Self-serve analytics dashboard letting product teams query event data without writing SQL, backed by a columnar store.",
    ],
    image: "/images/project-2.jpg",
    tags: ["Next.js", "ClickHouse", "tRPC"],
    liveUrl: "https://example.com",
  },
  {
    slug: "atlas-deploy-pipeline",
    title: "Atlas — Deploy Pipeline",
    tagline:
      "Zero-downtime deployment orchestration for a microservices fleet, with automated rollback and canary analysis.",
    description: [
      "Zero-downtime deployment orchestration for a microservices fleet, with automated rollback and canary analysis.",
    ],
    image: "/images/project-3.jpg",
    tags: ["Go", "Kubernetes", "Terraform"],
    liveUrl: "https://example.com",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
