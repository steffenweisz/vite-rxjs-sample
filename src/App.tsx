// src/App.tsx
import React, { useEffect, useState } from "react";
import { Observable, interval } from "rxjs";
import { map } from "rxjs/operators";

const App: React.FC = () => {
  // State zum Halten des aktuellen Wertes
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    // Erstellen eines Observables, das jede Sekunde einen Wert ausgibt
    const observable: Observable<number> = interval(3000).pipe(
      map((val) => val * 2) // Jeder Wert wird mit 2 multipliziert
    );

    // Subscription zum Observable
    const subscription = observable.subscribe(setValue);

    // Cleanup der Subscription, wenn die Komponente unmounted wird
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>RxJS mit React und TypeScript</h1>
      <p>Wert: {value}</p>
    </div>
  );
};

export default App;
