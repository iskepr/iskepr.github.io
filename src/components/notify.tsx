/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, ReactNode, FC } from "react";
import { createRoot } from "react-dom/client";
import { Info, TriangleAlert } from "lucide-react";
import React from "react";

type PopupType = "خطأ" | "تمام" | "تحذير" | null;

interface PopupProps {
    title?: string | null;
    children?: ReactNode;
    icon?: ReactNode;
    type?: PopupType;
    anotherButton?: ReactNode;
    autoClose?: boolean;
    CloseBut?: boolean;
    easyClose?: boolean;
    closeButName?: string;
    onClose?: () => void;
}

const Popup: FC<PopupProps & { closeNow: () => void }> = ({
    title,
    children,
    icon,
    type,
    anotherButton,
    autoClose = true,
    CloseBut = false,
    easyClose = true,
    closeButName = "اغلاق",
    onClose,
    closeNow,
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    const startClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            onClose?.();
        }, 500);
    };

    useEffect(() => {
        if (type !== "تمام" && !autoClose) return;
        const timer = setTimeout(startClose, 2000);
        return () => clearTimeout(timer);
    }, [type, autoClose]);

    if (!isVisible) return null;

    return (
        <div
            id="Popup"
            onClick={() => {
                if (easyClose) startClose();
            }}
            style={{
                transition: "opacity 0.3s",
                opacity: isClosing ? 0 : 1,
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="Card GlassBG"
                style={{
                    transition: "transform 0.3s",
                    transform: isClosing ? "scale(0.9)" : "scale(1)",
                    ...(type === "خطأ"
                        ? { background: "linear-gradient(45deg, #f001, #f003)" }
                        : type === "تمام"
                        ? { background: "linear-gradient(45deg, #0f01, #0f03)" }
                        : type === "تحذير"
                        ? { background: "linear-gradient(45deg, #ff01, #ff03)" }
                        : {}),
                }}
            >
                <div className="flex gap-3">
                    <span
                        style={{
                            color:
                                type === "خطأ"
                                    ? "red"
                                    : type === "تمام"
                                    ? "green"
                                    : type === "تحذير"
                                    ? "yellow"
                                    : "#fff",
                        }}
                    >
                        {icon ||
                            (type === "خطأ" || type === "تحذير" ? (
                                <TriangleAlert />
                            ) : (
                                <Info />
                            ))}
                    </span>
                    <h2>{title || type}</h2>
                </div>
                <div className="PopupBody">{children}</div>

                <div className="bottom">
                    {anotherButton}
                    {CloseBut ? (
                        <button onClick={closeNow}>{closeButName}</button>
                    ) : (
                        <span style={{ height: "1rem" }}></span>
                    )}
                </div>
            </div>
        </div>
    );
};

export const notify = (props: PopupProps = {}) => {
    const popupContainer = document.createElement("div");
    document.body.appendChild(popupContainer);

    const root = createRoot(popupContainer);

    const removePopup = () => {
        popupContainer.style.transition = "opacity 0.3s";
        popupContainer.style.opacity = "0";
        setTimeout(() => {
            root.unmount();
            popupContainer.remove();
        }, 300);
    };

    const handleClose = () => {
        if (props.easyClose === false) {
            // لو مش عايز يقفل بسهولة → نعمل تأكيد
            const confirmRemove = notify({
                type: "تحذير",
                closeButName: "لا",
                children: "هل انت متأكد من الاغلاق؟",
                anotherButton: (
                    <button
                        onClick={() => {
                            removePopup();
                            confirmRemove();
                            props.onClose?.();
                        }}
                    >
                        نعم
                    </button>
                ),
            });
        } else {
            removePopup();
            props.onClose?.();
        }
    };

    root.render(
        <Popup {...props} closeNow={handleClose} onClose={handleClose} />
    );

    return removePopup;
};
