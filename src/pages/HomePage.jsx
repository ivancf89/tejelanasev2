// src/pages/FaqPage.jsx
import React from 'react';

function FaqPage() {
  const faqs = [
    { id: 1, question: "¿Cómo compro?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, question: "¿Cuáles son los medios de pago?", answer: "Sed do eiusmod tempor incididunt ut labore." }
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Preguntas Frecuentes</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {faqs.map(faq => (
          <li key={faq.id} style={{ marginBottom: '1rem' }}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FaqPage;
