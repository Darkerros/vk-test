import React from 'react';
import styles from './app.module.scss'
import {
  BookingConferenceRoomForm
} from "../forms/booking-conference-room-form/components/bookink-conference-room-form/booking-conference-room-form";

function App() {
  return (
    <div className={styles.app}>
        <main>
            <BookingConferenceRoomForm/>
        </main>
    </div>
  );
}

export default App;
