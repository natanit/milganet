import React from "react";
import styles from "./Home.module.css";

const testimonials = [
  { name: "רוני מ.", quote: "מצאתי מלגה בדיוק למה שחיפשתי! חסכתי אלפי שקלים." },
  { name: "אורי ל.", quote: "המערכת פשוטה וממוקדת, תוך דקה גיליתי שיש לי 3 מלגות מתאימות." },
  { name: "שירה ד.", quote: "קיבלתי מלגה בזכותכם! תודה רבה על האתר הזה!" }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>ברוכים הבאים למלגנט – פורטל המלגות הגדול בישראל!</h1>
      <p className={styles.description}>
        המערכת החכמה שלנו תעזור לכם למצוא את המלגות המתאימות ביותר,
        בהתבסס על הקריטריונים האישיים שלכם.
      </p>

      <ul className={styles.benefits}>
        <li>מאגר של מאות מלגות</li>
        <li>התאמה אישית לכל סטודנט</li>
        <li>התראות בזמן אמת על מועדי הרשמה</li>
        <li>הרשמה חינם ופשוטה!</li>
      </ul>

      <button className={styles.cta}>מצאו לי מלגה!</button>

      <div className={styles.carousel}>
        <h2>המלצות ממשתמשים</h2>
        <div className={styles.testimonials}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.card}>
              <p>"{item.quote}"</p>
              <span>– {item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
