export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    
    const mailtoLink = `mailto:fejesdani122@gmail.com?subject=Üzenet a portfólió oldalról&body=Név: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(email)}%0AÜzenet: ${encodeURIComponent(message)}`;

    
    window.location.href = mailtoLink;
  };

  return (
    <section className="section">
      <h2>Kapcsolat</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px" }}>
        <input type="text" name="name" placeholder="Név" required style={inputStyle} />
        <input type="email" name="email" placeholder="Email cím" required style={inputStyle} />
        <textarea name="message" placeholder="Üzenet" rows={5} required style={textareaStyle}></textarea>
        <button type="submit" className="btn">Küldés</button>
      </form>
    </section>
  );
}


const inputStyle: React.CSSProperties = {
  padding: "0.75rem",
  borderRadius: "10px",
  border: "1px solid #ff71ce",
  background: "rgba(255,255,255,0.05)",
  color: "#f8eaff",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  resize: "vertical",
};
