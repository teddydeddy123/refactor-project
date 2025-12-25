import { useState, useMemo } from 'react';
import { Announcement, SnackBarVariantProps } from './SnackBar.types';

interface UseSnackBarParams {
  message: string;
  announcements: Announcement[];
  variant: NonNullable<SnackBarVariantProps['variant']>;
}

interface UseSnackBarReturn {
  isVisible: boolean;
  handleClose: () => void;
  displayMessage: string;
  displayOverline: string | undefined;
  isSuperLargeVariant: boolean;
  closeButtonLabel: string;
}

export const useSnackBar = ({
  message,
  announcements,
  variant,
}: UseSnackBarParams): UseSnackBarReturn => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const activeAnnouncement: Announcement | undefined = useMemo(() => {
    return announcements.length > 0 ? announcements[0] : undefined;
  }, [announcements]);

  const displayMessage = useMemo(() => {
    return activeAnnouncement?.message ?? message;
  }, [activeAnnouncement, message]);

  const displayOverline = useMemo(() => {
    if (variant === 'super_large') {
      return activeAnnouncement?.overline ?? 'Announcement';
    }
    return activeAnnouncement?.overline;
  }, [activeAnnouncement, variant]);

  const isSuperLargeVariant = variant === 'super_large';
  const closeButtonLabel = isSuperLargeVariant ? 'Dismiss' : '✕';

  return {
    isVisible,
    handleClose,
    displayMessage,
    displayOverline,
    isSuperLargeVariant,
    closeButtonLabel,
  };
};
