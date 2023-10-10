import React, {ReactNode, useRef, useState} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: ()=>void;
}
export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;
    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };
    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods:Record<string, boolean> = {
        [cls.opened]: isOpen,
    };
    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div onClick={() => closeHandler()} className={cls.overlay}>
                <div className={cls.content} onClick={stopPropagation}>
                    {children}
                </div>
            </div>
        </div>
    );
};
