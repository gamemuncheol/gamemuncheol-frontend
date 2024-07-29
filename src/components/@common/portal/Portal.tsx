import { ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  portalRootId?: string;
}

const createElementAndAppendToBody = (id: string): HTMLElement => {
  const element = document.createElement('div');
  element.setAttribute('id', id);
  document.body.appendChild(element);

  return element;
};

const Portal = ({
  children,
  portalRootId = 'react-portal-wrapper',
}: PortalProps) => {
  const [portalRootElement, setPortalRootElement] =
    useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const existingElement = document.getElementById(portalRootId);
    const portalRootElement =
      existingElement || createElementAndAppendToBody(portalRootId);

    setPortalRootElement(portalRootElement);

    return () => {
      if (!existingElement && portalRootElement.parentNode) {
        portalRootElement.parentNode.removeChild(portalRootElement);
      }
    };
  }, [portalRootId]);

  if (portalRootElement === null) return null;

  return createPortal(children, portalRootElement);
};

export default Portal;
