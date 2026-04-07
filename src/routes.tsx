import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import styles from "@/styles/loading.module.css";

const PortfolioPage = lazy(() => import("@/pages/PortfolioPage"));

const LoadingScreen = () => (
  <div className={styles.appLoading} role="status" aria-live="polite">
    <span>Loading portfolio...</span>
  </div>
);

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Layout>
          <Suspense fallback={<LoadingScreen />}>
            <PortfolioPage />
          </Suspense>
        </Layout>
      )
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
);
