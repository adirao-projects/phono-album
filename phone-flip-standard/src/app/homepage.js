export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="app-container">
                <header className="app-header">
                    <div className="header-content">
                        <span className="header-text">meow</span>
                        <button className="header-button">+</button>
                    </div>
                </header>
                <div className="main-content">
                    {rectangles.map((rect) => (
                        <div key={rect.id} className="clickable-rectangle" style={{backgroundColor: rect.color}}></div>
                    ))}
                </div>
            </div>
        </main>
    );
}