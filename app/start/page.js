"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function StartPage() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "auto", textAlign: "center" }}>
            <div style={{ padding: "2rem 0" }}>
                <ProfileImage />
                <h1 style={{ fontSize: "4rem" }}>Hi, I'm Betsy!</h1>
                <p style={{ fontSize: "4rem" }}>What can I help you with?</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                <HoverButton>🏡 Buying a home</HoverButton>
                <HoverButton>📉 Refinance my mortgage</HoverButton>
                <HoverButton>💰 Get cash from my home</HoverButton>
            </div>

            <div style={{ margin: "2rem 0", fontSize: "1.2rem", fontWeight: "bold" }}>
                <p>$100B <br /><span style={{ fontWeight: "normal" }}>home loans funded entirely online</span></p>
                <p>400K <br /><span style={{ fontWeight: "normal" }}>Customers who chose a Better Mortgage</span></p>
            </div>

            <div style={{ background: "#f0f8f0", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
    <p style={{fontSize:"2rem"}}>After a few questions, you’ll unlock:</p>
    <div style={{ textAlign: "center", marginLeft:"20rem" }}>
        <div style={{ display: "flex",marginTop:"2rem", alignItems: "center", gap: "0.8rem", justifyContent: "flex-start",fontSize:"1rem" }}>
        <svg fill="none" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><title id="percentage-outlined-icon">Percentage Outlined</title><path clipRule="evenodd" d="M10 .833C4.94.833.833 4.94.833 10S4.94 19.166 10 19.166 19.167 15.06 19.167 10C19.167 4.94 15.06.833 10 .833Zm0 16.5c-4.042 0-7.333-3.29-7.333-7.333S5.957 2.666 10 2.666 17.333 5.957 17.333 10c0 4.042-3.29 7.333-7.333 7.333ZM7.458 15H5.5l7.057-10h1.958L7.458 15ZM7 9.476a1.71 1.71 0 0 0 1.716-1.738C8.716 6.748 7.946 6 7 6c-.968 0-1.738.748-1.738 1.738S6.032 9.476 7 9.476Zm6 4.5a1.71 1.71 0 0 0 1.716-1.738c0-.99-.77-1.738-1.716-1.738-.968 0-1.738.748-1.738 1.738s.77 1.738 1.738 1.738Z" fill="#017848" fillRule="evenodd"></path></svg>
            Custom mortgage rates
        </div>
        <div style={{ display: "flex", marginTop:"1rem",alignItems: "center", gap: "0.8rem", justifyContent: "flex-start",fontSize:"1rem" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42" fill="#017848"/>
            </svg> 
            Exclusive offers
        </div>
        <div style={{ display: "flex", marginTop:"1rem",alignItems: "center", gap: "0.8rem", justifyContent: "flex-start",fontSize:"1rem"  }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z" fill="#017848"/>
            </svg> 
            A personalized dashboard
        </div>
    </div>
</div>
            <Footer />
        </div>
    );
}



function ProfileImage() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) return <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#ddd" }} />;

    return (
        <Image
            src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg"
            alt="User"
            width={80}
            height={80}
            style={{ borderRadius: "50%" }}
        />
    );
}

function HoverButton({ children }) {
    const [hover, setHover] = useState(false);

    return (
        <button
            style={{
                padding: "1rem 2rem",
                fontSize: "1.2rem",
                border: "1px solid green", 
                outline: hover ? "3px solid green" : "none", 
                borderRadius: "8px",
                background: "white",
                cursor: "pointer",
                width: "80%",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "outline 0.2s ease-in-out",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children}
        </button>
    );
}


function Footer() {
    return (
        <footer style={{ marginTop: "3rem", textAlign: "left", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
            <h2>Better</h2>
            <p>Better is a family of companies serving all your homeownership needs.</p>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <FooterColumn title="Resources">
                    <p>Mortgage Calculator</p>
                    <p>Home Affordability Calculator</p>
                </FooterColumn>
                <FooterColumn title="Company">
                    <p>About Us</p>
                    <p>Careers</p>
                </FooterColumn>
                <FooterColumn title="Contact Us">
                    <p>hello@better.com</p>
                    <p>Call (415) 523-8837</p>
                </FooterColumn>
            </div>
        </footer>
    );
}


function FooterColumn({ title, children }) {
    return (
        <div style={{ minWidth: "150px", marginBottom: "1rem" }}>
            <h3>{title}</h3>
            {children}
        </div>
    );
}
