import React from 'react';
import { SnackBarProps } from './SnackBar.types';
import { useSnackBar } from './SnackBar.hooks';
import { CloseButton } from '../CloseButton/CloseButton';
import { Overline } from '../Overline/Overline';
import { Message } from '../Message/Message';

export const SnackBar = ({
  id,
  message = '',
  announcements = [],
  closable = false,
  variant = 'default',
  classNames,
}: SnackBarProps) => {
  const {
    isVisible,
    handleClose,
    displayMessage,
    displayOverline,
    isSuperLargeVariant,
    closeButtonLabel,
  } = useSnackBar({
    message,
    announcements,
    variant,
  });

  if (!isVisible) {
    return null;
  }

  return (
    <section className={classNames.root} data-id={id} data-variant={variant}>
      <div className={classNames.container}>
        {isSuperLargeVariant ? (
          <>
            <header className="mb-2">
              {displayOverline && (
                <Overline
                  text={displayOverline}
                  className={classNames.overline}
                />
              )}
            </header>
            <div className="flex flex-col gap-4">
              <Message text={displayMessage} className={classNames.message} />
              {closable && (
                <div className="flex justify-end">
                  <CloseButton
                    onClose={handleClose}
                    className={classNames.close}
                    label={closeButtonLabel}
                  />
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={classNames.content}>
              {displayOverline && (
                <Overline
                  text={displayOverline}
                  className={classNames.overline}
                />
              )}
              <Message text={displayMessage} className={classNames.message} />
            </div>
            {closable && (
              <CloseButton
                onClose={handleClose}
                className={classNames.close}
                label={closeButtonLabel}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};
