import React, { useState } from 'react'

const ModalPopup = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


    return (
        <div style={styles.wrapper}>
            <button style={styles.openBtn} onClick={openModal}>
                Open Modal
            </button>

            {isOpen && (
                <div style={styles.overlay}>
                    <div style={styles.modal}>
                        <h2 style={styles.title}>Welcome, Rahul 👋</h2>
                        <p style={styles.text}>
                            This is a clean and reusable modal popup component built in React!
                        </p>
                        <button style={styles.closeBtn} onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    wrapper: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
            "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        fontFamily: "Poppins, sans-serif",
    },
    openBtn: {
        background: "#007bff",
        color: "#fff",
        border: "none",
        padding: "12px 20px",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "0.3s",
    },
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
    },
    modal: {
        background: "#fff",
        borderRadius: "15px",
        padding: "25px 30px",
        width: "350px",
        textAlign: "center",
        boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        animation: "fadeIn 0.3s ease-in-out",
    },
    title: {
        marginBottom: "10px",
        color: "#333",
    },
    text: {
        color: "#555",
        fontSize: "15px",
        marginBottom: "20px",
    },
    closeBtn: {
        background: "#ff4d4d",
        color: "white",
        border: "none",
        padding: "10px 18px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: 500,
        transition: "0.3s",
    },
};

export default ModalPopup
