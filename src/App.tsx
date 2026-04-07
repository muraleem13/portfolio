import { RouterProvider } from "react-router-dom";
import { NotificationProvider } from "@/app/NotificationProvider";
import { ThemeProvider } from "@/app/ThemeProvider";
import { router } from "@/routes";

export default function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <RouterProvider router={router} />
      </NotificationProvider>
    </ThemeProvider>
  );
}
