function FaqPage() {
  const faqs = [
    { id: 1, question: "¿Cómo compro?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, question: "¿Cuáles son los medios de pago?", answer: "Sed do eiusmod tempor incididunt ut labore." }
  ];

  return (
    <div>
      <h2>Preguntas Frecuentes</h2>
      <ul>
        {faqs.map(faq => (
          <li key={faq.id}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FaqPage;
