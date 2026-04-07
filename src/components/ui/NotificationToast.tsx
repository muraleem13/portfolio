import { useEffect } from "react";
import type { NotificationType } from "@/types/portfolio";

interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

interface NotificationToastProps {
  notification: Notification | null;
  onDismiss: () => void;
}

export function NotificationToast({ notification, onDismiss }: NotificationToastProps) {
  useEffect(() => {
    if (!notification) {
      return;
    }

    const timeout = window.setTimeout(() => {
      onDismiss();
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [notification, onDismiss]);

  if (!notification) {
    return null;
  }

  return (
    <div className={`notification notification-${notification.type}`} role="status" aria-live="polite">
      <div className="notification-content">
        <span className="notification-message">{notification.message}</span>
        <button type="button" className="notification-close" aria-label="Close notification" onClick={onDismiss}>
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
}
