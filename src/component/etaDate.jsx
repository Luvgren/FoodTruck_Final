import { useEffect, useState } from "react";

function EtaDate({ eta }) {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        if (!eta) return;

        // Lets calculate what time is left :)
        const interval = setInterval(() => {
            const etaDate = new Date(eta);
            const now = new Date();
            const diff = etaDate - now;

            if (diff <= 0) {
                setTimeLeft("0 min 0 sek");
                clearInterval(interval);
                return;
            }

            const minutes = Math.floor(diff / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            setTimeLeft(`${minutes} min ${seconds} sek`);
        }, 1000);

        return () => clearInterval(interval);
    }, [eta]);

    return (
        <>
            {eta ? (timeLeft === "0 min 0 sek" ? "Redo!" : `ETA: ${timeLeft}`): "Redo!"}
        </>
    );
}

export default EtaDate